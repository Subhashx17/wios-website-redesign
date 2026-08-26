import SectionHeader from '../ui/SectionHeader.jsx';
import Reveal from '../ui/Reveal.jsx';
import Button from '../ui/Button.jsx';
import TeamRow from '../team/TeamRow.jsx';
import { team } from '../../data/team.js';

const admins = team.find((group) => group.group === 'Admins')?.members ?? [];

export default function TeamPreview() {
  return (
    <section className="border-b border-line">
      <div className="container-editorial py-24 md:py-32">
        <div className="mb-14 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            index="06"
            eyebrow="Team"
            title="Run by students, for students."
            description="A small rotating team keeps WiOS running each year — meet the people behind this year's chapter."
          />
          <Reveal delay={0.15}>
            <Button href="/team" variant="secondary" external={false} className="shrink-0 cursor-lock">
              Meet the full team
            </Button>
          </Reveal>
        </div>

        <Reveal>
          <div className="border-t border-line">
            {admins.map((member) => (
              <TeamRow key={member.name} member={member} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
