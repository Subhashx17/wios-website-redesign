// Central source of truth for site-wide facts.
// Every value here is sourced from the original WiOS website
// (https://wiosc.github.io/wios-website/) or supplied directly by the club.
// Update this file first when handles, links, or contact details change.

export const site = {
  name: 'WiOS',
  fullName: 'Women in Open Source',
  university: 'VIT-AP University',
  location: 'Amaravati, Andhra Pradesh',
  email: 'wios@vitap.ac.in',
  tagline: 'Build. Contribute. Learn in the open.',

  links: {
    github: 'https://github.com/WiOSc',
    githubRepo: 'https://github.com/WiOSc/wios-website',
    discord: 'https://discord.gg/SWfmvkuA3e',
    instagram: 'https://www.instagram.com/wios_vitap/',
    linkedin: 'https://www.linkedin.com/company/women-in-open-source-vit-ap/',
    youtube: 'https://www.youtube.com/channel/UCc7KEMTSZaCVq-vKF9vkwQw',
    apply: 'https://forms.gle/8qxVadqUY6pPr1xC6',
    university: 'https://vitap.ac.in/',
  },

  nav: [
    { label: 'About', to: '/#about' },
    { label: 'What We Do', to: '/#what-we-do' },
    { label: 'Events', to: '/events' },
    { label: 'Open Source', to: '/projects' },
    { label: 'Team', to: '/team' },
  ],
};
