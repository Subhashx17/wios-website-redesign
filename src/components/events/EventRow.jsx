import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import ImagePlaceholder from '../ui/ImagePlaceholder.jsx';

function formatDate(iso) {
  const date = new Date(`${iso}T00:00:00`);
  return date
    .toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
    .toUpperCase();
}

/**
 * One row in the events archive. Hovering reveals the event image,
 * category, and an arrow — the interaction described in the design brief.
 */
export default function EventRow({ event }) {
  return (
    <Link
      to={`/events/${event.slug}`}
      className="group cursor-lock grid grid-cols-[auto_1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors hover:bg-paper/[0.02] sm:grid-cols-[5rem_auto_1fr_auto] sm:gap-6 sm:py-7"
    >
      <span className="font-mono text-xs text-paper/40 sm:text-sm">{formatDate(event.date)}</span>

      <div className="hidden sm:block">
        <ImagePlaceholder
          label={event.category}
          className="h-14 w-20 origin-left scale-95 opacity-0 transition-all duration-300 ease-editorial group-hover:scale-100 group-hover:opacity-100"
        />
      </div>

      <div className="flex min-w-0 flex-col gap-1">
        <h3 className="truncate font-sans text-base font-medium text-paper sm:text-lg">
          {event.title}
        </h3>
        <p className="hidden truncate text-sm text-paper/50 sm:block">{event.description}</p>
        <span className="font-mono text-[11px] uppercase tracking-wider text-paper/40 sm:hidden">
          {event.category}
        </span>
      </div>

      <ArrowUpRight
        size={18}
        className="shrink-0 text-paper/30 transition-all duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
        aria-hidden="true"
      />
    </Link>
  );
}
