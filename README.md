# CampusFlow — Smart Campus Issue Tracker

## Setup

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Tech

- React (Vite)
- React Router (page navigation)
- Context API + custom hooks for state (no Redux)
- localStorage for persistence
- Plain CSS (no UI framework)

## Structure

- `src/context/IssuesContext.jsx` — the single source of truth for all issues, plus `addIssue`, `advanceStatus`, `deleteIssue`.
- `src/hooks/useLocalStorage.js` — generic hook that syncs any piece of state to localStorage.
- `src/components/layout/` — Sidebar, Topbar.
- `src/components/dashboard/` — Hero, stats, issue list/cards, category filter, analytics panel, weekly chart, recent activity.
- `src/components/issues/` — Report form, issue detail modal.
- `src/pages/` — one file per route, assembled from the components above.
- `src/utils/` — constants (categories/priorities/statuses/colors), mock seed data, and helper functions (time formatting, weekly counts, category breakdown).

Ask me (Claude) any time to walk through how a specific file works — that's intentionally how this was structured so it stays easy to explain.
