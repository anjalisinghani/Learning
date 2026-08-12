import { Link, useNavigate } from "react-router-dom";
import { Search, Menu } from "lucide-react";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { XPBadge, StreakBadge } from "./Badges";
import { LANGUAGES } from "../data";

export default function Header({ onMenuClick }: { onMenuClick?: () => void }) {
  const { state } = useProgress();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const lang = state.settings.selectedLanguage;

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`);
  }

  return (
    <header className="sticky top-0 z-40 glass border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          {onMenuClick && (
            <button onClick={onMenuClick} className="md:hidden p-2 -ml-2 rounded-lg hover:bg-white/10" aria-label="Open menu">
              <Menu size={20} />
            </button>
          )}
          <Link to="/" className="flex items-center gap-2 shrink-0">
            <span className="text-2xl">🌐</span>
            <span className="font-display font-extrabold text-lg tracking-tight">LingoFun</span>
          </Link>
        </div>

        <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-sm relative">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 opacity-50" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search words across languages..."
            className="w-full pl-9 pr-3 py-2 rounded-full bg-white/5 border border-white/10 text-sm focus:outline-none focus:border-[var(--color-primary)] transition"
          />
        </form>

        <div className="flex items-center gap-2 md:gap-3">
          {lang && (
            <Link
              to="/languages"
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full glass text-sm font-semibold hover:bg-white/10 transition"
            >
              <span>{LANGUAGES.find((l) => l.code === lang)?.flagEmoji}</span>
              <span>{LANGUAGES.find((l) => l.code === lang)?.name}</span>
            </Link>
          )}
          <XPBadge xp={state.totalXp} />
          <StreakBadge streak={state.streak.current} />
        </div>
      </div>
    </header>
  );
}
