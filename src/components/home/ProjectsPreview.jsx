import { Star, GitFork, ArrowUpRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import TechnicalLabel from '../ui/TechnicalLabel.jsx';
import { useGithubRepos } from '../../hooks/useGithubRepos.js';
import { site } from '../../data/site.js';

export default function ProjectsPreview() {
  const { projects } = useGithubRepos();

  return (
    <section id="open-source" className="border-b border-line bg-ink-soft/85">
      <div className="container-editorial py-24 md:py-32">
        <div className="mb-14 md:mb-20">
          <SectionHeader
            index="04"
            eyebrow="Open source"
            title="This isn't a slogan — it's the codebase."
            description="Every WiOS project lives in the open. This site is one of them — fork it, file an issue, or open your first pull request."
          />
        </div>

        <div className="grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Reveal key={project.name} className="block">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col justify-between gap-8 bg-ink p-7 transition-colors hover:bg-ink-raised"
              >
                <div className="flex flex-col gap-3">
                  <div className="flex items-start justify-between gap-3">
                    <TechnicalLabel className="text-signal">{site.name}</TechnicalLabel>
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

          <Reveal className="block">
            <a
              href={site.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full min-h-[13rem] flex-col items-start justify-between gap-6 bg-ink p-7 transition-colors hover:bg-ink-raised"
            >
              <TechnicalLabel>More on GitHub</TechnicalLabel>
              <div>
                <p className="mb-4 max-w-xs text-sm leading-relaxed text-paper/55">
                  New repositories get added as members ship them. See everything the org
                  currently maintains.
                </p>
                <span className="flex items-center gap-2 text-sm font-medium text-paper transition-colors group-hover:text-signal">
                  View the org
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </a>
          </Reveal>
        </div>

        <div className="mt-8">
          <Button href="/projects" variant="ghost" external={false}>
            All projects
          </Button>
        </div>
      </div>
    </section>
  );
}
