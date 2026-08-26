import PageMeta from '../components/layout/PageMeta.jsx';
import Reveal from '../components/ui/Reveal.jsx';
import TechnicalLabel from '../components/ui/TechnicalLabel.jsx';
import Avatar from '../components/ui/Avatar.jsx';
import TeamRow from '../components/team/TeamRow.jsx';
import { team, coordinator, teamCount } from '../data/team.js';

export default function Team() {
  return (
    <>
      <PageMeta
        title="Team — WiOS | VIT-AP"
        description="Meet the students who run Women in Open Source at VIT-AP University."
      />

      <section className="border-b border-line pt-28 md:pt-36">
        <div className="container-editorial pb-16 md:pb-20">
          <TechnicalLabel className="mb-6 block">The people</TechnicalLabel>
          <h1 className="max-w-2xl text-balance font-sans text-4xl font-semibold leading-[1.05] text-paper sm:text-5xl md:text-6xl">
            {teamCount} people keep WiOS running.
          </h1>
          <p className="mt-6 max-w-lg text-balance text-base leading-relaxed text-paper/60 md:text-lg">
            A student-led team, refreshed each academic year, with one faculty coordinator
            guiding it from the department.
          </p>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="container-editorial py-16 md:py-20">
          <Reveal className="cursor-lock flex flex-col gap-6 border border-line p-8 sm:flex-row sm:items-center md:p-10">
            <Avatar src={coordinator.image} name={coordinator.name} size={72} />
            <div>
              <TechnicalLabel className="mb-2 block">Faculty Coordinator</TechnicalLabel>
              <h2 className="font-sans text-xl font-semibold text-paper md:text-2xl">
                {coordinator.name}
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-paper/60">
                {coordinator.bio}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-editorial py-16 md:py-20">
          {team.map((group) => (
            <div key={group.group} className="mb-16 last:mb-0">
              <Reveal>
                <TechnicalLabel className="mb-4 block">{group.group}</TechnicalLabel>
              </Reveal>
              <div className="border-t border-line">
                {group.members.map((member) => (
                  <TeamRow key={member.name} member={member} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
