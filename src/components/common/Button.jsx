// variant: "primary" (solid green), "secondary" (white/outlined), "ghost" (text only)
export default function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
  fullWidth = false,
  ...rest
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${fullWidth ? "btn-full" : ""}`}
      onClick={onClick}
      {...rest}
    >
      {icon && <span className="btn-icon">{icon}</span>}
      {children}
    </button>
  );
}
