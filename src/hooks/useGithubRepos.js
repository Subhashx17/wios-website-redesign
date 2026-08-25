import { useEffect, useState } from 'react';
import { githubOrg, projects } from '../data/projects.js';

/**
 * Enriches the local `projects` fallback with live star/fork counts from
 * the public GitHub API. Rendering never blocks on this: components should
 * render `projects` immediately and swap in `enriched` once (if) it arrives.
 *
 * Never fabricates numbers — if the request fails, is rate-limited, or a
 * repo isn't found, that project simply keeps its local (statless) entry.
 */
export function useGithubRepos() {
  const [enriched, setEnriched] = useState(projects);
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  useEffect(() => {
    let cancelled = false;

    async function fetchStats() {
      setStatus('loading');
      try {
        const results = await Promise.all(
          projects.map(async (project) => {
            try {
              const res = await fetch(`https://api.github.com/repos/${githubOrg}/${project.name}`);
              if (!res.ok) return project;
              const data = await res.json();
              return {
                ...project,
                stars: data.stargazers_count,
                forks: data.forks_count,
                description: project.description, // keep our authored copy
                tech: data.language ? [data.language, ...project.tech.filter((t) => t !== data.language)] : project.tech,
              };
            } catch {
              return project;
            }
          }),
        );
        if (!cancelled) {
          setEnriched(results);
          setStatus('success');
        }
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    fetchStats();
    return () => {
      cancelled = true;
    };
  }, []);

  return { projects: enriched, status };
}
