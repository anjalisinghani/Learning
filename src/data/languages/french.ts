import type { LetterItem, VocabularyItem, Verb, GrammarTopic, Lesson } from "../../types";

export const frenchVowels: LetterItem[] = [
  { id: "fr-v-1", char: "A", transliteration: "a", pronunciation: "ah", exampleWord: "Ami", exampleWordTranslit: "ah-MEE", exampleMeaning: "friend", type: "vowel" },
  { id: "fr-v-2", char: "E", transliteration: "e", pronunciation: "uh", exampleWord: "École", exampleWordTranslit: "ay-KOL", exampleMeaning: "school", type: "vowel" },
  { id: "fr-v-3", char: "É", transliteration: "e-acute", pronunciation: "ay", exampleWord: "Été", exampleWordTranslit: "ay-TAY", exampleMeaning: "summer", type: "vowel" },
  { id: "fr-v-4", char: "I", transliteration: "i", pronunciation: "ee", exampleWord: "Ici", exampleWordTranslit: "ee-SEE", exampleMeaning: "here", type: "vowel" },
  { id: "fr-v-5", char: "O", transliteration: "o", pronunciation: "oh", exampleWord: "Or", exampleWordTranslit: "OR", exampleMeaning: "gold", type: "vowel" },
  { id: "fr-v-6", char: "U", transliteration: "u", pronunciation: "ew (rounded)", exampleWord: "Une", exampleWordTranslit: "EWN", exampleMeaning: "a/one (feminine)", type: "vowel" },
];

export const frenchConsonants: LetterItem[] = [
  { id: "fr-c-1", char: "B", transliteration: "b", pronunciation: "bay", exampleWord: "Bonjour", exampleWordTranslit: "bohn-ZHOOR", exampleMeaning: "hello", type: "consonant" },
  { id: "fr-c-2", char: "C", transliteration: "c", pronunciation: "say", exampleWord: "Chat", exampleWordTranslit: "SHAH", exampleMeaning: "cat", type: "consonant" },
  { id: "fr-c-3", char: "D", transliteration: "d", pronunciation: "day", exampleWord: "Dame", exampleWordTranslit: "DAHM", exampleMeaning: "lady", type: "consonant" },
  { id: "fr-c-4", char: "G", transliteration: "g", pronunciation: "zhay", exampleWord: "Garçon", exampleWordTranslit: "gar-SOHN", exampleMeaning: "boy", type: "consonant" },
  { id: "fr-c-5", char: "J", transliteration: "j", pronunciation: "zhee", exampleWord: "Jour", exampleWordTranslit: "ZHOOR", exampleMeaning: "day", type: "consonant" },
  { id: "fr-c-6", char: "R", transliteration: "r", pronunciation: "err (guttural)", exampleWord: "Rouge", exampleWordTranslit: "ROOZH", exampleMeaning: "red", type: "consonant" },
];

export const frenchVocabulary: VocabularyItem[] = [
  { id: "fr-w-1", word: "Eau", transliteration: "oh", meaning: "water", exampleSentence: "Je veux de l'eau.", exampleSentenceTranslit: "Zhuh vuh duh loh.", exampleSentenceMeaning: "I want water.", category: "food", difficulty: "beginner" },
  { id: "fr-w-2", word: "Maison", transliteration: "may-ZOHN", meaning: "house", exampleSentence: "C'est ma maison.", exampleSentenceTranslit: "Say mah may-ZOHN.", exampleSentenceMeaning: "This is my house.", category: "everyday", difficulty: "beginner" },
  { id: "fr-w-3", word: "Un", transliteration: "uhn", meaning: "one", exampleSentence: "J'ai un livre.", exampleSentenceTranslit: "Zhay uhn LEEV-ruh.", exampleSentenceMeaning: "I have one book.", category: "numbers", difficulty: "beginner" },
  { id: "fr-w-4", word: "Rouge", transliteration: "roozh", meaning: "red", exampleSentence: "Cette fleur est rouge.", exampleSentenceTranslit: "Set flur eh roozh.", exampleSentenceMeaning: "This flower is red.", category: "colors", difficulty: "beginner" },
  { id: "fr-w-5", word: "Mère", transliteration: "mehr", meaning: "mother", exampleSentence: "Ma mère cuisine.", exampleSentenceTranslit: "Mah mehr kwee-ZEEN.", exampleSentenceMeaning: "My mother is cooking.", category: "family", difficulty: "beginner" },
  { id: "fr-w-6", word: "Père", transliteration: "pehr", meaning: "father", exampleSentence: "Mon père travaille.", exampleSentenceTranslit: "Mohn pehr trah-VYE.", exampleSentenceMeaning: "My father is working.", category: "family", difficulty: "beginner" },
  { id: "fr-w-7", word: "Merci", transliteration: "mehr-SEE", meaning: "thank you", exampleSentence: "Merci beaucoup.", exampleSentenceTranslit: "Mehr-SEE boh-KOO.", exampleSentenceMeaning: "Thank you very much.", category: "phrases", difficulty: "beginner" },
  { id: "fr-w-8", word: "Bonjour", transliteration: "bohn-ZHOOR", meaning: "hello / good day", exampleSentence: "Bonjour, comment ça va ?", exampleSentenceTranslit: "Bohn-ZHOOR, koh-MAHN sah VAH?", exampleSentenceMeaning: "Hello, how are you?", category: "phrases", difficulty: "beginner" },
];

export const frenchVerbs: Verb[] = [
  { id: "fr-v1", infinitive: "Manger", meaning: "to eat", difficulty: "beginner",
    forms: { present: "Je mange.", past: "J'ai mangé.", future: "Je mangerai." } },
  { id: "fr-v2", infinitive: "Être", meaning: "to be", difficulty: "intermediate",
    forms: { present: "Je suis.", past: "J'ai été.", future: "Je serai." } },
  { id: "fr-v3", infinitive: "Avoir", meaning: "to have", difficulty: "intermediate",
    forms: { present: "J'ai.", past: "J'ai eu.", future: "J'aurai." } },
  { id: "fr-v4", infinitive: "Aller", meaning: "to go", difficulty: "beginner",
    forms: { present: "Je vais.", past: "Je suis allé.", future: "J'irai." } },
  { id: "fr-v5", infinitive: "Faire", meaning: "to do / make", difficulty: "intermediate",
    forms: { present: "Je fais.", past: "J'ai fait.", future: "Je ferai." } },
];

export const frenchGrammar: GrammarTopic[] = [
  {
    id: "fr-g1",
    title: "Gender and articles",
    explanation: "Every French noun is either masculine or feminine. The article changes to match: 'le' (masculine), 'la' (feminine), and 'les' (plural). This affects adjectives too.",
    difficulty: "beginner",
    examples: [
      { text: "le garçon", meaning: "the boy (masculine)" },
      { text: "la fille", meaning: "the girl (feminine)" },
      { text: "les enfants", meaning: "the children (plural)" },
    ],
  },
  {
    id: "fr-g2",
    title: "Sentence order: Subject-Verb-Object",
    explanation: "Like English, French generally follows Subject-Verb-Object order, though object pronouns often move before the verb.",
    difficulty: "intermediate",
    examples: [
      { text: "Je mange une pomme.", meaning: "I eat an apple." },
      { text: "Je la mange.", meaning: "I eat it (pronoun 'la' moves before the verb)." },
    ],
  },
];

export const frenchLessons: Lesson[] = [
  { id: "fr-l1", languageCode: "french", category: "vowels", title: "Voyelles — Vowels", description: "Learn French vowel sounds and accents.", icon: "🔤", level: 1, difficulty: "beginner", xpReward: 50, letters: frenchVowels, order: 1 },
  { id: "fr-l2", languageCode: "french", category: "consonants", title: "Consonnes — Consonants", description: "Learn key French consonant sounds.", icon: "🔠", level: 1, difficulty: "beginner", xpReward: 50, letters: frenchConsonants, order: 2 },
  { id: "fr-l3", languageCode: "french", category: "words", title: "Mots — Everyday Words", description: "Learn common French vocabulary.", icon: "📝", level: 2, difficulty: "beginner", xpReward: 60, vocabulary: frenchVocabulary, order: 3 },
  { id: "fr-l4", languageCode: "french", category: "verbs", title: "Verbes — Verbs", description: "Learn être, avoir, aller, faire and more.", icon: "🏃", level: 3, difficulty: "intermediate", xpReward: 70, verbs: frenchVerbs, order: 4 },
  { id: "fr-l5", languageCode: "french", category: "grammar", title: "Grammaire — Grammar Basics", description: "Gender, articles and sentence structure.", icon: "📚", level: 4, difficulty: "intermediate", xpReward: 70, grammar: frenchGrammar, order: 5 },
  { id: "fr-l6", languageCode: "french", category: "sentences", title: "Phrases — Sentence Building", description: "Build your own French sentences.", icon: "🗣", level: 3, difficulty: "beginner", xpReward: 60, order: 6 },
  { id: "fr-l7", languageCode: "french", category: "listening", title: "Écoute — Listening", description: "Practice listening comprehension.", icon: "🎧", level: 5, difficulty: "intermediate", xpReward: 60, order: 7 },
  { id: "fr-l8", languageCode: "french", category: "writing", title: "Écriture — Writing Practice", description: "Practice writing French words.", icon: "✍️", level: 2, difficulty: "beginner", xpReward: 50, order: 8 },
  { id: "fr-l9", languageCode: "french", category: "quiz", title: "Quiz — Test Time", description: "Test what you've learned so far.", icon: "🧠", level: 6, difficulty: "intermediate", xpReward: 80, order: 9 },
];
