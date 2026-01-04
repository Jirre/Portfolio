import { Li } from "@/components/ui/typography/lists";
import { Job } from "../types";
import { Box } from "@/components/ui/box";
import { H3 } from "@/components/ui/typography/headers";
import { cn } from "@/utils";

export const JobCard = ({job, className}: {job: Omit<Job, "type" | "date">, className?: string}) => {
  const { name, employer, location, timespan, description, achievements } = job;

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
        <p className="text-sm italic opacity-70">{employer}</p>
        <p className="text-sm italic opacity-70 text-right">{location}</p>
      </div>

      <p className="text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="mt-4 pt-4 border-t border-zinc-100 dark:border-zinc-800">
        <span className="text-xs font-bold uppercase tracking-widest text-dynamic">Achievements:</span>
        <ul className="list-outside ml-5 mt-3 space-y-2">
          {achievements.map((e, i) => (
            <Li key={i}>
              {e}
            </Li>
          ))}
        </ul>
      </div>
    </Box>
  );
}