import Reveal from './Reveal.jsx';
import TechnicalLabel from './TechnicalLabel.jsx';

/**
 * Consistent heading block used at the top of every major section:
 * an index/eyebrow line, a large editorial heading, and an optional
 * supporting statement — the repeating rhythm that ties sections
 * together into one design system.
 */
export default function SectionHeader({ index, eyebrow, title, description, align = 'left' }) {
  const alignClass = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 ${alignClass}`}>
      <Reveal className="flex items-center gap-3">
        {index && <TechnicalLabel>{index}</TechnicalLabel>}
        {eyebrow && (
          <>
            {index && <span className="h-px w-6 bg-line-strong" aria-hidden="true" />}
            <TechnicalLabel>{eyebrow}</TechnicalLabel>
          </>
        )}
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="max-w-2xl text-balance font-sans text-3xl font-semibold leading-[1.1] text-paper sm:text-4xl md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="max-w-lg text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
