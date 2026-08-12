import { Link, Navigate } from "react-router-dom";
import { Lock, Check } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLessons } from "../data";

export default function LearningPath() {
  const { state } = useProgress();
  const code = state.settings.selectedLanguage;
  if (!code) return <Navigate to="/languages" replace />;

  const language = getLanguage(code)!;
  const progress = state.languageProgress[code];
  const lessons = getLessons(code);

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">
        {language.flagEmoji} {language.name} Learning Path
      </h1>
      <p className="opacity-60 mb-10">Follow the trail from letters to mastery.</p>

      <div className="relative max-w-md mx-auto">
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 rounded-full bg-white/10" />
        <div className="relative flex flex-col items-center gap-2">
          <div className="text-xs font-bold uppercase tracking-widest opacity-40 mb-2">Start</div>
          {lessons.map((lesson, i) => {
            const isDone = progress.completedLessons.includes(lesson.id);
            const prevDone = i === 0 || progress.completedLessons.includes(lessons[i - 1].id);
            const isLocked = !isDone && !prevDone;
            const isCurrent = !isDone && prevDone;
            const offset = i % 2 === 0 ? "-translate-x-16 md:-translate-x-24" : "translate-x-16 md:translate-x-24";

            return (
              <div key={lesson.id} className={`relative z-10 ${offset} mb-2`}>
                <Link
                  to={isLocked ? "#" : `/learn/${lesson.id}`}
                  onClick={(e) => isLocked && e.preventDefault()}
                  className={`flex flex-col items-center gap-1 group ${isLocked ? "cursor-not-allowed" : ""}`}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl border-4 transition-all ${
                      isDone
                        ? "border-[var(--color-success)] bg-[var(--color-success)]/20"
                        : isCurrent
                        ? "border-[var(--color-accent)] bg-[var(--color-accent)]/20 animate-pulse-glow"
                        : "border-white/10 bg-white/5 opacity-40"
                    } ${!isLocked ? "group-hover:scale-110" : ""}`}
                  >
                    {isLocked ? <Lock size={20} /> : isDone ? <Check size={22} className="text-[var(--color-success)]" /> : lesson.icon}
                  </div>
                  <p className={`text-xs font-semibold text-center max-w-[6.5rem] ${isLocked ? "opacity-30" : ""}`}>{lesson.title}</p>
                </Link>
              </div>
            );
          })}
          <div className="mt-4 w-20 h-20 rounded-full flex items-center justify-center text-3xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-primary)]">
            🏆
          </div>
          <div className="text-xs font-bold uppercase tracking-widest opacity-40">Mastery</div>
        </div>
      </div>
    </div>
  );
}
