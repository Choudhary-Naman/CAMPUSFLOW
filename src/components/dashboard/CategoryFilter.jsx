import { CATEGORIES } from "../../utils/constants";

const OPTIONS = ["All", ...CATEGORIES];

// Holds no state - it's told what's active and reports clicks upward.
// This makes it reusable anywhere a category filter is needed.
export default function CategoryFilter({ activeCategory, onChange }) {
  return (
    <div className="category-filter" role="tablist">
      {OPTIONS.map((category) => (
        <button
          key={category}
          role="tab"
          aria-selected={activeCategory === category}
          className={`filter-pill ${
            activeCategory === category ? "filter-pill-active" : ""
          }`}
          onClick={() => onChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
