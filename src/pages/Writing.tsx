import { Navigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getAllLetters } from "../data";
import { XP_REWARDS } from "../utils/xp";
import AudioButton from "../components/AudioButton";

export default function Writing() {
  const { state, addXp } = useProgress();
  const code = state.settings.selectedLanguage;
  const letters = code ? getAllLetters(code) : [];
  const [index, setIndex] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const drawing = useRef(false);

  useEffect(() => {
    clearCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;

  if (letters.length === 0) {
    return (
      <div className="glass rounded-2xl p-10 text-center max-w-md mx-auto mt-10">
        <p className="text-3xl mb-2">✍️</p>
        <p className="font-semibold">No letters to trace yet.</p>
      </div>
    );
  }

  const letter = letters[index % letters.length];

  function getCtx() {
    const canvas = canvasRef.current;
    if (!canvas) return null;
    return canvas.getContext("2d");
  }

  function clearCanvas() {
    const canvas = canvasRef.current;
    const ctx = getCtx();
    if (!canvas || !ctx) return;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function pointerPos(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();
    return { x: ((e.clientX - rect.left) / rect.width) * canvas.width, y: ((e.clientY - rect.top) / rect.height) * canvas.height };
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    drawing.current = true;
    const ctx = getCtx();
    if (!ctx) return;
    const { x, y } = pointerPos(e);
    ctx.beginPath();
    ctx.moveTo(x, y);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!drawing.current) return;
    const ctx = getCtx();
    if (!ctx) return;
    const { x, y } = pointerPos(e);
    ctx.lineWidth = 8;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#8b7cf6";
    ctx.lineTo(x, y);
    ctx.stroke();
  }

  function handlePointerUp() {
    drawing.current = false;
  }

  function handleCheck() {
    addXp(code!, XP_REWARDS.writing);
    handleNext();
  }

  function handleNext() {
    setIndex((i) => (i + 1) % letters.length);
  }

  return (
    <div className="max-w-md mx-auto text-center">
      <h1 className="font-display font-extrabold text-3xl mb-1">Writing Practice</h1>
      <p className="opacity-60 mb-8">
        {language.flagEmoji} {language.name} · trace the letter
      </p>

      <div className="glass rounded-3xl p-8">
        <div className="flex items-center justify-center gap-3 mb-4">
          <p className="font-display font-extrabold text-6xl opacity-20 select-none">{letter.char}</p>
          <AudioButton text={letter.char} lang={language.speechLang} />
        </div>
        <p className="text-sm font-semibold opacity-60 mb-4">Trace the letter above</p>

        <canvas
          ref={canvasRef}
          width={280}
          height={280}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          className="mx-auto rounded-2xl bg-white/5 border-2 border-dashed border-white/10 touch-none"
          style={{ width: "100%", maxWidth: 280, aspectRatio: "1/1" }}
        />

        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={clearCanvas} className="px-5 py-2.5 rounded-full glass text-sm font-semibold hover:bg-white/10">
            Clear
          </button>
          <button
            onClick={handleCheck}
            className="px-5 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
            style={{ background: "var(--color-accent)" }}
          >
            Check ✓
          </button>
          <button onClick={handleNext} className="px-5 py-2.5 rounded-full glass text-sm font-semibold hover:bg-white/10">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
