import { Achievement, createAchievement } from "../types";

export const achievements: Achievement[] = [
  createAchievement({
    title: "Dutch Game Award 2015",
    subtitle: "Best Student Game Design",
    description: "Won for the game 'Vector Flight' while studying at Grafisch Lyceum Utrecht.",
    date: new Date('2015-10-30')
  }),
  createAchievement({
    title: "Indigo Awards 2016",
    subtitle: "Audience Award",
    description: "Tied first place for the game 'Vector Flight' at the Indigo Game Show 2016.",
    date: new Date('2016-10-30')
  }),
];