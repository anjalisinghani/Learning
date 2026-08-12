import { Link, Navigate } from "react-router-dom";
import { Flame, Star, Target, Trophy, ChevronRight } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLessons, getDailyChallengeConfig } from "../data";
import { getXpProgress, LEVEL_NAMES } from "../utils/xp";
import { ProgressBar } from "../components/Badges";
import { todayStr } from "../utils/storage";

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good morning";
  if (h < 18) return "Good afternoon";
  return "Good evening";
}

export default function Dashboard() {
  const { state, updateSettings } = useProgress();
  const code = state.settings.selectedLanguage;

  if (!code) return <Navigate to="/languages" replace />;

  const language = getLanguage(code)!;
  const progress = state.languageProgress[code];
  const lessons = getLessons(code);
  const xpInfo = getXpProgress(progress.xp);
  const nextLesson = lessons.find((l) => !progress.completedLessons.includes(l.id)) || lessons[0];
  const challenge = getDailyChallengeConfig(code, todayStr());
  const dailyGoalPercent = Math.min(100, Math.round((state.dailyGoal.minutesToday / state.dailyGoal.targetMinutes) * 100));

  return (
    <div className="space-y-8">
      <div>
        <h1 className="font-display font-extrabold text-3xl mb-1">{greeting()} 👋</h1>
        <p className="opacity-60">Ready to learn something new in {language.name}?</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <StatCard icon={<Flame size={18} className="text-[var(--color-danger)]" />} label={`${state.streak.current} Day Streak`} sub="Keep it going" />
        <StatCard icon={<Star size={18} className="text-[var(--color-accent)]" />} label={`${progress.xp.toLocaleString()} XP`} sub={`Level ${xpInfo.level} · ${LEVEL_NAMES[xpInfo.level - 1]}`} />
        <StatCard icon={<Target size={18} className="text-[var(--color-secondary)]" />} label={`${dailyGoalPercent}% Daily Goal`} sub={`${state.dailyGoal.minutesToday}/${state.dailyGoal.targetMinutes} min`} />
        <StatCard icon={<Trophy size={18} className="text-[var(--color-primary-light)]" />} label={`Level ${xpInfo.level}`} sub={`${xpInfo.current}/${xpInfo.needed} XP to next`} />
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        <div className="md:col-span-2 glass rounded-3xl p-6">
          <p className="text-xs font-bold uppercase tracking-wide opacity-50 mb-3">Continue learning</p>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: `${language.accent}33` }}>
              {nextLesson.icon}
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-display font-bold text-lg truncate">{nextLesson.title}</p>
              <p className="text-sm opacity-60 truncate">{nextLesson.description}</p>
            </div>
            <Link
              to={`/learn/${nextLesson.id}`}
              className="shrink-0 px-5 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
              style={{ background: language.accent }}
            >
              Start
            </Link>
          </div>
          <div className="mt-5">
            <ProgressBar percent={(progress.completedLessons.length / lessons.length) * 100} color={language.accent} />
            <p className="text-xs opacity-50 mt-1.5">
              {progress.completedLessons.length} of {lessons.length} lessons complete
            </p>
          </div>
        </div>

        <div className="glass rounded-3xl p-6">
          <p className="text-xs font-bold uppercase tracking-wide opacity-50 mb-3">Today's Challenge</p>
          <p className="font-semibold mb-3">{challenge.description}</p>
          <ProgressBar percent={(progress.knownWords.length / challenge.targetCount) * 100} />
          <p className="text-xs opacity-50 mt-1.5 mb-3">
            {Math.min(progress.knownWords.length, challenge.targetCount)}/{challenge.targetCount}
          </p>
          <p className="text-xs font-bold" style={{ color: "var(--color-accent)" }}>
            +{challenge.xpReward} XP reward
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="font-display font-bold text-xl">Play Now — Fun Mode</h2>
          <Link to="/practice" className="text-sm font-semibold opacity-60 hover:opacity-100 flex items-center gap-1">
            See all <ChevronRight size={14} />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: "⚡", label: "Speed Word" },
            { icon: "🔊", label: "Guess the Sound" },
            { icon: "🧩", label: "Sentence Puzzle" },
            { icon: "🧠", label: "Memory Cards" },
          ].map((g) => (
            <Link key={g.label} to="/practice" className="glass rounded-2xl p-4 text-center hover:-translate-y-1 transition">
              <p className="text-2xl mb-1">{g.icon}</p>
              <p className="text-xs font-semibold">{g.label}</p>
            </Link>
          ))}
        </div>
      </div>

      <button onClick={() => updateSettings({ selectedLanguage: null })} className="text-xs opacity-40 hover:opacity-70 transition">
        Switch language
      </button>
    </div>
  );
}

function StatCard({ icon, label, sub }: { icon: React.ReactNode; label: string; sub: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="flex items-center gap-2 mb-1">{icon}</div>
      <p className="font-display font-bold text-lg leading-tight">{label}</p>
      <p className="text-xs opacity-50">{sub}</p>
    </div>
  );
}
