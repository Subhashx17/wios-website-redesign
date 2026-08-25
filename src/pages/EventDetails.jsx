import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageMeta from '../components/layout/PageMeta.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import ImagePlaceholder from '../components/ui/ImagePlaceholder.jsx';
import Button from '../components/ui/Button.jsx';
import { events } from '../data/events.js';
import { site } from '../data/site.js';
import NotFound from './NotFound.jsx';

function formatFullDate(iso) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function EventDetails() {
  const { slug } = useParams();
  const event = events.find((e) => e.slug === slug);

  if (!event) return <NotFound />;

  return (
    <>
      <PageMeta title={`${event.title} — WiOS Events`} description={event.description} />

      <article className="pt-28 md:pt-36">
        <div className="container-editorial pb-16 md:pb-20">
          <Link
            to="/events"
            className="mb-10 inline-flex items-center gap-2 text-sm text-paper/50 transition-colors hover:text-paper"
          >
            <ArrowLeft size={14} /> All events
          </Link>

          <div className="flex flex-wrap items-center gap-3">
            <TechnicalLabel className="border border-line-strong px-2 py-1">
              {event.category}
            </TechnicalLabel>
            <TechnicalLabel>{formatFullDate(event.date)}</TechnicalLabel>
          </div>

          <h1 className="mt-6 max-w-3xl text-balance font-sans text-3xl font-semibold leading-tight text-paper sm:text-4xl md:text-5xl">
            {event.title}
          </h1>
        </div>

        <div className="container-editorial pb-24 md:pb-32">
          <ImagePlaceholder label={event.category} className="mb-10 h-64 w-full md:h-96" />

          <p className="max-w-2xl text-balance text-lg leading-relaxed text-paper/70">
            {event.description}
          </p>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-line pt-8">
            <Button href={site.links.discord}>Join the next one</Button>
            <Button href="/events" variant="secondary" external={false}>
              Back to archive
            </Button>
          </div>
        </div>
      </article>
    </>
  );
}
