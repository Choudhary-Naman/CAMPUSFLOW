// Converts a timestamp into a friendly relative string, e.g. "2 hours ago".
export function timeAgo(timestamp) {
  const diffMs = Date.now() - timestamp;
  const minutes = Math.floor(diffMs / (1000 * 60));
  const hours = Math.floor(diffMs / (1000 * 60 * 60));
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (minutes < 1) return "just now";
  if (minutes < 60) return `${minutes} min ago`;
  if (hours < 24) return `${hours} hour${hours === 1 ? "" : "s"} ago`;
  return `${days} day${days === 1 ? "" : "s"} ago`;
}

// Groups issues by weekday and counts how many were created each day,
// returning an array in Mon-Sun order for the weekly chart.
export function getWeeklyCounts(issues) {
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const counts = { Mon: 0, Tue: 0, Wed: 0, Thu: 0, Fri: 0, Sat: 0, Sun: 0 };

  issues.forEach((issue) => {
    const jsDay = new Date(issue.createdAt).getDay(); // 0 = Sunday
    const label = dayLabels[(jsDay + 6) % 7]; // shift so Monday is first
    counts[label] += 1;
  });

  return dayLabels.map((label) => ({ label, count: counts[label] }));
}

// Returns [{ category, count, percent }] sorted by count, descending.
export function getCategoryBreakdown(issues) {
  const totals = {};
  issues.forEach((issue) => {
    totals[issue.category] = (totals[issue.category] || 0) + 1;
  });

  const total = issues.length || 1; // avoid divide-by-zero
  return Object.entries(totals)
    .map(([category, count]) => ({
      category,
      count,
      percent: Math.round((count / total) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}
