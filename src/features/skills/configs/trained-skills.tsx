import { CSharp, GML } from "@/components/icons";
import { Skill } from "@/features/skills/types";
import { FaDatabase, FaJava, FaServer, FaVrCardboard } from "react-icons/fa";
import {
  SiCplusplus,
  SiCss3, SiDocker, SiGamemaker, SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs, SiP5Dotjs,
  SiPhp, SiPrisma, SiReact, SiTailwindcss,
  SiTypescript, SiUnity
} from "react-icons/si";



export const trainedSkills: Skill[] = [
  // Languages
  { name: "C#", icon: <CSharp size={40} color="#9179E4"/>, tags: ["game", "language", "*top"] },
  { name: "C++", icon: <SiCplusplus size={40} color="#659AD2"/>, tags: ["game", "language"] },
  { name: "CSS", icon: <SiCss3 size={40} color="#264de4"/>, tags: ["web", "language"] },
  { name: "GML", icon: <GML size={40} color="#8BD248"/>, tags: ["game", "language"] },
  { name: "HTML", icon: <SiHtml5 size={40} color="#E34F26"/>, tags: ["web", "language"] },
  { name: "Java", icon: <FaJava size={40} color="#5382a1"/>, tags: ["game", "language"] },
  { name: "Javascript", icon: <SiJavascript size={40} color="#F7DF1E"/>, tags: ["web", "language"] },
  { name: "PHP", icon: <SiPhp size={40} color="#777BB4"/>, tags: ["web", "language"] },
  { name: "SQL", icon: <FaDatabase size={40} className="text-black dark:text-white"/>, tags: ["web", "language"] },
  { name: "Typescript", icon: <SiTypescript size={40} color="#3178C6"/>, tags: ["web", "language", "frontend", "*top"] },

  // Frameworks & Libraries
  { name: "Next.js", icon: <SiNextdotjs size={40} className="text-black dark:text-white"/>, tags: ["web", "framework", "frontend", "backend", "*top"] },
  { name: "Node.js", icon: <SiNodedotjs size={40} color="#3C873A"/>, tags: ["web", "backend"] },
  { name: "P5.js", icon: <SiP5Dotjs size={40} color="#ED225D"/>, tags: ["game", "web", "framework", "frontend"] },
  { name: "Prisma", icon: <SiPrisma size={40} color="#0C344B"/>, tags: ["web", "framework", "backend"] },
  { name: "React", icon: <SiReact size={40} color="#61DAFB"/>, tags: ["web", "framework", "frontend", "*top"] },
  { name: "Tailwind", icon: <SiTailwindcss size={40} color="#38B2AC"/>, tags: ["web", "framework", "frontend"] },

  // Engines & Tools
  { name: "Docker", icon: <SiDocker size={40} color="#2496ED"/>, tags: ["web", "tool"] },
  { name: "Game Maker", icon: <SiGamemaker size={40} className="text-black dark:text-white"/>, tags: ["game", "engine"] },
  { name: "Git", icon: <SiGit size={40} color="#F05032"/>, tags: ["web", "game", "tool"] },
  { name: "Playfab", icon: <FaServer size={40} className="text-black dark:text-white"/>, tags: ["backend", "tool"] },
  { name: "Unity", icon: <SiUnity size={40} className="text-black dark:text-white"/>, tags: ["game", "engine", "*top"] },
  { name: "Vuforia", icon: <FaVrCardboard size={40} className="text-black dark:text-white"/>, tags: ["tool"] },
];