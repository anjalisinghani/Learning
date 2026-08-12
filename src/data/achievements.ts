import type { AchievementDef } from "../types";

export const ACHIEVEMENTS: AchievementDef[] = [
  {
    id: "first-lesson",
    title: "First Lesson",
    description: "Complete your very first lesson.",
    icon: "🎯",
    condition: (s) => Object.values(s.languageProgress).some((p) => p.completedLessons.length >= 1),
  },
  {
    id: "streak-7",
    title: "7 Day Streak",
    description: "Learn for 7 days in a row.",
    icon: "🔥",
    condition: (s) => s.streak.current >= 7 || s.streak.longest >= 7,
  },
  {
    id: "streak-30",
    title: "30 Day Streak",
    description: "Learn for 30 days in a row.",
    icon: "🔥",
    condition: (s) => s.streak.longest >= 30,
  },
  {
    id: "xp-500",
    title: "500 XP",
    description: "Earn 500 total XP.",
    icon: "⭐",
    condition: (s) => s.totalXp >= 500,
  },
  {
    id: "xp-2000",
    title: "2000 XP",
    description: "Earn 2000 total XP.",
    icon: "⭐",
    condition: (s) => s.totalXp >= 2000,
  },
  {
    id: "lessons-25",
    title: "25 Lessons",
    description: "Complete 25 lessons across all languages.",
    icon: "📚",
    condition: (s) => Object.values(s.languageProgress).reduce((sum, p) => sum + p.completedLessons.length, 0) >= 25,
  },
  {
    id: "grammar-master",
    title: "Grammar Master",
    description: "Complete a grammar lesson.",
    icon: "🧠",
    condition: (s) => Object.values(s.languageProgress).some((p) => p.completedLessons.some((id) => id.includes("l6") || id.includes("l5"))),
  },
  {
    id: "listening-pro",
    title: "Listening Pro",
    description: "Complete a listening lesson.",
    icon: "🎧",
    condition: (s) => Object.values(s.languageProgress).some((p) => p.completedLessons.some((id) => id.toLowerCase().includes("listen"))),
  },
  {
    id: "language-explorer",
    title: "Language Explorer",
    description: "Start learning more than one language.",
    icon: "🌍",
    condition: (s) => Object.values(s.languageProgress).filter((p) => p.completedLessons.length > 0 || p.xp > 0).length >= 2,
  },
  {
    id: "perfect-quiz",
    title: "Perfect Quiz",
    description: "Score 100% on any quiz.",
    icon: "🏆",
    condition: (s) => Object.values(s.languageProgress).some((p) => Object.values(p.quizScores).some((score) => score === 100)),
  },
];
