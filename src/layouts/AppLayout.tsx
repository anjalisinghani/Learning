import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import BottomNav from "../components/BottomNav";
import XpToastLayer from "../components/XpToastLayer";
import AchievementToast from "../components/AchievementToast";

export default function AppLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <XpToastLayer />
      <AchievementToast />
      <div className="flex-1 flex max-w-7xl mx-auto w-full">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 md:px-8 py-6 pb-24 md:pb-10">
          <Outlet />
        </main>
      </div>
      <BottomNav />
    </div>
  );
}
