import { Box } from "@/components/ui/box";
import { LinkButton } from "@/components/ui/buttons";
import { H1 } from "@/components/ui/typography/headers";
import { SectionHeader } from "@/components/ui/typography/section-header";
import { AchievementCard, achievements, EducationCard, educations } from "@/features/experiences";
import { SkillsGrid, trainedSkills } from "@/features/skills";
import { FaFileDownload, FaGraduationCap, FaTrophy, FaUser } from "react-icons/fa";
import { LuSearchCode } from "react-icons/lu";

export default function AboutPage() {
  const today = new Date();
  const birthDate = new Date(1995, 5, 20);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age -= 1;
  }

  return (
    <>
      <H1 className="text-5xl font-black w-full text-center my-4 mt-8">About Me</H1>
      <p className="text-lg font-semibold w-full text-center text-zinc-950/65 dark:text-white/65">Find out more about my background, skills, and achievements</p>

      <div className={"grid grid-cols-1 lg:grid-cols-2 gap-6"}>
        <div className="flex flex-col">
          <section>
            <SectionHeader icon={<FaUser size={20} className="m-auto h-full" />}>Who I am</SectionHeader>
            <Box className="flex flex-col w-full p-4 mb-2 px-8 gap-2 text-foreground/80">
              <p>I'm <strong className="text-foreground">Jirre Verkerk</strong>, a <span suppressHydrationWarning>{age}</span> year old <strong className="text-foreground">Game Developer</strong> and <strong className="text-foreground">Teacher</strong> from the Netherlands. Currently, I focus on imparting the enjoyment of programming on the next generation, while both deepening my skills in Game and Web technologies.</p>
              <p>With a deep-seated passion for <strong className="text-foreground">System Architecture</strong>, I work hard to design efficient systems that support other developers and team members. This passion has allowed me to create deep technical solutions that are not only functional but also maintainable and scalable. I enjoy leveraging design patterns and established frameworks to effectively solve the complex problems that arise during development.</p>
              <p>Beyond development, I find immense value in mentorship. As a teacher, I aim to demystify complex concepts such as data structures and the architectural patterns used in the development of both games and full-stack web applications.</p>
            </Box>
            <Box className="p-4 px-8 flex flex-col justify-between items-center">
                <span className="font-bold">Need a formal version of my Resume?</span>
                <span className="text-sm opacity-70">Download my full CV for a detailed look at my career.</span>
            </Box>
            <LinkButton href="/resume.pdf" newTab className="mt-2 mx-0 border-dynamic dark:border-dynamic flex gap-2"><FaFileDownload /> Download PDF</LinkButton>
          </section>

          <section className="flex flex-col gap-2">
            <SectionHeader icon={<FaGraduationCap size={20} className="m-auto h-full" />}>Education</SectionHeader>
            {
              educations.map((e) => (
                <EducationCard key={e.name} education={e}/>
              ))
            }
          </section>

          <section className="flex flex-col gap-2">
            <SectionHeader icon={<FaTrophy size={20} className="m-auto h-full" />}>Achievements</SectionHeader>
            {
              achievements.map((a) => (
                <AchievementCard key={a.title} achievement={a}/>
              ))
            }
          </section>
        </div>

        <div className="hidden lg:flex flex-col">
          <section>
            <SectionHeader icon={<LuSearchCode size={28} className="m-auto h-full" />}>Skills</SectionHeader>
            <SkillsGrid skills={trainedSkills} />
          </section>
        </div>
      </div>
    </>
  );
}
