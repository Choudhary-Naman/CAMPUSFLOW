import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-greeting">Welcome back,</p>
        <h1 className="hero-name">Naman 👋</h1>
        <p className="hero-subtitle">
          Report issues. Track progress. Build a better campus.
        </p>
        <div className="hero-actions">
          <Button variant="primary" icon="➕" onClick={() => navigate("/report")}>
            Report an Issue
          </Button>
          <Button variant="secondary" icon="📄" onClick={() => navigate("/my-issues")}>
            View My Issues
          </Button>
        </div>
      </div>
    </section>
  );
}
