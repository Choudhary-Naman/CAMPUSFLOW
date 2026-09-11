import Modal from "../common/Modal";
import Badge from "../common/Badge";
import Button from "../common/Button";
import { useIssues } from "../../context/IssuesContext";
import {
  CATEGORY_COLOR,
  PRIORITY_COLOR,
  STATUS_COLOR,
  STATUS_FLOW,
} from "../../utils/constants";
import { timeAgo } from "../../utils/helpers";

// issue is null when nothing is selected -> Modal renders nothing (isOpen=false).
export default function IssueDetailModal({ issue, onClose }) {
  const { advanceStatus } = useIssues();

  if (!issue) return <Modal isOpen={false} onClose={onClose} />;

  const isResolved = issue.status === "Resolved";
  let nextStatus = null;
  if (!isResolved) {
    const currentIndex = STATUS_FLOW.indexOf(issue.status);
    nextStatus = STATUS_FLOW[currentIndex + 1];
  }

  return (
    <Modal isOpen={!!issue} onClose={onClose}>
      <img src={issue.image} alt={issue.category} className="modal-image" />
      <h2 className="modal-title">{issue.title}</h2>
      <p className="modal-location">📍 {issue.location}</p>
      <p className="modal-description">{issue.description}</p>

      <div className="modal-badges">
        <Badge text={issue.category} colorClass={CATEGORY_COLOR[issue.category]} />
        <Badge text={issue.priority} colorClass={PRIORITY_COLOR[issue.priority]} />
        <Badge text={issue.status} colorClass={STATUS_COLOR[issue.status]} />
      </div>

      <p className="modal-time">Reported {timeAgo(issue.createdAt)}</p>

      {!isResolved && (
        <Button
          variant="primary"
          fullWidth
          onClick={() => advanceStatus(issue.id)}
        >
          Mark as {nextStatus}
        </Button>
      )}
    </Modal>
  );
}
