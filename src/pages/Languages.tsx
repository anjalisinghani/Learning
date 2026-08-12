import { LANGUAGES } from "../data";
import LanguageCard from "../components/LanguageCard";

export default function Languages() {
  return (
    <div>
      <h1 className="font-display font-extrabold text-3xl mb-1">Choose a language</h1>
      <p className="opacity-60 mb-8">Pick one to start, switch anytime from the header.</p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {LANGUAGES.map((l) => (
          <LanguageCard key={l.code} language={l} />
        ))}
      </div>
    </div>
  );
}
