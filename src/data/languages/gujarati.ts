import type { LetterItem, VocabularyItem, Verb, GrammarTopic, Lesson, BarakhadiRow } from "../../types";

export const gujaratiVowels: LetterItem[] = [
  { id: "gu-v-1", char: "અ", transliteration: "a", pronunciation: "a (as in about)", exampleWord: "અનાજ", exampleWordTranslit: "anaaj", exampleMeaning: "grain", type: "vowel" },
  { id: "gu-v-2", char: "આ", transliteration: "aa", pronunciation: "aa (as in father)", exampleWord: "આમ", exampleWordTranslit: "aam", exampleMeaning: "mango", type: "vowel" },
  { id: "gu-v-3", char: "ઇ", transliteration: "i", pronunciation: "i (as in sit)", exampleWord: "ઇંડું", exampleWordTranslit: "indu", exampleMeaning: "egg", type: "vowel" },
  { id: "gu-v-4", char: "ઈ", transliteration: "ee", pronunciation: "ee (as in see)", exampleWord: "ઈંટ", exampleWordTranslit: "eent", exampleMeaning: "brick", type: "vowel" },
  { id: "gu-v-5", char: "ઉ", transliteration: "u", pronunciation: "u (as in put)", exampleWord: "ઉંદર", exampleWordTranslit: "undar", exampleMeaning: "mouse", type: "vowel" },
  { id: "gu-v-6", char: "ઊ", transliteration: "oo", pronunciation: "oo (as in food)", exampleWord: "ઊંટ", exampleWordTranslit: "unt", exampleMeaning: "camel", type: "vowel" },
  { id: "gu-v-7", char: "ઋ", transliteration: "ri", pronunciation: "ri", exampleWord: "ઋતુ", exampleWordTranslit: "rutu", exampleMeaning: "season", type: "vowel" },
  { id: "gu-v-8", char: "એ", transliteration: "e", pronunciation: "e (as in bed)", exampleWord: "એક", exampleWordTranslit: "ek", exampleMeaning: "one", type: "vowel" },
  { id: "gu-v-9", char: "ઐ", transliteration: "ai", pronunciation: "ai (as in aisle)", exampleWord: "ઐરાવત", exampleWordTranslit: "airaavat", exampleMeaning: "mythical elephant", type: "vowel" },
  { id: "gu-v-10", char: "ઓ", transliteration: "o", pronunciation: "o (as in go)", exampleWord: "ઓરડો", exampleWordTranslit: "orado", exampleMeaning: "room", type: "vowel" },
  { id: "gu-v-11", char: "ઔ", transliteration: "au", pronunciation: "au (as in cow)", exampleWord: "ઔષધ", exampleWordTranslit: "aushadh", exampleMeaning: "medicine", type: "vowel" },
  { id: "gu-v-12", char: "અં", transliteration: "am", pronunciation: "am (nasal)", exampleWord: "કંઈ", exampleWordTranslit: "kai", exampleMeaning: "something", type: "vowel" },
  { id: "gu-v-13", char: "અઃ", transliteration: "ah", pronunciation: "ah (aspirated)", exampleWord: "દુઃખ", exampleWordTranslit: "dukh", exampleMeaning: "sorrow", type: "vowel" },
];

export const gujaratiConsonants: LetterItem[] = [
  { id: "gu-c-1", char: "ક", transliteration: "ka", pronunciation: "ka", exampleWord: "કમળ", exampleWordTranslit: "kamal", exampleMeaning: "lotus", type: "consonant" },
  { id: "gu-c-2", char: "ખ", transliteration: "kha", pronunciation: "kha", exampleWord: "ખાટલો", exampleWordTranslit: "khaatlo", exampleMeaning: "cot", type: "consonant" },
  { id: "gu-c-3", char: "ગ", transliteration: "ga", pronunciation: "ga", exampleWord: "ગાય", exampleWordTranslit: "gaay", exampleMeaning: "cow", type: "consonant" },
  { id: "gu-c-4", char: "ઘ", transliteration: "gha", pronunciation: "gha", exampleWord: "ઘર", exampleWordTranslit: "ghar", exampleMeaning: "house", type: "consonant" },
  { id: "gu-c-5", char: "ઙ", transliteration: "nga", pronunciation: "nga", exampleWord: "વ્યંગ", exampleWordTranslit: "vyang", exampleMeaning: "satire", type: "consonant" },
  { id: "gu-c-6", char: "ચ", transliteration: "cha", pronunciation: "cha", exampleWord: "ચકલી", exampleWordTranslit: "chakli", exampleMeaning: "sparrow", type: "consonant" },
  { id: "gu-c-7", char: "છ", transliteration: "chha", pronunciation: "chha", exampleWord: "છત્રી", exampleWordTranslit: "chhatri", exampleMeaning: "umbrella", type: "consonant" },
  { id: "gu-c-8", char: "જ", transliteration: "ja", pronunciation: "ja", exampleWord: "જંગલ", exampleWordTranslit: "jangal", exampleMeaning: "forest", type: "consonant" },
  { id: "gu-c-9", char: "ઝ", transliteration: "jha", pronunciation: "jha", exampleWord: "ઝાડ", exampleWordTranslit: "jhaad", exampleMeaning: "tree", type: "consonant" },
  { id: "gu-c-10", char: "ટ", transliteration: "ta", pronunciation: "ta (retroflex)", exampleWord: "ટામેટું", exampleWordTranslit: "taametu", exampleMeaning: "tomato", type: "consonant" },
  { id: "gu-c-11", char: "ઠ", transliteration: "tha", pronunciation: "tha (retroflex)", exampleWord: "ઠંડી", exampleWordTranslit: "thandi", exampleMeaning: "cold", type: "consonant" },
  { id: "gu-c-12", char: "ડ", transliteration: "da", pronunciation: "da (retroflex)", exampleWord: "ડુંગળી", exampleWordTranslit: "dungadi", exampleMeaning: "onion", type: "consonant" },
  { id: "gu-c-13", char: "ત", transliteration: "ta", pronunciation: "ta (dental)", exampleWord: "તારો", exampleWordTranslit: "taaro", exampleMeaning: "star", type: "consonant" },
  { id: "gu-c-14", char: "થ", transliteration: "tha", pronunciation: "tha (dental)", exampleWord: "થાળી", exampleWordTranslit: "thaali", exampleMeaning: "plate", type: "consonant" },
  { id: "gu-c-15", char: "દ", transliteration: "da", pronunciation: "da (dental)", exampleWord: "દરવાજો", exampleWordTranslit: "darvaajo", exampleMeaning: "door", type: "consonant" },
  { id: "gu-c-16", char: "ધ", transliteration: "dha", pronunciation: "dha (dental)", exampleWord: "ધુમાડો", exampleWordTranslit: "dhumaado", exampleMeaning: "smoke", type: "consonant" },
  { id: "gu-c-17", char: "ન", transliteration: "na", pronunciation: "na", exampleWord: "નદી", exampleWordTranslit: "nadi", exampleMeaning: "river", type: "consonant" },
  { id: "gu-c-18", char: "પ", transliteration: "pa", pronunciation: "pa", exampleWord: "પાણી", exampleWordTranslit: "paani", exampleMeaning: "water", type: "consonant" },
  { id: "gu-c-19", char: "ફ", transliteration: "fa", pronunciation: "fa", exampleWord: "ફૂલ", exampleWordTranslit: "phool", exampleMeaning: "flower", type: "consonant" },
  { id: "gu-c-20", char: "બ", transliteration: "ba", pronunciation: "ba", exampleWord: "બિલાડી", exampleWordTranslit: "bilaadi", exampleMeaning: "cat", type: "consonant" },
  { id: "gu-c-21", char: "ભ", transliteration: "bha", pronunciation: "bha", exampleWord: "ભાત", exampleWordTranslit: "bhaat", exampleMeaning: "rice", type: "consonant" },
  { id: "gu-c-22", char: "મ", transliteration: "ma", pronunciation: "ma", exampleWord: "મગર", exampleWordTranslit: "magar", exampleMeaning: "crocodile", type: "consonant" },
  { id: "gu-c-23", char: "ય", transliteration: "ya", pronunciation: "ya", exampleWord: "યાદ", exampleWordTranslit: "yaad", exampleMeaning: "memory", type: "consonant" },
  { id: "gu-c-24", char: "ર", transliteration: "ra", pronunciation: "ra", exampleWord: "રમત", exampleWordTranslit: "ramat", exampleMeaning: "game", type: "consonant" },
  { id: "gu-c-25", char: "લ", transliteration: "la", pronunciation: "la", exampleWord: "લાડુ", exampleWordTranslit: "laadu", exampleMeaning: "sweet ball", type: "consonant" },
  { id: "gu-c-26", char: "વ", transliteration: "va", pronunciation: "va", exampleWord: "વરસાદ", exampleWordTranslit: "varsaad", exampleMeaning: "rain", type: "consonant" },
  { id: "gu-c-27", char: "શ", transliteration: "sha", pronunciation: "sha", exampleWord: "શાળા", exampleWordTranslit: "shaada", exampleMeaning: "school", type: "consonant" },
  { id: "gu-c-28", char: "સ", transliteration: "sa", pronunciation: "sa", exampleWord: "સફરજન", exampleWordTranslit: "safarjan", exampleMeaning: "apple", type: "consonant" },
  { id: "gu-c-29", char: "હ", transliteration: "ha", pronunciation: "ha", exampleWord: "હાથી", exampleWordTranslit: "haathi", exampleMeaning: "elephant", type: "consonant" },
];

export const gujaratiBarakhadi: BarakhadiRow[] = [
  { baseConsonant: "ક", forms: [
    { char: "ક", transliteration: "ka" }, { char: "કા", transliteration: "kaa" }, { char: "કિ", transliteration: "ki" },
    { char: "કી", transliteration: "kee" }, { char: "કુ", transliteration: "ku" }, { char: "કૂ", transliteration: "koo" },
    { char: "કે", transliteration: "ke" }, { char: "કૈ", transliteration: "kai" }, { char: "કો", transliteration: "ko" },
    { char: "કૌ", transliteration: "kau" }, { char: "કં", transliteration: "kam" }, { char: "કઃ", transliteration: "kah" },
  ]},
  { baseConsonant: "ખ", forms: [
    { char: "ખ", transliteration: "kha" }, { char: "ખા", transliteration: "khaa" }, { char: "ખિ", transliteration: "khi" },
    { char: "ખી", transliteration: "khee" }, { char: "ખુ", transliteration: "khu" }, { char: "ખૂ", transliteration: "khoo" },
    { char: "ખે", transliteration: "khe" }, { char: "ખૈ", transliteration: "khai" }, { char: "ખો", transliteration: "kho" },
    { char: "ખૌ", transliteration: "khau" }, { char: "ખં", transliteration: "kham" }, { char: "ખઃ", transliteration: "khah" },
  ]},
  { baseConsonant: "ગ", forms: [
    { char: "ગ", transliteration: "ga" }, { char: "ગા", transliteration: "gaa" }, { char: "ગિ", transliteration: "gi" },
    { char: "ગી", transliteration: "gee" }, { char: "ગુ", transliteration: "gu" }, { char: "ગૂ", transliteration: "goo" },
    { char: "ગે", transliteration: "ge" }, { char: "ગૈ", transliteration: "gai" }, { char: "ગો", transliteration: "go" },
    { char: "ગૌ", transliteration: "gau" }, { char: "ગં", transliteration: "gam" }, { char: "ગઃ", transliteration: "gah" },
  ]},
  { baseConsonant: "મ", forms: [
    { char: "મ", transliteration: "ma" }, { char: "મા", transliteration: "maa" }, { char: "મિ", transliteration: "mi" },
    { char: "મી", transliteration: "mee" }, { char: "મુ", transliteration: "mu" }, { char: "મૂ", transliteration: "moo" },
    { char: "મે", transliteration: "me" }, { char: "મૈ", transliteration: "mai" }, { char: "મો", transliteration: "mo" },
    { char: "મૌ", transliteration: "mau" }, { char: "મં", transliteration: "mam" }, { char: "મઃ", transliteration: "mah" },
  ]},
];

export const gujaratiVocabulary: VocabularyItem[] = [
  { id: "gu-w-1", word: "પાણી", transliteration: "paani", meaning: "water", exampleSentence: "મને પાણી જોઈએ.", exampleSentenceTranslit: "Mane paani joiye.", exampleSentenceMeaning: "I want water.", category: "food", difficulty: "beginner" },
  { id: "gu-w-2", word: "ઘર", transliteration: "ghar", meaning: "house", exampleSentence: "આ મારું ઘર છે.", exampleSentenceTranslit: "Aa maru ghar chhe.", exampleSentenceMeaning: "This is my house.", category: "everyday", difficulty: "beginner" },
  { id: "gu-w-3", word: "એક", transliteration: "ek", meaning: "one", exampleSentence: "મારી પાસે એક પુસ્તક છે.", exampleSentenceTranslit: "Maari paase ek pustak chhe.", exampleSentenceMeaning: "I have one book.", category: "numbers", difficulty: "beginner" },
  { id: "gu-w-4", word: "બે", transliteration: "be", meaning: "two", exampleSentence: "મારે બે ભાઈ છે.", exampleSentenceTranslit: "Maare be bhai chhe.", exampleSentenceMeaning: "I have two brothers.", category: "numbers", difficulty: "beginner" },
  { id: "gu-w-5", word: "લાલ", transliteration: "laal", meaning: "red", exampleSentence: "આ ફૂલ લાલ છે.", exampleSentenceTranslit: "Aa phool laal chhe.", exampleSentenceMeaning: "This flower is red.", category: "colors", difficulty: "beginner" },
  { id: "gu-w-6", word: "વાદળી", transliteration: "vaadadi", meaning: "blue", exampleSentence: "આકાશ વાદળી છે.", exampleSentenceTranslit: "Aakaash vaadadi chhe.", exampleSentenceMeaning: "The sky is blue.", category: "colors", difficulty: "beginner" },
  { id: "gu-w-7", word: "મા", transliteration: "maa", meaning: "mother", exampleSentence: "મારી મા રસોઈ કરે છે.", exampleSentenceTranslit: "Maari maa rasoi kare chhe.", exampleSentenceMeaning: "My mother is cooking.", category: "family", difficulty: "beginner" },
  { id: "gu-w-8", word: "બાપ", transliteration: "baap", meaning: "father", exampleSentence: "મારો બાપ કામ કરે છે.", exampleSentenceTranslit: "Maaro baap kaam kare chhe.", exampleSentenceMeaning: "My father is working.", category: "family", difficulty: "beginner" },
  { id: "gu-w-9", word: "કૂતરો", transliteration: "kutro", meaning: "dog", exampleSentence: "કૂતરો ભસે છે.", exampleSentenceTranslit: "Kutro bhase chhe.", exampleSentenceMeaning: "The dog is barking.", category: "animals", difficulty: "beginner" },
  { id: "gu-w-10", word: "બિલાડી", transliteration: "bilaadi", meaning: "cat", exampleSentence: "બિલાડી દૂધ પીવે છે.", exampleSentenceTranslit: "Bilaadi doodh peeve chhe.", exampleSentenceMeaning: "The cat drinks milk.", category: "animals", difficulty: "beginner" },
  { id: "gu-w-11", word: "ચા", transliteration: "chaa", meaning: "tea", exampleSentence: "મને ચા જોઈએ.", exampleSentenceTranslit: "Mane chaa joiye.", exampleSentenceMeaning: "I want tea.", category: "food", difficulty: "beginner" },
  { id: "gu-w-12", word: "શાળા", transliteration: "shaada", meaning: "school", exampleSentence: "હું શાળાએ જાઉં છું.", exampleSentenceTranslit: "Hu shaadaay jaau chhu.", exampleSentenceMeaning: "I am going to school.", category: "everyday", difficulty: "intermediate" },
  { id: "gu-w-13", word: "મિત્ર", transliteration: "mitra", meaning: "friend", exampleSentence: "તે મારો મિત્ર છે.", exampleSentenceTranslit: "Te maaro mitra chhe.", exampleSentenceMeaning: "He is my friend.", category: "everyday", difficulty: "intermediate" },
  { id: "gu-w-14", word: "આજે", transliteration: "aaje", meaning: "today", exampleSentence: "આજે સરસ દિવસ છે.", exampleSentenceTranslit: "Aaje saras divas chhe.", exampleSentenceMeaning: "Today is a nice day.", category: "time", difficulty: "intermediate" },
  { id: "gu-w-15", word: "આભાર", transliteration: "aabhaar", meaning: "thank you", exampleSentence: "તમારો ખૂબ ખૂબ આભાર.", exampleSentenceTranslit: "Tamaaro khoob khoob aabhaar.", exampleSentenceMeaning: "Thank you very much.", category: "phrases", difficulty: "beginner" },
];

export const gujaratiVerbs: Verb[] = [
  { id: "gu-v1", infinitive: "ખાવું", infinitiveTranslit: "khaavu", meaning: "to eat", difficulty: "beginner",
    forms: { present: "હું ખાઉં છું.", presentTranslit: "Hu khaau chhu.", past: "મેં ખાધું.", pastTranslit: "Me khaadhu.", future: "હું ખાઈશ.", futureTranslit: "Hu khaaish." } },
  { id: "gu-v2", infinitive: "પીવું", infinitiveTranslit: "peevu", meaning: "to drink", difficulty: "beginner",
    forms: { present: "હું પાણી પીઉં છું.", presentTranslit: "Hu paani peeu chhu.", past: "મેં પાણી પીધું.", pastTranslit: "Me paani peedhu.", future: "હું પાણી પીશ.", futureTranslit: "Hu paani peesh." } },
  { id: "gu-v3", infinitive: "જવું", infinitiveTranslit: "javu", meaning: "to go", difficulty: "beginner",
    forms: { present: "હું જાઉં છું.", presentTranslit: "Hu jaau chhu.", past: "હું ગયો.", pastTranslit: "Hu gayo.", future: "હું જઈશ.", futureTranslit: "Hu jaish." } },
  { id: "gu-v4", infinitive: "આવવું", infinitiveTranslit: "aavavu", meaning: "to come", difficulty: "intermediate",
    forms: { present: "હું આવું છું.", presentTranslit: "Hu aavu chhu.", past: "હું આવ્યો.", pastTranslit: "Hu aavyo.", future: "હું આવીશ.", futureTranslit: "Hu aavish." } },
  { id: "gu-v5", infinitive: "કરવું", infinitiveTranslit: "karvu", meaning: "to do", difficulty: "intermediate",
    forms: { present: "હું કામ કરું છું.", presentTranslit: "Hu kaam karu chhu.", past: "મેં કામ કર્યું.", pastTranslit: "Me kaam karyu.", future: "હું કામ કરીશ.", futureTranslit: "Hu kaam karish." } },
];

export const gujaratiGrammar: GrammarTopic[] = [
  {
    id: "gu-g1",
    title: "ગુજરાતી મૂળાક્ષરો (કક્કો)",
    explanation: "ગુજરાતી મૂળાક્ષરો (કક્કો) માં મુખ્ય વ્યંજનો ક, ખ, ગ, ઘ અને ચ, છ, જ, ઝ આવે છે. ગુજરાતી ભાષામાં કુલ ૩૪ વ્યંજન અને ૧૩ સ્વર છે.",
    difficulty: "beginner",
    examples: [
      { text: "ક, ખ, ગ, ઘ, ઙ", meaning: "The first five consonants of the ka-varga" },
      { text: "અ, આ, ઇ, ઈ, ઉ, ઊ", meaning: "The first six vowels" },
    ],
  },
  {
    id: "gu-g2",
    title: "Sentence order: Subject-Object-Verb",
    explanation: "Gujarati sentences follow Subject-Object-Verb order, unlike English which uses Subject-Verb-Object. The verb always comes last.",
    difficulty: "intermediate",
    examples: [
      { text: "હું પાણી પીઉં છું.", translit: "Hu paani peeu chhu.", meaning: "I water drink (= I drink water)." },
      { text: "તે શાળાએ જાય છે.", translit: "Te shaadaay jaay chhe.", meaning: "He school goes (= He goes to school)." },
    ],
  },
];

export const gujaratiLessons: Lesson[] = [
  { id: "gu-l1", languageCode: "gujarati", category: "vowels", title: "સ્વર — Vowels", description: "Learn all 13 Gujarati vowels with pronunciation.", icon: "🔤", level: 1, difficulty: "beginner", xpReward: 50, letters: gujaratiVowels, order: 1 },
  { id: "gu-l2", languageCode: "gujarati", category: "consonants", title: "વ્યંજન — Consonants", description: "Master the 29 core Gujarati consonants.", icon: "🔠", level: 1, difficulty: "beginner", xpReward: 50, letters: gujaratiConsonants, order: 2 },
  { id: "gu-l3", languageCode: "gujarati", category: "barakhadi", title: "બારાખડી — Barakhadi", description: "Combine consonants with vowel signs.", icon: "🔊", level: 2, difficulty: "beginner", xpReward: 60, order: 3 },
  { id: "gu-l4", languageCode: "gujarati", category: "words", title: "શબ્દો — Everyday Words", description: "Learn common vocabulary for daily life.", icon: "📝", level: 3, difficulty: "beginner", xpReward: 60, vocabulary: gujaratiVocabulary, order: 4 },
  { id: "gu-l5", languageCode: "gujarati", category: "verbs", title: "ક્રિયાપદ — Verbs", description: "Learn key verbs in present, past and future.", icon: "🏃", level: 4, difficulty: "intermediate", xpReward: 70, verbs: gujaratiVerbs, order: 5 },
  { id: "gu-l6", languageCode: "gujarati", category: "grammar", title: "વ્યાકરણ — Grammar Basics", description: "Sentence structure and grammar rules.", icon: "📚", level: 5, difficulty: "intermediate", xpReward: 70, grammar: gujaratiGrammar, order: 6 },
  { id: "gu-l7", languageCode: "gujarati", category: "sentences", title: "વાક્યો — Sentence Building", description: "Build your own Gujarati sentences.", icon: "🗣", level: 4, difficulty: "intermediate", xpReward: 60, order: 7 },
  { id: "gu-l8", languageCode: "gujarati", category: "listening", title: "સાંભળો — Listening", description: "Practice listening comprehension.", icon: "🎧", level: 6, difficulty: "intermediate", xpReward: 60, order: 8 },
  { id: "gu-l9", languageCode: "gujarati", category: "writing", title: "લખો — Writing Practice", description: "Trace and write Gujarati letters.", icon: "✍️", level: 2, difficulty: "beginner", xpReward: 50, order: 9 },
  { id: "gu-l10", languageCode: "gujarati", category: "quiz", title: "ટેસ્ટ — Quiz Time", description: "Test what you've learned so far.", icon: "🧠", level: 7, difficulty: "intermediate", xpReward: 80, order: 10 },
];
