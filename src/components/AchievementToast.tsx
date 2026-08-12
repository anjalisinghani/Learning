import { useEffect, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { ACHIEVEMENTS } from "../data/achievements";

export default function AchievementToast() {
  const { newlyUnlocked, clearNewlyUnlocked } = useProgress();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (newlyUnlocked.length > 0) {
      setVisible(true);
      const timer = setTimeout(() => {
        setVisible(false);
        setTimeout(clearNewlyUnlocked, 300);
      }, 3200);
      return () => clearTimeout(timer);
    }
  }, [newlyUnlocked, clearNewlyUnlocked]);

  if (newlyUnlocked.length === 0) return null;
  const achievement = ACHIEVEMENTS.find((a) => a.id === newlyUnlocked[0]);
  if (!achievement) return null;

  return (
    <div
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-[110] transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
      }`}
    >
      <div className="glass rounded-2xl px-5 py-4 shadow-2xl flex items-center gap-3 max-w-sm border border-[var(--color-accent)]/40">
        <div className="text-3xl">{achievement.icon}</div>
        <div>
          <p className="font-display font-bold text-sm text-[var(--color-accent)]">Achievement unlocked!</p>
          <p className="font-semibold">{achievement.title}</p>
          <p className="text-xs opacity-70">{achievement.description}</p>
        </div>
      </div>
    </div>
  );
}
