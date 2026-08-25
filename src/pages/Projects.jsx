import { Star, GitFork, ArrowUpRight, Github } from 'lucide-react';
import PageMeta from '../components/layout/PageMeta.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import Button from '../components/ui/Button.jsx';
import { useGithubRepos } from '../hooks/useGithubRepos.js';
import { site } from '../data/site.js';

export default function Projects() {
  const { projects, status } = useGithubRepos();

  return (
    <>
      <PageMeta
        title="Open Source — WiOS | VIT-AP"
        description="Repositories WiOS members build and maintain in the open."
      />

      <section className="border-b border-line pt-28 md:pt-36">
        <div className="container-editorial pb-16 md:pb-20">
          <TechnicalLabel className="mb-6 block">Open source</TechnicalLabel>
          <h1 className="max-w-2xl text-balance font-sans text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            Everything we build stays public.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            {status === 'error'
              ? 'Live GitHub stats are unavailable right now — the details below are our own records.'
              : 'Star counts and languages are pulled live from GitHub where available; everything else is maintained by hand.'}
          </p>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20">
          <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Reveal key={project.name}>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col justify-between gap-8 bg-ink p-7 transition-colors hover:bg-ink-raised"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-3">
                      <TechnicalLabel className="text-signal">{project.status}</TechnicalLabel>
                      <ArrowUpRight
                        size={16}
                        className="text-paper/30 transition-all duration-300 ease-editorial group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="font-mono text-base font-medium text-paper">{project.name}</h3>
                    <p className="text-sm leading-relaxed text-paper/55">{project.description}</p>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className="border border-line-strong px-2 py-0.5 font-mono text-[10px] uppercase tracking-wide text-paper/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    {(project.stars !== undefined || project.forks !== undefined) && (
                      <div className="flex items-center gap-3 font-mono text-xs text-paper/40">
                        {project.stars !== undefined && (
                          <span className="flex items-center gap-1">
                            <Star size={12} /> {project.stars}
                          </span>
                        )}
                        {project.forks !== undefined && (
                          <span className="flex items-center gap-1">
                            <GitFork size={12} /> {project.forks}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-10 flex flex-col items-start gap-4">
            <p className="max-w-md text-sm leading-relaxed text-paper/55">
              Want to contribute, or start a new project under the WiOS org? Reach out on Discord
              or open an issue on GitHub.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href={site.links.github}>
                <span className="flex items-center gap-2">
                  <Github size={16} /> WiOS on GitHub
                </span>
              </Button>
              <Button href={site.links.discord} variant="secondary">
                Ask on Discord
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
