import type { Language } from "../../types";

export const LANGUAGES: Language[] = [
  {
    code: "gujarati",
    name: "Gujarati",
    nativeName: "ગુજરાતી",
    script: "ગુજરાતી લિપિ",
    flagEmoji: "🇮🇳",
    speechLang: "gu-IN",
    accent: "#FF7A45",
    description: "Learn the language of Gujarat — from the kakko to everyday conversation.",
    hasBarakhadi: true,
    barakhadiLabel: "બારાખડી",
  },
  {
    code: "english",
    name: "English",
    nativeName: "English",
    script: "Latin script",
    flagEmoji: "🇬🇧",
    speechLang: "en-US",
    accent: "#00C2FF",
    description: "Build strong English fluency from the alphabet to advanced idioms.",
    hasBarakhadi: false,
  },
  {
    code: "marathi",
    name: "Marathi",
    nativeName: "मराठी",
    script: "देवनागरी",
    flagEmoji: "🇮🇳",
    speechLang: "mr-IN",
    accent: "#22C55E",
    description: "Explore Marathi through its varnamala, barakhadi, and daily conversation.",
    hasBarakhadi: true,
    barakhadiLabel: "बाराखडी",
  },
  {
    code: "sindhi",
    name: "Sindhi",
    nativeName: "سنڌي",
    script: "Perso-Arabic Sindhi script",
    flagEmoji: "🌐",
    speechLang: "sd-PK",
    accent: "#FFD166",
    description: "Discover Sindhi script, sounds, and everyday phrases.",
    hasBarakhadi: false,
  },
  {
    code: "french",
    name: "French",
    nativeName: "Français",
    script: "Latin script (with accents)",
    flagEmoji: "🇫🇷",
    speechLang: "fr-FR",
    accent: "#6C5CE7",
    description: "Apprenez le français — from bonjour to full conversation.",
    hasBarakhadi: false,
  },
];

export function getLanguage(code: string): Language | undefined {
  return LANGUAGES.find((l) => l.code === code);
}
