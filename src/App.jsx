import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { IssuesProvider } from "./context/IssuesContext";
import Sidebar from "./components/layout/Sidebar";
import Topbar from "./components/layout/Topbar";
import DashboardPage from "./pages/DashboardPage";
import ReportIssuePage from "./pages/ReportIssuePage";
import MyIssuesPage from "./pages/MyIssuesPage";
import AnalyticsPage from "./pages/AnalyticsPage";
import NoticesPage from "./pages/NoticesPage";
import ProfilePage from "./pages/ProfilePage";

export default function App() {
  // Search lives here (not in a page) because the search bar is in the
  // Topbar, which sits above all pages - lifting state up to the closest
  // common ancestor.
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <IssuesProvider>
      <div className="app-shell">
        <Sidebar />
        <div className="main-column">
          <Topbar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<DashboardPage searchTerm={searchTerm} />} />
              <Route path="/report" element={<ReportIssuePage />} />
              <Route path="/my-issues" element={<MyIssuesPage searchTerm={searchTerm} />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/notices" element={<NoticesPage />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Routes>
          </main>
        </div>
      </div>
    </IssuesProvider>
  );
}