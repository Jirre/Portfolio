export const skillTags = [
  "all",
  "*top",
  "language",
  "game",
  "web",
  "engine",
  "framework",
  "frontend",
  "backend",
  "tool",
] as const;

export type SkillTag = (typeof skillTags)[number];