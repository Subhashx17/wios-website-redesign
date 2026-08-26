import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader.jsx';
import Reveal from '../ui/Reveal.jsx';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion.js';

const activities = [
  {
    title: 'Open Source',
    description:
      'We contribute to and maintain real open-source projects, giving members their first pull request and a portfolio of public work.',
  },
  {
    title: 'Workshops',
    description:
      'Hands-on sessions on Git, web development, and other practical tools — built so anyone can walk in without prior experience.',
  },
  {
    title: 'Hackathons',
    description:
      'Skill-building hackathons and challenges that turn a weekend into a working project, a team, and a portfolio piece.',
  },
  {
    title: 'Technical Sessions & Bootcamps',
    description:
      'Deeper dives into advanced topics — including machine learning, data analytics, and object-oriented programming — with the tools to back them up.',
  },
  {
    title: 'Community',
    description:
      'A standing group of people who show up for each other\u2019s projects, questions, and career decisions — not just for events.',
  },
  {
    title: 'Collaboration',
    description:
      'Active partnerships with other chapters and organizations at VIT-AP, bringing members exposure across a wider range of technical domains.',
  },
];

export default function WhatWeDo() {
  const [openIndex, setOpenIndex] = useState(0);
  const reduced = usePrefersReducedMotion();

  return (
    <section id="what-we-do" className="scroll-mt-20 border-b border-line">
      <div className="container-editorial py-24 md:py-32">
        <div className="mb-14 md:mb-20">
          <SectionHeader
            index="02"
            eyebrow="What we do"
            title="Six ways we get people building in public."
            description="Every activity feeds the same goal: more women shipping open-source work, and getting credit for it."
          />
        </div>

        <div className="border-t border-line">
          {activities.map((activity, i) => {
            const isOpen = openIndex === i;
            return (
              <Reveal key={activity.title} delay={i * 0.04} as="div">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="group cursor-lock flex w-full flex-col gap-4 border-b border-line py-6 text-left focus-visible:outline-2 focus-visible:outline-signal sm:flex-row sm:items-center sm:gap-8 sm:py-7"
                >
                  <span className="font-mono text-sm text-paper/40 sm:w-12">
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  <span
                    className={`flex-1 font-sans text-xl font-medium transition-colors sm:text-2xl ${
                      isOpen ? 'text-paper' : 'text-paper/70 group-hover:text-paper'
                    }`}
                  >
                    {activity.title}
                  </span>

                  <ArrowRight
                    size={18}
                    className={`hidden shrink-0 text-paper/40 transition-transform duration-300 ease-editorial sm:block ${
                      isOpen ? 'rotate-90 text-signal' : 'group-hover:translate-x-1'
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                  transition={reduced ? { duration: 0 } : { duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-xl pb-8 pl-0 text-sm leading-relaxed text-paper/60 sm:pb-9 sm:pl-20 md:text-base">
                    {activity.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
