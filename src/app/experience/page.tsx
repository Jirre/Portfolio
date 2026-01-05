import { Timeline } from "@/app/experience/_components/timeline";
import { H1 } from "@/components/ui/typography/headers";

export default function ExperiencePage() {
  return (
    <>
      <H1 className="text-5xl font-black w-full text-center my-4 mt-8">Experience</H1>
      <p className="text-lg font-semibold w-full text-center text-zinc-950/65 dark:text-white/65">My professional journey throughout the years</p>

      <Timeline />
    </>
  );
}