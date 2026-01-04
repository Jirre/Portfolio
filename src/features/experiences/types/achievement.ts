import { BaseExperience } from "./_experience";

export type Achievement = {
  title: string;
  subtitle?: string;
  description: string;
} & BaseExperience<"achievement">;

export const createAchievement = (data: Omit<Achievement, "type">): Achievement => ({
  ...data,
  type: "achievement",
});