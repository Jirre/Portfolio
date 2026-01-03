"use client";
import Button from "@/components/ui/buttons/button";
import {SkillCard} from "@/components/ui/cards/skill-card";
import { GamemakerOne, SvgCSharp } from "@/components/svgs";
import {Box} from "@/components/ui/box";
import {SectionHeader} from "@/components/ui/typography/section-header";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { FaDatabase, FaJava, FaStar } from "react-icons/fa";
import {LuSearchCode} from "react-icons/lu";
import {
  SiCplusplus,
  SiCss3, SiDocker,
  SiGamemaker, SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs, SiNodedotjs,
  SiP5Dotjs, SiPhp, SiPrisma,
  SiReact, SiTailwindcss,
  SiTypescript,
  SiUnity
} from "react-icons/si";

const SKILLS_DATA = [
  // Languages
  { name: "C#", icon: <SvgCSharp size={40} color="#9179E4"/>, tags: ["game", "language", "top"] },
  { name: "C++", icon: <SiCplusplus size={40} color="#659AD2"/>, tags: ["game", "language"] },
  { name: "CSS", icon: <SiCss3 size={40} color="#264de4"/>, tags: ["web", "language"] },
  { name: "GML", icon: <GamemakerOne size={40} color="#8BD248"/>, tags: ["game", "language"] },
  { name: "HTML", icon: <SiHtml5 size={40} color="#E34F26"/>, tags: ["web", "language"] },
  { name: "Java", icon: <FaJava size={40} color="#5382a1"/>, tags: ["game", "language"] },
  { name: "Javascript", icon: <SiJavascript size={40} color="#F7DF1E"/>, tags: ["web", "language"] },
  { name: "PHP", icon: <SiPhp size={40} color="#777BB4"/>, tags: ["web", "language"] },
  { name: "SQL", icon: <FaDatabase size={40} className="text-black dark:text-white"/>, tags: ["web", "language"] },
  { name: "Typescript", icon: <SiTypescript size={40} color="#3178C6"/>, tags: ["web", "language", "frontend", "top"] },

  // Frameworks & Libraries
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black dark:text-white"/>, tags: ["web", "framework", "frontend", "backend", "top"] },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#3C873A"/>, tags: ["web", "backend"] },
  { name: "P5.js", icon: <SiP5Dotjs size={40} color="#ED225D"/>, tags: ["game", "web", "framework", "frontend"] },
  { name: "Prisma", icon: <SiPrisma size={40} color="#0C344B"/>, tags: ["web", "framework", "backend"] },
  { name: "React", icon: <SiReact size={40} color="#61DAFB"/>, tags: ["web", "framework", "frontend", "top"] },
  { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC"/>, tags: ["web", "framework", "frontend"] },

  // Engines & Tools
  { name: "Docker", icon: <SiDocker size={40} color="#2496ED"/>, tags: ["web", "tool"] },
  { name: "Game Maker", icon: <SiGamemaker size={40} className="text-black dark:text-white"/>, tags: ["game", "engine"] },
  { name: "Git", icon: <SiGit size={40} color="#F05032"/>, tags: ["web", "game", "tool"] },
  { name: "Unity", icon: <SiUnity size={40} className="text-black dark:text-white"/>, tags: ["game", "engine", "top"] },
].sort((a, b) => a.name.localeCompare(b.name));

const SKILL_TAGS = [
  "all",
  "top",
  "language",
  "game",
  "web",
  "engine",
  "framework",
  "frontend",
  "backend",
  "tool",
]

export const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills = useMemo(() => {
    return SKILLS_DATA.filter(skill =>
      activeFilter === "all" || skill.tags.includes(activeFilter)
    );
  }, [activeFilter]);

  return (
    <section className="flex flex-col gap-6">
      <SectionHeader icon={<LuSearchCode size={32} className="m-auto h-full"/>}>
        Skills
      </SectionHeader>

      {/* Filter Bar Box */}
      <Box className="p-4 flex flex-wrap justify-center gap-2">
        {SKILL_TAGS.map((tag) => (
          <Button
            key={tag}
            onClick={() => setActiveFilter(tag)}
            className={`px-4 py-1 rounded-full border transition-all capitalize text-sm font-medium gap-1
              ${activeFilter === tag
              ? "bg-dynamic/20 hover:bg-dynamic/30 text-primary-foreground border-dynamic dark:border-dynamic scale-105"
              : "bg-secondary/20 border-transparent hover:border-primary/50"
            }`}
          >
            {tag === "top" && <FaStar size={12} />}
            {tag}
          </Button>
        ))}
      </Box>

      <Box className="p-8 min-h-80 overflow-hidden">
        <motion.div
          layout
          className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-4 justify-items-center"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout // This handles the smooth sliding of items
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  mass: 1
                }}
              >
                <SkillCard name={skill.name} icon={skill.icon} tags={skill.tags} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Box>
    </section>
  );
};