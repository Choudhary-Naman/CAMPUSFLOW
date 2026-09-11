import { useIssues } from "../../context/IssuesContext";

// This component stores NO state of its own. Every number here is
// derived (computed) from the issues array on every render -
// that's why the stats update instantly when an issue changes.
export default function StatsCards() {
  const { issues } = useIssues();

  const total = issues.length;
  const pending = issues.filter((i) => i.status === "Pending").length;
  const inProgress = issues.filter((i) => i.status === "In Progress").length;
  const resolved = issues.filter((i) => i.status === "Resolved").length;

  const stats = [
    { label: "Total Issues", value: total, icon: "📄", color: "stat-blue" },
    { label: "Pending", value: pending, icon: "🕒", color: "stat-orange" },
    { label: "In Progress", value: inProgress, icon: "⚙️", color: "stat-purple" },
    { label: "Resolved", value: resolved, icon: "✅", color: "stat-green" },
  ];

  return (
    <div className="stats-grid">
      {stats.map((stat) => (
        <div className={`stat-card ${stat.color}`} key={stat.label}>
          <span className="stat-icon">{stat.icon}</span>
          <div>
            <p className="stat-value">{stat.value}</p>
            <p className="stat-label">{stat.label}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
