import { achievements } from "./achievements";
import { educations } from "./educations";
import { jobs } from "./jobs";

export { achievements, educations, jobs };

export const experiences = [
  ...achievements,
  ...educations,
  ...jobs,
].sort((a, b) => b.date.getTime() - a.date.getTime());