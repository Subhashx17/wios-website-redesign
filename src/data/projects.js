// Local fallback for the Open Source section. This renders immediately,
// with no dependency on the network. The GitHub org is optionally
// queried live (see src/hooks/useGithubRepos.js) to enrich this data
// with real star/fork counts — if that call fails or is slow, the site
// falls back to exactly what's below, with no invented numbers.
//
// Only the repository WiOS is publicly known to maintain is listed.
// Add more entries here as the org publishes new repositories.

export const githubOrg = 'WiOSc';

export const projects = [
  {
    name: 'wios-website',
    description:
      'The WiOS website — maintained collaboratively by the club\u2019s technical team, and the codebase most members make their first open-source contribution to.',
    repo: 'https://github.com/WiOSc/wios-website',
    tech: ['HTML', 'CSS', 'JavaScript'],
    status: 'active',
  },
];
