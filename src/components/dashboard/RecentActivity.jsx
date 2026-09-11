import { useIssues } from "../../context/IssuesContext";
import { timeAgo } from "../../utils/helpers";

const ICON_FOR_STATUS = {
  Pending: "🕒",
  "In Progress": "⚙️",
  Resolved: "✅",
};

// Rather than keeping a separate "activity log" in state (more state to
// keep in sync = more bugs), we derive recent activity by sorting the
// existing issues by their updatedAt timestamp. Simple, and always accurate.
export default function RecentActivity() {
  const { issues } = useIssues();

  const recent = [...issues]
    .sort((a, b) => b.updatedAt - a.updatedAt)
    .slice(0, 4);

  return (
    <div className="panel">
      <div className="panel-header">
        <h3>Recent Activity</h3>
      </div>
      <ul className="activity-list">
        {recent.map((issue) => (
          <li className="activity-item" key={issue.id}>
            <span className="activity-icon">{ICON_FOR_STATUS[issue.status]}</span>
            <div className="activity-text">
              <p>
                <strong>{issue.title}</strong> is now{" "}
                <strong>{issue.status}</strong>
              </p>
              <span className="activity-time">{timeAgo(issue.updatedAt)}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
