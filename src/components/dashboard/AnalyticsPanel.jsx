import { useIssues } from "../../context/IssuesContext";
import { getCategoryBreakdown } from "../../utils/helpers";
import WeeklyChart from "./WeeklyChart";

const BAR_COLOR = {
  Electrical: "bar-electrical",
  Plumbing: "bar-plumbing",
  Cleanliness: "bar-cleanliness",
  Infrastructure: "bar-infrastructure",
  Other: "bar-other",
};

export default function AnalyticsPanel() {
  const { issues } = useIssues();
  const breakdown = getCategoryBreakdown(issues);

  return (
    <div className="panel analytics-panel">
      <div className="panel-header">
        <h3>Issue Analytics</h3>
        <span className="panel-tag">This Week</span>
      </div>

      <WeeklyChart />

      <h4 className="panel-subheading">Most Common Issues</h4>
      <div className="category-breakdown">
        {breakdown.map((item) => (
          <div className="breakdown-row" key={item.category}>
            <span className="breakdown-label">{item.category}</span>
            <div className="breakdown-track">
              <div
                className={`breakdown-fill ${BAR_COLOR[item.category] || "bar-other"}`}
                style={{ width: `${item.percent}%` }}
              />
            </div>
            <span className="breakdown-percent">{item.percent}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}
