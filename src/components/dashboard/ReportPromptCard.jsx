import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function ReportPromptCard() {
  const navigate = useNavigate();
  return (
    <div className="panel report-prompt-card">
      <div className="report-prompt-header">
        <span className="report-prompt-icon">📄</span>
        <div>
          <h3>Report a New Issue</h3>
          <p>Spotted a problem? Let us know.</p>
        </div>
      </div>
      <Button variant="primary" icon="➕" fullWidth onClick={() => navigate("/report")}>
        Report Now
      </Button>
    </div>
  );
}
