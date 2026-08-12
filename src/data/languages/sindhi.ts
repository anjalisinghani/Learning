import type { LetterItem, VocabularyItem, Verb, GrammarTopic, Lesson } from "../../types";

// Sindhi uses a Perso-Arabic based script, written right-to-left, with several
// letters unique to Sindhi (implosive consonants) not found in standard Urdu/Arabic.
export const sindhiVowels: LetterItem[] = [
  { id: "sd-v-1", char: "ا", transliteration: "a", pronunciation: "a (as in about)", exampleWord: "اکر", exampleWordTranslit: "akhar", exampleMeaning: "letter", type: "vowel" },
  { id: "sd-v-2", char: "آ", transliteration: "aa", pronunciation: "aa (as in father)", exampleWord: "آب", exampleWordTranslit: "aab", exampleMeaning: "water (formal)", type: "vowel" },
  { id: "sd-v-3", char: "ای", transliteration: "ee", pronunciation: "ee (as in see)", exampleWord: "ایترو", exampleWordTranslit: "eetro", exampleMeaning: "this much", type: "vowel" },
  { id: "sd-v-4", char: "او", transliteration: "oo", pronunciation: "oo (as in food)", exampleWord: "اوٺ", exampleWordTranslit: "oath", exampleMeaning: "camel", type: "vowel" },
  { id: "sd-v-5", char: "اي", transliteration: "e", pronunciation: "e (as in bed)", exampleWord: "ايترا", exampleWordTranslit: "etra", exampleMeaning: "these many", type: "vowel" },
];

export const sindhiConsonants: LetterItem[] = [
  { id: "sd-c-1", char: "ب", transliteration: "ba", pronunciation: "ba", exampleWord: "بلي", exampleWordTranslit: "bili", exampleMeaning: "cat", type: "consonant" },
  { id: "sd-c-2", char: "ڀ", transliteration: "bha", pronunciation: "bha (implosive, unique to Sindhi)", exampleWord: "ڀاڻ", exampleWordTranslit: "bhaan", exampleMeaning: "manure", type: "consonant" },
  { id: "sd-c-3", char: "ت", transliteration: "ta", pronunciation: "ta", exampleWord: "تارو", exampleWordTranslit: "taro", exampleMeaning: "star", type: "consonant" },
  { id: "sd-c-4", char: "ٺ", transliteration: "tta", pronunciation: "tta (retroflex)", exampleWord: "ٺڪر", exampleWordTranslit: "ttakar", exampleMeaning: "clay pot", type: "consonant" },
  { id: "sd-c-5", char: "ج", transliteration: "ja", pronunciation: "ja", exampleWord: "جهنگ", exampleWordTranslit: "jhang", exampleMeaning: "forest", type: "consonant" },
  { id: "sd-c-6", char: "ڄ", transliteration: "ja (implosive)", pronunciation: "ja (implosive, unique to Sindhi)", exampleWord: "ڄمڻ", exampleWordTranslit: "jaman", exampleMeaning: "to be born", type: "consonant" },
  { id: "sd-c-7", char: "د", transliteration: "da", pronunciation: "da", exampleWord: "در", exampleWordTranslit: "dar", exampleMeaning: "door", type: "consonant" },
  { id: "sd-c-8", char: "ڏ", transliteration: "da (implosive)", pronunciation: "da (implosive, unique to Sindhi)", exampleWord: "ڏينهن", exampleWordTranslit: "dinhan", exampleMeaning: "day", type: "consonant" },
  { id: "sd-c-9", char: "س", transliteration: "sa", pronunciation: "sa", exampleWord: "سج", exampleWordTranslit: "suj", exampleMeaning: "sun", type: "consonant" },
  { id: "sd-c-10", char: "م", transliteration: "ma", pronunciation: "ma", exampleWord: "ماءُ", exampleWordTranslit: "maa'u", exampleMeaning: "mother", type: "consonant" },
];

export const sindhiVocabulary: VocabularyItem[] = [
  { id: "sd-w-1", word: "پاڻي", transliteration: "paani", meaning: "water", exampleSentence: "مون کي پاڻي کپي.", exampleSentenceTranslit: "Moon khe paani khapi.", exampleSentenceMeaning: "I want water.", category: "food", difficulty: "beginner" },
  { id: "sd-w-2", word: "گهر", transliteration: "ghar", meaning: "house", exampleSentence: "هي منهنجو گهر آهي.", exampleSentenceTranslit: "Hi manhinjo ghar aahe.", exampleSentenceMeaning: "This is my house.", category: "everyday", difficulty: "beginner" },
  { id: "sd-w-3", word: "ماءُ", transliteration: "maa'u", meaning: "mother", exampleSentence: "منهنجي ماءُ رڌ پچاءُ ڪري رهي آهي.", exampleSentenceTranslit: "Manhinji maa'u radh pachaa'u kare rahi aahe.", exampleSentenceMeaning: "My mother is cooking.", category: "family", difficulty: "beginner" },
  { id: "sd-w-4", word: "پيءُ", transliteration: "pi'u", meaning: "father", exampleSentence: "منهنجو پيءُ ڪم ڪري ٿو.", exampleSentenceTranslit: "Manhinjo pi'u kam kare tho.", exampleSentenceMeaning: "My father is working.", category: "family", difficulty: "beginner" },
  { id: "sd-w-5", word: "ڪتاب", transliteration: "kitaab", meaning: "book", exampleSentence: "مون وٽ هڪ ڪتاب آهي.", exampleSentenceTranslit: "Moon watt hik kitaab aahe.", exampleSentenceMeaning: "I have one book.", category: "everyday", difficulty: "beginner" },
  { id: "sd-w-6", word: "مهرباني", transliteration: "meharbaani", meaning: "thank you", exampleSentence: "توهان جي مهرباني.", exampleSentenceTranslit: "Tohaan ji meharbaani.", exampleSentenceMeaning: "Thank you.", category: "phrases", difficulty: "beginner" },
];

export const sindhiVerbs: Verb[] = [
  { id: "sd-v1", infinitive: "کائڻ", infinitiveTranslit: "khaan", meaning: "to eat", difficulty: "beginner",
    forms: { present: "مان کائان ٿو.", presentTranslit: "Maan khaa'aan tho.", past: "مون کاڌو.", pastTranslit: "Moon khaadho.", future: "مان کائيندس.", futureTranslit: "Maan khaa'indas." } },
  { id: "sd-v2", infinitive: "پيئڻ", infinitiveTranslit: "pee'an", meaning: "to drink", difficulty: "beginner",
    forms: { present: "مان پاڻي پيئان ٿو.", presentTranslit: "Maan paani pee'aan tho.", past: "مون پاڻي پيتو.", pastTranslit: "Moon paani peeto.", future: "مان پاڻي پيئندس.", futureTranslit: "Maan paani pee'indas." } },
];

export const sindhiGrammar: GrammarTopic[] = [
  {
    id: "sd-g1",
    title: "Sindhi script basics",
    explanation: "Sindhi is written right-to-left using a Perso-Arabic based script. It has several implosive consonants (ڀ ڄ ڏ ڳ ٻ) that do not exist in standard Urdu or Arabic, making its alphabet larger — around 52 letters.",
    difficulty: "beginner",
    examples: [
      { text: "ب ڀ ت ٺ ج ڄ", meaning: "Early consonants including two implosives (ڀ, ڄ)" },
    ],
  },
  {
    id: "sd-g2",
    title: "Sentence order: Subject-Object-Verb",
    explanation: "Like most languages of the region, Sindhi places the verb at the end of the sentence.",
    difficulty: "intermediate",
    examples: [
      { text: "مان پاڻي پيئان ٿو.", translit: "Maan paani pee'aan tho.", meaning: "I water drink (= I drink water)." },
    ],
  },
];

export const sindhiLessons: Lesson[] = [
  { id: "sd-l1", languageCode: "sindhi", category: "vowels", title: "Vowels", description: "Learn Sindhi vowel sounds.", icon: "🔤", level: 1, difficulty: "beginner", xpReward: 50, letters: sindhiVowels, order: 1 },
  { id: "sd-l2", languageCode: "sindhi", category: "consonants", title: "Consonants", description: "Learn Sindhi consonants, including unique implosives.", icon: "🔠", level: 1, difficulty: "beginner", xpReward: 50, letters: sindhiConsonants, order: 2 },
  { id: "sd-l3", languageCode: "sindhi", category: "words", title: "Everyday Words", description: "Learn common Sindhi vocabulary.", icon: "📝", level: 2, difficulty: "beginner", xpReward: 60, vocabulary: sindhiVocabulary, order: 3 },
  { id: "sd-l4", languageCode: "sindhi", category: "verbs", title: "Verbs", description: "Learn key verbs in present, past and future.", icon: "🏃", level: 3, difficulty: "intermediate", xpReward: 70, verbs: sindhiVerbs, order: 4 },
  { id: "sd-l5", languageCode: "sindhi", category: "grammar", title: "Grammar Basics", description: "Script and sentence structure.", icon: "📚", level: 4, difficulty: "intermediate", xpReward: 70, grammar: sindhiGrammar, order: 5 },
  { id: "sd-l6", languageCode: "sindhi", category: "listening", title: "Listening Practice", description: "Practice listening comprehension.", icon: "🎧", level: 5, difficulty: "intermediate", xpReward: 60, order: 6 },
  { id: "sd-l7", languageCode: "sindhi", category: "writing", title: "Writing Practice", description: "Trace Sindhi letters.", icon: "✍️", level: 2, difficulty: "beginner", xpReward: 50, order: 7 },
  { id: "sd-l8", languageCode: "sindhi", category: "quiz", title: "Quiz Time", description: "Test what you've learned so far.", icon: "🧠", level: 6, difficulty: "intermediate", xpReward: 80, order: 8 },
];
