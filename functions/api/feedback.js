/*
 * Cloudflare Pages Function: /api/feedback
 *
 * POST stores one anonymous star rating per (session, puzzle) pair, keyed
 * as "sessionId::puzzleKey", no timestamp. Rating the same puzzle again
 * overwrites that entry; rating a different puzzle creates a separate
 * one, so each puzzle's rating counts toward the aggregate rather than
 * one session's ratings overwriting each other.
 *
 * GET ?key=<FEEDBACK_ADMIN_KEY> returns a private HTML summary: the
 * average rating and a breakdown by star count. Requires an environment
 * variable FEEDBACK_ADMIN_KEY set on the Pages project (Settings ->
 * Environment variables), so only whoever knows that value can view it.
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

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, function (c) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
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
  var puzzleKey = typeof body.puzzleKey === "string" ? body.puzzleKey.trim() : "";
  var rating = Number(body.rating);
  var isHalfStep = isFinite(rating) && Math.round(rating * 2) === rating * 2;

  if (!sessionId || sessionId.length > 128) {
    return jsonResponse({ error: "Missing or invalid sessionId" }, 400);
  }
  if (!puzzleKey || puzzleKey.length > 32) {
    return jsonResponse({ error: "Missing or invalid puzzleKey" }, 400);
  }
  if (!isHalfStep || rating < 1 || rating > 5) {
    return jsonResponse({ error: "Rating must be in 0.5 increments from 1 to 5" }, 400);
  }

  await env.FEEDBACK.put(sessionId + "::" + puzzleKey, String(rating));
  return jsonResponse({ ok: true });
}

export async function onRequestGet({ request, env }) {
  if (!env.FEEDBACK) {
    return jsonResponse({ error: "Feedback storage not configured" }, 500);
  }

  var url = new URL(request.url);
  var suppliedKey = url.searchParams.get("key") || "";
  if (!env.FEEDBACK_ADMIN_KEY || suppliedKey !== env.FEEDBACK_ADMIN_KEY) {
    return jsonResponse({ error: "Forbidden" }, 403);
  }

  // One-time correction for ratings stored while the star widget had its
  // left/right values swapped (fixed in the same deploy as this endpoint).
  // Every affected value is its own inversion's inversion, so 6-n maps
  // each old (wrong) value to what the player actually intended, and
  // running this twice by accident just flips values back rather than
  // compounding further. Requires an explicit confirm=yes on top of the
  // admin key so it can't fire from a plain stats-page visit.
  if (url.searchParams.get("fix") === "invert" && url.searchParams.get("confirm") === "yes") {
    var list0 = await env.FEEDBACK.list({ limit: 1000 });
    var changes = [];
    for (var j = 0; j < list0.keys.length; j++) {
      var name = list0.keys[j].name;
      var oldRaw = await env.FEEDBACK.get(name);
      var oldVal = parseFloat(oldRaw);
      if (Number.isInteger(oldVal) && oldVal >= 1 && oldVal <= 5) {
        var newVal = 6 - oldVal;
        await env.FEEDBACK.put(name, String(newVal));
        changes.push({ sessionId: name, old: oldVal, corrected: newVal });
      }
    }
    return jsonResponse({ ok: true, corrected: changes.length, changes: changes });
  }

  var steps = [5, 4.5, 4, 3.5, 3, 2.5, 2, 1.5, 1];
  var tally = {};
  steps.forEach(function (s) { tally[s] = 0; });
  var sum = 0, count = 0;
  var list = await env.FEEDBACK.list({ limit: 1000 });
  for (var i = 0; i < list.keys.length; i++) {
    var raw = await env.FEEDBACK.get(list.keys[i].name);
    var n = parseFloat(raw);
    if (n >= 1 && n <= 5 && Math.round(n * 2) === n * 2) {
      tally[n] = (tally[n] || 0) + 1;
      sum += n;
      count++;
    }
  }
  var average = count ? sum / count : 0;

  function formatStars(n) {
    return (Number.isInteger(n) ? n : n.toFixed(1)) + "/5";
  }
  var rows = steps.map(function (n) {
    var pct = count ? Math.round((tally[n] / count) * 100) : 0;
    return "<tr><td>" + formatStars(n) + "</td><td>" + tally[n] + "</td><td>" + pct + "%</td></tr>";
  }).join("");

  var html = "<!DOCTYPE html><html><head><meta charset=\"UTF-8\">" +
    "<title>Dodeca Decode — Feedback</title>" +
    "<style>" +
    "body{font-family:system-ui,-apple-system,sans-serif;max-width:420px;margin:60px auto;padding:0 20px;color:#2a2018}" +
    "h1{font-size:19px;font-weight:700;margin-bottom:4px}" +
    ".sub{color:#8a7a5e;font-size:13px;margin-bottom:24px}" +
    ".avg{font-size:48px;font-weight:800;line-height:1}" +
    ".count{color:#8a7a5e;font-size:14px;margin:6px 0 24px}" +
    "table{width:100%;border-collapse:collapse}" +
    "td{padding:8px 4px;border-bottom:1px solid #eee;font-size:14px}" +
    "td:nth-child(2),td:nth-child(3){text-align:right;color:#8a7a5e}" +
    "</style></head><body>" +
    "<h1>Dodeca Decode</h1>" +
    "<div class=\"sub\">Feedback summary</div>" +
    "<div class=\"avg\">" + average.toFixed(1) + "/5</div>" +
    "<div class=\"count\">" + count + " rating" + (count === 1 ? "" : "s") + "</div>" +
    "<table>" + rows + "</table>" +
    "</body></html>";

  return new Response(html, { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

// onRequestPost/onRequestGet above handle POST/GET; any other method is
// unsupported, since Cloudflare Pages falls back here otherwise.
export async function onRequest() {
  return jsonResponse({ error: "Method not allowed" }, 405);
}
