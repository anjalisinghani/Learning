import { useNavigate } from "react-router-dom";
import type { Language } from "../types";
import { useProgress } from "../hooks/useProgress";
import { getLessons } from "../data";
import { ProgressBar } from "./Badges";

export default function LanguageCard({ language }: { language: Language }) {
  const { state, updateSettings } = useProgress();
  const navigate = useNavigate();
  const progress = state.languageProgress[language.code];
  const lessons = getLessons(language.code);
  const percent = lessons.length ? Math.round((progress.completedLessons.length / lessons.length) * 100) : 0;

  function handleStart() {
    updateSettings({ selectedLanguage: language.code });
    navigate("/dashboard");
  }

  return (
    <button
      onClick={handleStart}
      className="group relative text-left rounded-3xl p-6 glass overflow-hidden hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]"
    >
      <div
        className="absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 blur-2xl group-hover:opacity-30 transition"
        style={{ background: language.accent }}
      />
      <div className="relative">
        <div className="text-4xl mb-3">{language.flagEmoji}</div>
        <h3 className="font-display font-bold text-2xl mb-0.5" style={{ color: language.accent }}>
          {language.nativeName}
        </h3>
        <p className="text-sm opacity-70 mb-3">{language.name}</p>
        <p className="text-xs opacity-60 mb-4 leading-relaxed">{language.description}</p>

        <div className="flex items-center justify-between text-xs opacity-70 mb-1.5">
          <span>Beginner → Advanced</span>
          <span>{lessons.length} lessons</span>
        </div>
        <ProgressBar percent={percent} color={language.accent} />
        <div className="mt-1 text-xs font-semibold opacity-80">{percent}% complete</div>

        <div
          className="mt-4 inline-flex items-center gap-1.5 px-4 py-2 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
          style={{ background: language.accent }}
        >
          {progress.completedLessons.length > 0 ? "Continue" : "Start Learning"} →
        </div>
      </div>
    </button>
  );
}
