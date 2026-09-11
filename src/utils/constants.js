// Single source of truth for the fixed "vocabulary" of the app.
// Keeping these here means every component (form, filter, badge) stays in sync.

export const CATEGORIES = [
  "Electrical",
  "Plumbing",
  "Cleanliness",
  "Infrastructure",
  "Other",
];

export const PRIORITIES = ["Low", "Medium", "High"];

// The order matters: it represents the lifecycle of an issue.
export const STATUS_FLOW = ["Pending", "In Progress", "Resolved"];

// Maps each badge value to a CSS class defined in index.css.
// This avoids scattering if/else color logic across components.
export const CATEGORY_COLOR = {
  Electrical: "badge-electrical",
  Plumbing: "badge-plumbing",
  Cleanliness: "badge-cleanliness",
  Infrastructure: "badge-infrastructure",
  Other: "badge-other",
};

export const PRIORITY_COLOR = {
  Low: "badge-low",
  Medium: "badge-medium",
  High: "badge-high",
};

export const STATUS_COLOR = {
  Pending: "badge-pending",
  "In Progress": "badge-in-progress",
  Resolved: "badge-resolved",
};

export const LOCAL_STORAGE_KEY = "campusflow_issues";
