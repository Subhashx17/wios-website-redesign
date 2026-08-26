import SectionHeader from '../ui/SectionHeader.jsx';
import Reveal from '../ui/Reveal.jsx';
import EventRow from '../events/EventRow.jsx';
import Button from '../ui/Button.jsx';
import { events } from '../../data/events.js';

const recent = events.slice(0, 5);

export default function EventsPreview() {
  return (
    <section id="events" className="scroll-mt-20 border-b border-line">
      <div className="container-editorial py-24 md:py-32">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="03"
            eyebrow="Events"
            title="An archive, not a highlight reel."
            description="Talks, hackathons, and workshops going back to 2021 — the record of what WiOS has actually done."
          />
          <Reveal delay={0.15}>
            <Button href="/events" variant="secondary" external={false} className="shrink-0 cursor-lock">
              View all events
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <div className="border-t border-line">
            {recent.map((event) => (
              <EventRow key={event.slug} event={event} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
