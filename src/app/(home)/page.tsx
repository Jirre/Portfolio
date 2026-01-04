import { LinkButton } from "@/components/ui/buttons";
import { SectionHeader } from "@/components/ui/typography/section-header";
import { ProjectCard } from "@/features/projects/components/project-card";
import { SkillsGrid, trainedSkills } from "@/features/skills";
import { LuCodeXml, LuSearchCode } from "react-icons/lu";
import {Hero} from "./_components/hero";
import {getProject} from "@/features/projects/utils/project-reader";

export default async function Home() {
  const projects = await getProject(["nailed-it", "herald", "no-rush"]);

  return (
    <>
      <Hero />

      <SectionHeader className="mb-4" icon={
        <LuCodeXml size={28} className="m-auto h-full"/>
      }>Featured Projects</SectionHeader>
      <section id="projects">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={i} metadata={p.metadata}/>
          ))}
        </div>
        <LinkButton href="/projects" className="mt-4 mx-auto px-16 w-64">View More</LinkButton>
      </section>

      <SectionHeader className="mb-4" icon={
        <LuSearchCode size={28} className="m-auto h-full"/>
      }>Skills</SectionHeader>
      <SkillsGrid skills={trainedSkills} />
    </>
  );
}
