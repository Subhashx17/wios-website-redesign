import { useState } from 'react';
import { Github, Instagram, Linkedin, Mail, MapPin, Send } from 'lucide-react';
import PageMeta from '../components/layout/PageMeta.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import { site } from '../data/site.js';

const socials = [
  { label: 'Instagram', href: site.links.instagram, Icon: Instagram },
  { label: 'LinkedIn', href: site.links.linkedin, Icon: Linkedin },
  { label: 'GitHub', href: site.links.github, Icon: Github },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  function handleChange(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    const body = [`Name: ${form.name}`, `Email: ${form.email}`, '', form.message].join('\n');
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageMeta title="Contact WiOS | VIT-AP" description="Get in touch with Women in Open Source at VIT-AP." />

      <section className="border-b border-line pt-28 md:pt-36">
        <div className="container-editorial pb-16 text-center md:pb-20">
          <TechnicalLabel className="mb-6 block">Contact</TechnicalLabel>
          <h1 className="text-balance font-sans text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Get in <span className="text-signal">touch.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            Have a question, want to collaborate, or just want to say hi? Send us a message and
            we’ll get back to you.
          </p>
        </div>
      </section>

      <section>
        <div className="container-editorial grid gap-8 py-16 lg:grid-cols-[0.78fr_1.22fr] lg:py-20">
          <Reveal>
            <aside className="h-full border border-line bg-ink-soft p-7 md:p-8">
              <h2 className="font-sans text-2xl font-semibold text-paper">Contact information</h2>

              <div className="mt-8 space-y-7">
                <div className="flex gap-4">
                  <Mail className="mt-0.5 shrink-0 text-signal" size={20} aria-hidden="true" />
                  <div>
                    <TechnicalLabel className="mb-2 block">Email us</TechnicalLabel>
                    <a className="text-sm text-paper transition-colors hover:text-signal" href={`mailto:${site.email}`}>
                      {site.email}
                    </a>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="mt-0.5 shrink-0 text-signal" size={20} aria-hidden="true" />
                  <div>
                    <TechnicalLabel className="mb-2 block">Location</TechnicalLabel>
                    <address className="not-italic text-sm leading-relaxed text-paper/80">
                      VIT-AP University,<br />
                      Inavolu, beside AP Secretariat,<br />
                      Amaravati, Andhra Pradesh 522237
                    </address>
                  </div>
                </div>
              </div>

              <div className="mt-10 border-t border-line pt-7">
                <TechnicalLabel className="mb-4 block">Follow our socials</TechnicalLabel>
                <div className="flex gap-3">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="cursor-magnetic flex h-11 w-11 items-center justify-center border border-line text-paper/60 transition-colors hover:border-signal hover:text-signal"
                    >
                      <Icon size={19} aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </Reveal>

          <Reveal delay={0.1}>
            <form onSubmit={handleSubmit} className="border border-line bg-ink-soft p-7 md:p-8">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 font-mono text-xs text-paper/60">
                  Name
                  <input name="name" value={form.name} onChange={handleChange} required autoComplete="name" placeholder="John Doe" className="border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-signal focus:outline-none" />
                </label>
                <label className="flex flex-col gap-2 font-mono text-xs text-paper/60">
                  Email
                  <input name="email" type="email" value={form.email} onChange={handleChange} required autoComplete="email" placeholder="john@example.com" className="border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-signal focus:outline-none" />
                </label>
              </div>

              <label className="mt-6 flex flex-col gap-2 font-mono text-xs text-paper/60">
                Subject
                <input name="subject" value={form.subject} onChange={handleChange} required placeholder="How can we help?" className="border border-line bg-ink px-4 py-3 text-sm text-paper placeholder:text-paper/35 focus:border-signal focus:outline-none" />
              </label>

              <label className="mt-6 flex flex-col gap-2 font-mono text-xs text-paper/60">
                Message
                <textarea name="message" value={form.message} onChange={handleChange} required rows="7" placeholder="Write your message here…" className="resize-y border border-line bg-ink px-4 py-3 text-sm leading-relaxed text-paper placeholder:text-paper/35 focus:border-signal focus:outline-none" />
              </label>

              <button type="submit" className="cursor-magnetic mt-6 flex w-full items-center justify-center gap-2 border border-signal bg-signal px-5 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-signal-bright">
                Send message <Send size={16} aria-hidden="true" />
              </button>
              <p className="mt-3 text-center text-xs text-paper/40">This opens your email app with the message filled in.</p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
