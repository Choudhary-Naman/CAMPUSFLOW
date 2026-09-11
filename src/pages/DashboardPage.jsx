import Hero from "../components/dashboard/Hero";
import StatsCards from "../components/dashboard/StatsCards";
import IssueList from "../components/dashboard/IssueList";
import ReportPromptCard from "../components/dashboard/ReportPromptCard";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function DashboardPage({ searchTerm }) {
  return (
    <>
      <Hero />
      <StatsCards />

      <div className="dashboard-columns">
        <IssueList searchTerm={searchTerm} limit={5} />

        <div className="dashboard-side">
          <ReportPromptCard />
          <AnalyticsPanel />
          <RecentActivity />
        </div>
      </div>

      <footer className="quote-footer">
        <p>"Small issues, big change."</p>
        <span>— CampusFlow</span>
      </footer>
    </>
  );
}
