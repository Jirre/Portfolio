import {Box} from "@/components/ui/box";
import {ReactNode} from "react";

export const SectionHeader = ({ id, children, icon }: { id?: string; children: ReactNode; icon: ReactNode }) => (
  <div className="relative w-fit mx-auto font-mono text-zinc-950 dark:text-white text-xl lg:text-3xl uppercase my-8 font-bold">
    <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2">
      <Box className="size-12 shadow-dynamic shadow-[0_0_12px] m-0">
        {icon}
      </Box>
    </div>
    <h1 id={id} className="m-0 pl-2">
      {children}
    </h1>
  </div>
)