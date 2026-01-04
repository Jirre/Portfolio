import { Badge } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { H3 } from "@/components/ui/typography/headers";
import { projectTypeColors } from "../types/project-type";
import { ProjectMetadata } from "../types/project";
import { cn } from "@/utils";
import Link from "next/link";
import { FaGlobe } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

export const ProjectCard = ({ metadata }: { metadata: ProjectMetadata }) => {
  const typeKey = metadata.type.toLowerCase();

  return (
    <Link className="group relative rounded-2xl p-0.5 transition-all duration-300 hover:scale-[1.02]"
          href={`/projects/${metadata.slug}`}>
      <Box className="relative h-full w-full overflow-hidden flex flex-col transition-all duration-300
                 hover:border-dynamic hover:bg-white/5 cursor-pointer
                 backdrop-blur-xs shadow-lg
                 hover:shadow-dynamic hover:shadow-[0_0_12px]">
        <div className="relative h-48 w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          {/* Thumbnail */}
          <img
            src={`/projects/${metadata.slug}/${metadata.thumbnail}`}
            alt={metadata.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Project Type Badge */}
          <div className={cn(
            "absolute top-3 left-3 rounded-full px-3 py-1 text-[10px] font-bold backdrop-blur-md border uppercase tracking-widest border-0",
            projectTypeColors[typeKey] || projectTypeColors.other
          )}>
            {metadata.type}
          </div>
        </div>

        <div className="flex flex-col p-5 grow gap-4">
          {/* Project Title and Date */}
          <div>
            <H3 className="text-xl font-bold font-mono group-hover:text-dynamic transition-colors line-clamp-1">
              {metadata.title}
            </H3>
            <span className="text-zinc-500 italic font-mono text-xs">
              {metadata.date}
            </span>
          </div>

          <span className="text-foreground/75 text-sm line-clamp-3 h-16">
            {metadata.summary}
          </span>

          {/* Combined Stack and Tags using the Badge component */}
          <div className="flex flex-col gap-1.5 pr-10">
            <div className="flex flex-wrap gap-1.5">
              {metadata.stack.map((item) => (
                <Badge key={item}>
                  {item}
                </Badge>
              ))}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {metadata.tags.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>

          {/* Social Icons - absolute to keep them in place */}
          <div className="absolute bottom-5 right-5 flex items-center gap-2 text-zinc-400 transition-colors group-hover:text-dynamic">
            {metadata.github && <SiGithub size={18} />}
            {metadata.link && <FaGlobe size={18} />}
          </div>
        </div>
      </Box>
    </Link>
  );
};