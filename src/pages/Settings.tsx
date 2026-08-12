import { useRef, useState } from "react";
import { Sun, Moon, Download, Upload, Trash2 } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { LANGUAGES } from "../data";

export default function Settings() {
  const { state, updateSettings, exportProgress, importProgress, resetProgress } = useProgress();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [confirmReset, setConfirmReset] = useState(false);
  const [importMsg, setImportMsg] = useState<string | null>(null);

  async function handleImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const ok = await importProgress(file);
    setImportMsg(ok ? "Progress imported successfully." : "That file couldn't be read. Please choose a valid export.");
    e.target.value = "";
  }

  return (
    <div className="max-w-2xl">
      <h1 className="font-display font-extrabold text-3xl mb-8">Settings</h1>

      <SettingSection title="Language">
        <div className="flex flex-wrap gap-2">
          {LANGUAGES.map((l) => (
            <button
              key={l.code}
              onClick={() => updateSettings({ selectedLanguage: l.code })}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                state.settings.selectedLanguage === l.code ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
              }`}
            >
              {l.flagEmoji} {l.name}
            </button>
          ))}
        </div>
      </SettingSection>

      <SettingSection title="Theme">
        <div className="flex gap-2">
          <button
            onClick={() => updateSettings({ theme: "dark" })}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition ${
              state.settings.theme === "dark" ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
            }`}
          >
            <Moon size={15} /> Dark
          </button>
          <button
            onClick={() => updateSettings({ theme: "light" })}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition ${
              state.settings.theme === "light" ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
            }`}
          >
            <Sun size={15} /> Light
          </button>
        </div>
      </SettingSection>

      <SettingSection title="Daily goal">
        <div className="flex flex-wrap gap-2">
          {[5, 10, 15, 20, 30].map((m) => (
            <button
              key={m}
              onClick={() => updateSettings({ dailyGoalMinutes: m })}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                state.settings.dailyGoalMinutes === m ? "bg-[var(--color-primary)] text-white" : "glass hover:bg-white/10"
              }`}
            >
              {m} min
            </button>
          ))}
        </div>
      </SettingSection>

      <SettingSection title="Voice speed">
        <input
          type="range"
          min={0.5}
          max={1.5}
          step={0.1}
          value={state.settings.voiceSpeed}
          onChange={(e) => updateSettings({ voiceSpeed: Number(e.target.value) })}
          className="w-full accent-[var(--color-primary)]"
        />
        <p className="text-xs opacity-60 mt-1">{state.settings.voiceSpeed.toFixed(1)}x</p>
      </SettingSection>

      <SettingSection title="Sound & animation">
        <Toggle
          label="Sound effects"
          checked={state.settings.soundEffects}
          onChange={(v) => updateSettings({ soundEffects: v })}
        />
        <Toggle
          label="Animations"
          checked={state.settings.animationsEnabled}
          onChange={(v) => updateSettings({ animationsEnabled: v })}
        />
      </SettingSection>

      <SettingSection title="Backup your progress">
        <p className="text-xs opacity-60 mb-3">Everything is stored only in this browser. Export a backup to keep it safe, or move it to another device.</p>
        <div className="flex flex-wrap gap-2">
          <button onClick={exportProgress} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold hover:bg-white/10">
            <Download size={15} /> Export My Progress
          </button>
          <button
            onClick={() => fileInputRef.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-semibold hover:bg-white/10"
          >
            <Upload size={15} /> Import Progress
          </button>
          <input ref={fileInputRef} type="file" accept="application/json" className="hidden" onChange={handleImport} />
        </div>
        {importMsg && <p className="text-xs mt-2 opacity-70">{importMsg}</p>}
      </SettingSection>

      <SettingSection title="Danger zone">
        {!confirmReset ? (
          <button
            onClick={() => setConfirmReset(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--color-danger)]/15 text-[var(--color-danger)] text-sm font-semibold hover:bg-[var(--color-danger)]/25 transition"
          >
            <Trash2 size={15} /> Reset All Progress
          </button>
        ) : (
          <div className="glass rounded-xl p-4">
            <p className="text-sm font-semibold mb-3">This will permanently remove your local learning progress from this browser.</p>
            <div className="flex gap-2">
              <button onClick={() => setConfirmReset(false)} className="px-4 py-2 rounded-full glass text-sm font-semibold hover:bg-white/10">
                Cancel
              </button>
              <button
                onClick={() => {
                  resetProgress();
                  setConfirmReset(false);
                }}
                className="px-4 py-2 rounded-full bg-[var(--color-danger)] text-white text-sm font-semibold"
              >
                Reset Progress
              </button>
            </div>
          </div>
        )}
      </SettingSection>
    </div>
  );
}

function SettingSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-8">
      <h2 className="font-display font-bold text-sm uppercase tracking-wide opacity-50 mb-3">{title}</h2>
      {children}
    </div>
  );
}

function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button onClick={() => onChange(!checked)} className="flex items-center justify-between w-full py-2">
      <span className="text-sm font-medium">{label}</span>
      <span className={`w-11 h-6 rounded-full relative transition ${checked ? "bg-[var(--color-primary)]" : "bg-white/15"}`}>
        <span className={`absolute top-0.5 w-5 h-5 rounded-full bg-white transition-all ${checked ? "left-[22px]" : "left-0.5"}`} />
      </span>
    </button>
  );
}
