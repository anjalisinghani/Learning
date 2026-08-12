import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useProgress } from "../hooks/useProgress";
import { LANGUAGES } from "../data";
import type { Level, LanguageCode } from "../types";

const LEVELS: { key: Level; label: string; blurb: string }[] = [
  { key: "beginner", label: "Beginner", blurb: "I'm just starting out" },
  { key: "intermediate", label: "Intermediate", blurb: "I know some basics" },
  { key: "advanced", label: "Advanced", blurb: "I want to sharpen fluency" },
];

const MINUTES = [5, 10, 15, 20, 30];

export default function Onboarding() {
  const { updateSettings } = useProgress();
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [language, setLanguage] = useState<LanguageCode | null>(null);
  const [level, setLevel] = useState<Level | null>(null);
  const [minutes, setMinutes] = useState(10);

  const steps = ["Language", "Level", "Daily goal", "Ready"];

  function finish() {
    updateSettings({
      selectedLanguage: language,
      level,
      dailyGoalMinutes: minutes,
      onboardingComplete: true,
    });
    navigate("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-lg">
        <div className="flex items-center gap-2 mb-8">
          {steps.map((s, i) => (
            <div key={s} className={`flex-1 h-1.5 rounded-full ${i <= step ? "bg-[var(--color-primary)]" : "bg-white/10"}`} />
          ))}
        </div>

        {step === 0 && (
          <div>
            <h2 className="font-display font-extrabold text-2xl mb-1">Which language do you want to learn?</h2>
            <p className="text-sm opacity-60 mb-6">You can always switch or add more later.</p>
            <div className="grid grid-cols-2 gap-3">
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLanguage(l.code)}
                  className={`glass rounded-2xl p-4 text-left transition ${language === l.code ? "ring-2" : "hover:bg-white/10"}`}
                  style={language === l.code ? ({ "--tw-ring-color": l.accent } as any) : {}}
                >
                  <p className="text-2xl mb-1">{l.flagEmoji}</p>
                  <p className="font-display font-bold">{l.nativeName}</p>
                  <p className="text-xs opacity-60">{l.name}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 1 && (
          <div>
            <h2 className="font-display font-extrabold text-2xl mb-1">What's your current level?</h2>
            <p className="text-sm opacity-60 mb-6">We'll tailor lessons to fit.</p>
            <div className="grid gap-3">
              {LEVELS.map((l) => (
                <button
                  key={l.key}
                  onClick={() => setLevel(l.key)}
                  className={`glass rounded-2xl p-4 text-left transition ${level === l.key ? "ring-2 ring-[var(--color-primary)]" : "hover:bg-white/10"}`}
                >
                  <p className="font-display font-bold">{l.label}</p>
                  <p className="text-xs opacity-60">{l.blurb}</p>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2 className="font-display font-extrabold text-2xl mb-1">How much time do you want to learn each day?</h2>
            <p className="text-sm opacity-60 mb-6">A little every day beats a lot once in a while.</p>
            <div className="flex flex-wrap gap-3">
              {MINUTES.map((m) => (
                <button
                  key={m}
                  onClick={() => setMinutes(m)}
                  className={`px-5 py-3 rounded-2xl font-display font-bold glass transition ${
                    minutes === m ? "ring-2 ring-[var(--color-primary)] bg-white/10" : "hover:bg-white/10"
                  }`}
                >
                  {m} min
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center">
            <p className="text-5xl mb-4">🎉</p>
            <h2 className="font-display font-extrabold text-2xl mb-2">Let's start!</h2>
            <p className="text-sm opacity-60 mb-6">
              Learning {LANGUAGES.find((l) => l.code === language)?.name || "your language"} · {level} level · {minutes} min/day
            </p>
          </div>
        )}

        <div className="flex items-center justify-between mt-8">
          <button
            onClick={() => setStep((s) => Math.max(0, s - 1))}
            disabled={step === 0}
            className="px-5 py-2.5 rounded-full text-sm font-semibold opacity-60 hover:opacity-100 disabled:opacity-20 transition"
          >
            Back
          </button>
          {step < 3 ? (
            <button
              onClick={() => setStep((s) => s + 1)}
              disabled={(step === 0 && !language) || (step === 1 && !level)}
              className="px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)] disabled:opacity-30 transition"
              style={{ background: "var(--color-accent)" }}
            >
              Continue →
            </button>
          ) : (
            <button
              onClick={finish}
              className="px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)] transition"
              style={{ background: "var(--color-accent)" }}
            >
              Start Learning 🚀
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
