import { Skills } from "@/app/(home)/skills";
import { Age } from "@/app/about/age";
import { Box } from "@/components/ui/box";
import AnchorButton from "@/components/ui/buttons/anchor-button";
import { SectionHeader } from "@/components/ui/typography/section-header";
import { FaFileDownload, FaGraduationCap, FaTrophy, FaUser } from "react-icons/fa";
import { LuSearchCode } from "react-icons/lu";

export default function About() {
  return (
    <>
      <h1 className="text-5xl font-black w-full text-center my-4">About Me</h1>
      <p className="text-lg font-semibold w-full text-center text-zinc-950/65 dark:text-white/65">Find out more about my background, skills, and achievements</p>

      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
        <div className="flex flex-col">
          <section>
            <SectionHeader variant="left" icon={<FaUser size={20} className="m-auto h-full" />}>Who I am</SectionHeader>
            <Box className="flex flex-col w-full p-4 mb-2 px-8 gap-2 text-zinc-950/65 dark:text-white/65">
              <p>I'm <strong>Jirre Verkerk</strong>, a <Age /> year old <strong>Game Developer</strong> and <strong>Teacher</strong> from the Netherlands. Currently, I focus on imparting the enjoyment of programming on the next generation, while both deepening my skills in Game and Web technologies.</p>
              <p>With a deep-seated passion for <strong>System Architecture</strong>, I work hard to design efficient systems that support other developers and team members. This passion has allowed me to create deep technical solutions that are not only functional but also maintainable and scalable. I enjoy leveraging design patterns and established frameworks to effectively solve the complex problems that arise during development.</p>
              <p>Beyond development, I find immense value in mentorship. As a teacher, I aim to demystify complex concepts such as data structures and the architectural patterns used in the development of both games and full-stack web applications.</p>
            </Box>
            <Box className="p-4 px-8 flex justify-between items-center bg-secondary/10 border-2 flex-col">
                <span className="font-bold">Need a formal version of my Resume?</span>
                <span className="text-sm opacity-70">Download my full CV for a detailed look at my career.</span>
            </Box>
            <AnchorButton href="/resume.pdf" target="_blank" className="mt-2 mx-0 border-dynamic dark:border-dynamic flex gap-2"><FaFileDownload /> Download PDF</AnchorButton>
          </section>

          <section className="flex flex-col gap-2">
            <SectionHeader variant="left" icon={<FaGraduationCap size={20} className="m-auto h-full" />}>Education</SectionHeader>
            <Box className="flex flex-col w-full p-4 px-8 gap-2">
              <h3>Pedagogical Didactic Certificate - Post-Bachelor</h3>
              <span className="italic opacity-65">University of Applied Sciences Utrecht</span>
              <div className="flex justify-between">
                <span className="opacity-65 font-semibold">November 2025 - July 2027</span>
                <span>Utrecht, The Netherlands</span>
              </div>
            </Box>
            <Box className="flex flex-col w-full p-4 px-8 gap-2">
              <h3>Game Development - MBO</h3>
              <span className="italic opacity-65">Grafisch Lyceum Utrecht</span>
              <div className="flex justify-between">
                <span className="opacity-65 font-semibold">August 2013 - July 2017</span>
                <span>Utrecht, The Netherlands</span>
              </div>
            </Box>
            <Box className="flex flex-col w-full p-4 px-8 gap-2">
              <h3>HAVO - Nature and Technique</h3>
              <span className="italic opacity-65">Leo Kanner College</span>
              <div className="flex justify-between">
                <span className="opacity-65 font-semibold">August 2008 - July 2013</span>
                <span>Leiden, The Netherlands</span>
              </div>
            </Box>
          </section>

          <section className="flex flex-col gap-2">
            <SectionHeader variant="left" icon={<FaTrophy size={20} className="m-auto h-full" />}>Achievements</SectionHeader>
            <Box className="flex flex-col w-full p-4 px-8 gap-2">
              <h3>Dutch Game Award 2015</h3>
              <span className="font-semibold">Best Student Game Design</span>
              <span className="italic opacity-65">Won for the game 'Vector Flight'</span>
            </Box>
            <Box className="flex flex-col w-full p-4 px-8 gap-2">
              <h3>Indigo Awards 2016</h3>
              <span className="font-semibold">Audience Award</span>
              <span className="italic opacity-65">Tied first place for the game 'Vector Flight'</span>
            </Box>
            <Box className="flex flex-col w-full p-4 px-8 gap-2">
              <h3>Dutch Digital Delta IT Talent Grant 2016</h3>
              <span className="italic opacity-65">€ 2500</span>
            </Box>
          </section>
        </div>

        <div className="hidden lg:flex flex-col">
          <section>
            <SectionHeader variant="left" icon={<LuSearchCode size={28} className="m-auto h-full" />}>Skills</SectionHeader>
            <Skills />
          </section>
        </div>
      </div>
    </>
  );
}
