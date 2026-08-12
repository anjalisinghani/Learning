import type { LetterItem, VocabularyItem, Verb, GrammarTopic, Lesson, BarakhadiRow } from "../../types";

export const marathiVowels: LetterItem[] = [
  { id: "mr-v-1", char: "अ", transliteration: "a", pronunciation: "a (as in about)", exampleWord: "अननस", exampleWordTranslit: "ananas", exampleMeaning: "pineapple", type: "vowel" },
  { id: "mr-v-2", char: "आ", transliteration: "aa", pronunciation: "aa (as in father)", exampleWord: "आई", exampleWordTranslit: "aai", exampleMeaning: "mother", type: "vowel" },
  { id: "mr-v-3", char: "इ", transliteration: "i", pronunciation: "i (as in sit)", exampleWord: "इमारत", exampleWordTranslit: "imaarat", exampleMeaning: "building", type: "vowel" },
  { id: "mr-v-4", char: "ई", transliteration: "ee", pronunciation: "ee (as in see)", exampleWord: "ईद", exampleWordTranslit: "eed", exampleMeaning: "Eid festival", type: "vowel" },
  { id: "mr-v-5", char: "उ", transliteration: "u", pronunciation: "u (as in put)", exampleWord: "उंदीर", exampleWordTranslit: "undeer", exampleMeaning: "mouse", type: "vowel" },
  { id: "mr-v-6", char: "ऊ", transliteration: "oo", pronunciation: "oo (as in food)", exampleWord: "ऊस", exampleWordTranslit: "oos", exampleMeaning: "sugarcane", type: "vowel" },
  { id: "mr-v-7", char: "ए", transliteration: "e", pronunciation: "e (as in bed)", exampleWord: "एक", exampleWordTranslit: "ek", exampleMeaning: "one", type: "vowel" },
  { id: "mr-v-8", char: "ऐ", transliteration: "ai", pronunciation: "ai (as in aisle)", exampleWord: "ऐरण", exampleWordTranslit: "airan", exampleMeaning: "anvil", type: "vowel" },
  { id: "mr-v-9", char: "ओ", transliteration: "o", pronunciation: "o (as in go)", exampleWord: "ओठ", exampleWordTranslit: "oth", exampleMeaning: "lips", type: "vowel" },
  { id: "mr-v-10", char: "औ", transliteration: "au", pronunciation: "au (as in cow)", exampleWord: "औषध", exampleWordTranslit: "aushadh", exampleMeaning: "medicine", type: "vowel" },
];

export const marathiConsonants: LetterItem[] = [
  { id: "mr-c-1", char: "क", transliteration: "ka", pronunciation: "ka", exampleWord: "कमळ", exampleWordTranslit: "kamal", exampleMeaning: "lotus", type: "consonant" },
  { id: "mr-c-2", char: "ख", transliteration: "kha", pronunciation: "kha", exampleWord: "खडू", exampleWordTranslit: "khadoo", exampleMeaning: "chalk", type: "consonant" },
  { id: "mr-c-3", char: "ग", transliteration: "ga", pronunciation: "ga", exampleWord: "गाय", exampleWordTranslit: "gaay", exampleMeaning: "cow", type: "consonant" },
  { id: "mr-c-4", char: "घ", transliteration: "gha", pronunciation: "gha", exampleWord: "घर", exampleWordTranslit: "ghar", exampleMeaning: "house", type: "consonant" },
  { id: "mr-c-5", char: "च", transliteration: "cha", pronunciation: "cha", exampleWord: "चमचा", exampleWordTranslit: "chamcha", exampleMeaning: "spoon", type: "consonant" },
  { id: "mr-c-6", char: "छ", transliteration: "chha", pronunciation: "chha", exampleWord: "छत्री", exampleWordTranslit: "chhatri", exampleMeaning: "umbrella", type: "consonant" },
  { id: "mr-c-7", char: "ज", transliteration: "ja", pronunciation: "ja", exampleWord: "जंगल", exampleWordTranslit: "jangal", exampleMeaning: "forest", type: "consonant" },
  { id: "mr-c-8", char: "झ", transliteration: "jha", pronunciation: "jha", exampleWord: "झाड", exampleWordTranslit: "jhaad", exampleMeaning: "tree", type: "consonant" },
  { id: "mr-c-9", char: "त", transliteration: "ta", pronunciation: "ta (dental)", exampleWord: "तारा", exampleWordTranslit: "taara", exampleMeaning: "star", type: "consonant" },
  { id: "mr-c-10", char: "द", transliteration: "da", pronunciation: "da (dental)", exampleWord: "दार", exampleWordTranslit: "daar", exampleMeaning: "door", type: "consonant" },
  { id: "mr-c-11", char: "न", transliteration: "na", pronunciation: "na", exampleWord: "नदी", exampleWordTranslit: "nadi", exampleMeaning: "river", type: "consonant" },
  { id: "mr-c-12", char: "प", transliteration: "pa", pronunciation: "pa", exampleWord: "पाणी", exampleWordTranslit: "paani", exampleMeaning: "water", type: "consonant" },
  { id: "mr-c-13", char: "ब", transliteration: "ba", pronunciation: "ba", exampleWord: "बदक", exampleWordTranslit: "badak", exampleMeaning: "duck", type: "consonant" },
  { id: "mr-c-14", char: "म", transliteration: "ma", pronunciation: "ma", exampleWord: "मासा", exampleWordTranslit: "maasa", exampleMeaning: "fish", type: "consonant" },
  { id: "mr-c-15", char: "र", transliteration: "ra", pronunciation: "ra", exampleWord: "रस्ता", exampleWordTranslit: "rasta", exampleMeaning: "road", type: "consonant" },
  { id: "mr-c-16", char: "ल", transliteration: "la", pronunciation: "la", exampleWord: "लाडू", exampleWordTranslit: "laadoo", exampleMeaning: "sweet ball", type: "consonant" },
  { id: "mr-c-17", char: "व", transliteration: "va", pronunciation: "va", exampleWord: "वारा", exampleWordTranslit: "vaara", exampleMeaning: "wind", type: "consonant" },
  { id: "mr-c-18", char: "स", transliteration: "sa", pronunciation: "sa", exampleWord: "सफरचंद", exampleWordTranslit: "safarchand", exampleMeaning: "apple", type: "consonant" },
  { id: "mr-c-19", char: "ळ", transliteration: "La", pronunciation: "retroflex la (unique to Marathi)", exampleWord: "फळ", exampleWordTranslit: "phaL", exampleMeaning: "fruit", type: "consonant" },
  { id: "mr-c-20", char: "ह", transliteration: "ha", pronunciation: "ha", exampleWord: "हत्ती", exampleWordTranslit: "hatti", exampleMeaning: "elephant", type: "consonant" },
];

export const marathiBarakhadi: BarakhadiRow[] = [
  { baseConsonant: "क", forms: [
    { char: "क", transliteration: "ka" }, { char: "का", transliteration: "kaa" }, { char: "कि", transliteration: "ki" },
    { char: "की", transliteration: "kee" }, { char: "कु", transliteration: "ku" }, { char: "कू", transliteration: "koo" },
    { char: "के", transliteration: "ke" }, { char: "कै", transliteration: "kai" }, { char: "को", transliteration: "ko" },
    { char: "कौ", transliteration: "kau" }, { char: "कं", transliteration: "kam" }, { char: "कः", transliteration: "kah" },
  ]},
  { baseConsonant: "म", forms: [
    { char: "म", transliteration: "ma" }, { char: "मा", transliteration: "maa" }, { char: "मि", transliteration: "mi" },
    { char: "मी", transliteration: "mee" }, { char: "मु", transliteration: "mu" }, { char: "मू", transliteration: "moo" },
    { char: "मे", transliteration: "me" }, { char: "मै", transliteration: "mai" }, { char: "मो", transliteration: "mo" },
    { char: "मौ", transliteration: "mau" }, { char: "मं", transliteration: "mam" }, { char: "मः", transliteration: "mah" },
  ]},
];

export const marathiVocabulary: VocabularyItem[] = [
  { id: "mr-w-1", word: "पाणी", transliteration: "paani", meaning: "water", exampleSentence: "मला पाणी हवे आहे.", exampleSentenceTranslit: "Mala paani have aahe.", exampleSentenceMeaning: "I want water.", category: "food", difficulty: "beginner" },
  { id: "mr-w-2", word: "घर", transliteration: "ghar", meaning: "house", exampleSentence: "हे माझे घर आहे.", exampleSentenceTranslit: "He maajhe ghar aahe.", exampleSentenceMeaning: "This is my house.", category: "everyday", difficulty: "beginner" },
  { id: "mr-w-3", word: "एक", transliteration: "ek", meaning: "one", exampleSentence: "माझ्याकडे एक पुस्तक आहे.", exampleSentenceTranslit: "Maajhyaakade ek pustak aahe.", exampleSentenceMeaning: "I have one book.", category: "numbers", difficulty: "beginner" },
  { id: "mr-w-4", word: "लाल", transliteration: "laal", meaning: "red", exampleSentence: "हे फूल लाल आहे.", exampleSentenceTranslit: "He phool laal aahe.", exampleSentenceMeaning: "This flower is red.", category: "colors", difficulty: "beginner" },
  { id: "mr-w-5", word: "आई", transliteration: "aai", meaning: "mother", exampleSentence: "माझी आई स्वयंपाक करते.", exampleSentenceTranslit: "Maajhi aai swayampaak karte.", exampleSentenceMeaning: "My mother is cooking.", category: "family", difficulty: "beginner" },
  { id: "mr-w-6", word: "बाबा", transliteration: "baba", meaning: "father", exampleSentence: "माझे बाबा काम करतात.", exampleSentenceTranslit: "Maajhe baba kaam kartaat.", exampleSentenceMeaning: "My father is working.", category: "family", difficulty: "beginner" },
  { id: "mr-w-7", word: "शाळा", transliteration: "shaada", meaning: "school", exampleSentence: "मी शाळेत जातो.", exampleSentenceTranslit: "Mi shaadet jaato.", exampleSentenceMeaning: "I go to school.", category: "everyday", difficulty: "intermediate" },
  { id: "mr-w-8", word: "धन्यवाद", transliteration: "dhanyavaad", meaning: "thank you", exampleSentence: "खूप खूप धन्यवाद.", exampleSentenceTranslit: "Khoop khoop dhanyavaad.", exampleSentenceMeaning: "Thank you very much.", category: "phrases", difficulty: "beginner" },
];

export const marathiVerbs: Verb[] = [
  { id: "mr-v1", infinitive: "खाणे", infinitiveTranslit: "khaane", meaning: "to eat", difficulty: "beginner",
    forms: { present: "मी खातो.", presentTranslit: "Mi khaato.", past: "मी खाल्ले.", pastTranslit: "Mi khaalle.", future: "मी खाईन.", futureTranslit: "Mi khaain." } },
  { id: "mr-v2", infinitive: "पिणे", infinitiveTranslit: "pine", meaning: "to drink", difficulty: "beginner",
    forms: { present: "मी पाणी पितो.", presentTranslit: "Mi paani pito.", past: "मी पाणी प्यालो.", pastTranslit: "Mi paani pyaalo.", future: "मी पाणी पिईन.", futureTranslit: "Mi paani piin." } },
  { id: "mr-v3", infinitive: "जाणे", infinitiveTranslit: "jaane", meaning: "to go", difficulty: "beginner",
    forms: { present: "मी जातो.", presentTranslit: "Mi jaato.", past: "मी गेलो.", pastTranslit: "Mi gelo.", future: "मी जाईन.", futureTranslit: "Mi jaain." } },
];

export const marathiGrammar: GrammarTopic[] = [
  {
    id: "mr-g1",
    title: "मराठी वर्णमाला",
    explanation: "मराठी वर्णमाला देवनागरी लिपीत लिहिली जाते. यात १२ स्वर आणि ३४ व्यंजने आहेत. मराठीत ळ हे वैशिष्ट्यपूर्ण व्यंजन आहे जे हिंदीत नाही.",
    difficulty: "beginner",
    examples: [
      { text: "अ, आ, इ, ई, उ, ऊ", meaning: "The first six vowels" },
      { text: "क, ख, ग, घ", meaning: "The first four consonants" },
    ],
  },
  {
    id: "mr-g2",
    title: "Sentence order: Subject-Object-Verb",
    explanation: "Marathi, like Gujarati and Hindi, places the verb at the end of the sentence.",
    difficulty: "intermediate",
    examples: [
      { text: "मी पाणी पितो.", translit: "Mi paani pito.", meaning: "I water drink (= I drink water)." },
    ],
  },
];

export const marathiLessons: Lesson[] = [
  { id: "mr-l1", languageCode: "marathi", category: "vowels", title: "स्वर — Vowels", description: "Learn the Marathi vowels.", icon: "🔤", level: 1, difficulty: "beginner", xpReward: 50, letters: marathiVowels, order: 1 },
  { id: "mr-l2", languageCode: "marathi", category: "consonants", title: "व्यंजन — Consonants", description: "Master Marathi consonants including the unique ळ.", icon: "🔠", level: 1, difficulty: "beginner", xpReward: 50, letters: marathiConsonants, order: 2 },
  { id: "mr-l3", languageCode: "marathi", category: "barakhadi", title: "बाराखडी — Barakhadi", description: "Combine consonants with vowel signs.", icon: "🔊", level: 2, difficulty: "beginner", xpReward: 60, order: 3 },
  { id: "mr-l4", languageCode: "marathi", category: "words", title: "शब्द — Everyday Words", description: "Learn common Marathi vocabulary.", icon: "📝", level: 3, difficulty: "beginner", xpReward: 60, vocabulary: marathiVocabulary, order: 4 },
  { id: "mr-l5", languageCode: "marathi", category: "verbs", title: "क्रियापद — Verbs", description: "Learn key verbs in present, past and future.", icon: "🏃", level: 4, difficulty: "intermediate", xpReward: 70, verbs: marathiVerbs, order: 5 },
  { id: "mr-l6", languageCode: "marathi", category: "grammar", title: "व्याकरण — Grammar Basics", description: "Sentence structure and grammar rules.", icon: "📚", level: 5, difficulty: "intermediate", xpReward: 70, grammar: marathiGrammar, order: 6 },
  { id: "mr-l7", languageCode: "marathi", category: "listening", title: "ऐका — Listening", description: "Practice listening comprehension.", icon: "🎧", level: 6, difficulty: "intermediate", xpReward: 60, order: 7 },
  { id: "mr-l8", languageCode: "marathi", category: "writing", title: "लिहा — Writing Practice", description: "Trace and write Marathi letters.", icon: "✍️", level: 2, difficulty: "beginner", xpReward: 50, order: 8 },
  { id: "mr-l9", languageCode: "marathi", category: "quiz", title: "प्रश्नमंजुषा — Quiz Time", description: "Test what you've learned so far.", icon: "🧠", level: 7, difficulty: "intermediate", xpReward: 80, order: 9 },
];
