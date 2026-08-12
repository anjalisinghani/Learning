import { Volume2 } from "lucide-react";
import { speak, isSpeechSupported } from "../utils/audio";
import { useProgress } from "../hooks/useProgress";

export default function AudioButton({ text, lang, size = "md" }: { text: string; lang: string; size?: "sm" | "md" | "lg" }) {
  const { state } = useProgress();
  const supported = isSpeechSupported();
  const sizes = { sm: "w-8 h-8", md: "w-11 h-11", lg: "w-14 h-14" };
  const iconSizes = { sm: 14, md: 18, lg: 22 };

  return (
    <button
      type="button"
      aria-label={supported ? `Listen to ${text}` : "Audio not supported in this browser"}
      disabled={!supported}
      onClick={(e) => {
        e.stopPropagation();
        speak(text, lang, state.settings.voiceSpeed);
      }}
      className={`${sizes[size]} shrink-0 rounded-full flex items-center justify-center bg-[color-mix(in_srgb,var(--color-primary)_18%,transparent)] text-[var(--color-primary-light)] hover:bg-[color-mix(in_srgb,var(--color-primary)_30%,transparent)] active:scale-90 transition disabled:opacity-30 disabled:cursor-not-allowed focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--color-primary)]`}
      title={supported ? "Listen" : "Audio isn't available in this browser."}
    >
      <Volume2 size={iconSizes[size]} />
    </button>
  );
}
