import type { StreakData } from "../types";
import { todayStr } from "./storage";

function daysBetween(a: string, b: string): number {
  const dateA = new Date(a + "T00:00:00");
  const dateB = new Date(b + "T00:00:00");
  return Math.round((dateB.getTime() - dateA.getTime()) / (1000 * 60 * 60 * 24));
}

/** Call whenever the user completes any learning activity. */
export function recordActivity(streak: StreakData): StreakData {
  const today = todayStr();
  if (streak.lastActiveDate === today) {
    return streak; // already recorded today
  }
  if (!streak.lastActiveDate) {
    return { ...streak, current: 1, longest: Math.max(1, streak.longest), lastActiveDate: today };
  }
  const gap = daysBetween(streak.lastActiveDate, today);
  if (gap === 1) {
    const current = streak.current + 1;
    return { ...streak, current, longest: Math.max(current, streak.longest), lastActiveDate: today };
  }
  if (gap > 1) {
    // Streak broken - use a freeze if available and gap was exactly 2 days
    if (gap === 2 && streak.freezesAvailable > 0) {
      return {
        ...streak,
        current: streak.current + 1,
        longest: Math.max(streak.current + 1, streak.longest),
        lastActiveDate: today,
        freezesAvailable: streak.freezesAvailable - 1,
      };
    }
    return { ...streak, current: 1, lastActiveDate: today };
  }
  return streak;
}

export function isStreakActiveToday(streak: StreakData): boolean {
  return streak.lastActiveDate === todayStr();
}
