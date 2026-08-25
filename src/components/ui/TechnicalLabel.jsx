/**
 * Small monospace metadata label — the site's recurring "technical"
 * typographic motif (section numbers, dates, coordinates, statuses).
 */
export default function TechnicalLabel({ children, className = '' }) {
  return (
    <span
      className={`font-mono text-[11px] uppercase tracking-[0.18em] text-paper/50 ${className}`}
    >
      {children}
    </span>
  );
}
