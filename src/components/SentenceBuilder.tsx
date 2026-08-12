import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import type { LanguageCode } from "../types";
import { useProgress } from "../hooks/useProgress";
import { XP_REWARDS } from "../utils/xp";

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => 0.5 - Math.random());
}

export default function SentenceBuilder({ sentences, languageCode }: { sentences: { text: string; meaning: string }[]; languageCode: LanguageCode }) {
  const { addXp } = useProgress();
  const [round, setRound] = useState(0);
  const [pool, setPool] = useState<string[]>([]);
  const [chosen, setChosen] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "correct" | "wrong">("idle");

  const sentence = sentences[round % sentences.length];
  const target = sentence?.text.split(" ") || [];

  useEffect(() => {
    setPool(shuffle(target));
    setChosen([]);
    setStatus("idle");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [round, sentences.length]);

  if (sentences.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-3xl mb-2">🧩</p>
        <p className="font-semibold">No sentences available yet.</p>
      </div>
    );
  }

  function pick(word: string, idx: number) {
    if (status !== "idle") return;
    setChosen((c) => [...c, word]);
    setPool((p) => p.filter((_, i) => i !== idx));
  }

  function removeChosen(idx: number) {
    if (status !== "idle") return;
    setPool((p) => [...p, chosen[idx]]);
    setChosen((c) => c.filter((_, i) => i !== idx));
  }

  function check() {
    const isCorrect = chosen.join(" ") === target.join(" ");
    setStatus(isCorrect ? "correct" : "wrong");
    if (isCorrect) addXp(languageCode, XP_REWARDS.correctQuizAnswer * 2);
  }

  function next() {
    setRound((r) => r + 1);
  }

  return (
    <div className="glass rounded-3xl p-6 max-w-lg mx-auto">
      <p className="text-xs font-bold uppercase tracking-wide opacity-50 mb-1">Build the sentence</p>
      <p className="text-sm opacity-70 mb-5">{sentence.meaning}</p>

      <div className="min-h-14 flex flex-wrap gap-2 mb-5 p-3 rounded-xl bg-white/5 border-2 border-dashed border-white/10">
        {chosen.length === 0 && <span className="text-sm opacity-40">Tap words below to build the sentence...</span>}
        {chosen.map((w, i) => (
          <button key={i} onClick={() => removeChosen(i)} className="px-3 py-1.5 rounded-lg bg-[var(--color-primary)]/30 font-medium text-sm">
            {w}
          </button>
        ))}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {pool.map((w, i) => (
          <button key={i} onClick={() => pick(w, i)} className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 font-medium text-sm transition">
            {w}
          </button>
        ))}
      </div>

      {status === "idle" && (
        <button
          onClick={check}
          disabled={chosen.length !== target.length}
          className="w-full py-3 rounded-full font-display font-bold text-[var(--color-ink)] disabled:opacity-30 transition"
          style={{ background: "var(--color-accent)" }}
        >
          Check
        </button>
      )}
      {status === "correct" && (
        <div>
          <p className="flex items-center gap-1.5 text-[var(--color-success)] font-semibold text-sm mb-3">
            <PartyPopper size={16} /> Excellent! +20 XP
          </p>
          <button onClick={next} className="w-full py-3 rounded-full font-display font-bold text-[var(--color-ink)]" style={{ background: "var(--color-accent)" }}>
            Next sentence →
          </button>
        </div>
      )}
      {status === "wrong" && (
        <div>
          <p className="text-[var(--color-danger)] font-semibold text-sm mb-3">Almost! Try arranging the words again.</p>
          <button
            onClick={() => {
              setStatus("idle");
              setPool(shuffle(target));
              setChosen([]);
            }}
            className="w-full py-3 rounded-full glass font-semibold hover:bg-white/10"
          >
            Try again
          </button>
        </div>
      )}
    </div>
  );
}
