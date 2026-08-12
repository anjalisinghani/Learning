import { useEffect, useState } from "react";
import { PartyPopper } from "lucide-react";
import type { VocabularyItem, LanguageCode } from "../types";
import { useProgress } from "../hooks/useProgress";
import { XP_REWARDS } from "../utils/xp";

interface CardT {
  key: string;
  display: string;
  pairId: string;
}

function shuffle<T>(arr: T[]): T[] {
  return [...arr].sort(() => 0.5 - Math.random());
}

export default function MemoryMatch({ words, languageCode }: { words: VocabularyItem[]; languageCode: LanguageCode }) {
  const { addXp } = useProgress();
  const [cards, setCards] = useState<CardT[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<string[]>([]);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    const chosen = shuffle(words).slice(0, 6);
    const pairs: CardT[] = chosen.flatMap((w) => [
      { key: `${w.id}-word`, display: w.word, pairId: w.id },
      { key: `${w.id}-meaning`, display: w.meaning, pairId: w.id },
    ]);
    setCards(shuffle(pairs));
    setFlipped([]);
    setMatched([]);
  }, [words]);

  if (words.length < 4) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-3xl mb-2">🧠</p>
        <p className="font-semibold">Need a few more words to play memory match.</p>
      </div>
    );
  }

  function handleFlip(idx: number) {
    if (busy || flipped.includes(idx) || matched.includes(cards[idx].pairId)) return;
    const next = [...flipped, idx];
    setFlipped(next);
    if (next.length === 2) {
      setBusy(true);
      const [a, b] = next;
      if (cards[a].pairId === cards[b].pairId) {
        setTimeout(() => {
          setMatched((m) => [...m, cards[a].pairId]);
          setFlipped([]);
          setBusy(false);
          addXp(languageCode, XP_REWARDS.correctQuizAnswer);
        }, 500);
      } else {
        setTimeout(() => {
          setFlipped([]);
          setBusy(false);
        }, 800);
      }
    }
  }

  const allDone = cards.length > 0 && matched.length === cards.length / 2;

  return (
    <div className="max-w-lg mx-auto">
      {allDone && (
        <p className="flex items-center justify-center gap-1.5 text-[var(--color-success)] font-semibold text-sm mb-4">
          <PartyPopper size={16} /> All matched! Great memory.
        </p>
      )}
      <div className="grid grid-cols-3 gap-3">
        {cards.map((c, i) => {
          const isFlipped = flipped.includes(i) || matched.includes(c.pairId);
          return (
            <button
              key={c.key}
              onClick={() => handleFlip(i)}
              className={`h-20 rounded-xl flex items-center justify-center text-center p-2 text-xs font-semibold transition ${
                matched.includes(c.pairId)
                  ? "bg-[var(--color-success)]/20 text-[var(--color-success)]"
                  : isFlipped
                  ? "bg-[var(--color-primary)]/30"
                  : "bg-white/10 hover:bg-white/20"
              }`}
            >
              {isFlipped ? c.display : "?"}
            </button>
          );
        })}
      </div>
    </div>
  );
}
