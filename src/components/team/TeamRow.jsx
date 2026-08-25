import { Github, Linkedin } from 'lucide-react';
import Avatar from '../ui/Avatar.jsx';

/**
 * A single "Role   Name" row in the team roster. Hovering brings the
 * member's photo (or initials fallback) into view and reveals any
 * confirmed social links.
 */
export default function TeamRow({ member }) {
  return (
    <div className="group grid grid-cols-[1fr_auto] items-center gap-4 border-b border-line py-5 transition-colors hover:bg-paper/[0.02] sm:grid-cols-[10rem_1fr_auto] sm:gap-6 sm:py-6">
      <span className="font-mono text-xs uppercase tracking-wide text-paper/40 sm:text-sm">
        {member.role}
      </span>

      <div className="flex items-center gap-4">
        <Avatar
          src={member.image}
          name={member.name}
          size={40}
          className="scale-90 opacity-0 transition-all duration-300 ease-editorial group-hover:scale-100 group-hover:opacity-100"
        />
        <span className="font-sans text-base font-medium text-paper sm:text-lg">
          {member.name}
        </span>
      </div>

      <div className="flex items-center justify-end gap-3">
        {member.github && (
          <a
            href={member.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on GitHub`}
            className="text-paper/30 transition-colors hover:text-paper"
          >
            <Github size={15} />
          </a>
        )}
        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${member.name} on LinkedIn`}
            className="text-paper/30 transition-colors hover:text-paper"
          >
            <Linkedin size={15} />
          </a>
        )}
      </div>
    </div>
  );
}
