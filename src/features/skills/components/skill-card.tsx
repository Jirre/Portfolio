import { Box } from "@/components/ui/box";
import { Skill } from "@/features/skills/types";
import { cn } from "@/utils";
import { SkillTag } from "@/features/skills";
import { FaStar } from "react-icons/fa";

interface SkillCardProps {
  skill: Skill;
  className?: string;
}

export const SkillCard = ({ skill, className }: SkillCardProps) => {
  const { name, icon, tags } = skill;
  const isTop = tags?.includes("*top" as SkillTag) ?? false;

  return (
    <div className={cn("relative group size-24 cursor-default", className)}>
      {isTop && (
        <div className="absolute -top-2 -right-2 z-20 pointer-events-none">
          <FaStar size={24} className="text-dynamic drop-shadow-sm" />
        </div>
      )}

      <Box className="flex flex-col items-center justify-center gap-4 size-full hover:scale-105 hover:rotate-2 transition-all duration-200">
        <div className="flex items-center justify-center transition-transform group-hover:scale-110">
          {icon}
        </div>
        <span className="text-[10px] font-mono font-bold leading-none text-zinc-950/65 dark:text-white/65">
          {name}
        </span>
      </Box>
    </div>
  );
};