import type { LetterItem } from "../types";
import AudioButton from "./AudioButton";

export default function LetterCard({ letter, speechLang }: { letter: LetterItem; speechLang: string }) {
  return (
    <div className="glass rounded-2xl p-5 flex flex-col items-center text-center gap-2 hover:-translate-y-1 transition-transform">
      <p className="font-display font-extrabold text-5xl leading-none">{letter.char}</p>
      <p className="text-sm font-semibold text-[var(--color-secondary)]">"{letter.pronunciation}"</p>
      <AudioButton text={letter.char} lang={speechLang} />
      <div className="pt-2 border-t border-white/10 w-full text-xs opacity-80 space-y-0.5">
        <p className="font-semibold">{letter.exampleWord}</p>
        <p className="opacity-60 italic">{letter.exampleWordTranslit}</p>
        <p>{letter.exampleMeaning}</p>
      </div>
    </div>
  );
}
