import { H1 } from "@/components/ui/typography/headers";
import { ProjectsGrid } from "@/features/projects/components/projects-grid";
import { getAllProjects } from "@/features/projects/utils/project-reader";

export default async function Projects() {
  const projects = await getAllProjects();
  return (
    <>
      <H1 className="text-5xl font-black w-full text-center my-4 mt-8">Projects</H1>
      <p className="text-lg font-semibold w-full text-center text-zinc-950/65 dark:text-white/65">Many of the projects I have worked on over the years</p>

      <ProjectsGrid projects={projects} />
    </>
  );
}