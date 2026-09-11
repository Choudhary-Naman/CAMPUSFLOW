import { useIssues } from "../context/IssuesContext";

export default function ProfilePage() {
  const { issues } = useIssues();
  const resolvedCount = issues.filter((i) => i.status === "Resolved").length;

  return (
    <div className="page-single-column">
      <div className="panel profile-page">
        <img
          className="profile-page-avatar"
          src="https://i.pravatar.cc/120?img=1"
          alt="Profile"
        />
        <h2>Naman</h2>
        <p className="profile-page-role">Student</p>
        <div className="profile-page-stats">
          <div>
            <p className="stat-value">{issues.length}</p>
            <p className="stat-label">Issues Reported</p>
          </div>
          <div>
            <p className="stat-value">{resolvedCount}</p>
            <p className="stat-label">Resolved</p>
          </div>
        </div>
      </div>
    </div>
  );
}
