/*
 * Cloudflare Pages Function: POST /api/feedback
 *
 * Stores one anonymous star rating per session, keyed by an anonymous
 * client-generated session ID, no timestamp. Resubmitting the same
 * session ID overwrites its rating rather than creating a duplicate.
 *
 * Requires a KV namespace bound to this Pages project as "FEEDBACK":
 * Cloudflare dashboard -> Workers & Pages -> your Pages project ->
 * Settings -> Functions -> KV namespace bindings -> add "FEEDBACK".
 */

function jsonResponse(body, status) {
  return new Response(JSON.stringify(body), {
    status: status || 200,
    headers: { "Content-Type": "application/json; charset=utf-8" }
  });
}

export async function onRequestPost({ request, env }) {
  if (!env.FEEDBACK) {
    return jsonResponse({ error: "Feedback storage not configured" }, 500);
  }

  var body;
  try {
    body = await request.json();
  } catch (e) {
    return jsonResponse({ error: "Invalid JSON" }, 400);
  }

  var sessionId = typeof body.sessionId === "string" ? body.sessionId.trim() : "";
  var rating = Number(body.rating);

  if (!sessionId || sessionId.length > 128) {
    return jsonResponse({ error: "Missing or invalid sessionId" }, 400);
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return jsonResponse({ error: "Rating must be an integer from 1 to 5" }, 400);
  }

  await env.FEEDBACK.put(sessionId, String(rating));
  return jsonResponse({ ok: true });
}

// onRequestPost above handles POST; any other method on this route is
// unsupported, since Cloudflare Pages falls back here otherwise.
export async function onRequest() {
  return jsonResponse({ error: "Method not allowed" }, 405);
}
