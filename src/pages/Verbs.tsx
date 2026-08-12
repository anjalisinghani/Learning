import { Navigate } from "react-router-dom";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLessons } from "../data";
import VerbCard from "../components/VerbCard";
import type { Difficulty } from "../types";

export default function Verbs() {
  const { state } = useProgress();
  const code = state.settings.selectedLanguage;
  const [difficulty, setDifficulty] = useState<Difficulty | "all">("all");

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const verbs = getLessons(code).flatMap((l) => l.verbs || []);
  const filtered = difficulty === "all" ? verbs : verbs.filter((v) => v.difficulty === difficulty);

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">Verbs</h1>
      <p className="opacity-60 mb-6">
        {language.flagEmoji} {language.name} · present, past &amp; future
      </p>

      <div className="flex gap-2 mb-6">
        {(["all", "beginner", "intermediate", "advanced"] as const).map((d) => (
          <button
            key={d}
            onClick={() => setDifficulty(d)}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold capitalize transition ${
              difficulty === d ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
            }`}
          >
            {d}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="text-3xl mb-2">🏃</p>
          <p className="font-semibold">No verbs found.</p>
        </div>
      ) : (
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map((v) => (
            <VerbCard key={v.id} verb={v} speechLang={language.speechLang} />
          ))}
        </div>
      )}
    </div>
  );
}
