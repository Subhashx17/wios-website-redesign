import { Link } from 'react-router-dom';
import Button from '../components/ui/Button.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import PageMeta from '../components/layout/PageMeta.jsx';

export default function NotFound() {
  return (
    <>
      <PageMeta title="404 — WiOS" description="This page doesn't exist." />
      <section className="flex min-h-[70vh] items-center border-b border-line">
        <div className="container-editorial flex flex-col items-start gap-6 py-24">
          <TechnicalLabel>404 / Not found</TechnicalLabel>
          <h1 className="text-balance font-sans text-4xl font-semibold leading-tight text-paper sm:text-5xl">
            This route doesn&rsquo;t exist.
          </h1>
          <p className="max-w-md text-paper/60">
            The page you&rsquo;re looking for was moved, renamed, or never existed. Let&rsquo;s get
            you back on track.
          </p>
          <Button href="/" external={false}>
            Back to home
          </Button>
          <Link to="/events" className="text-sm text-paper/40 underline-offset-4 hover:text-paper hover:underline">
            Or browse the events archive
          </Link>
        </div>
      </section>
    </>
  );
}
