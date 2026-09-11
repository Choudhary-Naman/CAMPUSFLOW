import Badge from "../common/Badge";
import {
  CATEGORY_COLOR,
  PRIORITY_COLOR,
  STATUS_COLOR,
} from "../../utils/constants";
import { timeAgo } from "../../utils/helpers";

// Receives one issue via props and an onClick handler. Knows nothing
// about where the data came from or what happens when it's clicked.
export default function IssueCard({ issue, onClick }) {
  return (
    <button className="issue-card" onClick={() => onClick(issue)}>
      <img className="issue-thumb" src={issue.image} alt={issue.category} />
      <div className="issue-main">
        <h3 className="issue-title">{issue.title}</h3>
        <p className="issue-location">{issue.location}</p>
        <div className="issue-meta">
          <span className="issue-time">🕒 {timeAgo(issue.createdAt)}</span>
          <Badge text={issue.category} colorClass={CATEGORY_COLOR[issue.category]} />
        </div>
      </div>

      <div className="issue-badges">
        <Badge text={issue.priority} colorClass={PRIORITY_COLOR[issue.priority]} />
        <Badge text={issue.status} colorClass={STATUS_COLOR[issue.status]} />
      </div>

      <span className="issue-arrow">›</span>
    </button>
  );
}
