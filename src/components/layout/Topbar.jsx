// A controlled input: its value always comes from the parent (App),
// and every keystroke is reported back up via onSearchChange.
export default function Topbar({ searchTerm, onSearchChange }) {
  return (
    <header className="topbar">
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search issues, locations, or keywords..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          aria-label="Search issues"
        />
      </div>

      <div className="topbar-actions">
        <button className="icon-btn" aria-label="Toggle theme">☀️</button>
        <button className="icon-btn icon-btn-dot" aria-label="Notifications">🔔</button>
        <div className="profile-chip">
          <img
            className="profile-avatar"
            src="https://i.pravatar.cc/64?img=1"
            alt="Profile"
          />
          <div className="profile-info">
            <span className="profile-name">Naman</span>
            <span className="profile-role">Student</span>
          </div>
          <span className="profile-caret">⌄</span>
        </div>
      </div>
    </header>
  );
}
