import { Link, Navigate } from "react-router-dom";
import { Lock, Check } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLessons } from "../data";

export default function Learn() {
  const { state } = useProgress();
  const code = state.settings.selectedLanguage;
  if (!code) return <Navigate to="/languages" replace />;

  const language = getLanguage(code)!;
  const progress = state.languageProgress[code];
  const lessons = getLessons(code);

  return (
    <div>
      <div className="flex items-center justify-between mb-1">
        <h1 className="font-display font-extrabold text-3xl">
          {language.flagEmoji} {language.name}
        </h1>
        <Link to="/learn-path" className="text-sm font-semibold opacity-60 hover:opacity-100">
          View path →
        </Link>
      </div>
      <p className="opacity-60 mb-8">{lessons.length} lessons from first steps to mastery.</p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson, i) => {
          const isDone = progress.completedLessons.includes(lesson.id);
          const prevDone = i === 0 || progress.completedLessons.includes(lessons[i - 1].id);
          const isLocked = !isDone && !prevDone;

          return (
            <Link
              key={lesson.id}
              to={isLocked ? "#" : `/learn/${lesson.id}`}
              onClick={(e) => isLocked && e.preventDefault()}
              className={`glass rounded-2xl p-5 flex flex-col gap-2 transition ${
                isLocked ? "opacity-40 cursor-not-allowed" : "hover:-translate-y-1 hover:shadow-xl"
              }`}
            >
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl" style={{ background: `${language.accent}33` }}>
                  {isLocked ? <Lock size={18} /> : lesson.icon}
                </div>
                {isDone && (
                  <span className="w-7 h-7 rounded-full bg-[var(--color-success)]/20 text-[var(--color-success)] flex items-center justify-center">
                    <Check size={14} />
                  </span>
                )}
              </div>
              <p className="font-display font-bold">{lesson.title}</p>
              <p className="text-xs opacity-60 line-clamp-2">{lesson.description}</p>
              <div className="flex items-center justify-between text-[11px] font-semibold opacity-50 mt-1">
                <span className="capitalize">{lesson.difficulty}</span>
                <span style={{ color: "var(--color-accent)" }}>+{lesson.xpReward} XP</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
