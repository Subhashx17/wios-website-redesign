import { forwardRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const variants = {
  primary:
    'bg-signal text-ink hover:bg-signal-bright border border-signal',
  secondary:
    'bg-transparent text-paper border border-line-strong hover:border-paper hover:bg-paper/[0.04]',
  ghost: 'bg-transparent text-paper/80 hover:text-paper border border-transparent',
};

/**
 * Shared call-to-action button. Renders as <a> when `href` is passed,
 * otherwise as <button>. `arrow` adds the directional icon used across
 * the site's CTA language.
 */
const Button = forwardRef(function Button(
  { children, href, variant = 'primary', arrow = true, className = '', external = true, ...props },
  ref,
) {
  const base =
    'group inline-flex items-center gap-2 px-5 py-3 text-sm font-medium tracking-tight transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-signal';
  const classes = `${base} ${variants[variant]} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-200 ease-editorial group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
  const isInternal = href.startsWith('/') && !external;

  if (isInternal) {
    return (
      <Link
        to={href}
        ref={ref}
        className={classes}
        {...props}
      >
        {content}
      </Link>
    );
  }

  const externalProps = external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <a
      href={href}
      ref={ref}
      className={classes}
      {...externalProps}
      {...props}
    >
      {content}
    </a>
  );
}

  return (
    <button ref={ref} className={classes} {...props}>
      {content}
    </button>
  );
});

export default Button;
