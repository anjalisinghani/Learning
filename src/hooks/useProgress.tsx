import React, { createContext, useContext, useEffect, useState, useCallback } from "react";
import type { AppProgressState, LanguageCode, UserSettings } from "../types";
import { storage, todayStr } from "../utils/storage";
import { recordActivity } from "../utils/streak";
import { ACHIEVEMENTS } from "../data/achievements";

interface XpToast {
  id: number;
  amount: number;
}

interface ProgressContextValue {
  state: AppProgressState;
  addXp: (languageCode: LanguageCode, amount: number) => void;
  completeLesson: (languageCode: LanguageCode, lessonId: string, xpReward: number, quizScore?: number) => void;
  toggleFavoriteWord: (languageCode: LanguageCode, word: string) => void;
  markWordKnown: (languageCode: LanguageCode, word: string) => void;
  updateSettings: (settings: Partial<UserSettings>) => void;
  resetProgress: () => void;
  exportProgress: () => void;
  importProgress: (file: File) => Promise<boolean>;
  newlyUnlocked: string[];
  clearNewlyUnlocked: () => void;
  xpToasts: XpToast[];
  bumpDailyMinutes: (minutes: number) => void;
}

const ProgressContext = createContext<ProgressContextValue | null>(null);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppProgressState>(() => storage.getState());
  const [newlyUnlocked, setNewlyUnlocked] = useState<string[]>([]);
  const [xpToasts, setXpToasts] = useState<XpToast[]>([]);

  // Apply theme class to <html>
  useEffect(() => {
    const root = document.documentElement;
    if (state.settings.theme === "light") {
      root.classList.add("light");
    } else {
      root.classList.remove("light");
    }
  }, [state.settings.theme]);

  // Reset daily goal counter if the day changed
  useEffect(() => {
    if (state.dailyGoal.lastResetDate !== todayStr()) {
      setState((prev) => {
        const next = { ...prev, dailyGoal: { ...prev.dailyGoal, minutesToday: 0, lastResetDate: todayStr() } };
        storage.saveState(next);
        return next;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkAchievements = useCallback((newState: AppProgressState) => {
    const unlocked: string[] = [];
    ACHIEVEMENTS.forEach((a) => {
      if (!newState.unlockedAchievements.includes(a.id) && a.condition(newState)) {
        unlocked.push(a.id);
      }
    });
    if (unlocked.length > 0) {
      const withAchievements = { ...newState, unlockedAchievements: [...newState.unlockedAchievements, ...unlocked] };
      storage.saveState(withAchievements);
      setNewlyUnlocked((prev) => [...prev, ...unlocked]);
      return withAchievements;
    }
    return newState;
  }, []);

  const pushXpToast = useCallback((amount: number) => {
    const id = Date.now() + Math.random();
    setXpToasts((prev) => [...prev, { id, amount }]);
    setTimeout(() => {
      setXpToasts((prev) => prev.filter((t) => t.id !== id));
    }, 1400);
  }, []);

  const addXp = useCallback(
    (languageCode: LanguageCode, amount: number) => {
      setState((prev) => {
        const langProgress = prev.languageProgress[languageCode];
        const nextLangProgress = { ...langProgress, xp: langProgress.xp + amount };
        let next: AppProgressState = {
          ...prev,
          totalXp: prev.totalXp + amount,
          languageProgress: { ...prev.languageProgress, [languageCode]: nextLangProgress },
          streak: recordActivity(prev.streak),
        };
        next = checkAchievements(next);
        storage.saveState(next);
        return next;
      });
      pushXpToast(amount);
    },
    [checkAchievements, pushXpToast]
  );

  const completeLesson = useCallback(
    (languageCode: LanguageCode, lessonId: string, xpReward: number, quizScore?: number) => {
      setState((prev) => {
        const langProgress = prev.languageProgress[languageCode];
        const alreadyDone = langProgress.completedLessons.includes(lessonId);
        const completedLessons = alreadyDone ? langProgress.completedLessons : [...langProgress.completedLessons, lessonId];
        const quizScores = quizScore !== undefined ? { ...langProgress.quizScores, [lessonId]: Math.max(quizScore, langProgress.quizScores[lessonId] || 0) } : langProgress.quizScores;
        const gainedXp = alreadyDone ? Math.round(xpReward * 0.2) : xpReward;
        const nextLangProgress = { ...langProgress, completedLessons, quizScores, xp: langProgress.xp + gainedXp };
        let next: AppProgressState = {
          ...prev,
          totalXp: prev.totalXp + gainedXp,
          languageProgress: { ...prev.languageProgress, [languageCode]: nextLangProgress },
          streak: recordActivity(prev.streak),
        };
        next = checkAchievements(next);
        storage.saveState(next);
        return next;
      });
      pushXpToast(xpReward);
    },
    [checkAchievements, pushXpToast]
  );

  const toggleFavoriteWord = useCallback((languageCode: LanguageCode, word: string) => {
    setState((prev) => {
      const langProgress = prev.languageProgress[languageCode];
      const isFav = langProgress.favoriteWords.includes(word);
      const favoriteWords = isFav ? langProgress.favoriteWords.filter((w) => w !== word) : [...langProgress.favoriteWords, word];
      const next = { ...prev, languageProgress: { ...prev.languageProgress, [languageCode]: { ...langProgress, favoriteWords } } };
      storage.saveState(next);
      return next;
    });
  }, []);

  const markWordKnown = useCallback((languageCode: LanguageCode, word: string) => {
    setState((prev) => {
      const langProgress = prev.languageProgress[languageCode];
      if (langProgress.knownWords.includes(word)) return prev;
      const next = {
        ...prev,
        languageProgress: { ...prev.languageProgress, [languageCode]: { ...langProgress, knownWords: [...langProgress.knownWords, word] } },
      };
      storage.saveState(next);
      return next;
    });
  }, []);

  const updateSettings = useCallback((settings: Partial<UserSettings>) => {
    setState((prev) => {
      const next = { ...prev, settings: { ...prev.settings, ...settings } };
      storage.saveState(next);
      return next;
    });
  }, []);

  const bumpDailyMinutes = useCallback((minutes: number) => {
    setState((prev) => {
      const next = { ...prev, dailyGoal: { ...prev.dailyGoal, minutesToday: prev.dailyGoal.minutesToday + minutes } };
      storage.saveState(next);
      return next;
    });
  }, []);

  const resetProgress = useCallback(() => {
    const fresh = storage.resetAll();
    setState(fresh);
  }, []);

  const exportProgress = useCallback(() => {
    const json = storage.exportJSON();
    const blob = new Blob([json], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "language-learning-progress.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }, []);

  const importProgress = useCallback(async (file: File): Promise<boolean> => {
    try {
      const text = await file.text();
      const imported = storage.importJSON(text);
      if (!imported) return false;
      setState(imported);
      return true;
    } catch {
      return false;
    }
  }, []);

  const clearNewlyUnlocked = useCallback(() => setNewlyUnlocked([]), []);

  return (
    <ProgressContext.Provider
      value={{
        state,
        addXp,
        completeLesson,
        toggleFavoriteWord,
        markWordKnown,
        updateSettings,
        resetProgress,
        exportProgress,
        importProgress,
        newlyUnlocked,
        clearNewlyUnlocked,
        xpToasts,
        bumpDailyMinutes,
      }}
    >
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error("useProgress must be used within ProgressProvider");
  return ctx;
}
