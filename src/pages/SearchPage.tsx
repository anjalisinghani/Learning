import { useSearchParams } from "react-router-dom";
import { useMemo, useState } from "react";
import { Search as SearchIcon } from "lucide-react";
import { LANGUAGES, getAllVocabulary } from "../data";
import AudioButton from "../components/AudioButton";

export default function SearchPage() {
  const [params, setParams] = useSearchParams();
  const [query, setQuery] = useState(params.get("q") || "");

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.trim().toLowerCase();
    return LANGUAGES.flatMap((lang) =>
      getAllVocabulary(lang.code)
        .filter((w) => w.word.toLowerCase().includes(q) || w.meaning.toLowerCase().includes(q) || w.transliteration.toLowerCase().includes(q))
        .map((w) => ({ ...w, lang }))
    );
  }, [query]);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setParams(query ? { q: query } : {});
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-display font-extrabold text-3xl mb-1">Search</h1>
      <p className="opacity-60 mb-6">Find words across all five languages.</p>

      <form onSubmit={handleSubmit} className="relative mb-8">
        <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search a word, e.g. પાણી or water..."
          className="w-full pl-12 pr-4 py-3.5 rounded-2xl glass focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition"
          autoFocus
        />
      </form>

      {query && results.length === 0 && (
        <div className="glass rounded-2xl p-8 text-center">
          <p className="text-3xl mb-2">🔍</p>
          <p className="font-semibold">No matches found.</p>
          <p className="text-sm opacity-60 mt-1">Try a different word or spelling.</p>
        </div>
      )}

      <div className="space-y-3">
        {results.map((r) => (
          <div key={`${r.lang.code}-${r.id}`} className="glass rounded-2xl p-5">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="text-sm">{r.lang.flagEmoji}</span>
                <span className="text-xs font-semibold opacity-50">{r.lang.name}</span>
              </div>
              <AudioButton text={r.word} lang={r.lang.speechLang} size="sm" />
            </div>
            <p className="font-display font-bold text-xl">{r.word}</p>
            <p className="text-xs opacity-50 italic mb-1">{r.transliteration}</p>
            <p className="text-sm text-[var(--color-secondary)] font-medium mb-2">{r.meaning}</p>
            <p className="text-xs opacity-70">{r.exampleSentence}</p>
            <p className="text-xs opacity-50">{r.exampleSentenceMeaning}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
