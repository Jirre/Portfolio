import {Box} from "@/components/ui/box";
import { ReactNode } from "react";
import { FaStar } from "react-icons/fa";

interface SkillCardProps {
  name: string;
  icon: ReactNode;
  tags?: string[];
}

export const SkillCard = ({ name, icon, tags }: SkillCardProps) => (
  <div className="relative group size-24 cursor-default">
    {tags?.includes("top") && (
      <div className="absolute -top-2 -right-2 z-20 pointer-events-none text-primary-foreground rounded-full p-0.5">
        <FaStar size={24} className="text-dynamic" />
      </div>
    )}

    <Box
      className="flex flex-col items-center justify-center gap-4 size-full hover:scale-105 hover:rotate-2 transition-all duration-100"
      key={name}
    >
      <div className="flex items-center justify-center">
        {icon}
      </div>

      <span className="text-xs font-mono font-bold leading-none text-zinc-950/65 dark:text-white/65">
        {name}
      </span>
    </Box>
  </div>
);