import { CarouselSlide } from "@/features/carousel/types/carousel-slide";
import { ReactNode } from "react";

export type Project = {
  file: string;
  metadata: ProjectMetadata;
  content: ReactNode;
}

export type Collaborator = {
  name: string;
  role?: string;
  url: string;
  img: string;
}

export type Link = {
  name: string;
  url: string;
  icon: string;
}

export interface ProjectMetadata {
  title: string;
  date: string;
  priority?: number;
  thumbnail: string;
  summary: string;
  collaborators?: Collaborator[];
  links?: Link[];
  github?: string;
  types: string[];
  stack: string[];
  platforms?: string[];
  tags?: string[];
  slug: string;

  slides: CarouselSlide[];
}