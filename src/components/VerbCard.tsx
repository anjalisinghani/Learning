import type { Verb } from "../types";
import AudioButton from "./AudioButton";

export default function VerbCard({ verb, speechLang }: { verb: Verb; speechLang: string }) {
  const tenses: { label: string; text: string; translit?: string }[] = [
    { label: "Present", text: verb.forms.present, translit: verb.forms.presentTranslit },
    { label: "Past", text: verb.forms.past, translit: verb.forms.pastTranslit },
    { label: "Future", text: verb.forms.future, translit: verb.forms.futureTranslit },
  ];

  return (
    <div className="glass rounded-2xl p-5 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="font-display font-bold text-xl">{verb.infinitive}</p>
          <p className="text-sm opacity-60">{verb.meaning}</p>
        </div>
        <AudioButton text={verb.infinitive} lang={speechLang} />
      </div>
      <div className="grid gap-2">
        {tenses.map((t) => (
          <div key={t.label} className="flex items-center justify-between bg-white/5 rounded-xl px-3 py-2">
            <span className="text-xs font-bold uppercase tracking-wide opacity-50 w-16 shrink-0">{t.label}</span>
            <div className="flex-1 text-right">
              <p className="text-sm font-medium">{t.text}</p>
              {t.translit && <p className="text-xs opacity-50 italic">{t.translit}</p>}
            </div>
            <AudioButton text={t.text} lang={speechLang} size="sm" />
          </div>
        ))}
      </div>
    </div>
  );
}
