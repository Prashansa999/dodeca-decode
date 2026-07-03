/* Dodeca Decode, daily "On This Day" 12-tile reveal game. */
(function () {
  "use strict";

  // ---- Scoring ----
  var MAX_SCORE = 100;
  var TILE_COST = 8;        // points lost per tile opened
  var WRONG_COST = 10;      // points lost per wrong guess
  var TILE_COUNT = 12;

  // ---- State ----
  var state = {
    key: null,
    dateObj: null,
    question: null,
    opened: [],          // indexes of opened tiles, in order
    wrongGuesses: 0,
    solved: false,
    failed: false,
    finished: false,
    practice: false,
    revealAll: false,    // show every tile at once (reload of a finished puzzle)
    revealedExtra: []    // tiles turned over by the end-of-game reveal sequence
  };

  var MAX_PRACTICE = 3;  // random past days a user may play per day

  var $ = function (id) { return document.getElementById(id); };
  var els = {
    dateBadge: $("dateBadge"),
    categoryBadge: $("categoryBadge"),
    quoteLine: $("quoteLine"),
    lede: $("lede"),
    tileGrid: $("tileGrid"),
    guessForm: $("guessForm"),
    guessInput: $("guessInput"),
    feedback: $("feedback"),
    scoreNum: $("scoreNum"),
    triesText: $("triesText"),
    giveUpBtn: $("giveUpBtn"),
    gameCard: $("gameCard"),
    resultCard: $("resultCard"),
    resultEmoji: $("resultEmoji"),
    resultTitle: $("resultTitle"),
    resultAnswer: $("resultAnswer"),
    bigScore: $("bigScore"),
    starsRating: $("starsRating"),
    resultTiles: $("resultTiles"),
    funFact: $("funFact"),
    shareBtn: $("shareBtn"),
    practiceBtn: $("practiceBtn"),
    revealBoardBtn: $("revealBoardBtn"),
    backToResultBtn: $("backToResultBtn"),
    streakValue: $("streakValue"),
    countdown: $("countdown"),
    toast: $("toast"),
    howToBtn: $("howToBtn"),
    howToModal: $("howToModal"),
    modalClose: $("modalClose"),
    gotItBtn: $("gotItBtn"),
    giveUpModal: $("giveUpModal"),
    giveUpModalClose: $("giveUpModalClose"),
    giveUpCancelBtn: $("giveUpCancelBtn"),
    giveUpConfirmBtn: $("giveUpConfirmBtn"),
    feedbackModal: $("feedbackModal"),
    feedbackModalClose: $("feedbackModalClose"),
    feedbackAsk: $("feedbackAsk"),
    feedbackStars: $("feedbackStars"),
    feedbackSkipBtn: $("feedbackSkipBtn"),
    feedbackCritic: $("feedbackCritic"),
    feedbackCriticOk: $("feedbackCriticOk"),
    feedbackInline: $("feedbackInline"),
    feedbackInlineAsk: $("feedbackInlineAsk"),
    feedbackInlineStars: $("feedbackInlineStars"),
    feedbackInlineCritic: $("feedbackInlineCritic"),
    feedbackInlineThanks: $("feedbackInlineThanks")
  };

  var MONTHS = ["January","February","March","April","May","June","July",
    "August","September","October","November","December"];

  // ===================== helpers =====================
  function pad(n) { return n < 10 ? "0" + n : "" + n; }
  // Dates produced by nowIST() carry IST wall-clock values in their UTC
  // fields, so we always read them with getUTC* for consistency.
  function keyFromDate(d) { return pad(d.getUTCMonth() + 1) + "-" + pad(d.getUTCDate()); }
  function prettyDate(d) { return MONTHS[d.getUTCMonth()] + " " + d.getUTCDate(); }

  // "Today" is anchored to India Standard Time (UTC+5:30, no daylight
  // saving), so the puzzle rolls over for everyone at midnight IST,
  // independent of the viewer's local timezone. Date.now() is an absolute
  // epoch value, so we just add the fixed IST offset and read UTC fields.
  function nowIST() {
    var istMs = Date.now() + 5.5 * 3600000;
    var d = new Date(istMs);
    d._istBaseMs = istMs;   // used to compute the next IST midnight
    return d;
  }

  function pickQuestion(key) {
    var bank = window.QUESTIONS || {};
    if (bank[key]) return { key: key, q: bank[key] };
    var keys = Object.keys(bank).sort();
    if (!keys.length) return null;
    var seed = parseInt(key.replace("-", ""), 10);
    var chosen = keys[seed % keys.length];
    return { key: chosen, q: bank[chosen] };
  }

  function normalize(s) {
    return (s || "")
      .toLowerCase()
      .replace(/&/g, " and ")
      .replace(/[^a-z0-9 ]/g, " ")
      .replace(/\b(the|a|an|of|on|in)\b/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function editDistance(a, b) {
    var m = a.length, n = b.length;
    if (Math.abs(m - n) > 3) return 99;
    var prev = [], cur = [], i, j;
    for (j = 0; j <= n; j++) prev[j] = j;
    for (i = 1; i <= m; i++) {
      cur[0] = i;
      for (j = 1; j <= n; j++) {
        var cost = a.charAt(i - 1) === b.charAt(j - 1) ? 0 : 1;
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + cost);
      }
      for (j = 0; j <= n; j++) prev[j] = cur[j];
    }
    return prev[n];
  }

  function checkGuess(guess, answers) {
    var g = normalize(guess);
    if (!g) return "wrong";
    var i, ans, tol;
    for (i = 0; i < answers.length; i++) {
      ans = normalize(answers[i]);
      if (!ans) continue;
      if (g === ans) return "right";
      tol = ans.length > 12 ? 3 : (ans.length > 6 ? 2 : 1);
      if (editDistance(g, ans) <= tol) return "right";
      if (ans.length >= 5 && (g.indexOf(ans) !== -1 || ans.indexOf(g) !== -1)) return "right";
    }
    var gWords = g.split(" ");
    for (i = 0; i < answers.length; i++) {
      var aWords = normalize(answers[i]).split(" ");
      for (var k = 0; k < aWords.length; k++) {
        if (aWords[k].length >= 4 && gWords.indexOf(aWords[k]) !== -1) return "close";
      }
    }
    return "wrong";
  }

  function currentScore() {
    return Math.max(0, MAX_SCORE - state.opened.length * TILE_COST - state.wrongGuesses * WRONG_COST);
  }

  function starsFor(score) {
    if (score >= 85) return "⭐️⭐️⭐️⭐️⭐️";
    if (score >= 65) return "⭐️⭐️⭐️⭐️";
    if (score >= 45) return "⭐️⭐️⭐️";
    if (score >= 25) return "⭐️⭐️";
    if (score > 0)   return "⭐️";
    return "☆";
  }

  function escapeHtml(s) {
    return (s || "").replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  // ===================== persistence =====================
  var LS_PROGRESS = "dodecadecode.v2.progress.";
  var LS_STREAK = "dodecadecode.streak";
  var LS_LASTPLAYED = "dodecadecode.lastPlayed";

  function saveProgress() {
    if (state.practice) return;
    try {
      localStorage.setItem(LS_PROGRESS + state.key, JSON.stringify({
        opened: state.opened,
        wrongGuesses: state.wrongGuesses,
        solved: state.solved,
        failed: state.failed,
        finished: state.finished
      }));
    } catch (e) {}
  }
  function loadProgress(key) {
    try { var raw = localStorage.getItem(LS_PROGRESS + key); return raw ? JSON.parse(raw) : null; }
    catch (e) { return null; }
  }
  function getStreak() {
    try { return parseInt(localStorage.getItem(LS_STREAK), 10) || 0; } catch (e) { return 0; }
  }
  function bumpStreak(todayKey) {
    if (state.practice) return getStreak();
    try {
      var last = localStorage.getItem(LS_LASTPLAYED);
      if (last === todayKey) return getStreak();
      var streak = getStreak();
      var y = new Date(state.dateObj.getTime() - 86400000);
      var yKey = keyFromDate(y) + ":" + y.getUTCFullYear();
      streak = (last === yKey) ? streak + 1 : 1;
      localStorage.setItem(LS_STREAK, String(streak));
      localStorage.setItem(LS_LASTPLAYED, todayKey);
      return streak;
    } catch (e) { return getStreak(); }
  }

  // ===================== feedback =====================
  // A random anonymous ID, generated once per browser and reused from
  // localStorage, keys the star rating server-side. The server keeps just
  // one rating per session (resubmitting overwrites it, simple by design,
  // no timestamp, no per-puzzle linkage). "Ask again per puzzle" is purely
  // a client-side concern: each puzzle key gets its own localStorage flag
  // so the prompt can fire once per puzzle even though the backend only
  // ever remembers the latest rating.
  var LS_SESSION = "dodecadecode.sessionId";
  var LS_RATED_PREFIX = "dodecadecode.rated.";

  function getSessionId() {
    try {
      var id = localStorage.getItem(LS_SESSION);
      if (id) return id;
      id = (window.crypto && crypto.randomUUID) ? crypto.randomUUID() :
        "s-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2);
      localStorage.setItem(LS_SESSION, id);
      return id;
    } catch (e) { return "s-" + Math.random().toString(36).slice(2); }
  }
  function hasRatedPuzzle(puzzleKey) {
    try { return localStorage.getItem(LS_RATED_PREFIX + puzzleKey) === "1"; } catch (e) { return false; }
  }
  function markRatedPuzzle(puzzleKey) {
    try { localStorage.setItem(LS_RATED_PREFIX + puzzleKey, "1"); } catch (e) {}
  }

  function postFeedback(rating) {
    fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sessionId: getSessionId(), rating: rating })
    }).catch(function () {});
  }

  // ---- Today's puzzle: popup, ~4s after the result appears ----
  // "Maybe later" closes it without marking as rated, so it can still ask
  // again after a future puzzle. Only used for the daily (non-practice)
  // puzzle; past-day puzzles use the inline widget below instead.
  var FEEDBACK_DELAY = 4000;
  var feedbackPromptTimer = null;
  function scheduleFeedbackPrompt(puzzleKey) {
    clearTimeout(feedbackPromptTimer);
    if (hasRatedPuzzle(puzzleKey)) return;
    feedbackPromptTimer = setTimeout(function () {
      if (!hasRatedPuzzle(puzzleKey)) els.feedbackModal.classList.remove("hidden");
    }, FEEDBACK_DELAY);
  }
  function closeFeedbackModal() {
    clearTimeout(feedbackPromptTimer);
    els.feedbackModal.classList.add("hidden");
    els.feedbackAsk.classList.remove("hidden");
    els.feedbackCritic.classList.add("hidden");
  }

  function submitModalFeedback(rating) {
    var puzzleKey = state.key;
    if (hasRatedPuzzle(puzzleKey)) return;
    markRatedPuzzle(puzzleKey);   // don't nag again for this puzzle, even if the request fails
    postFeedback(rating);

    if (rating <= 3) {
      // A harsher rating gets Anton Ego's line instead of the quick thanks,
      // and stays open until acknowledged rather than auto-closing.
      els.feedbackAsk.classList.add("hidden");
      els.feedbackCritic.classList.remove("hidden");
    } else {
      closeFeedbackModal();
      toast("Thanks for the feedback! 🎉");
    }
  }

  // ---- Past-day/practice puzzles: inline on the result screen, no popup ----
  function renderInlineFeedback(puzzleKey) {
    var rated = hasRatedPuzzle(puzzleKey);
    els.feedbackInline.classList.toggle("hidden", rated);
    if (rated) return;
    els.feedbackInlineAsk.classList.remove("hidden");
    els.feedbackInlineCritic.classList.add("hidden");
    els.feedbackInlineThanks.classList.add("hidden");
  }

  function submitInlineFeedback(rating) {
    var puzzleKey = state.key;
    if (hasRatedPuzzle(puzzleKey)) return;
    markRatedPuzzle(puzzleKey);
    postFeedback(rating);

    els.feedbackInlineAsk.classList.add("hidden");
    if (rating <= 3) {
      els.feedbackInlineCritic.classList.remove("hidden");
    } else {
      els.feedbackInlineThanks.classList.remove("hidden");
    }
  }

  // ===================== shuffle =====================
  // Tiles are shown in a shuffled order so the clues don't follow the order
  // of the written explanation. The shuffle is seeded from the puzzle key, so
  // it's stable across reloads and identical for everyone on a given day.
  function hashSeed(str) {
    var h = 2166136261, i;
    for (i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function mulberry32(a) {
    return function () {
      a |= 0; a = (a + 0x6D2B79F5) | 0;
      var t = Math.imul(a ^ (a >>> 15), 1 | a);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }
  function shuffledOrder(n, seedStr) {
    var rng = mulberry32(hashSeed(seedStr || ""));
    var arr = [], i, j, tmp;
    for (i = 0; i < n; i++) arr[i] = i;
    for (j = n - 1; j > 0; j--) {
      var k = Math.floor(rng() * (j + 1));
      tmp = arr[j]; arr[j] = arr[k]; arr[k] = tmp;
    }
    return arr;
  }

  // Rewrite the explanation's (1)…(n) markers so each number matches the clue's
  // new on-screen tile position after shuffling.
  function remapExplanation(text) {
    var perm = state.perm;
    if (!perm || !text) return text || "";
    var inv = [], p;
    for (p = 0; p < perm.length; p++) inv[perm[p]] = p;   // inv[original] = display position
    return text.replace(/\((\d{1,2})\)/g, function (m, d) {
      var n = parseInt(d, 10);
      return (n >= 1 && n <= perm.length) ? "(" + (inv[n - 1] + 1) + ")" : m;
    });
  }

  // ===================== rendering =====================
  // Clues returned in shuffled display order; state.perm[displayPos] = originalIndex.
  function tiles() {
    var t = state.question.tiles || [];
    var perm = state.perm;
    if (!perm) return t;
    return perm.map(function (p) { return t[p]; });
  }

  function renderBoard() {
    var t = tiles();
    var html = "";
    for (var i = 0; i < t.length; i++) {
      var isOpen = state.opened.indexOf(i) !== -1 || state.revealAll ||
                   state.revealedExtra.indexOf(i) !== -1;
      html += '<button class="tile' + (isOpen ? " open" : "") + (state.finished ? " disabled" : "") +
              '" data-index="' + i + '"' + (isOpen || state.finished ? ' tabindex="-1"' : "") + '>' +
              '<span class="tile-num">' + (i + 1) + '</span>' +
              '<span class="tile-clue">' + escapeHtml(t[i]) + '</span>' +
              '</button>';
    }
    els.tileGrid.innerHTML = html;
  }

  function renderScore() { els.scoreNum.textContent = currentScore(); }
  function renderTries() {
    var n = state.opened.length;
    var bits = n + " / " + TILE_COUNT + " tiles open";
    if (state.wrongGuesses > 0) bits += " · " + state.wrongGuesses + (state.wrongGuesses === 1 ? " miss" : " misses");
    els.triesText.textContent = bits;
  }

  function setFeedback(text, cls) {
    els.feedback.textContent = text;
    els.feedback.className = "feedback" + (cls ? " " + cls : "");
  }

  // ===================== actions =====================
  function openTile(idx) {
    if (state.finished) return;
    if (state.opened.indexOf(idx) !== -1) return;
    if (idx < 0 || idx >= tiles().length) return;
    state.opened.push(idx);
    renderBoard();
    renderScore();
    renderTries();
    saveProgress();
  }

  function submitGuess(value) {
    if (state.finished) return;
    var verdict = checkGuess(value, state.question.answers);
    if (verdict === "right") { finishGame(true); return; }
    state.wrongGuesses += 1;
    renderScore();
    renderTries();
    saveProgress();
    if (verdict === "close") {
      setFeedback("So close! You're on the right track, refine it.", "close");
    } else {
      var msgs = ["Not quite. Open another tile?", "Nope, try another clue.", "Wrong, but keep going.", "Missed it. A tile might help."];
      setFeedback(msgs[Math.min(state.wrongGuesses - 1, msgs.length - 1)], "wrong");
    }
    els.guessInput.select();
  }

  function finishGame(won) {
    state.solved = won;
    state.failed = !won;
    state.finished = true;
    state.revealAll = true;      // board is ready to show every tile when opened
    state.revealedExtra = [];
    saveProgress();
    var streak = won ? bumpStreak(state.key + ":" + state.dateObj.getUTCFullYear()) : getStreak();
    els.streakValue.textContent = streak;
    showResult(won);             // straight to the summary; tap the answer to flip the board
  }

  // Swap from the result summary to the full board with every tile flipped open.
  function revealBoard() {
    els.resultCard.classList.add("hidden");
    els.gameCard.classList.remove("hidden");
    els.gameCard.classList.add("revealed");
    els.backToResultBtn.classList.remove("hidden");
    renderBoard();               // all tiles open, quick flip
  }
  function backToResult() {
    els.gameCard.classList.remove("revealed");
    els.gameCard.classList.add("hidden");
    els.backToResultBtn.classList.add("hidden");
    els.resultCard.classList.remove("hidden");
  }

  function showResult(won) {
    els.gameCard.classList.add("hidden");
    els.resultCard.classList.remove("hidden");
    var score = won ? currentScore() : 0;
    els.resultEmoji.textContent = won ? winEmoji(score) : "📚";
    els.resultTitle.textContent = won ? winTitle(score) : "Out of luck!";
    els.resultAnswer.innerHTML = escapeHtml(state.question.answers[0]);
    els.bigScore.textContent = score;
    els.starsRating.textContent = starsFor(score);
    els.resultTiles.textContent = won
      ? "Solved with " + state.opened.length + " of " + TILE_COUNT + " tiles open" +
        (state.wrongGuesses ? " and " + state.wrongGuesses + (state.wrongGuesses === 1 ? " wrong guess" : " wrong guesses") : "") + "."
      : "You opened " + state.opened.length + " of " + TILE_COUNT + " tiles.";
    // Lead every solution with an "On this day in <year>" line, then the
    // explanation that decodes all twelve clues.
    var explanation = remapExplanation(state.question.explanation);
    var year = state.question.year;
    var head = year ? "On this day in " + year : "On this day";
    els.funFact.innerHTML = explanation
      ? '<strong class="ff-head">' + escapeHtml(head) + '</strong>\n\n' + escapeHtml(explanation)
      : "";
    els.funFact.style.display = explanation ? "" : "none";
    updatePracticeBtn();   // reflect how many random past days remain today

    // Today's puzzle asks via the popup; past-day/practice puzzles ask
    // inline on the result screen instead, no popup.
    if (state.practice) {
      clearTimeout(feedbackPromptTimer);
      els.feedbackModal.classList.add("hidden");
      renderInlineFeedback(state.key);
    } else {
      els.feedbackInline.classList.add("hidden");
      scheduleFeedbackPrompt(state.key);
    }
  }

  function winEmoji(s) { return s >= 85 ? "🏆" : s >= 65 ? "🎉" : s >= 45 ? "👏" : "🙂"; }
  function winTitle(s) { return s >= 85 ? "Brilliant!" : s >= 65 ? "Well done!" : s >= 45 ? "Solved it!" : "Got there!"; }

  // ===================== share =====================
  function buildShareText() {
    var score = state.solved ? currentScore() : 0;
    var line = "🧩 Dodeca Decode, " + prettyDate(state.dateObj);
    // 12-tile grid: opened = 🟦, unopened = ⬛
    var grid = "";
    for (var i = 0; i < TILE_COUNT; i++) {
      grid += (state.opened.indexOf(i) !== -1) ? "🟦" : "⬛";
      if (i % 4 === 3) grid += "\n";
    }
    var totalGuesses = state.wrongGuesses + (state.solved ? 1 : 0);
    var guessesLabel = totalGuesses + (totalGuesses === 1 ? " guess" : " guesses");
    var summary = state.solved
      ? "Solved with " + state.opened.length + "/" + TILE_COUNT + " tiles · " + guessesLabel + " · " + score + " pts " + starsFor(score)
      : "Stumped! 📚" + (totalGuesses ? " · " + guessesLabel : "");
    return line + "\n" + grid + summary + "\n" + location.origin + (location.pathname === "/" ? "" : location.pathname);
  }

  function doShare() {
    var text = buildShareText();
    if (navigator.share) { navigator.share({ title: "Dodeca Decode", text: text }).catch(function () {}); return; }
    copyText(text).then(function () { toast("Result copied to clipboard!"); },
                        function () { toast("Couldn't copy, select and copy manually."); });
  }
  function copyText(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) return navigator.clipboard.writeText(text);
    return new Promise(function (resolve, reject) {
      try {
        var ta = document.createElement("textarea");
        ta.value = text; ta.style.position = "fixed"; ta.style.opacity = "0";
        document.body.appendChild(ta); ta.select(); document.execCommand("copy");
        document.body.removeChild(ta); resolve();
      } catch (e) { reject(e); }
    });
  }
  var toastTimer = null;
  function toast(msg) {
    els.toast.textContent = msg; els.toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { els.toast.classList.remove("show"); }, 2200);
  }

  // ===================== countdown (to next IST midnight) =====================
  function startCountdown() {
    function tick() {
      var ist = nowIST();
      // next IST midnight in the same shifted clock space
      var nextMidnight = Date.UTC(ist.getUTCFullYear(), ist.getUTCMonth(), ist.getUTCDate() + 1, 0, 0, 0);
      var diff = nextMidnight - ist._istBaseMs;
      if (diff < 0) diff = 0;
      var h = Math.floor(diff / 3600000), m = Math.floor((diff % 3600000) / 60000), s = Math.floor((diff % 60000) / 1000);
      els.countdown.textContent = "Next puzzle in " + pad(h) + ":" + pad(m) + ":" + pad(s) + " IST";
    }
    tick(); setInterval(tick, 1000);
  }

  // ===================== practice =====================
  // A user may play up to MAX_PRACTICE random past days per day; the count
  // is keyed to today's date, so it resets at IST midnight with the puzzle.
  function practiceLSKey() { return "dodecadecode.practice." + keyFromDate(nowIST()); }
  function getPracticeCount() {
    try { return parseInt(localStorage.getItem(practiceLSKey()), 10) || 0; } catch (e) { return 0; }
  }
  function bumpPracticeCount() {
    var n = getPracticeCount() + 1;
    try { localStorage.setItem(practiceLSKey(), String(n)); } catch (e) {}
    return n;
  }
  function updatePracticeBtn() {
    if (!els.practiceBtn) return;
    var left = MAX_PRACTICE - getPracticeCount();
    if (left <= 0) {
      els.practiceBtn.disabled = true;
      els.practiceBtn.textContent = "No more practice today";
    } else {
      els.practiceBtn.disabled = false;
      els.practiceBtn.textContent = "Play a random past day (" + left + " left)";
    }
  }

  function playRandom() {
    if (getPracticeCount() >= MAX_PRACTICE) {
      toast("That's all " + MAX_PRACTICE + " practice rounds for today, come back tomorrow!");
      updatePracticeBtn();
      return;
    }
    var keys = Object.keys(window.QUESTIONS || {});
    if (!keys.length) return;
    // Only offer dates earlier in the calendar year than today, so a
    // "past day" is never actually a future one. Keys are zero-padded
    // "MM-DD", so a plain string compare is chronological within the year.
    var todayKey = keyFromDate(nowIST());
    var pool = keys.filter(function (k) { return k < todayKey; });
    if (!pool.length) pool = keys.filter(function (k) { return k !== todayKey; });
    if (!pool.length) pool = keys;
    var key;
    do { key = pool[Math.floor(Math.random() * pool.length)]; } while (key === state.key && pool.length > 1);
    bumpPracticeCount();
    updatePracticeBtn();
    loadPuzzle(key, true);
  }

  function monthDayLabel(key) {
    var parts = key.split("-");
    return MONTHS[parseInt(parts[0], 10) - 1] + " " + parseInt(parts[1], 10);
  }

  // ===================== boot =====================
  function loadPuzzle(forceKey, isPractice) {
    var today = nowIST();
    var key = forceKey || keyFromDate(today);
    var picked = pickQuestion(key);
    if (!picked) { els.lede.textContent = "No questions available."; return; }

    state.key = isPractice ? picked.key : key;
    state.dateObj = today;
    state.question = picked.q;
    state.perm = shuffledOrder((picked.q.tiles || []).length, state.key);
    state.opened = [];
    state.wrongGuesses = 0;
    state.solved = false; state.failed = false; state.finished = false;
    state.revealAll = false; state.revealedExtra = [];
    state.practice = !!isPractice;

    if (!isPractice) {
      var saved = loadProgress(state.key);
      if (saved) {
        state.opened = saved.opened || [];
        state.wrongGuesses = saved.wrongGuesses || 0;
        state.solved = !!saved.solved; state.failed = !!saved.failed; state.finished = !!saved.finished;
      }
    }
    // A puzzle restored as already finished shows every tile at once, no animation.
    if (state.finished) state.revealAll = true;

    els.dateBadge.textContent = isPractice ? "Flashback · " + monthDayLabel(picked.key) : "On this day · " + prettyDate(today);
    els.categoryBadge.textContent = state.question.category || "Mystery";
    els.lede.textContent = state.practice
      ? "Practice round, a past day. Streak not affected. Open as few tiles as you can."
      : "Twelve clues hide behind these tiles. Open as few as you can, then name what links them. Each tile costs points.";

    els.gameCard.classList.remove("hidden", "revealed");
    els.backToResultBtn.classList.add("hidden");
    els.resultCard.classList.add("hidden");
    closeFeedbackModal();
    els.feedbackInline.classList.add("hidden");
    setFeedback("", "");
    els.guessInput.value = "";
    els.streakValue.textContent = getStreak();

    renderBoard(); renderScore(); renderTries();

    if (state.finished) showResult(state.solved);
    else els.guessInput.focus();
  }

  function wireEvents() {
    els.tileGrid.addEventListener("click", function (e) {
      var tile = e.target.closest(".tile");
      if (!tile) return;
      openTile(parseInt(tile.getAttribute("data-index"), 10));
    });

    els.guessForm.addEventListener("submit", function (e) {
      e.preventDefault();
      var v = els.guessInput.value.trim();
      if (!v) return;
      submitGuess(v);
      els.guessInput.value = "";
    });

    // Stars run left-to-right, data-value 1..5, in plain DOM order (no CSS
    // sibling-hover tricks, which need reverse DOM order and can silently
    // invert which star maps to which value). Half-star precision comes
    // from which half of a given star the pointer is over.
    function starValueAt(container, clientX) {
      var stars = container.querySelectorAll(".fb-star");
      for (var i = 0; i < stars.length; i++) {
        var rect = stars[i].getBoundingClientRect();
        if (clientX >= rect.left && clientX <= rect.right) {
          var whole = parseInt(stars[i].getAttribute("data-value"), 10);
          var frac = (clientX - rect.left) / rect.width;
          return frac < 0.5 ? whole - 0.5 : whole;
        }
      }
      var firstRect = stars[0].getBoundingClientRect();
      var lastRect = stars[stars.length - 1].getBoundingClientRect();
      if (clientX < firstRect.left) return 0.5;
      if (clientX > lastRect.right) return parseInt(stars[stars.length - 1].getAttribute("data-value"), 10);
      return null;
    }
    function renderStarFill(container, rating) {
      var stars = container.querySelectorAll(".fb-star");
      for (var i = 0; i < stars.length; i++) {
        var whole = parseInt(stars[i].getAttribute("data-value"), 10);
        var pct = rating >= whole ? 100 : (rating >= whole - 0.5 ? 50 : 0);
        stars[i].querySelector(".fb-star-fill").style.setProperty("--fill", pct + "%");
      }
    }
    function wireStarRow(container, onRate) {
      container.addEventListener("mousemove", function (e) {
        var v = starValueAt(container, e.clientX);
        if (v != null) renderStarFill(container, v);
      });
      container.addEventListener("mouseleave", function () {
        renderStarFill(container, 0);
      });
      container.addEventListener("click", function (e) {
        if (!e.target.closest(".fb-star")) return;
        var v = starValueAt(container, e.clientX);
        if (v == null) return;
        renderStarFill(container, v);
        onRate(v);
      });
    }
    wireStarRow(els.feedbackStars, submitModalFeedback);
    wireStarRow(els.feedbackInlineStars, submitInlineFeedback);

    els.giveUpBtn.addEventListener("click", function () {
      if (state.finished) return;
      els.giveUpModal.classList.remove("hidden");
    });
    function closeGiveUpModal() { els.giveUpModal.classList.add("hidden"); }
    els.giveUpCancelBtn.addEventListener("click", closeGiveUpModal);
    els.giveUpModalClose.addEventListener("click", closeGiveUpModal);
    els.giveUpModal.addEventListener("click", function (e) { if (e.target === els.giveUpModal) closeGiveUpModal(); });
    els.giveUpConfirmBtn.addEventListener("click", function () {
      closeGiveUpModal();
      finishGame(false);
    });

    els.feedbackModalClose.addEventListener("click", closeFeedbackModal);
    els.feedbackSkipBtn.addEventListener("click", closeFeedbackModal);
    els.feedbackCriticOk.addEventListener("click", closeFeedbackModal);
    els.feedbackModal.addEventListener("click", function (e) { if (e.target === els.feedbackModal) closeFeedbackModal(); });

    els.shareBtn.addEventListener("click", doShare);
    els.practiceBtn.addEventListener("click", playRandom);
    els.revealBoardBtn.addEventListener("click", revealBoard);
    els.backToResultBtn.addEventListener("click", backToResult);

    function openModal() { els.howToModal.classList.remove("hidden"); }
    function closeModal() { els.howToModal.classList.add("hidden"); }
    els.howToBtn.addEventListener("click", openModal);
    els.modalClose.addEventListener("click", closeModal);
    els.gotItBtn.addEventListener("click", closeModal);
    els.howToModal.addEventListener("click", function (e) { if (e.target === els.howToModal) closeModal(); });
    document.addEventListener("keydown", function (e) {
      if (e.key !== "Escape") return;
      closeModal();
      closeGiveUpModal();
      closeFeedbackModal();
    });

    $("streakChip").addEventListener("click", function () {
      var s = getStreak();
      toast(s > 0 ? "🔥 " + s + "-day streak, keep it going!" : "Solve today's puzzle to start a streak!");
    });
  }

  function init() {
    if (!window.QUESTIONS) { els.lede.textContent = "Failed to load questions."; return; }
    wireEvents();
    loadPuzzle(null, false);
    startCountdown();
    try {
      if (!localStorage.getItem("dodecadecode.seenRulesV2")) {
        els.howToModal.classList.remove("hidden");
        localStorage.setItem("dodecadecode.seenRulesV2", "1");
      }
    } catch (e) {}
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
