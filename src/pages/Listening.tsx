import { Navigate } from "react-router-dom";
import { useMemo, useState } from "react";
import { Headphones } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getAllVocabulary } from "../data";
import { speak, isSpeechSupported } from "../utils/audio";
import { XP_REWARDS } from "../utils/xp";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => 0.5 - Math.random());
}

export default function Listening() {
  const { state, addXp } = useProgress();
  const code = state.settings.selectedLanguage;
  const [round, setRound] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [score, setScore] = useState(0);

  const words = code ? getAllVocabulary(code) : [];
  const rounds = useMemo(() => {
    if (words.length < 4) return [];
    return Array.from({ length: Math.min(8, words.length) }, () => {
      const pool = shuffle(words);
      const answer = pool[0];
      const options = shuffle(pool.slice(0, 4).map((w) => w.word));
      return { answer, options };
    });
  }, [words]);

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const supported = isSpeechSupported();

  if (rounds.length === 0) {
    return (
      <div className="glass rounded-2xl p-10 text-center max-w-md mx-auto mt-10">
        <p className="text-3xl mb-2">🎧</p>
        <p className="font-semibold">Not enough vocabulary yet.</p>
        <p className="text-sm opacity-60 mt-1">Complete a few word lessons first.</p>
      </div>
    );
  }

  if (round >= rounds.length) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <p className="text-6xl mb-4">🎧</p>
        <h1 className="font-display font-extrabold text-3xl mb-2">Listening complete!</h1>
        <p className="opacity-60 mb-6">
          {score} / {rounds.length} correct
        </p>
        <button
          onClick={() => {
            setRound(0);
            setScore(0);
            setSelected(null);
          }}
          className="px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
          style={{ background: "var(--color-accent)" }}
        >
          Practice again
        </button>
      </div>
    );
  }

  const current = rounds[round];

  function handlePlay() {
    speak(current.answer.word, language.speechLang, state.settings.voiceSpeed);
  }

  function handleSelect(opt: string) {
    if (selected) return;
    setSelected(opt);
    const correct = opt === current.answer.word;
    if (correct) {
      setScore((s) => s + 1);
      addXp(code!, XP_REWARDS.listening);
    }
  }

  function handleNext() {
    setSelected(null);
    setRound((r) => r + 1);
  }

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="font-display font-extrabold text-3xl mb-1 flex items-center gap-2">
        <Headphones size={28} /> Listening Practice
      </h1>
      <p className="opacity-60 mb-8">
        Round {round + 1} of {rounds.length}
      </p>

      <div className="glass rounded-3xl p-8 text-center">
        {supported ? (
          <>
            <p className="text-sm font-semibold opacity-70 mb-4">🎧 Listen carefully</p>
            <button
              onClick={handlePlay}
              className="w-20 h-20 rounded-full flex items-center justify-center text-3xl mx-auto mb-6 hover:scale-105 active:scale-95 transition"
              style={{ background: "var(--color-primary)" }}
            >
              🔊
            </button>
          </>
        ) : (
          <p className="text-sm opacity-60 mb-6">Audio isn't available in this browser — try Chrome or Edge for the full listening experience.</p>
        )}

        <p className="font-semibold mb-4">What did you hear?</p>
        <div className="grid grid-cols-2 gap-3">
          {current.options.map((opt) => {
            const showResult = selected !== null;
            const isCorrect = opt === current.answer.word;
            const isSelected = opt === selected;
            let cls = "bg-white/5 hover:bg-white/10 border-transparent";
            if (showResult && isCorrect) cls = "bg-[var(--color-success)]/20 border-[var(--color-success)] text-[var(--color-success)]";
            else if (showResult && isSelected) cls = "bg-[var(--color-danger)]/20 border-[var(--color-danger)] text-[var(--color-danger)]";
            return (
              <button key={opt} onClick={() => handleSelect(opt)} disabled={!!selected} className={`px-4 py-3 rounded-xl border-2 font-medium transition ${cls}`}>
                {opt}
              </button>
            );
          })}
        </div>

        {selected && (
          <button
            onClick={handleNext}
            className="mt-6 px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
            style={{ background: "var(--color-accent)" }}
          >
            {round === rounds.length - 1 ? "Finish" : "Next"} →
          </button>
        )}
      </div>
    </div>
  );
}
