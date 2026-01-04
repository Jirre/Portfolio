export type Project = {
  file: string;
  metadata: ProjectMetadata;
  content: string;
}

export interface ProjectMetadata {
  title: string;
  date: string;
  thumbnail: string;
  summary: string;
  link?: string;
  github?: string;
  type: string;
  stack: string[];
  platforms: string[];
  tags: string[];
  slug: string;
}