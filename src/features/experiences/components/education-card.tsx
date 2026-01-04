import { Education } from "../types";
import { Box } from "@/components/ui/box";
import { H3 } from "@/components/ui/typography/headers";
import { cn } from "@/utils";

export const EducationCard = ({education, className}: {education: Omit<Education, "type" | "date">, className?: string}) => {
  const { name, location, timespan, source } = education;

  return (
    <Box className={cn("p-6", className)}>
      <div className="flex justify-between items-start mb-2">
          <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">
              {timespan}
          </span>
        <div className="lg:hidden text-primary bg-primary/10 p-2 rounded-lg" />
      </div>

      <H3 className="text-xl font-bold">{name}</H3>
      <div className="flex justify-between mb-2">
        <p className="text-sm italic opacity-70">{source}</p>
        <p className="text-sm italic opacity-70 text-right">{location}</p>
      </div>
    </Box>
  )
}