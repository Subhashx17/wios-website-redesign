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
      { name: 'Anusha Thalivarathil', role: 'President', image: null, github: null, linkedin: null },
      { name: 'Ankitha Velagala', role: 'Chairperson', image: null, github: null, linkedin: 'https://www.linkedin.com/in/bhanu-saravana-ankitha-v-9aa21724a' },
      { name: 'Chirag Jain', role: 'Vice President', image: null, github: null, linkedin: 'https://www.linkedin.com/in/chiragajain/' },
      { name: 'Jacklen James', role: 'Director', image: null, github: null, linkedin: 'https://www.linkedin.com/in/jacklen-james-289a82251' },
      { name: 'Shambhavi Gunda', role: 'Treasurer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/shambhavi-gunda/' },
    ],
  },
  {
    group: 'Technical Team',
    members: [
      { name: 'Aakash Gaike', role: 'Technical Lead', image: null, github: null, linkedin: null },
      { name: 'Arnav Gupta', role: 'Associate Technical Lead', image: null, github: null, linkedin: null },
      { name: 'Saket Rathore', role: 'Web Developer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/saketrathore/' },
      { name: 'Aditya Gupta', role: 'Web Developer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/aditya-guptax/' },
      { name: 'B Tharuni Sri Sai', role: 'Technical Developer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/tharunibalukuri' },
      { name: 'Shrinidhi Ganesan', role: 'Technical Developer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/shrinidhi-ganesan-ba31362a8' },
      { name: 'Yashika Gaur', role: 'Technical Developer', image: null, github: null, linkedin: 'http://www.linkedin.com/in/yashika-gaur-0962ba2b8' },
      { name: 'Anju Singh', role: 'Project Developer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/anjusinghn' },
      { name: 'Kathrina Elangbam', role: 'Project Developer', image: null, github: null, linkedin: 'https://in.linkedin.com/in/kathrina-elangbam-03b6692b3' },
      { name: 'Mevania Alexander', role: 'Project Developer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/mevania-alexander-97197a301/' },
    ],
  },
  {
    group: 'Event Management',
    members: [
      { name: 'Labdhi Jain', role: 'Event Manager', image: null, github: null, linkedin: null },
      { name: 'Manvika Polavarapu', role: 'Event Manager', image: null, github: null, linkedin: 'https://www.linkedin.com/in/manvika-polavarapu-416582291' },
    ],
  },
  {
    group: 'Creative',
    members: [
      { name: 'Divya Sree Alam', role: 'Creative Lead', image: null, github: null, linkedin: 'https://www.linkedin.com/in/divya-sree-alam-942318301' },
      { name: 'Asmita Chakraborty', role: 'Associate Creative Lead', image: null, github: null, linkedin: 'https://www.linkedin.com/in/asmita-chakraborty-4b19132a1/' },
      { name: 'Moningi Vainavi', role: 'Graphic Designer', image: null, github: null, linkedin: 'https://www.linkedin.com/in/vainavi-moningi-060086300' },
      { name: 'B Vaadyuthi', role: 'Video Editor', image: null, github: null, linkedin: null },
      { name: 'Gandrala Rishika', role: 'Video Editor', image: null, github: null, linkedin: null },
    ],
  },
  {
    group: 'Marketing',
    members: [
      { name: 'Harshith Reddy', role: 'Marketing Lead', image: null, github: null, linkedin: 'http://www.linkedin.com/in/harshithreddyakepati' },
      { name: 'Tannu Yadav', role: 'Associate Marketing Lead', image: null, github: null, linkedin: 'https://www.linkedin.com/in/tannu-yadav-06012733a' },
    ],
  },
];

export const teamCount = team.reduce((sum, group) => sum + group.members.length, 0) + 1;
