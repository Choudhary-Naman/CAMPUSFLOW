import { useIssues } from "../../context/IssuesContext";
import { getWeeklyCounts } from "../../utils/helpers";

// A hand-rolled bar chart: each bar's height is just a CSS percentage
// based on the max count. Avoids pulling in a charting library for
// something this simple, which keeps the dependency list small.
export default function WeeklyChart() {
  const { issues } = useIssues();
  const data = getWeeklyCounts(issues);
  const max = Math.max(...data.map((d) => d.count), 1);

  return (
    <div className="weekly-chart">
      {data.map((day) => (
        <div className="chart-bar-wrap" key={day.label}>
          <div
            className="chart-bar"
            style={{ height: `${(day.count / max) * 100}%` }}
            title={`${day.count} issue${day.count === 1 ? "" : "s"}`}
          />
          <span className="chart-bar-label">{day.label}</span>
        </div>
      ))}
    </div>
  );
}
