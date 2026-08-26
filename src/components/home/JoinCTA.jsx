import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import TechnicalLabel from '../ui/TechnicalLabel.jsx';
import { site } from '../../data/site.js';

export default function JoinCTA() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div
        className="pointer-events-none absolute inset-0 bg-grid bg-[length:56px_56px] [mask-image:radial-gradient(circle_at_center,black,transparent_75%)]"
        aria-hidden="true"
      />
      <div className="container-editorial relative flex flex-col items-start gap-8 py-24 md:py-32">
        <Reveal>
          <TechnicalLabel>07 — Join</TechnicalLabel>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="max-w-3xl text-balance font-sans text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Build something worth contributing to.
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            No prior open-source experience required — just curiosity, and a willingness to make
            your first pull request in public.
          </p>
        </Reveal>
        <Reveal delay={0.18} className="flex flex-wrap gap-4">
          <Button href={site.links.apply} className="cursor-lock">Apply to join</Button>
          <Button href={site.links.discord} variant="secondary" className="cursor-lock">
            Say hi on Discord
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
