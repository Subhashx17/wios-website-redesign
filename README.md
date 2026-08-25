# WiOS — Women in Open Source

Official website for **Women in Open Source (WiOS)**, VIT-AP University.

Built with React + Vite + Tailwind CSS + Framer Motion. No TypeScript.

---

## Getting started

This project needs Node.js 18+ and was **not** built with `npm install` /
`npm run build` run inside it yet — the sandbox this was authored in has no
network access to the npm registry. Run these on your own machine:

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
npm run lint      # ESLint
```

Every dependency version is pinned in `package.json`. If `npm install` ever
fails on a specific version, bump that one package rather than the whole
lockfile.

---

## Project structure

```
src/
├── data/            ← EDIT THESE to update site content
│   ├── site.js       — org info, social links, nav
│   ├── events.js      — full event archive
│   ├── team.js         — team roster, grouped by function
│   └── projects.js      — local fallback for the Open Source section
│
├── components/
│   ├── layout/        — Navbar, Footer, PageMeta (per-page SEO)
│   ├── ui/              — Button, SectionHeader, Reveal, Avatar, etc.
│   ├── home/            — one component per homepage section
│   ├── events/          — EventRow (archive list item)
│   └── team/             — TeamRow (roster list item)
│
├── pages/            — one file per route
├── hooks/            — useScrolled, usePrefersReducedMotion, useGithubRepos
└── App.jsx           — routing + page shell
```

## Updating content

**Add a new event** — append an object to the array in `src/data/events.js`.
Required fields: `slug` (unique, URL-safe), `title`, `date` (`YYYY-MM-DD`),
`year`, `category`, `description`. `image` can stay `null` — the site shows
a designed placeholder automatically.

**Add or update a team member** — edit `src/data/team.js`. Each group
(`Admins`, `Technical Team`, etc.) is a plain array of `{ name, role, image,
github, linkedin }`. Leave a field `null` if it isn't confirmed; the UI
hides missing links and falls back to initials when there's no photo.

**Add a project/repo** — edit `src/data/projects.js`. If the repo is public
on the `WiOSc` GitHub org, live star/fork counts are fetched automatically
at runtime (see `src/hooks/useGithubRepos.js`) and merged on top of this
local data — the site never depends on that request succeeding.

**Change links (Discord, socials, application form)** — all in
`src/data/site.js` under `site.links`.

## Design system

- **Colors**: near-black `ink` background, warm off-white `paper` text, one
  accent (`signal`, a rose/red) used sparingly for emphasis and links.
- **Type**: Manrope (sans, editorial headings/body) + JetBrains Mono
  (technical labels, dates, metadata) — loaded via Google Fonts in
  `index.html`.
- **Motion**: Framer Motion, used for entrance reveals and hover states
  only. Everything respects `prefers-reduced-motion` (see
  `src/hooks/usePrefersReducedMotion.js` and the global CSS override in
  `src/index.css`).

## Content sourcing

Org description, event history, and the 2024–25 team roster were sourced
directly from the previous WiOS website
(https://wiosc.github.io/wios-website/) and its Events/Members pages. No
statistics, members, events, or repositories were invented — anything not
confirmed there was left out rather than guessed at. See the comments at
the top of each file in `src/data/` for exact sourcing notes.

## Verification performed in this environment

This sandbox has no network access, so `npm install` / `npm run build`
could not be run here. Instead, every file was bundled and resolved with a
locally available `esbuild` binary (JSX parsing + import/export
resolution across the full `src/` tree) with zero errors, which catches
syntax errors, broken imports, and mismatched exports. Full verification
still requires running the commands above once on a machine with internet
access.
