import { Achievement } from "../types";
import { Box } from "@/components/ui/box";
import { H3 } from "@/components/ui/typography/headers";
import { cn } from "@/utils";

export const AchievementCard = ({achievement, className}: {achievement: Omit<Achievement, "type" | "date">, className?: string}) => {
  const { title, subtitle, description } = achievement;

  return (
    <Box className={cn("p-6", className)}>
      <H3 className="text-xl font-bold">{title}</H3>
      {subtitle && <div className="flex justify-between mb-2">
        <p className="text-sm italic opacity-70">{subtitle}</p>
      </div>}
      <p className="text-sm leading-relaxed mb-4">
        {description}
      </p>
    </Box>
  )
}