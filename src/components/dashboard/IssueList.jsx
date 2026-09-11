import { useState } from "react";
import { useIssues } from "../../context/IssuesContext";
import CategoryFilter from "./CategoryFilter";
import IssueCard from "./IssueCard";
import IssueDetailModal from "../issues/IssueDetailModal";

// limit: if provided, only show that many issues (used on the Dashboard).
// When limit is omitted, all matching issues are shown (used on My Issues).
export default function IssueList({ searchTerm, limit, showFilter = true, title = "Recent Issues" }) {
  const { issues } = useIssues();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIssue, setSelectedIssue] = useState(null);

  const filteredIssues = issues.filter((issue) => {
    const matchesCategory =
      activeCategory === "All" || issue.category === activeCategory;

    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      query === "" ||
      issue.title.toLowerCase().includes(query) ||
      issue.location.toLowerCase().includes(query) ||
      issue.category.toLowerCase().includes(query);

    return matchesCategory && matchesSearch;
  });

  const visibleIssues = limit ? filteredIssues.slice(0, limit) : filteredIssues;

  return (
    <section className="issue-list-section">
      <div className="issue-list-header">
        <h2>{title}</h2>
      </div>

      {showFilter && (
        <CategoryFilter activeCategory={activeCategory} onChange={setActiveCategory} />
      )}

      <div className="issue-list">
        {visibleIssues.length === 0 && (
          <p className="empty-state">No issues match your search/filter.</p>
        )}
        {visibleIssues.map((issue) => (
          <IssueCard key={issue.id} issue={issue} onClick={setSelectedIssue} />
        ))}
      </div>

      <IssueDetailModal issue={selectedIssue} onClose={() => setSelectedIssue(null)} />
    </section>
  );
}
