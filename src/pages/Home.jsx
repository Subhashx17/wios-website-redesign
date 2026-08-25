import PageMeta from '../components/layout/PageMeta.jsx';
import Hero from '../components/home/Hero.jsx';
import About from '../components/home/About.jsx';
import WhatWeDo from '../components/home/WhatWeDo.jsx';
import EventsPreview from '../components/home/EventsPreview.jsx';
import ProjectsPreview from '../components/home/ProjectsPreview.jsx';
import Community from '../components/home/Community.jsx';
import TeamPreview from '../components/home/TeamPreview.jsx';
import JoinCTA from '../components/home/JoinCTA.jsx';

export default function Home() {
  return (
    <>
      <PageMeta title="WiOS — Women in Open Source | VIT-AP" />
      <Hero />
      <About />
      <WhatWeDo />
      <EventsPreview />
      <ProjectsPreview />
      <Community />
      <TeamPreview />
      <JoinCTA />
    </>
  );
}
