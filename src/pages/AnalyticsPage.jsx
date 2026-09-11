import StatsCards from "../components/dashboard/StatsCards";
import AnalyticsPanel from "../components/dashboard/AnalyticsPanel";
import RecentActivity from "../components/dashboard/RecentActivity";

export default function AnalyticsPage() {
  return (
    <div className="page-single-column">
      <StatsCards />
      <div className="analytics-page-grid">
        <AnalyticsPanel />
        <RecentActivity />
      </div>
    </div>
  );
}
