import { Navigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getAllVocabulary } from "../data";
import VocabularyCard from "../components/VocabularyCard";

export default function Vocabulary() {
  const { state } = useProgress();
  const code = state.settings.selectedLanguage;
  const [category, setCategory] = useState("all");
  const [favOnly, setFavOnly] = useState(false);

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const allWords = getAllVocabulary(code);
  const progress = state.languageProgress[code];

  const categories = useMemo(() => ["all", ...Array.from(new Set(allWords.map((w) => w.category)))], [allWords]);

  const filtered = allWords.filter((w) => {
    if (category !== "all" && w.category !== category) return false;
    if (favOnly && !progress.favoriteWords.includes(w.word)) return false;
    return true;
  });

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">Vocabulary</h1>
      <p className="opacity-60 mb-6">
        {language.flagEmoji} {language.name} · {allWords.length} words
      </p>

      <div className="flex flex-wrap items-center gap-2 mb-6">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition ${
              category === c ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
            }`}
          >
            {c}
          </button>
        ))}
        <button
          onClick={() => setFavOnly((f) => !f)}
          className={`px-4 py-1.5 rounded-full text-xs font-semibold transition ${
            favOnly ? "bg-[var(--color-danger)] text-white" : "glass hover:bg-white/10"
          }`}
        >
          ❤️ Favorites
        </button>
      </div>

      {filtered.length === 0 ? (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="text-3xl mb-2">💭</p>
          <p className="font-semibold">No words yet.</p>
          <p className="text-sm opacity-60 mt-1">Tap ❤️ on a word to save it here.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((w) => (
            <VocabularyCard key={w.id} item={w} languageCode={code} speechLang={language.speechLang} />
          ))}
        </div>
      )}
    </div>
  );
}
