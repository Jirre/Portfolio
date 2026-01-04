import { createJob } from "../types";

export const jobs = [
  createJob({
    name: 'Game Development Teacher',
    employer: 'Grafisch Lyceum Utrecht',
    location: 'Utrecht, The Netherlands',
    date: new Date('2026-01-01'),
    timespan: 'April 2022 - Present',
    description: 'Teaching Game Development and basic programming principles.',
    achievements: [
      "Teaching and coaching students as they grow into practitioners within the field of Game programming.",
      "Served as a certified Examiner for graduation projects, evaluating final-year students on industry readiness and technical implementation.",
      "Modernized the curriculum by integrating modern workflows in first year introduction lessons to teach the basics of programming.",
      "Mentored student teams through full development lifecycles, from initial prototyping to 'Gold' master state."
    ]
  }),
  createJob({
    name: 'Median Gameplay Programmer',
    employer: 'Paladin Studios',
    location: 'The Hague, The Netherlands',
    date: new Date('2022-03-01'),
    timespan: 'September 2021 - March 2022',
    description: 'Worked on \'Nailed It! Baking Bash\', for Netflix.',
    achievements: [
      "Programming and designing a mobile game for both Android and iOS in conjunction with Netflix.",
      "Working in direct collaboration with artists, designers, and customers.",
      "Implement new mini-games and game-systems for the final products."
    ]
  }),
  createJob({
    name: 'Median Application Developer',
    employer: 'Roxelane BV',
    location: 'Utrecht, The Netherlands',
    date: new Date('2021-08-01'),
    timespan: 'April 2018 - August 2021',
    description: 'Worked as lead-developer on multiple mobile applications with front- and backend integrations.',
    achievements: [
      "Programming and designing several mobile applications for both Android and iOS.",
      "Working direct collaboration with artists, designers, and customers.",
      "Managing and supporting the interns during their projects."
    ]
  }),
  createJob({
    name: 'Intern Game Programmer/Game Design',
    employer: 'Wispfire',
    location: 'Utrecht, The Netherlands',
    date: new Date('2017-02-01'),
    timespan: 'February 2016 - February 2017',
    description: 'Worked on, and helped release \'Herald\'.',
    achievements: [
      "Implementation of animations, dialogues, and other gameplay elements in collaboration with artists and designers.",
      "Development of several game-systems that could be used to make development easier for non-programmer colleagues.",
      "Maintained code documentation and ensured code quality through code reviews and pair programming sessions."
    ]
  }),
  createJob({
    name: 'Freelance Engine Programmer',
    employer: 'Studio Flashback',
    location: 'Burnham, United Kingdom',
    date: new Date('2017-01-30'),
    timespan: 'August 2016 - January 2017',
    description: 'Created a proof-of concept of the eventual world-editor as part of a freelance contract with a game studio.',
    achievements: [
      "Development of prototype world-editor and physics engine for proof of concept.",
      "Delivered documentation and design documents for future reference during full development.",
    ]
  }),
  createJob({
    name: 'Climbing Instructor',
    employer: 'Fun Forest',
    location: 'Amsterdam, Netherlands',
    date: new Date('2017-01-01'),
    timespan: 'August 2016 - January 2017',
    description: 'Worked as a climbing instructor and customer service representative.',
    achievements: [
      "Customer support and front-desk work.",
      "Instruct and support customers to safely climb on the courses.",
      "Conduct repairs and maintainance to the different courses."
    ]
  }),
];