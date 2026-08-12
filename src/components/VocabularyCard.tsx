import { useState } from "react";
import { Heart, Check } from "lucide-react";
import type { VocabularyItem, LanguageCode } from "../types";
import AudioButton from "./AudioButton";
import { useProgress } from "../hooks/useProgress";

export default function VocabularyCard({ item, languageCode, speechLang }: { item: VocabularyItem; languageCode: LanguageCode; speechLang: string }) {
  const { state, toggleFavoriteWord, markWordKnown } = useProgress();
  const progress = state.languageProgress[languageCode];
  const isFav = progress?.favoriteWords.includes(item.word);
  const isKnown = progress?.knownWords.includes(item.word);
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="glass rounded-2xl p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-display font-bold text-2xl">{item.word}</p>
          <p className="text-xs opacity-60 italic">{item.transliteration}</p>
        </div>
        <AudioButton text={item.word} lang={speechLang} />
      </div>

      <button onClick={() => setFlipped((f) => !f)} className="text-left">
        <p className="font-semibold text-[var(--color-secondary)]">{flipped ? item.meaning : "Tap to reveal meaning"}</p>
      </button>

      {flipped && (
        <div className="text-sm opacity-80 space-y-1 border-t border-white/10 pt-2">
          <p>{item.exampleSentence}</p>
          {item.exampleSentenceTranslit && <p className="italic opacity-60">{item.exampleSentenceTranslit}</p>}
          <p className="opacity-70">{item.exampleSentenceMeaning}</p>
        </div>
      )}

      <div className="flex items-center gap-2 pt-1">
        <button
          onClick={() => toggleFavoriteWord(languageCode, item.word)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition ${
            isFav ? "bg-[var(--color-danger)]/20 text-[var(--color-danger)]" : "bg-white/5 hover:bg-white/10"
          }`}
        >
          <Heart size={14} className={isFav ? "fill-current" : ""} /> Favorite
        </button>
        <button
          onClick={() => markWordKnown(languageCode, item.word)}
          className={`flex-1 flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-semibold transition ${
            isKnown ? "bg-[var(--color-success)]/20 text-[var(--color-success)]" : "bg-white/5 hover:bg-white/10"
          }`}
        >
          <Check size={14} /> Know it
        </button>
      </div>
    </div>
  );
}
