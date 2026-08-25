import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar.jsx';
import Footer from './components/layout/Footer.jsx';
import Home from './pages/Home.jsx';
import Events from './pages/Events.jsx';
import EventDetails from './pages/EventDetails.jsx';
import Team from './pages/Team.jsx';
import Projects from './pages/Projects.jsx';
import Apply from './pages/Apply.jsx';
import NotFound from './pages/NotFound.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) return; // let anchor navigation / smooth-scroll handle this
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-ink">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-signal focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <ScrollToTop />
      <Navbar />
      <main id="main-content" className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:slug" element={<EventDetails />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
