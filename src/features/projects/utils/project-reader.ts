import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { ProjectMetadata } from "../types/project";

const PROJECTS_DIR = path.join(process.cwd(), 'src/projects');

export async function getProject(files: string[]) {
  const projects = await Promise.all(
    files.map((file) => getProjectInternal(file))
  );

  return projects.filter((p) => p !== null);
}

export async function getAllProject() {
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

  return {
    file,
    metadata: {
      slug: file,
      ...data,
    } as ProjectMetadata,
    content,
  };
}