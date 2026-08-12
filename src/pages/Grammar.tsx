import { Navigate } from "react-router-dom";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLessons } from "../data";
import AudioButton from "../components/AudioButton";

export default function Grammar() {
  const { state } = useProgress();
  const code = state.settings.selectedLanguage;
  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const grammar = getLessons(code).flatMap((l) => l.grammar || []);

  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">Grammar</h1>
      <p className="opacity-60 mb-6">
        {language.flagEmoji} {language.name} essentials
      </p>

      {grammar.length === 0 ? (
        <div className="glass rounded-2xl p-10 text-center">
          <p className="text-3xl mb-2">📚</p>
          <p className="font-semibold">No grammar topics yet for this language.</p>
        </div>
      ) : (
        <div className="space-y-4 max-w-3xl">
          {grammar.map((g) => (
            <div key={g.id} className="glass rounded-2xl p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-bold text-lg">{g.title}</h3>
                <span className="text-[10px] font-bold uppercase px-2 py-1 rounded-full glass opacity-70">{g.difficulty}</span>
              </div>
              <p className="opacity-80 text-sm leading-relaxed mb-4">{g.explanation}</p>
              <div className="space-y-2">
                {g.examples.map((ex, i) => (
                  <div key={i} className="bg-white/5 rounded-xl px-4 py-2.5 flex items-center justify-between gap-3">
                    <div>
                      <p className="font-medium">{ex.text}</p>
                      {ex.translit && <p className="text-xs opacity-50 italic">{ex.translit}</p>}
                      <p className="text-xs opacity-70">{ex.meaning}</p>
                    </div>
                    <AudioButton text={ex.text} lang={language.speechLang} size="sm" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
