import { NavLink } from "react-router-dom";
import { Home, BookOpen, Target, Type, Repeat, BookText, Headphones, PenTool, Trophy, BarChart3, Settings } from "lucide-react";

const items = [
  { to: "/dashboard", icon: Home, label: "Home" },
  { to: "/learn", icon: BookOpen, label: "Learn" },
  { to: "/practice", icon: Target, label: "Practice" },
  { to: "/vocabulary", icon: Type, label: "Vocabulary" },
  { to: "/verbs", icon: Repeat, label: "Verbs" },
  { to: "/grammar", icon: BookText, label: "Grammar" },
  { to: "/listening", icon: Headphones, label: "Listening" },
  { to: "/writing", icon: PenTool, label: "Writing" },
  { to: "/achievements", icon: Trophy, label: "Achievements" },
  { to: "/progress", icon: BarChart3, label: "Progress" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 border-r border-white/5 py-6 px-3 gap-1 sticky top-16 h-[calc(100vh-4rem)] overflow-y-auto no-scrollbar">
      {items.map(({ to, icon: Icon, label }) => (
        <NavLink
          key={to}
          to={to}
          className={({ isActive }) =>
            `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition ${
              isActive ? "bg-[var(--color-primary)]/20 text-[var(--color-primary-light)]" : "opacity-70 hover:opacity-100 hover:bg-white/5"
            }`
          }
        >
          <Icon size={18} />
          {label}
        </NavLink>
      ))}
    </aside>
  );
}
