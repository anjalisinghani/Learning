import { useState } from "react";
import { PartyPopper, X } from "lucide-react";
import { ProgressBar } from "./Badges";
import AudioButton from "./AudioButton";

interface Q {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  audioText?: string;
}

export default function QuizRunner({
  questions,
  speechLang,
  onFinish,
}: {
  questions: Q[];
  speechLang: string;
  onFinish: (scorePercent: number) => void;
}) {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [shake, setShake] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="glass rounded-2xl p-8 text-center">
        <p className="text-3xl mb-2">🤔</p>
        <p className="font-semibold">No quiz questions available.</p>
        <p className="text-sm opacity-60 mt-1">Try a lesson with more content first.</p>
      </div>
    );
  }

  const q = questions[index];
  const isLast = index === questions.length - 1;
  const isCorrect = selected === q.correctAnswer;

  function handleSelect(opt: string) {
    if (selected) return;
    setSelected(opt);
    if (opt === q.correctAnswer) {
      setCorrectCount((c) => c + 1);
    } else {
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }

  function handleNext() {
    if (isLast) {
      const finalCorrect = correctCount + (isCorrect ? 0 : 0); // correctCount already updated
      const percent = Math.round((finalCorrect / questions.length) * 100);
      onFinish(percent);
    } else {
      setIndex((i) => i + 1);
      setSelected(null);
    }
  }

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex items-center justify-between text-xs font-semibold opacity-60 mb-2">
        <span>Question {index + 1} of {questions.length}</span>
        <span>{correctCount} correct</span>
      </div>
      <ProgressBar percent={(index / questions.length) * 100} />

      <div className={`mt-6 glass rounded-3xl p-6 ${shake ? "animate-shake" : ""}`}>
        <div className="flex items-center gap-2 mb-5">
          <p className="font-display font-bold text-xl flex-1">{q.prompt}</p>
          {q.audioText && <AudioButton text={q.audioText} lang={speechLang} />}
        </div>

        <div className="grid gap-3">
          {q.options.map((opt) => {
            const showResult = selected !== null;
            const isThisCorrect = opt === q.correctAnswer;
            const isThisSelected = opt === selected;
            let classes = "bg-white/5 hover:bg-white/10 border-transparent";
            if (showResult && isThisCorrect) classes = "bg-[var(--color-success)]/20 border-[var(--color-success)] text-[var(--color-success)]";
            else if (showResult && isThisSelected && !isThisCorrect) classes = "bg-[var(--color-danger)]/20 border-[var(--color-danger)] text-[var(--color-danger)]";

            return (
              <button
                key={opt}
                onClick={() => handleSelect(opt)}
                disabled={selected !== null}
                className={`text-left px-4 py-3 rounded-xl border-2 font-medium transition ${classes}`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {selected && (
          <div className="mt-5 flex items-center justify-between">
            <p className={`flex items-center gap-1.5 font-semibold text-sm ${isCorrect ? "text-[var(--color-success)]" : "text-[var(--color-danger)]"}`}>
              {isCorrect ? (
                <>
                  <PartyPopper size={16} /> Excellent! +10 XP
                </>
              ) : (
                <>
                  <X size={16} /> Almost! The answer was "{q.correctAnswer}"
                </>
              )}
            </p>
            <button
              onClick={handleNext}
              className="px-5 py-2 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
              style={{ background: "var(--color-accent)" }}
            >
              {isLast ? "Finish" : "Next"} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
