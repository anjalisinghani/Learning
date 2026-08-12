import { LANGUAGES } from "../data";
import { useProgress } from "../hooks/useProgress";
import { getLessons } from "../data";
import { getXpProgress, LEVEL_NAMES } from "../utils/xp";
import { ProgressBar } from "../components/Badges";

export default function Progress() {
  const { state } = useProgress();

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">My Progress</h1>
      <p className="opacity-60 mb-8">Your personal learning journey — all stored on this device.</p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <MiniStat label="Total XP" value={state.totalXp.toLocaleString()} />
        <MiniStat label="Current Streak" value={`${state.streak.current} days`} />
        <MiniStat label="Longest Streak" value={`${state.streak.longest} days`} />
        <MiniStat
          label="Lessons Completed"
          value={String(Object.values(state.languageProgress).reduce((sum, p) => sum + p.completedLessons.length, 0))}
        />
      </div>

      <h2 className="font-display font-bold text-xl mb-4">By language</h2>
      <div className="grid sm:grid-cols-2 gap-4">
        {LANGUAGES.map((lang) => {
          const p = state.languageProgress[lang.code];
          const lessons = getLessons(lang.code);
          const xpInfo = getXpProgress(p.xp);
          const percent = lessons.length ? (p.completedLessons.length / lessons.length) * 100 : 0;
          return (
            <div key={lang.code} className="glass rounded-2xl p-5">
              <div className="flex items-center justify-between mb-2">
                <p className="font-display font-bold flex items-center gap-2">
                  {lang.flagEmoji} {lang.name}
                </p>
                <span className="text-xs font-semibold opacity-60">
                  Lv {xpInfo.level} · {LEVEL_NAMES[xpInfo.level - 1]}
                </span>
              </div>
              <ProgressBar percent={percent} color={lang.accent} />
              <div className="flex items-center justify-between text-xs opacity-60 mt-1.5">
                <span>
                  {p.completedLessons.length}/{lessons.length} lessons
                </span>
                <span>{p.xp} XP</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-4 text-center">
                <div className="bg-white/5 rounded-lg py-2">
                  <p className="font-bold text-sm">{p.knownWords.length}</p>
                  <p className="text-[10px] opacity-50">Words known</p>
                </div>
                <div className="bg-white/5 rounded-lg py-2">
                  <p className="font-bold text-sm">{p.favoriteWords.length}</p>
                  <p className="text-[10px] opacity-50">Favorites</p>
                </div>
                <div className="bg-white/5 rounded-lg py-2">
                  <p className="font-bold text-sm">
                    {Object.values(p.quizScores).length
                      ? Math.round(Object.values(p.quizScores).reduce((a, b) => a + b, 0) / Object.values(p.quizScores).length)
                      : 0}
                    %
                  </p>
                  <p className="text-[10px] opacity-50">Avg quiz score</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="glass rounded-2xl p-4">
      <p className="font-display font-extrabold text-2xl">{value}</p>
      <p className="text-xs opacity-50">{label}</p>
    </div>
  );
}
