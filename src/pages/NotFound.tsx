import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="text-5xl mb-4">🧭</p>
      <h1 className="font-display font-extrabold text-3xl mb-2">Page not found</h1>
      <p className="opacity-60 mb-6">This lesson trail doesn't exist yet.</p>
      <Link to="/" className="px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]" style={{ background: "var(--color-accent)" }}>
        Back to home
      </Link>
    </div>
  );
}
