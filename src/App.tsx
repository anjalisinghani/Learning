import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ProgressProvider } from "./hooks/useProgress";
import AppLayout from "./layouts/AppLayout";
import Landing from "./pages/Landing";
import Onboarding from "./pages/Onboarding";
import Languages from "./pages/Languages";
import Dashboard from "./pages/Dashboard";
import Learn from "./pages/Learn";
import LearningPath from "./pages/LearningPath";
import LessonView from "./pages/LessonView";
import Practice from "./pages/Practice";
import Vocabulary from "./pages/Vocabulary";
import Verbs from "./pages/Verbs";
import Grammar from "./pages/Grammar";
import Listening from "./pages/Listening";
import Writing from "./pages/Writing";
import Achievements from "./pages/Achievements";
import Progress from "./pages/Progress";
import Settings from "./pages/Settings";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <ProgressProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/languages" element={<Languages />} />

          <Route element={<AppLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/learn" element={<Learn />} />
            <Route path="/learn-path" element={<LearningPath />} />
            <Route path="/learn/:lessonId" element={<LessonView />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/vocabulary" element={<Vocabulary />} />
            <Route path="/verbs" element={<Verbs />} />
            <Route path="/grammar" element={<Grammar />} />
            <Route path="/listening" element={<Listening />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/search" element={<SearchPage />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ProgressProvider>
  );
}
