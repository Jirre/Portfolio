import { Box } from "@/components/ui/box";
import { H2 } from "@/components/ui/typography/headers";
import { cn } from "@/utils";
import { ReactNode } from "react";

export const SectionHeader = ({id, children, icon, className}: {
  id?: string;
  children: ReactNode;
  icon: ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "font-mono text-zinc-950 dark:text-white text-xl lg:text-3xl uppercase my-8 font-bold relative w-fit mx-auto",
      className)}>
    <div className={"mr-4 absolute right-full top-1/2 -translate-y-1/2"}>
      <Box className="size-12 shadow-dynamic shadow-[0_0_12px]">
        {icon}
      </Box>
    </div>
    <H2 id={id} className="m-0 pl-2">
      {children}
    </H2>
  </div>
)