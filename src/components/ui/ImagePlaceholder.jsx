/**
 * Designed fallback visual for content that has no photo (e.g. archived
 * events with no bundled image). Never a broken <img> — always an
 * intentional, on-brand placeholder built from the design system itself.
 */
export default function ImagePlaceholder({ label, className = '' }) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden border border-line bg-ink-raised bg-grid bg-[length:18px_18px] ${className}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      {label && (
        <span className="relative font-mono text-[10px] uppercase tracking-[0.2em] text-paper/40">
          {label}
        </span>
      )}
    </div>
  );
}
