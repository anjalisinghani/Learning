import { useState } from "react";
import { useParams, Navigate, Link, useNavigate } from "react-router-dom";
import { PartyPopper, ArrowLeft } from "lucide-react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLesson, getLessons, buildQuizForLesson, getBarakhadi } from "../data";
import LetterCard from "../components/LetterCard";
import VocabularyCard from "../components/VocabularyCard";
import VerbCard from "../components/VerbCard";
import QuizRunner from "../components/QuizRunner";
import AudioButton from "../components/AudioButton";

export default function LessonDetail() {
  const { lessonId } = useParams();
  const { state, completeLesson, bumpDailyMinutes } = useProgress();
  const navigate = useNavigate();
  const code = state.settings.selectedLanguage;
  const [showQuiz, setShowQuiz] = useState(false);
  const [finished, setFinished] = useState(false);
  const [lastScore, setLastScore] = useState<number | null>(null);

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const lesson = lessonId ? getLesson(code, lessonId) : undefined;
  if (!lesson) return <Navigate to="/learn" replace />;

  const lessons = getLessons(code);
  const idx = lessons.findIndex((l) => l.id === lesson.id);
  const nextLesson = lessons[idx + 1];
  const quizQuestions = buildQuizForLesson(lesson);
  const barakhadi = lesson.category === "barakhadi" ? getBarakhadi(code) : [];
  const alreadyDone = state.languageProgress[code].completedLessons.includes(lesson.id);

  function handleQuizFinish(percent: number) {
    setLastScore(percent);
    setFinished(true);
    completeLesson(code!, lesson!.id, lesson!.xpReward, percent);
    bumpDailyMinutes(3);
  }

  function handleMarkComplete() {
    setFinished(true);
    completeLesson(code!, lesson!.id, lesson!.xpReward);
    bumpDailyMinutes(3);
  }

  return (
    <div className="max-w-3xl mx-auto">
      <button onClick={() => navigate("/learn")} className="flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 mb-4 transition">
        <ArrowLeft size={16} /> Back to learning path
      </button>

      <div className="flex items-start gap-4 mb-8">
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: `${language.accent}33` }}>
          {lesson.icon}
        </div>
        <div>
          <h1 className="font-display font-extrabold text-2xl md:text-3xl">{lesson.title}</h1>
          <p className="opacity-60 text-sm mt-0.5">{lesson.description}</p>
        </div>
      </div>

      {finished && (
        <div className="glass rounded-2xl p-6 mb-8 text-center border border-[var(--color-success)]/30">
          <PartyPopper className="mx-auto mb-2 text-[var(--color-success)]" size={28} />
          <p className="font-display font-bold text-xl">
            {lastScore !== null ? `Quiz complete — ${lastScore}%!` : "Lesson complete!"}
          </p>
          <p className="text-sm opacity-60 mt-1">+{lesson.xpReward} XP earned</p>
          {nextLesson ? (
            <Link
              to={`/learn/${nextLesson.id}`}
              onClick={() => {
                setFinished(false);
                setShowQuiz(false);
                setLastScore(null);
              }}
              className="inline-block mt-4 px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
              style={{ background: "var(--color-accent)" }}
            >
              Next Lesson →
            </Link>
          ) : (
            <Link to="/learn" className="inline-block mt-4 px-6 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]" style={{ background: "var(--color-accent)" }}>
              Back to Path
            </Link>
          )}
        </div>
      )}

      {!finished && showQuiz && <QuizRunner questions={quizQuestions} speechLang={language.speechLang} onFinish={handleQuizFinish} />}

      {!finished && !showQuiz && (
        <div className="space-y-8">
          {lesson.letters && lesson.letters.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-lg mb-3">Tap each card to hear it</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {lesson.letters.map((l) => (
                  <LetterCard key={l.id} letter={l} speechLang={language.speechLang} />
                ))}
              </div>
            </section>
          )}

          {barakhadi.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-lg mb-3">{language.barakhadiLabel}</h2>
              <div className="space-y-4">
                {barakhadi.map((row) => (
                  <div key={row.baseConsonant} className="glass rounded-2xl p-4">
                    <p className="text-xs font-bold uppercase opacity-50 mb-2">Base: {row.baseConsonant}</p>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {row.forms.map((f) => (
                        <button
                          key={f.char}
                          className="flex flex-col items-center gap-1 bg-white/5 rounded-xl py-3 hover:bg-white/10 transition"
                          onClick={(e) => e.currentTarget.querySelector("button")?.click()}
                        >
                          <span className="font-display font-bold text-xl">{f.char}</span>
                          <span className="text-[10px] opacity-50">{f.transliteration}</span>
                          <AudioButton text={f.char} lang={language.speechLang} size="sm" />
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {lesson.vocabulary && lesson.vocabulary.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-lg mb-3">Vocabulary</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {lesson.vocabulary.map((v) => (
                  <VocabularyCard key={v.id} item={v} languageCode={code} speechLang={language.speechLang} />
                ))}
              </div>
            </section>
          )}

          {lesson.verbs && lesson.verbs.length > 0 && (
            <section>
              <h2 className="font-display font-bold text-lg mb-3">Verbs</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {lesson.verbs.map((v) => (
                  <VerbCard key={v.id} verb={v} speechLang={language.speechLang} />
                ))}
              </div>
            </section>
          )}

          {lesson.grammar && lesson.grammar.length > 0 && (
            <section className="space-y-4">
              <h2 className="font-display font-bold text-lg">Grammar</h2>
              {lesson.grammar.map((g) => (
                <div key={g.id} className="glass rounded-2xl p-5">
                  <p className="font-display font-bold text-lg mb-2">{g.title}</p>
                  <p className="text-sm opacity-80 leading-relaxed mb-3">{g.explanation}</p>
                  <div className="space-y-2">
                    {g.examples.map((ex, i) => (
                      <div key={i} className="bg-white/5 rounded-xl px-3 py-2 text-sm">
                        <p className="font-medium">{ex.text}</p>
                        {ex.translit && <p className="opacity-50 italic text-xs">{ex.translit}</p>}
                        <p className="opacity-70 text-xs">{ex.meaning}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </section>
          )}

          {(lesson.category === "sentences" || lesson.category === "listening" || lesson.category === "writing") && (
            <section className="glass rounded-2xl p-6 text-center">
              <p className="text-3xl mb-2">{lesson.icon}</p>
              <p className="font-semibold mb-1">
                {lesson.category === "sentences" && "Practice building sentences in the Practice tab."}
                {lesson.category === "listening" && "Listen to the audio and test your ear in the quiz below."}
                {lesson.category === "writing" && "Head to the Writing page to trace these letters by hand."}
              </p>
              {lesson.category === "writing" && (
                <Link to="/writing" className="inline-block mt-3 px-5 py-2 rounded-full text-sm font-semibold glass hover:bg-white/10 transition">
                  Open Writing Practice
                </Link>
              )}
            </section>
          )}

          <div className="flex flex-col sm:flex-row items-center gap-3 pt-2">
            {quizQuestions.length > 0 ? (
              <button
                onClick={() => setShowQuiz(true)}
                className="w-full sm:w-auto px-8 py-3 rounded-full font-display font-bold text-[var(--color-ink)]"
                style={{ background: "var(--color-accent)" }}
              >
                {alreadyDone ? "Retake Quiz" : "Take the Quiz"} 🧠
              </button>
            ) : (
              <button
                onClick={handleMarkComplete}
                className="w-full sm:w-auto px-8 py-3 rounded-full font-display font-bold text-[var(--color-ink)]"
                style={{ background: "var(--color-accent)" }}
              >
                Mark Complete ✓
              </button>
            )}
            {alreadyDone && <span className="text-xs opacity-50">✓ You've completed this lesson before</span>}
          </div>
        </div>
      )}
    </div>
  );
}
