export const experienceTypes = ['achievement', 'education', 'job'] as const;
export type ExperienceType = typeof experienceTypes[number];

export type BaseExperience<T extends ExperienceType> = {
  type: T;
  date: Date;
}