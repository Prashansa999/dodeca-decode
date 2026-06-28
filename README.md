# 🧩 Dodeca Decode, Puzzle of the Day

A daily **"On This Day"** guessing game. Each calendar date hides one
well-known answer tied to that day, a birthday, a release, or an event, drawn from **music, film, sport, art, books, science and pop culture**.

The board shows **12 closed tiles**, each hiding a short clue. Open as few
as you can, name the answer, and the reveal explains every one of the twelve
clues. It's the same puzzle for everyone on a given day, so you can compare
scores and brag with an emoji share card.

## How to play

1. **One puzzle a day**, a famous person or thing connected to today's date.
2. **Twelve tiles, all closed.** Tap any tile to reveal a short clue.
3. **Guess any time.** Answer matching is forgiving, minor typos and partial
   names are accepted.
4. **Score:** you start at **100**. Every tile you open costs **-8**, and each
   wrong guess costs **-10**. Open as few tiles as you can.
5. **Share** your result and keep your **🔥 daily streak** alive.

Try a random past day any time with **"Play a random past day"** (practice
mode, it doesn't affect your streak).

## Features

- 🗓️ **Deterministic daily puzzle**, same board for everyone, every day.
- 🟦 **12-tile reveal board**, open clues one at a time; score drops per tile.
- 🎭 **Every genre**, music, film, sport, art, literature, science, pop culture.
- 💡 **Full explanation**, the reveal decodes all 12 clues.
- ✍️ **Fuzzy answer matching**, Levenshtein tolerance + partial/alias matching.
- 🔥 **Streaks & progress** persisted in `localStorage`.
- 📤 **Native share / clipboard** emoji result grid.
- 🌌 No build step, no runtime dependencies, fully responsive.

## Run locally

```bash
npm start
# → open http://localhost:8080
```

(Any static file server works too, e.g. `python3 -m http.server`.)

## Deploy

The whole app is static (`index.html`, `styles.css`, `game.js`,
`questions.js`). A GitHub Actions workflow auto-publishes it to GitHub Pages
on every push. It also runs anywhere via the bundled Node server, Docker, or
Fly.io (`fly deploy`).

## Project structure

```
.
├── index.html       # markup & 12-tile board
├── styles.css       # "celestial almanac" theme + TV-style reveal tiles
├── game.js          # tile/scoring logic, streaks, sharing
├── questions.js     # the date-keyed question bank
├── server.js        # tiny zero-dependency static server
├── .nojekyll        # serve files as-is on GitHub Pages
├── Dockerfile
├── fly.toml
└── .github/workflows/pages.yml
```

## Adding questions

Open `questions.js` and add an entry keyed by `"MM-DD"`:

```js
"08-29": {
  category: "Musician",
  year: 1958,
  answers: ["Michael Jackson", "MJ"],   // first = canonical, rest = aliases
  tiles: [                               // exactly 12 short clues
    "Born in Gary, Indiana", "Led a family group of five", "'Thriller'", "The moonwalk",
    "Crowned 'King of Pop'", "A single sequined glove", "A ranch called Neverland", "Motown beginnings",
    "'Billie Jean'", "Produced by Quincy Jones", "'Bad' and 'Off the Wall'", "Died in 2009"
  ],
  // explanation should decode every tile, numbered (1)…(12)
  explanation: "Michael Jackson was born in Gary, Indiana (1) …"
}
```

Rules of thumb: the answer must never appear inside a tile, keep clues terse,
and make the explanation account for all twelve. Dates without their own entry
fall back deterministically to an existing one, so every day has a puzzle.

---

Made for the curious by PragMehtic. 🌟
