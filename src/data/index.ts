import type { LanguageCode, Lesson, VocabularyItem, LetterItem, BarakhadiRow } from "../types";
import { LANGUAGES, getLanguage } from "./languages/registry";
import { gujaratiLessons, gujaratiBarakhadi } from "./languages/gujarati";
import { englishLessons } from "./languages/english";
import { marathiLessons, marathiBarakhadi } from "./languages/marathi";
import { sindhiLessons } from "./languages/sindhi";
import { frenchLessons } from "./languages/french";

export { LANGUAGES, getLanguage };

const ALL_LESSONS: Record<LanguageCode, Lesson[]> = {
  gujarati: gujaratiLessons,
  english: englishLessons,
  marathi: marathiLessons,
  sindhi: sindhiLessons,
  french: frenchLessons,
};

const BARAKHADI: Partial<Record<LanguageCode, BarakhadiRow[]>> = {
  gujarati: gujaratiBarakhadi,
  marathi: marathiBarakhadi,
};

export function getLessons(code: LanguageCode): Lesson[] {
  return [...(ALL_LESSONS[code] || [])].sort((a, b) => a.order - b.order);
}

export function getLesson(code: LanguageCode, lessonId: string): Lesson | undefined {
  return getLessons(code).find((l) => l.id === lessonId);
}

export function getBarakhadi(code: LanguageCode): BarakhadiRow[] {
  return BARAKHADI[code] || [];
}

export function getAllVocabulary(code: LanguageCode): VocabularyItem[] {
  return getLessons(code).flatMap((l) => l.vocabulary || []);
}

export function getAllLetters(code: LanguageCode): LetterItem[] {
  return getLessons(code).flatMap((l) => l.letters || []);
}

/** Deterministic daily challenge — same for everyone on a given date, no backend needed. */
export function getDailyChallengeConfig(languageCode: LanguageCode, dateStr: string) {
  const vocab = getAllVocabulary(languageCode);
  // simple deterministic hash from date string to pick a target count 5-10
  let hash = 0;
  for (let i = 0; i < dateStr.length; i++) hash = (hash * 31 + dateStr.charCodeAt(i)) % 1000;
  const targetCount = 5 + (hash % 6);
  return {
    description: `Learn ${targetCount} new ${getLanguage(languageCode)?.name || ""} words today`,
    targetCount: Math.min(targetCount, vocab.length || targetCount),
    xpReward: 100,
  };
}

/** Builds a lightweight quiz on the fly from a lesson's content so every lesson is quizzable. */
export function buildQuizForLesson(lesson: Lesson) {
  const questions: { id: string; prompt: string; options: string[]; correctAnswer: string; audioText?: string }[] = [];

  if (lesson.letters && lesson.letters.length > 0) {
    lesson.letters.slice(0, 6).forEach((letter, idx) => {
      const distractors = lesson
        .letters!.filter((l) => l.id !== letter.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((l) => l.transliteration);
      const options = [...distractors, letter.transliteration].sort(() => 0.5 - Math.random());
      questions.push({
        id: `${lesson.id}-q-${idx}`,
        prompt: `What is the sound of "${letter.char}"?`,
        options,
        correctAnswer: letter.transliteration,
        audioText: letter.char,
      });
    });
  }

  if (lesson.vocabulary && lesson.vocabulary.length > 0) {
    lesson.vocabulary.slice(0, 6).forEach((word, idx) => {
      const distractors = lesson
        .vocabulary!.filter((w) => w.id !== word.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((w) => w.meaning);
      const options = [...distractors, word.meaning].sort(() => 0.5 - Math.random());
      questions.push({
        id: `${lesson.id}-q-w-${idx}`,
        prompt: `What does "${word.word}" mean?`,
        options,
        correctAnswer: word.meaning,
        audioText: word.word,
      });
    });
  }

  if (lesson.verbs && lesson.verbs.length > 0) {
    lesson.verbs.forEach((verb, idx) => {
      const distractors = lesson
        .verbs!.filter((v) => v.id !== verb.id)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3)
        .map((v) => v.meaning);
      const options = [...distractors, verb.meaning].sort(() => 0.5 - Math.random());
      questions.push({
        id: `${lesson.id}-q-v-${idx}`,
        prompt: `What does "${verb.infinitive}" mean?`,
        options,
        correctAnswer: verb.meaning,
      });
    });
  }

  return questions.slice(0, 8);
}
