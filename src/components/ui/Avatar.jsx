import { useState } from 'react';

function getInitials(name) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

/**
 * Renders a member/contributor photo when available. Falls back to a
 * designed initials tile — never a broken image icon — when `src` is
 * missing or fails to load.
 */
export default function Avatar({ src, name, size = 56, className = '' }) {
  const [errored, setErrored] = useState(false);
  const showImage = src && !errored;

  return (
    <div
      className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-line bg-ink-raised font-mono text-xs font-medium text-paper/70 ${className}`}
      style={{ width: size, height: size }}
      aria-hidden={showImage ? undefined : 'true'}
    >
      {showImage ? (
        <img
          src={src}
          alt={name ? `Photo of ${name}` : ''}
          className="h-full w-full object-cover grayscale transition-all duration-300 group-hover:grayscale-0"
          onError={() => setErrored(true)}
          loading="lazy"
        />
      ) : (
        <span>{name ? getInitials(name) : '—'}</span>
      )}
    </div>
  );
}
