import { Flame, Star, Trophy } from "lucide-react";

export function XPBadge({ xp }: { xp: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm font-semibold">
      <Star size={15} className="text-[var(--color-accent)] fill-[var(--color-accent)]" />
      <span>{xp.toLocaleString()}</span>
    </div>
  );
}

export function StreakBadge({ streak }: { streak: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm font-semibold">
      <Flame size={15} className={streak > 0 ? "text-[var(--color-danger)] fill-[var(--color-danger)]" : "text-white/30"} />
      <span>{streak}</span>
    </div>
  );
}

export function LevelBadge({ level }: { level: number }) {
  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm font-semibold">
      <Trophy size={15} className="text-[var(--color-secondary)]" />
      <span>Lv {level}</span>
    </div>
  );
}

export function ProgressBar({ percent, colorClass = "bg-[var(--color-primary)]", color }: { percent: number; colorClass?: string; color?: string }) {
  return (
    <div className="w-full h-2.5 rounded-full overflow-hidden" style={{ background: "color-mix(in srgb, currentColor 12%, transparent)" }}>
      <div
        className={`h-full rounded-full ${color ? "" : colorClass} transition-all duration-700 ease-out`}
        style={{ width: `${Math.min(100, Math.max(0, percent))}%`, background: color }}
      />
    </div>
  );
}
