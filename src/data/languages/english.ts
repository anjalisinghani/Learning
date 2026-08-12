import type { LetterItem, VocabularyItem, Verb, GrammarTopic, Lesson } from "../../types";

export const englishVowels: LetterItem[] = [
  { id: "en-v-1", char: "A", transliteration: "a", pronunciation: "ay / a", exampleWord: "Apple", exampleWordTranslit: "AP-uhl", exampleMeaning: "a round fruit", type: "vowel" },
  { id: "en-v-2", char: "E", transliteration: "e", pronunciation: "ee / e", exampleWord: "Egg", exampleWordTranslit: "EG", exampleMeaning: "laid by birds", type: "vowel" },
  { id: "en-v-3", char: "I", transliteration: "i", pronunciation: "eye / i", exampleWord: "Ice", exampleWordTranslit: "AYSS", exampleMeaning: "frozen water", type: "vowel" },
  { id: "en-v-4", char: "O", transliteration: "o", pronunciation: "oh / o", exampleWord: "Orange", exampleWordTranslit: "OR-inj", exampleMeaning: "a citrus fruit", type: "vowel" },
  { id: "en-v-5", char: "U", transliteration: "u", pronunciation: "you / u", exampleWord: "Umbrella", exampleWordTranslit: "um-BREL-uh", exampleMeaning: "keeps off rain", type: "vowel" },
];

export const englishConsonants: LetterItem[] = [
  { id: "en-c-1", char: "B", transliteration: "b", pronunciation: "bee", exampleWord: "Ball", exampleWordTranslit: "BAWL", exampleMeaning: "round toy", type: "consonant" },
  { id: "en-c-2", char: "C", transliteration: "c", pronunciation: "see", exampleWord: "Cat", exampleWordTranslit: "KAT", exampleMeaning: "small pet animal", type: "consonant" },
  { id: "en-c-3", char: "D", transliteration: "d", pronunciation: "dee", exampleWord: "Dog", exampleWordTranslit: "DAWG", exampleMeaning: "loyal pet animal", type: "consonant" },
  { id: "en-c-4", char: "F", transliteration: "f", pronunciation: "ef", exampleWord: "Fish", exampleWordTranslit: "FISH", exampleMeaning: "lives in water", type: "consonant" },
  { id: "en-c-5", char: "G", transliteration: "g", pronunciation: "jee", exampleWord: "Goat", exampleWordTranslit: "GOHT", exampleMeaning: "farm animal", type: "consonant" },
  { id: "en-c-6", char: "H", transliteration: "h", pronunciation: "aitch", exampleWord: "Hat", exampleWordTranslit: "HAT", exampleMeaning: "worn on the head", type: "consonant" },
  { id: "en-c-7", char: "J", transliteration: "j", pronunciation: "jay", exampleWord: "Juice", exampleWordTranslit: "JOOSS", exampleMeaning: "fruit drink", type: "consonant" },
  { id: "en-c-8", char: "K", transliteration: "k", pronunciation: "kay", exampleWord: "Kite", exampleWordTranslit: "KYTE", exampleMeaning: "flies in the wind", type: "consonant" },
  { id: "en-c-9", char: "L", transliteration: "l", pronunciation: "el", exampleWord: "Lion", exampleWordTranslit: "LY-uhn", exampleMeaning: "king of the jungle", type: "consonant" },
  { id: "en-c-10", char: "M", transliteration: "m", pronunciation: "em", exampleWord: "Moon", exampleWordTranslit: "MOON", exampleMeaning: "shines at night", type: "consonant" },
];

export const englishVocabulary: VocabularyItem[] = [
  { id: "en-w-1", word: "Water", transliteration: "WAW-ter", meaning: "પાણી / clear liquid we drink", exampleSentence: "I want water.", exampleSentenceTranslit: "", exampleSentenceMeaning: "A basic request for a drink.", category: "food", difficulty: "beginner" },
  { id: "en-w-2", word: "House", transliteration: "HOWSS", meaning: "a place where people live", exampleSentence: "This is my house.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Introducing your home.", category: "everyday", difficulty: "beginner" },
  { id: "en-w-3", word: "One", transliteration: "WUN", meaning: "the number 1", exampleSentence: "I have one book.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Counting an item.", category: "numbers", difficulty: "beginner" },
  { id: "en-w-4", word: "Two", transliteration: "TOO", meaning: "the number 2", exampleSentence: "I have two brothers.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Counting family members.", category: "numbers", difficulty: "beginner" },
  { id: "en-w-5", word: "Red", transliteration: "RED", meaning: "a bright, warm color", exampleSentence: "This flower is red.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Describing a color.", category: "colors", difficulty: "beginner" },
  { id: "en-w-6", word: "Blue", transliteration: "BLOO", meaning: "the color of the sky", exampleSentence: "The sky is blue.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Describing the sky.", category: "colors", difficulty: "beginner" },
  { id: "en-w-7", word: "Mother", transliteration: "MUTH-er", meaning: "female parent", exampleSentence: "My mother is cooking.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Talking about family.", category: "family", difficulty: "beginner" },
  { id: "en-w-8", word: "Father", transliteration: "FAH-ther", meaning: "male parent", exampleSentence: "My father is working.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Talking about family.", category: "family", difficulty: "beginner" },
  { id: "en-w-9", word: "School", transliteration: "SKOOL", meaning: "a place of learning", exampleSentence: "I am going to school.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Daily routine.", category: "everyday", difficulty: "intermediate" },
  { id: "en-w-10", word: "Friend", transliteration: "FREND", meaning: "someone you like and trust", exampleSentence: "He is my friend.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Introducing a friend.", category: "everyday", difficulty: "intermediate" },
  { id: "en-w-11", word: "Thank you", transliteration: "THANGK-yoo", meaning: "expression of gratitude", exampleSentence: "Thank you very much.", exampleSentenceTranslit: "", exampleSentenceMeaning: "Polite expression.", category: "phrases", difficulty: "beginner" },
  { id: "en-w-12", word: "Break a leg", transliteration: "brayk uh leg", meaning: "good luck (idiom)", exampleSentence: "Break a leg on your exam!", exampleSentenceTranslit: "", exampleSentenceMeaning: "A common idiom wishing good luck.", category: "idioms", difficulty: "advanced" },
];

export const englishVerbs: Verb[] = [
  { id: "en-v1", infinitive: "Eat", meaning: "to eat / ખાવું", difficulty: "beginner",
    forms: { present: "I eat.", past: "I ate.", future: "I will eat." } },
  { id: "en-v2", infinitive: "Drink", meaning: "to drink", difficulty: "beginner",
    forms: { present: "I drink water.", past: "I drank water.", future: "I will drink water." } },
  { id: "en-v3", infinitive: "Go", meaning: "to go", difficulty: "beginner",
    forms: { present: "I go to school.", past: "I went to school.", future: "I will go to school." } },
  { id: "en-v4", infinitive: "Come", meaning: "to come", difficulty: "intermediate",
    forms: { present: "I come here.", past: "I came here.", future: "I will come here." } },
  { id: "en-v5", infinitive: "Do", meaning: "to do", difficulty: "intermediate",
    forms: { present: "I do my work.", past: "I did my work.", future: "I will do my work." } },
];

export const englishGrammar: GrammarTopic[] = [
  {
    id: "en-g1",
    title: "Sentence order: Subject-Verb-Object",
    explanation: "English sentences generally follow Subject-Verb-Object order. The subject performs the action (verb) on the object.",
    difficulty: "beginner",
    examples: [
      { text: "I drink water.", meaning: "Subject (I) + Verb (drink) + Object (water)." },
      { text: "She reads a book.", meaning: "Subject (She) + Verb (reads) + Object (a book)." },
    ],
  },
  {
    id: "en-g2",
    title: "The three simple tenses",
    explanation: "English marks time mainly by changing the verb: present (eat), past (ate), and future (will eat) using 'will'.",
    difficulty: "beginner",
    examples: [
      { text: "I eat breakfast.", meaning: "Present — happening now / habitually." },
      { text: "I ate breakfast.", meaning: "Past — already happened." },
      { text: "I will eat breakfast.", meaning: "Future — will happen." },
    ],
  },
];

export const englishLessons: Lesson[] = [
  { id: "en-l1", languageCode: "english", category: "vowels", title: "Vowels A E I O U", description: "Learn the five English vowels.", icon: "🔤", level: 1, difficulty: "beginner", xpReward: 50, letters: englishVowels, order: 1 },
  { id: "en-l2", languageCode: "english", category: "consonants", title: "Consonants", description: "Learn key English consonants.", icon: "🔠", level: 1, difficulty: "beginner", xpReward: 50, letters: englishConsonants, order: 2 },
  { id: "en-l3", languageCode: "english", category: "words", title: "Everyday Words", description: "Learn common vocabulary for daily life.", icon: "📝", level: 2, difficulty: "beginner", xpReward: 60, vocabulary: englishVocabulary, order: 3 },
  { id: "en-l4", languageCode: "english", category: "verbs", title: "Verbs & Tenses", description: "Learn key verbs in present, past and future.", icon: "🏃", level: 3, difficulty: "intermediate", xpReward: 70, verbs: englishVerbs, order: 4 },
  { id: "en-l5", languageCode: "english", category: "grammar", title: "Grammar Basics", description: "Sentence structure and tense rules.", icon: "📚", level: 4, difficulty: "intermediate", xpReward: 70, grammar: englishGrammar, order: 5 },
  { id: "en-l6", languageCode: "english", category: "sentences", title: "Sentence Building", description: "Build your own English sentences.", icon: "🗣", level: 3, difficulty: "beginner", xpReward: 60, order: 6 },
  { id: "en-l7", languageCode: "english", category: "listening", title: "Listening Practice", description: "Practice listening comprehension.", icon: "🎧", level: 5, difficulty: "intermediate", xpReward: 60, order: 7 },
  { id: "en-l8", languageCode: "english", category: "writing", title: "Writing Practice", description: "Trace and write English letters.", icon: "✍️", level: 2, difficulty: "beginner", xpReward: 50, order: 8 },
  { id: "en-l9", languageCode: "english", category: "quiz", title: "Quiz Time", description: "Test what you've learned so far.", icon: "🧠", level: 6, difficulty: "intermediate", xpReward: 80, order: 9 },
];
