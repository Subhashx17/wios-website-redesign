import { Link } from 'react-router-dom';
import { Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import { site } from '../../data/site.js';
import TechnicalLabel from '../ui/TechnicalLabel.jsx';

const social = [
  { label: 'GitHub', href: site.links.github, Icon: Github },
  { label: 'Instagram', href: site.links.instagram, Icon: Instagram },
  { label: 'LinkedIn', href: site.links.linkedin, Icon: Linkedin },
  { label: 'YouTube', href: site.links.youtube, Icon: Youtube },
];

const nav = [
  { label: 'About', to: '/#about' },
  { label: 'Events', to: '/events' },
  { label: 'Open Source', to: '/projects' },
  { label: 'Team', to: '/team' },
  { label: 'Join', to: '/apply' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink">
      <div className="container-editorial grid gap-12 py-16 md:grid-cols-[1.4fr_1fr_1fr] md:py-20">
        <div className="flex flex-col gap-4">
          <Link to="/" className="font-mono text-base font-medium text-paper">
            <span className="text-signal">/</span>WiOS
          </Link>
          <p className="max-w-xs text-sm leading-relaxed text-paper/50">
            Women in Open Source — {site.university}, {site.location}. Building diversity in tech,
            one contribution at a time.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="w-fit border-b border-transparent font-mono text-sm text-paper/70 transition-colors hover:border-signal hover:text-paper"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <TechnicalLabel>Navigate</TechnicalLabel>
          <ul className="flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.label}>
                {item.to.startsWith('/#') ? (
                  <a href={item.to} className="text-sm text-paper/60 transition-colors hover:text-paper">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.to} className="text-sm text-paper/60 transition-colors hover:text-paper">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <TechnicalLabel>Elsewhere</TechnicalLabel>
          <ul className="flex flex-col gap-3">
            {social.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paper/60 transition-colors hover:text-paper"
                >
                  <Icon size={14} aria-hidden="true" />
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container-editorial flex flex-col-reverse items-center justify-between gap-4 border-t border-line py-6 text-xs text-paper/40 sm:flex-row">
        <p>© {year} Women in Open Source, {site.university}.</p>
        <p className="font-mono">Built &amp; maintained by the WiOS Technical Team.</p>
      </div>
    </footer>
  );
}
