import { useProgress } from "../hooks/useProgress";
import { ACHIEVEMENTS } from "../data/achievements";

export default function Achievements() {
  const { state } = useProgress();

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">Achievements</h1>
      <p className="opacity-60 mb-8">
        {state.unlockedAchievements.length} of {ACHIEVEMENTS.length} unlocked
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {ACHIEVEMENTS.map((a) => {
          const unlocked = state.unlockedAchievements.includes(a.id);
          return (
            <div
              key={a.id}
              className={`glass rounded-2xl p-5 flex items-center gap-4 transition ${unlocked ? "" : "opacity-40 grayscale"}`}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0"
                style={{ background: unlocked ? "var(--color-accent)" : "rgba(255,255,255,0.06)" }}
              >
                {a.icon}
              </div>
              <div>
                <p className="font-display font-bold">{a.title}</p>
                <p className="text-xs opacity-60">{a.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
