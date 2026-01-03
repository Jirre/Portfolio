import { SectionHeader } from "@/components/ui/typography/section-header";
import { LuSearchCode } from "react-icons/lu";
import {Skills} from "./skills";
import {Hero} from "./hero";
import {Projects} from "@/app/(home)/projects";
import {getProject} from "@/utils/mdx/project-reader";

export default async function Home() {
  const projects = await getProject(["cat-tapper", "festicoin", "no-rush"]);

  return (
    <>
      <Hero />
      <Projects projects={projects.map(e => e.metadata)} />

      <SectionHeader icon={<LuSearchCode size={28} className="m-auto h-full"/>}>
        Skills
      </SectionHeader>
      <Skills />
    </>
  );
}
