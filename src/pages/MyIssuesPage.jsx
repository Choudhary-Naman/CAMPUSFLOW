import IssueList from "../components/dashboard/IssueList";

export default function MyIssuesPage({ searchTerm }) {
  return (
    <div className="page-single-column">
      <IssueList searchTerm={searchTerm} title="My Issues" />
    </div>
  );
}
