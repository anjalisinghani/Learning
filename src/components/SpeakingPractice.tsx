import { useState } from "react";
import { Mic } from "lucide-react";
import type { VocabularyItem, LanguageCode } from "../types";
import { isSpeechRecognitionSupported } from "../utils/audio";
import { useProgress } from "../hooks/useProgress";
import { XP_REWARDS } from "../utils/xp";
import AudioButton from "./AudioButton";

export default function SpeakingPractice({ word, languageCode, speechLang }: { word: VocabularyItem; languageCode: LanguageCode; speechLang: string }) {
  const { addXp } = useProgress();
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const supported = isSpeechRecognitionSupported();

  function handleSpeak() {
    if (!supported) return;
    const SR = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    const recognition = new SR();
    recognition.lang = speechLang;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    setListening(true);
    setTranscript(null);
    setScore(null);

    recognition.onresult = (event: any) => {
      const said = event.results[0][0].transcript as string;
      setTranscript(said);
      const target = word.exampleSentence.replace(/[^\p{L}\s]/gu, "").toLowerCase().trim();
      const heard = said.replace(/[^\p{L}\s]/gu, "").toLowerCase().trim();
      const targetWords = target.split(/\s+/);
      const heardWords = new Set(heard.split(/\s+/));
      const matches = targetWords.filter((w) => heardWords.has(w)).length;
      const accuracy = targetWords.length ? Math.round((matches / targetWords.length) * 100) : 0;
      setScore(accuracy);
      if (accuracy >= 50) addXp(languageCode, XP_REWARDS.speaking);
    };
    recognition.onerror = () => setListening(false);
    recognition.onend = () => setListening(false);
    recognition.start();
  }

  return (
    <div className="glass rounded-2xl p-6 text-center">
      <p className="text-xs font-bold uppercase tracking-wide opacity-50 mb-2">Read this sentence aloud</p>
      <div className="flex items-center justify-center gap-2 mb-1">
        <p className="font-display font-bold text-xl">{word.exampleSentence}</p>
        <AudioButton text={word.exampleSentence} lang={speechLang} size="sm" />
      </div>
      {word.exampleSentenceTranslit && <p className="text-xs opacity-50 italic mb-1">{word.exampleSentenceTranslit}</p>}
      <p className="text-xs opacity-60 mb-6">{word.exampleSentenceMeaning}</p>

      {supported ? (
        <button
          onClick={handleSpeak}
          disabled={listening}
          className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto transition ${
            listening ? "bg-[var(--color-danger)] animate-pulse" : "bg-[var(--color-primary)] hover:scale-105"
          }`}
        >
          <Mic size={24} />
        </button>
      ) : (
        <p className="text-sm opacity-60">Speech recognition isn't supported in this browser. Try Chrome on desktop or Android.</p>
      )}

      {transcript && (
        <div className="mt-5 text-sm">
          <p className="opacity-60">
            We heard: <span className="font-medium opacity-100">"{transcript}"</span>
          </p>
          {score !== null && (
            <p className="mt-2 font-semibold" style={{ color: score >= 50 ? "var(--color-success)" : "var(--color-danger)" }}>
              Pronunciation score: {score}% {score >= 50 ? "— nice work! 🎉" : "— keep practicing!"}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
