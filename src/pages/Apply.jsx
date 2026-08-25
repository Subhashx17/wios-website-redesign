import { ArrowUpRight, MessageCircle } from 'lucide-react';
import PageMeta from '../components/layout/PageMeta.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import Button from '../components/ui/Button.jsx';
import { site } from '../data/site.js';

const steps = [
  {
    title: 'Fill the form',
    detail: 'A short application — a few minutes, no prior open-source experience required.',
  },
  {
    title: 'Join the Discord',
    detail: 'That\u2019s where events, announcements, and day-to-day discussion happen.',
  },
  {
    title: 'Show up to the next event',
    detail: 'Workshops and sessions are the fastest way to meet the team and other members.',
  },
];

export default function Apply() {
  return (
    <>
      <PageMeta
        title="Join WiOS | VIT-AP"
        description="Apply to join Women in Open Source at VIT-AP University."
      />

      <section className="border-b border-line pt-28 md:pt-36">
        <div className="container-editorial pb-16 md:pb-20">
          <TechnicalLabel className="mb-6 block">Join</TechnicalLabel>
          <h1 className="max-w-2xl text-balance font-sans text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Your first pull request starts here.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            Applications are open to all VIT-AP students. No prior open-source or coding
            experience is required — just curiosity.
          </p>

          <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-4">
            <Button href={site.links.apply}>Open the application form</Button>
            <Button href={site.links.discord} variant="secondary">
              <span className="flex items-center gap-2">
                <MessageCircle size={16} /> Join the Discord
              </span>
            </Button>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20">
          <div className="border-t border-line">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.06}>
                <div className="flex flex-col gap-3 border-b border-line py-8 sm:flex-row sm:items-start sm:gap-8">
                  <span className="font-mono text-sm text-paper/40 sm:w-12">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className="mb-2 font-sans text-xl font-medium text-paper">{step.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-paper/60">{step.detail}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 flex items-center gap-2 text-sm text-paper/50">
            <span>Questions first? Write to us at</span>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-1 border-b border-transparent font-mono text-paper/80 transition-colors hover:border-signal hover:text-paper"
            >
              {site.email}
              <ArrowUpRight size={12} />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  );
}
