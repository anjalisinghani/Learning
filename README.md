# LingoFun — Learn. Play. Speak. 🌐

A multi-language learning web app for **Gujarati, English, Marathi, Sindhi, and French**. Duolingo-style lessons, quizzes, mini-games, XP, streaks, and achievements — all running **entirely in your browser** with no backend, no database, and no sign-up.

---

## ✅ What's included

- Letters, vowels, consonants, and barakhadi/syllabary modules (Gujarati & Marathi)
- Vocabulary cards with pronunciation, example sentences, and favorites
- Verb conjugation tables (present / past / future)
- Grammar explanations
- Quizzes generated from lesson content
- Listening practice (audio → multiple choice)
- Writing practice (canvas letter tracing)
- Speaking practice (browser Speech Recognition, with graceful fallback)
- Sentence-builder and memory-match mini-games
- XP, levels, streaks, daily goals, and achievements
- Global word search across all five languages
- Dark/light mode, mobile bottom nav, desktop sidebar
- Export/import progress as JSON, and full reset
- Everything is saved locally via `localStorage` — close the tab and come back later, your progress is still there

---

## 🚀 Running it locally

You'll need [Node.js](https://nodejs.org) (version 18 or newer) installed.

1. Download/unzip this project folder.
2. Open a terminal inside the folder.
3. Install dependencies:
   ```
   npm install
   ```
4. Start the local dev server:
   ```
   npm run dev
   ```
5. Open the URL it prints (usually `http://localhost:5173`) in your browser.

To build the production version:
```
npm run build
```
This creates a `dist/` folder with the static site — ready to deploy anywhere.

---

## 🌍 Deploying (zero-coding-friendly options)

**Easiest: Netlify Drop**
1. Run `npm run build`.
2. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
3. Drag the `dist` folder into the browser window.
4. Done — you get a live URL instantly.

**Vercel**
1. Push this project to a GitHub repository.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Vercel auto-detects Vite — just click Deploy.

**GitHub Pages**
1. Push this project to a GitHub repository.
2. Run `npm run build`.
3. Deploy the contents of `dist/` to a `gh-pages` branch (e.g. using the `gh-pages` npm package or GitHub Actions).
4. Enable GitHub Pages for that branch in your repo settings.

---

## 🗂 Project structure

```
src/
  components/     Reusable UI pieces (cards, quiz runner, mini-games, badges...)
  pages/          One file per route (Dashboard, Learn, Practice, Settings...)
  layouts/        AppLayout (header + sidebar/bottom nav wrapper)
  data/
    languages/    One file per language (letters, vocab, verbs, grammar, lessons)
    achievements.ts
    index.ts      Central registry + quiz generator + daily challenge logic
  hooks/
    useProgress.tsx   Global app state (XP, streaks, settings) backed by localStorage
  utils/
    storage.ts    The ONLY file that talks to localStorage directly
    xp.ts         XP/level curve
    streak.ts     Streak calculation
    audio.ts      Speech synthesis / recognition helpers
  types/          Shared TypeScript types
```

### Adding a new language

1. Create `src/data/languages/yourlanguage.ts` following the pattern in `gujarati.ts` or `french.ts` (vowels, consonants, vocabulary, verbs, grammar, lessons array).
2. Add the language's metadata to `LANGUAGES` in `src/data/languages/registry.ts`.
3. Register its lessons in `ALL_LESSONS` inside `src/data/index.ts`.

No other files need to change — the rest of the app (dashboard, quizzes, search, progress tracking) works generically off this data.

### Adding a backend later

Every read/write to progress goes through `src/utils/storage.ts` (`storage.getProgress()`, `storage.saveProgress()`, etc.). To add a real backend, swap the internals of these functions for API calls — no component code needs to change.

---

## 🔊 Browser support notes

- **Text-to-speech** (word pronunciation) uses the Web Speech API and works in most modern browsers. Voice quality/availability varies by OS and browser.
- **Speech recognition** (speaking practice) currently has the best support in Chrome/Edge on desktop and Android. Safari and Firefox support is limited — the app detects this and shows a friendly fallback message instead of breaking.

Enjoy learning! 🎉
