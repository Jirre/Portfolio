import ProjectCard from "@/app/(home)/components/project-card";
import LinkButton from "@/components/ui/buttons/link-button";
import {SectionHeader} from "@/components/ui/typography/section-header";
import {ProjectMetadata} from "@/utils/mdx/project-reader";
import {LuCodeXml} from "react-icons/lu";

export const Projects = ({projects}: {projects: ProjectMetadata[]}) =>
{
  return (
    <section>
      <SectionHeader icon={
        <LuCodeXml size={32} className="m-auto h-full" />
      } >Featured Projects</SectionHeader>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={i} metadata={p} />
        ))}
      </div>
      <LinkButton href="/projects" className="mt-4 mx-auto px-16 w-64">View More</LinkButton>
    </section>
  )
}