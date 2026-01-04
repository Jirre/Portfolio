import { createSlide, MediaType } from "@/features/carousel/types/carousel-slide";
import { parseMdx } from "@/utils/mdx/parse-mdx";
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectMetadata } from "../types/project";

const PROJECTS_DIR = path.join(process.cwd(), 'src/features/projects/content');

export async function getProject(files: string[]) {
  const projects = await Promise.all(
    files.map((file) => getProjectInternal(file))
  );

  return projects.filter((p) => p !== null);
}

export async function getAllProjects() {
  const fileNames = fs.readdirSync(PROJECTS_DIR);

  const slugs = fileNames
    .filter((fn) => fn.endsWith('.mdx'))
    .map((fn) => fn.replace(/\.mdx$/, ''));

  return await getProject(slugs);
}

async function getProjectInternal(file: string) {
  const fullPath = path.join(PROJECTS_DIR, `${file}.mdx`);

  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const { gallery, ...meta }: { gallery?: {type: MediaType, url: string}[] } = data;

  return {
    file,
    metadata: {
      slug: file,
      slides: gallery?.map((slide) => createSlide(slide)) ?? [],
      ...meta,
    } as ProjectMetadata,
    content: await parseMdx(content),
  };
}