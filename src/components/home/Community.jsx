import SectionHeader from '../ui/SectionHeader.jsx';
import Reveal from '../ui/Reveal.jsx';

const pillars = [
  { word: 'Learn', detail: 'Workshops and bootcamps that start from zero.' },
  { word: 'Build', detail: 'Hackathons that turn ideas into shipped projects.' },
  { word: 'Contribute', detail: 'Real pull requests to real open-source repos.' },
  { word: 'Collaborate', detail: 'Cross-chapter events with other VIT-AP communities.' },
];

export default function Community() {
  return (
    <section className="border-b border-line">
      <div className="container-editorial py-24 md:py-32">
        <div className="mb-14 md:mb-20">
          <SectionHeader
            index="05"
            eyebrow="Community"
            title="A community first. A club on paper."
            description="Members stay for the people as much as the projects — the same faces show up to help with each other's work outside of scheduled events."
          />
        </div>

        <div className="grid border border-line sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.word} delay={i * 0.06}>
              <div
                className={`group flex h-full flex-col justify-between gap-10 border-line p-8 transition-colors duration-300 hover:bg-paper hover:text-ink sm:min-h-[16rem] ${
                  i % 2 === 0 ? 'sm:border-r' : ''
                } ${i < pillars.length - 2 ? 'border-b sm:border-b-0' : ''} ${
                  i === 1 ? 'lg:border-r' : ''
                } ${i === 2 ? 'lg:border-r' : ''}`}
              >
                <span className="font-mono text-xs text-paper/40 transition-colors group-hover:text-ink/50">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="mb-2 font-sans text-2xl font-semibold text-paper transition-colors group-hover:text-ink">
                    {pillar.word}
                  </h3>
                  <p className="text-sm leading-relaxed text-paper/55 transition-colors group-hover:text-ink/60">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
