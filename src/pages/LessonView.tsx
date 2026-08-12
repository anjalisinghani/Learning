import { useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import { useProgress } from "../hooks/useProgress";
import { getLanguage, getLesson, getBarakhadi, buildQuizForLesson } from "../data";
import LetterCard from "../components/LetterCard";
import VocabularyCard from "../components/VocabularyCard";
import VerbCard from "../components/VerbCard";
import QuizRunner from "../components/QuizRunner";
import AudioButton from "../components/AudioButton";
import { ArrowLeft, PartyPopper } from "lucide-react";

export default function LessonView() {
  const { lessonId } = useParams();
  const { state, completeLesson } = useProgress();
  const code = state.settings.selectedLanguage;
  const [showQuiz, setShowQuiz] = useState(false);
  const [finished, setFinished] = useState<{ score: number } | null>(null);

  if (!code) return <Navigate to="/languages" replace />;
  const language = getLanguage(code)!;
  const lesson = lessonId ? getLesson(code, lessonId) : undefined;
  if (!lesson) return <Navigate to="/learn" replace />;

  const progress = state.languageProgress[code];
  const alreadyDone = progress.completedLessons.includes(lesson.id);
  const barakhadi = lesson.category === "barakhadi" ? getBarakhadi(code) : [];
  const quizQuestions = buildQuizForLesson(lesson);

  function handleFinishQuiz(scorePercent: number) {
    completeLesson(code!, lesson!.id, lesson!.xpReward, scorePercent);
    setFinished({ score: scorePercent });
  }

  function handleMarkComplete() {
    completeLesson(code!, lesson!.id, lesson!.xpReward);
    setFinished({ score: 100 });
  }

  if (finished) {
    return (
      <div className="max-w-md mx-auto text-center py-16">
        <p className="text-6xl mb-4">{finished.score >= 80 ? "🎉" : "👍"}</p>
        <h1 className="font-display font-extrabold text-3xl mb-2">
          {finished.score === 100 ? "Perfect round!" : "Lesson complete!"}
        </h1>
        {quizQuestions.length > 0 && <p className="opacity-60 mb-2">You scored {finished.score}%</p>}
        <p className="font-bold mb-8" style={{ color: "var(--color-accent)" }}>
          +{lesson.xpReward}{finished.score === 100 && quizQuestions.length > 0 ? " +25 bonus" : ""} XP earned
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to="/learn" className="px-5 py-2.5 rounded-full glass font-semibold text-sm hover:bg-white/10">
            Back to lessons
          </Link>
          <Link
            to="/dashboard"
            className="px-5 py-2.5 rounded-full font-display font-bold text-sm text-[var(--color-ink)]"
            style={{ background: "var(--color-accent)" }}
          >
            Dashboard
          </Link>
        </div>
      </div>
    );
  }

  if (showQuiz) {
    return (
      <div>
        <button onClick={() => setShowQuiz(false)} className="flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 mb-6">
          <ArrowLeft size={16} /> Back to lesson
        </button>
        <QuizRunner questions={quizQuestions} speechLang={language.speechLang} onFinish={handleFinishQuiz} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/learn" className="flex items-center gap-1.5 text-sm opacity-60 hover:opacity-100 mb-6 w-fit">
        <ArrowLeft size={16} /> Back to lessons
      </Link>

      <div className="flex items-start gap-4 mb-8">
        <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shrink-0" style={{ background: `${language.accent}33` }}>
          {lesson.icon}
        </div>
        <div>
          <h1 className="font-display font-extrabold text-3xl">{lesson.title}</h1>
          <p className="opacity-60">{lesson.description}</p>
        </div>
        {alreadyDone && (
          <span className="ml-auto shrink-0 flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded-full bg-[var(--color-success)]/20 text-[var(--color-success)]">
            <PartyPopper size={14} /> Completed
          </span>
        )}
      </div>

      {lesson.letters && lesson.letters.length > 0 && (
        <section className="mb-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {lesson.letters.map((l) => (
              <LetterCard key={l.id} letter={l} speechLang={language.speechLang} />
            ))}
          </div>
        </section>
      )}

      {barakhadi.length > 0 && (
        <section className="mb-10 space-y-6">
          {barakhadi.map((row) => (
            <div key={row.baseConsonant} className="glass rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-3">
                <p className="font-display font-bold text-2xl">{row.baseConsonant}</p>
                <AudioButton text={row.baseConsonant} lang={language.speechLang} size="sm" />
              </div>
              <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                {row.forms.map((f) => (
                  <button
                    key={f.char}
                    onClick={(e) => e.currentTarget.blur()}
                    className="flex flex-col items-center gap-1 bg-white/5 hover:bg-white/10 rounded-xl py-3 transition"
                  >
                    <span className="font-display font-bold text-xl">{f.char}</span>
                    <span className="text-[10px] opacity-50 italic">{f.transliteration}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </section>
      )}

      {lesson.vocabulary && lesson.vocabulary.length > 0 && (
        <section className="mb-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lesson.vocabulary.map((v) => (
              <VocabularyCard key={v.id} item={v} languageCode={code} speechLang={language.speechLang} />
            ))}
          </div>
        </section>
      )}

      {lesson.verbs && lesson.verbs.length > 0 && (
        <section className="mb-10 grid sm:grid-cols-2 gap-4">
          {lesson.verbs.map((v) => (
            <VerbCard key={v.id} verb={v} speechLang={language.speechLang} />
          ))}
        </section>
      )}

      {lesson.grammar && lesson.grammar.length > 0 && (
        <section className="mb-10 space-y-4">
          {lesson.grammar.map((g) => (
            <div key={g.id} className="glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-lg mb-2">{g.title}</h3>
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
        </section>
      )}

      {!lesson.letters?.length && !lesson.vocabulary?.length && !lesson.verbs?.length && !lesson.grammar?.length && barakhadi.length === 0 && (
        <div className="glass rounded-2xl p-8 text-center mb-10">
          <p className="text-3xl mb-2">{lesson.icon}</p>
          <p className="font-semibold mb-1">This lesson is practice-focused.</p>
          <p className="text-sm opacity-60">Head into the quiz below to test yourself, or explore related Practice tools.</p>
        </div>
      )}

      <div className="sticky bottom-20 md:bottom-6 flex items-center justify-center gap-3 mt-6">
        {quizQuestions.length > 0 ? (
          <button
            onClick={() => setShowQuiz(true)}
            className="px-8 py-3.5 rounded-full font-display font-bold text-[var(--color-ink)] shadow-lg hover:scale-105 active:scale-95 transition"
            style={{ background: "linear-gradient(135deg, var(--color-accent), #ffb347)" }}
          >
            Take the Quiz 🧠
          </button>
        ) : (
          <button
            onClick={handleMarkComplete}
            className="px-8 py-3.5 rounded-full font-display font-bold text-[var(--color-ink)] shadow-lg hover:scale-105 active:scale-95 transition"
            style={{ background: "linear-gradient(135deg, var(--color-accent), #ffb347)" }}
          >
            Mark Complete ✓
          </button>
        )}
      </div>
    </div>
  );
}
