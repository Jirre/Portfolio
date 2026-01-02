import {Hero} from "./hero";
import {Projects} from "@/app/(home)/projects";
import {SectionHeader} from "@/components/ui/typography/section-header";
import {getProject} from "@/utils/mdx/project-reader";
import {LuSearchCode} from "react-icons/lu";



export default async function Home() {
  const projects = await getProject(["cat-tapper", "festicoin", "no-rush"]);

  return (
    <>
      <Hero />

      <SectionHeader icon={<LuSearchCode size={32} className="m-auto h-full" /> }>
        Skills
      </SectionHeader>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">

      </section>

      <Projects projects={projects.map(e => e.metadata)} />
    </>
  );
}
