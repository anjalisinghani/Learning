// ============================================================================
// CORE DOMAIN TYPES
// ============================================================================

export type LanguageCode = "gujarati" | "english" | "marathi" | "sindhi" | "french";

export type Level = "beginner" | "intermediate" | "advanced";

export type Difficulty = "beginner" | "intermediate" | "advanced";

export interface Language {
  code: LanguageCode;
  name: string;
  nativeName: string;
  script: string;
  flagEmoji: string;
  speechLang: string; // BCP-47 code for SpeechSynthesis
  accent: string; // hex color used for this language's theme accent
  description: string;
  hasBarakhadi: boolean;
  barakhadiLabel?: string; // e.g. "બારાખડી", "बाराखडी"
}

export interface LetterItem {
  id: string;
  char: string;
  transliteration: string;
  pronunciation: string; // human readable e.g. "ka"
  exampleWord: string;
  exampleWordTranslit: string;
  exampleMeaning: string;
  type: "vowel" | "consonant";
}

export interface BarakhadiRow {
  baseConsonant: string;
  forms: { char: string; transliteration: string }[];
}

export interface VocabularyItem {
  id: string;
  word: string;
  transliteration: string;
  meaning: string;
  exampleSentence: string;
  exampleSentenceTranslit: string;
  exampleSentenceMeaning: string;
  category: string; // numbers, colors, family, food, animals, etc
  difficulty: Difficulty;
}

export interface VerbForm {
  present: string;
  presentTranslit?: string;
  past: string;
  pastTranslit?: string;
  future: string;
  futureTranslit?: string;
}

export interface Verb {
  id: string;
  infinitive: string;
  infinitiveTranslit?: string;
  meaning: string;
  forms: VerbForm;
  difficulty: Difficulty;
}

export interface GrammarTopic {
  id: string;
  title: string;
  explanation: string;
  examples: { text: string; translit?: string; meaning: string }[];
  difficulty: Difficulty;
}

export type QuestionType =
  | "multiple-choice"
  | "true-false"
  | "match"
  | "translate"
  | "fill-blank"
  | "arrange-sentence"
  | "select-pronunciation"
  | "letter-recognition"
  | "verb-conjugation";

export interface QuizQuestion {
  id: string;
  type: QuestionType;
  prompt: string;
  promptTranslit?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  audioText?: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
  xpReward: number;
}

export type LessonCategory =
  | "letters"
  | "vowels"
  | "consonants"
  | "barakhadi"
  | "words"
  | "sentences"
  | "verbs"
  | "grammar"
  | "listening"
  | "writing"
  | "quiz"
  | "mastery";

export interface Lesson {
  id: string;
  languageCode: LanguageCode;
  category: LessonCategory;
  title: string;
  description: string;
  icon: string; // emoji
  level: number; // 1-10, maps to Level system
  difficulty: Difficulty;
  xpReward: number;
  letters?: LetterItem[];
  vocabulary?: VocabularyItem[];
  verbs?: Verb[];
  grammar?: GrammarTopic[];
  quiz?: Quiz;
  order: number;
}

// ============================================================================
// PROGRESS / GAMIFICATION TYPES
// ============================================================================

export interface WordReviewRecord {
  word: string;
  languageCode: LanguageCode;
  lastReviewed: string; // ISO date
  correctCount: number;
  wrongCount: number;
  nextReview: string; // ISO date
}

export interface LanguageProgress {
  languageCode: LanguageCode;
  xp: number;
  level: number;
  completedLessons: string[]; // lesson ids
  quizScores: Record<string, number>; // lessonId -> best score (0-100)
  favoriteWords: string[];
  knownWords: string[];
  wordReviews: Record<string, WordReviewRecord>;
}

export interface StreakData {
  current: number;
  longest: number;
  lastActiveDate: string | null; // ISO date (yyyy-mm-dd)
  freezesAvailable: number;
}

export interface DailyGoalData {
  targetMinutes: number;
  minutesToday: number;
  lastResetDate: string; // yyyy-mm-dd
}

export interface AchievementDef {
  id: string;
  title: string;
  description: string;
  icon: string;
  condition: (state: AppProgressState) => boolean;
}

export interface UserSettings {
  theme: "dark" | "light";
  soundEffects: boolean;
  voiceSpeed: number; // 0.5 - 1.5
  animationsEnabled: boolean;
  dailyGoalMinutes: number;
  onboardingComplete: boolean;
  selectedLanguage: LanguageCode | null;
  level: Level | null;
}

export interface AppProgressState {
  version: number;
  settings: UserSettings;
  streak: StreakData;
  dailyGoal: DailyGoalData;
  languageProgress: Record<LanguageCode, LanguageProgress>;
  unlockedAchievements: string[];
  totalXp: number;
  createdAt: string;
}

export interface DailyChallenge {
  date: string; // yyyy-mm-dd
  languageCode: LanguageCode;
  description: string;
  targetCount: number;
  currentCount: number;
  xpReward: number;
  completed: boolean;
}
