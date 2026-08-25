import { motion } from 'framer-motion';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

/**
 * Wraps children in a subtle, one-time entrance animation triggered when
 * scrolled into view. Renders children statically (no opacity-0 flash)
 * when the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, y = 16, as = 'div', className = '' }) {
  const reduced = usePrefersReducedMotion();
  const Component = motion[as] ?? motion.div;

  if (reduced) {
    const Static = as;
    return <Static className={className}>{children}</Static>;
  }

  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Component>
  );
}
