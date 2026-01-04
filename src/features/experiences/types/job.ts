import { BaseExperience } from "./_experience";

export type Job = {
  name: string;
  timespan: string;
  employer: string;
  location: string;
  description: string;
  achievements: string[];
} & BaseExperience<"job">;

export const createJob = (data: Omit<Job, "type">): Job => ({
  ...data,
  type: "job",
});