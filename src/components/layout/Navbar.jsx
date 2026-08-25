import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Github, Menu, X } from 'lucide-react';
import { useScrolled } from '../../hooks/useScrollPosition.js';
import { site } from '../../data/site.js';
import Button from '../ui/Button.jsx';

const navLinks = [
  { label: 'About', to: '#about' },
  { label: 'What We Do', to: '#what-we-do' },
  { label: 'Events', to: '#events' },
  { label: 'Open Source', to: '#open-source' },
  { label: 'Team', to: '#team' },
];

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'border-b border-line bg-ink/90 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav
        className="container-editorial flex h-16 items-center justify-between md:h-20"
        aria-label="Primary"
      >
        <Link
          to="/"
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight text-paper"
        >
          <span className="text-signal">/</span>
          WiOS
          <span className="hidden text-paper/40 sm:inline">— VIT-AP</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
      	    <a
   	      key={link.label}
              href={link.to}
              className="text-sm text-paper/70 transition-colors hover:text-paper"
            >
  	       {link.label}
 	    </a>
	  ))}
        </div>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href={site.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WiOS on GitHub"
            className="text-paper/70 transition-colors hover:text-paper"
          >
            <Github size={18} />
          </a>
          <Button href={site.links.apply} variant="secondary" arrow={false} className="text-sm">
            Join WiOS
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="flex h-10 w-10 items-center justify-center border border-line text-paper md:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-ink md:hidden"
          >
            <div className="container-editorial flex flex-col py-2">
              {navLinks.map((link, i) => (
                <a
                  key={link.label}
                  href={link.to}
                  className="flex items-center justify-between border-b border-line py-4 text-lg text-paper"
                >
                  <span>{link.label}</span>
                  <span className="font-mono text-xs text-paper/40">
                    0{i + 1}
                  </span>
                </a>
              ))}
              <div className="flex items-center justify-between gap-4 py-5">
                <a
                  href={site.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-paper/70"
                >
                  <Github size={16} /> GitHub
                </a>
                <Button href={site.links.apply} variant="primary" className="text-sm">
                  Join WiOS
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
