// Team roster sourced from the 2024–25 WiOS members page:
// https://wiosc.github.io/wios-website/members_2024.html
//
// Photos are not bundled locally (the original assets live on the old
// site's repo); each row falls back to an initials avatar. Drop a real
// photo into `src/assets/team/` and reference it via `image` to replace
// the fallback for any member.
//
// Only confirmed name/role/link data from the source page is included.
// Broken or malformed links present on the source page were left out
// rather than guessed at.

export const coordinator = {
  name: 'Dr. Saroj Kumar Panigrahy',
  role: 'Club Coordinator',
  bio: 'Associate Dean, SCOPE, VIT-AP University. Research areas: Wireless Body Area Networks, Wireless Sensor Networks, IoT, and Cryptography.',
  image: null,
  github: null,
  linkedin: null,
};

export const team = [
  {
    group: 'Admins',
    members: [
      { name: 'Malika Farah Shaik', role: 'President', image: null, github: null, linkedin: null },
      { name: 'Suhita Nayak', role: 'Chairperson', image: null, github: null, linkedin: null },
      { name: 'Arina', role: 'Vice President', image: null, github: null, linkedin: null },
      { name: 'Kanishka V S', role: 'Director', image: null, github: null, linkedin: null },
      { name: 'Shambhavi Gunda', role: 'Treasurer', image: null, github: null, linkedin: null },
    ],
  },
  {
    group: 'Technical Team',
    members: [
      { name: 'Anushka Maitra', role: 'Technical Lead', image: null, github: null, linkedin: null },
    ],
  },
  {
    group: 'Event Management',
    members: [
      { name: 'Pragnitaa', role: 'Event Manager', image: null, github: null, linkedin: null },
    ],
  },
  {
    group: 'Creative',
    members: [
      { name: 'Snigdha', role: 'Graphic Designer', image: null, github: null, linkedin: null },
    ],
  },
  {
    group: 'Marketing',
    members: [
      { name: 'Melvyn Sebastian', role: 'Social Media & Marketing Lead', image: null, github: null, linkedin: null },
    ],
  },
];

export const teamCount = team.reduce((sum, group) => sum + group.members.length, 0) + 1;
