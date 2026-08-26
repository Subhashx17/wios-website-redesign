import { motion } from 'framer-motion';
import { site } from '../../data/site.js';
import Button from '../ui/Button.jsx';
import TechnicalLabel from '../ui/TechnicalLabel.jsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

export default function Hero() {
  const reduced = usePrefersReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-line pt-28 md:pt-36">
      {/* Subtle structural grid — visible even with motion disabled */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[length:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]"
        aria-hidden="true"
      />

      <div className="container-editorial relative flex flex-col gap-10 pb-20 md:gap-14 md:pb-28">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center gap-3"
        >
          <TechnicalLabel className="border border-line-strong px-2 py-1">
            {site.university}
          </TechnicalLabel>
          <TechnicalLabel>{site.location}</TechnicalLabel>
          <span className="flex items-center gap-2 font-mono text-[11px] text-paper/50">
            <span className="h-1.5 w-1.5 rounded-full bg-signal" aria-hidden="true" />
            Open for contributors
          </span>
        </motion.div>

        <div className="grid gap-10 md:grid-cols-[1.6fr_1fr] md:items-end md:gap-8">
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-balance font-sans text-[13vw] font-semibold leading-[0.98] tracking-tight text-paper sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            Women in
            <br />
            Open Source<span className="text-signal">.</span>
          </motion.h1>

          <motion.p
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-sm text-balance text-base leading-relaxed text-paper/60 md:text-lg"
          >
            {site.tagline} We&apos;re the open-source and community club of {site.university} — closing
            the gender gap in tech through workshops, hackathons, and real contributions.
          </motion.p>
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex flex-wrap gap-4">
            <Button href={site.links.apply}>Join WiOS</Button>
            <Button href="/projects" variant="secondary" external={false}>
              Explore open source
            </Button>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-paper/40">
            <span>$</span>
            <span>git clone {site.links.githubRepo.replace('https://', '')}.git</span>
            <span className="inline-block h-3.5 w-[7px] bg-signal/80 animate-blink" aria-hidden="true" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
