import PageMeta from '../components/layout/PageMeta.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import EventRow from '../components/events/EventRow.jsx';
import { eventsByYear, eventYears, events } from '../data/events.js';

export default function Events() {
  return (
    <>
      <PageMeta
        title="Events — WiOS | VIT-AP"
        description="The full WiOS event archive: talks, hackathons, and workshops since 2021."
      />

      <section className="border-b border-line pt-28 md:pt-36">
        <div className="container-editorial pb-16 md:pb-20">
          <TechnicalLabel className="mb-6 block">Archive</TechnicalLabel>
          <h1 className="max-w-2xl text-balance font-sans text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Every event, since 2021.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            {events.length} sessions, hackathons, and workshops — sourced from our own records, not
            a highlight reel.
          </p>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20">
          {eventYears.map((year) => (
            <div key={year} className="mb-16 last:mb-0">
              <Reveal>
                <span className="mb-4 block font-mono text-6xl font-medium text-paper/10 sm:text-7xl">
                  {year}
                </span>
              </Reveal>
              <div className="border-t border-line">
                {eventsByYear[year].map((event) => (
                  <EventRow key={event.slug} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
