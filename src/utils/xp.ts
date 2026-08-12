// ============================================================================
// XP / LEVEL SYSTEM
// ============================================================================

export const XP_REWARDS = {
  completeLesson: 50,
  correctQuizAnswer: 10,
  perfectQuiz: 25,
  dailyChallenge: 100,
  listening: 20,
  writing: 20,
  speaking: 30,
  fastAnswerBonus: 5,
};

// Cumulative XP required to REACH each level. Index 0 = level 1 threshold.
const LEVEL_THRESHOLDS = [0, 100, 250, 500, 850, 1300, 1850, 2500, 3300, 4200, 5300];

export function getLevelFromXp(xp: number): number {
  let level = 1;
  for (let i = 0; i < LEVEL_THRESHOLDS.length; i++) {
    if (xp >= LEVEL_THRESHOLDS[i]) level = i + 1;
  }
  return Math.min(level, 10);
}

export function getXpForLevel(level: number): number {
  const idx = Math.min(Math.max(level - 1, 0), LEVEL_THRESHOLDS.length - 1);
  return LEVEL_THRESHOLDS[idx];
}

export function getXpProgress(xp: number): { current: number; needed: number; percent: number; level: number } {
  const level = getLevelFromXp(xp);
  const currentFloor = getXpForLevel(level);
  const nextCeiling = level >= 10 ? currentFloor : getXpForLevel(level + 1);
  const span = nextCeiling - currentFloor || 1;
  const current = xp - currentFloor;
  const percent = level >= 10 ? 100 : Math.min(100, Math.round((current / span) * 100));
  return { current, needed: span, percent, level };
}

export const LEVEL_NAMES = [
  "First Steps",
  "Foundations",
  "Everyday Words",
  "Sentences",
  "Grammar",
  "Conversation",
  "Intermediate",
  "Advanced",
  "Fluency Practice",
  "Mastery",
];
