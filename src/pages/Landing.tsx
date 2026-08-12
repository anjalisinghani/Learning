import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProgress } from "../hooks/useProgress";

const floatWords = [
  { text: "ગુજરાતી", top: "12%", left: "8%", delay: "0s", cls: "animate-float-slow" },
  { text: "नमस्कार", top: "22%", left: "78%", delay: "1s", cls: "animate-float-slower" },
  { text: "Hello", top: "68%", left: "6%", delay: "0.5s", cls: "animate-float-slower" },
  { text: "Bonjour", top: "78%", left: "72%", delay: "1.5s", cls: "animate-float-slow" },
  { text: "سنڌي", top: "8%", left: "48%", delay: "2s", cls: "animate-float-slow" },
  { text: "मराठी", top: "50%", left: "88%", delay: "0.8s", cls: "animate-float-slower" },
];

export default function Landing() {
  const { state } = useProgress();
  const navigate = useNavigate();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  function handleStart() {
    if (state.settings.onboardingComplete) navigate("/dashboard");
    else navigate("/onboarding");
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient gradient glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[36rem] h-[36rem] rounded-full blur-[120px] opacity-30" style={{ background: "var(--color-primary)" }} />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-20" style={{ background: "var(--color-secondary)" }} />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full blur-[100px] opacity-20" style={{ background: "var(--color-accent)" }} />
      </div>

      {/* Floating words */}
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {floatWords.map((w) => (
          <span
            key={w.text}
            className={`absolute font-display font-bold text-2xl opacity-20 ${w.cls}`}
            style={{ top: w.top, left: w.left, animationDelay: w.delay }}
          >
            {w.text}
          </span>
        ))}
      </div>

      <nav className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌐</span>
          <span className="font-display font-extrabold text-lg">LingoFun</span>
        </div>
        <Link
          to={state.settings.onboardingComplete ? "/dashboard" : "/onboarding"}
          className="text-sm font-semibold px-4 py-2 rounded-full glass hover:bg-white/10 transition"
        >
          {state.settings.onboardingComplete ? "Continue" : "Get Started"}
        </Link>
      </nav>

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-16 md:pt-24 pb-20 text-center">
        <div
          className={`transition-all duration-700 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="inline-block px-4 py-1.5 rounded-full glass text-xs font-semibold tracking-wide uppercase text-[var(--color-accent)] mb-6">
            No sign-up. No database. Just learning.
          </p>
          <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl leading-[1.05] mb-6">
            Learn Languages.
            <br />
            Have Fun. <span style={{ color: "var(--color-primary-light)" }}>Master the World.</span>
          </h1>
          <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto mb-10">
            Learn Gujarati, English, Marathi, Sindhi and French through interactive lessons, pronunciation, games and challenges.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={handleStart}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-bold text-base text-[var(--color-ink)] shadow-lg shadow-[var(--color-primary)]/20 hover:scale-105 active:scale-95 transition"
              style={{ background: "linear-gradient(135deg, var(--color-accent), #ffb347)" }}
            >
              Start Learning
            </button>
            <Link
              to="/languages"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full font-display font-bold text-base glass hover:bg-white/10 transition text-center"
            >
              Explore Languages
            </Link>
          </div>
        </div>

        {/* Mock learning interface preview */}
        <div className={`mt-16 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="glass rounded-3xl p-6 md:p-8 max-w-2xl mx-auto text-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-full flex items-center justify-center text-xl" style={{ background: "var(--color-primary)" }}>
                ક
              </div>
              <div className="flex-1">
                <p className="font-semibold text-sm">Gujarati · Letters</p>
                <div className="h-1.5 w-full rounded-full bg-white/10 mt-1.5 overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "68%", background: "var(--color-accent)" }} />
                </div>
              </div>
              <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: "var(--color-accent)", color: "var(--color-ink)" }}>
                +50 XP
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {["ક kamal", "ખ khaatlo", "ગ gaay"].map((s) => {
                const [char, word] = s.split(" ");
                return (
                  <div key={s} className="rounded-xl bg-white/5 p-4 text-center">
                    <p className="font-display font-bold text-3xl mb-1">{char}</p>
                    <p className="text-xs opacity-60">{word}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
