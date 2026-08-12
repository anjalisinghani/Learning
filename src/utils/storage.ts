import type { AppProgressState, LanguageCode, LanguageProgress, UserSettings, StreakData, DailyGoalData } from "../types";

// ============================================================================
// STORAGE ABSTRACTION LAYER
// This is the ONLY place that talks to localStorage directly. If a backend
// is added later, swap the implementations of these functions for API calls
// without touching any component code.
// ============================================================================

const STORAGE_KEY = "lingofun.progress.v1";
const CURRENT_VERSION = 1;

const LANGUAGE_CODES: LanguageCode[] = ["gujarati", "english", "marathi", "sindhi", "french"];

function emptyLanguageProgress(code: LanguageCode): LanguageProgress {
  return {
    languageCode: code,
    xp: 0,
    level: 1,
    completedLessons: [],
    quizScores: {},
    favoriteWords: [],
    knownWords: [],
    wordReviews: {},
  };
}

function defaultSettings(): UserSettings {
  return {
    theme: "dark",
    soundEffects: true,
    voiceSpeed: 1,
    animationsEnabled: true,
    dailyGoalMinutes: 10,
    onboardingComplete: false,
    selectedLanguage: null,
    level: null,
  };
}

function defaultStreak(): StreakData {
  return { current: 0, longest: 0, lastActiveDate: null, freezesAvailable: 1 };
}

function defaultDailyGoal(): DailyGoalData {
  return { targetMinutes: 10, minutesToday: 0, lastResetDate: todayStr() };
}

export function todayStr(): string {
  return new Date().toISOString().slice(0, 10);
}

export function defaultState(): AppProgressState {
  const languageProgress = {} as Record<LanguageCode, LanguageProgress>;
  LANGUAGE_CODES.forEach((code) => {
    languageProgress[code] = emptyLanguageProgress(code);
  });
  return {
    version: CURRENT_VERSION,
    settings: defaultSettings(),
    streak: defaultStreak(),
    dailyGoal: defaultDailyGoal(),
    languageProgress,
    unlockedAchievements: [],
    totalXp: 0,
    createdAt: new Date().toISOString(),
  };
}

function safeParse(raw: string | null): AppProgressState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<AppProgressState>;
    const base = defaultState();
    // Merge shallowly to survive schema additions across versions
    return {
      ...base,
      ...parsed,
      settings: { ...base.settings, ...(parsed.settings || {}) },
      streak: { ...base.streak, ...(parsed.streak || {}) },
      dailyGoal: { ...base.dailyGoal, ...(parsed.dailyGoal || {}) },
      languageProgress: {
        ...base.languageProgress,
        ...(parsed.languageProgress || {}),
      },
      unlockedAchievements: parsed.unlockedAchievements || [],
      totalXp: parsed.totalXp ?? 0,
    };
  } catch {
    return null;
  }
}

export const storage = {
  getState(): AppProgressState {
    if (typeof window === "undefined") return defaultState();
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = safeParse(raw);
    if (parsed) return parsed;
    const fresh = defaultState();
    storage.saveState(fresh);
    return fresh;
  },

  saveState(state: AppProgressState): void {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error("Failed to save progress to localStorage", e);
    }
  },

  getSettings(): UserSettings {
    return storage.getState().settings;
  },

  saveSettings(settings: Partial<UserSettings>): AppProgressState {
    const state = storage.getState();
    const next = { ...state, settings: { ...state.settings, ...settings } };
    storage.saveState(next);
    return next;
  },

  getProgress(languageCode: LanguageCode): LanguageProgress {
    const state = storage.getState();
    return state.languageProgress[languageCode] || emptyLanguageProgress(languageCode);
  },

  saveProgress(languageCode: LanguageCode, progress: Partial<LanguageProgress>): AppProgressState {
    const state = storage.getState();
    const current = state.languageProgress[languageCode] || emptyLanguageProgress(languageCode);
    const next: AppProgressState = {
      ...state,
      languageProgress: {
        ...state.languageProgress,
        [languageCode]: { ...current, ...progress },
      },
    };
    storage.saveState(next);
    return next;
  },

  resetAll(): AppProgressState {
    const fresh = defaultState();
    storage.saveState(fresh);
    return fresh;
  },

  exportJSON(): string {
    return JSON.stringify(storage.getState(), null, 2);
  },

  importJSON(json: string): AppProgressState | null {
    const parsed = safeParse(json);
    if (!parsed) return null;
    storage.saveState(parsed);
    return parsed;
  },
};

export { LANGUAGE_CODES };
