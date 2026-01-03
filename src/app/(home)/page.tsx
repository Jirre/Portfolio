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
      <Skills />
    </>
  );
}
