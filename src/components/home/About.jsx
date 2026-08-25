import Reveal from '../ui/Reveal.jsx';
import TechnicalLabel from '../ui/TechnicalLabel.jsx';

const facts = [
  { label: 'Founded for', value: 'Diversity in tech' },
  { label: 'Focus', value: 'Open-source software' },
  { label: 'Format', value: 'Workshops · Hackathons · Talks' },
  { label: 'Based at', value: 'VIT-AP University' },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-b border-line">
      <div className="container-editorial grid gap-12 py-24 md:grid-cols-2 md:gap-16 md:py-32">
        <Reveal>
          <TechnicalLabel className="mb-6 block">01 — About</TechnicalLabel>
          <p className="text-balance font-sans text-2xl font-medium leading-snug text-paper sm:text-3xl md:text-4xl">
            WiOS exists to bring more women into open source — and to bring open source into
            everyday student life at VIT-AP.
          </p>
        </Reveal>

        <div className="flex flex-col gap-10">
          <Reveal delay={0.1}>
            <p className="text-balance text-base leading-relaxed text-paper/60 md:text-lg">
              Women in Open Source (WiOS) is committed to bringing diversity in technology. We
              encourage the use of open-source frameworks while endorsing gender diversity in
              tech — through hands-on workshops, hackathons, seminars, and conferences where
              members learn by building on real, existing open-source tools.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="text-balance text-base leading-relaxed text-paper/60 md:text-lg">
              We partner with other chapters and organizations across the university to give our
              members exposure across a range of technical domains — from web development to
              machine learning — and a community of people who share the same curiosity.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <dl className="grid grid-cols-2 gap-6 border-t border-line pt-8">
              {facts.map((fact) => (
                <div key={fact.label} className="flex flex-col gap-1.5">
                  <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-paper/40">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-paper/80">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
