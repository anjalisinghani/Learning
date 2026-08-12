import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getAllVocabulary } from "../data";
import SentenceBuilder from "../components/SentenceBuilder";
import MemoryMatch from "../components/MemoryMatch";
import SpeakingPractice from "../components/SpeakingPractice";

const TABS = [
  { key: "sentence", label: "🧩 Sentence Puzzle" },
  { key: "memory", label: "🧠 Memory Cards" },
  { key: "speaking", label: "🗣 Speaking" },
] as const;

type TabKey = (typeof TABS)[number]["key"];

export default function Practice() {
  const { state } = useProgress();
  const code = state.settings.selectedLanguage;
  const [tab, setTab] = useState<TabKey>("sentence");

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const words = getAllVocabulary(code);
  const sentences = words
    .filter((w) => w.exampleSentence)
    .map((w) => ({ text: w.exampleSentence, meaning: w.exampleSentenceMeaning }));

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">Practice</h1>
      <p className="opacity-60 mb-6">
        {language.flagEmoji} {language.name} · mini-games to sharpen your skills
      </p>

      <div className="flex flex-wrap gap-2 mb-8">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setTab(t.key)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
              tab === t.key ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "sentence" && <SentenceBuilder sentences={sentences} languageCode={code} />}
      {tab === "memory" && <MemoryMatch words={words} languageCode={code} />}
      {tab === "speaking" && words.length > 0 && <SpeakingPractice word={words[0]} languageCode={code} speechLang={language.speechLang} />}
    </div>
  );
}
