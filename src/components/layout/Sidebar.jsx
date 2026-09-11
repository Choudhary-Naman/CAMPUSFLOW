import { NavLink } from "react-router-dom";

// Purely presentational: NavLink from react-router handles the
// "active" styling for us via its className function.
const NAV_ITEMS = [
  { to: "/", label: "Dashboard", icon: "🏠", end: true },
  { to: "/report", label: "Report Issue", icon: "➕" },
  { to: "/my-issues", label: "My Issues", icon: "📄" },
  { to: "/analytics", label: "Analytics", icon: "📊" },
  { to: "/notices", label: "Notices", icon: "🔔" },
  { to: "/profile", label: "Profile", icon: "👤" },
];

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <span className="brand-icon">🍃</span>
        <div>
          <h1 className="brand-name">CampusFlow</h1>
          <p className="brand-tagline">A better campus, together.</p>
        </div>
      </div>

      <nav className="sidebar-nav">
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) =>
              `sidebar-link ${isActive ? "sidebar-link-active" : ""}`
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <p className="sidebar-footer-words">Students · Report · Solve · Improve</p>
        <p className="sidebar-version">CampusFlow v1.0.0</p>
      </div>
    </aside>
  );
}
