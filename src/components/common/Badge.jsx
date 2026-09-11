// A single reusable component for every small colored pill in the UI
// (category, priority, status). The color class is passed in as a prop
// so this component has zero knowledge of what "Electrical" or "High" mean.
export default function Badge({ text, colorClass }) {
  return <span className={`badge ${colorClass}`}>{text}</span>;
}
