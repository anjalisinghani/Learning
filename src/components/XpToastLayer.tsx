import { useProgress } from "../hooks/useProgress";

export default function XpToastLayer() {
  const { xpToasts } = useProgress();
  if (xpToasts.length === 0) return null;
  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[100] pointer-events-none flex flex-col items-center gap-1">
      {xpToasts.map((t) => (
        <div
          key={t.id}
          className="animate-xp-pop font-display font-bold text-lg px-4 py-1.5 rounded-full text-[var(--color-ink)] shadow-lg"
          style={{ background: "linear-gradient(135deg, var(--color-accent), #ffb347)" }}
        >
          +{t.amount} XP ✨
        </div>
      ))}
    </div>
  );
}
