import { BaseExperience } from "./_experience";

export type Education = {
  name: string;
  source: string;
  timespan: string;
  location: string;
} & BaseExperience<"education">;

export const createEducation = (data: Omit<Education, "type">): Education => ({
  ...data,
  type: "education",
});