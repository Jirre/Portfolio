import {Box} from "@/components/ui/box";
import {ReactNode} from "react";

export const SectionHeader = ({ children, icon }: { children: ReactNode; icon: ReactNode }) => (
  <div className="flex font-mono items-stretch gap-4 text-zinc-950 dark:text-white text-xl lg:text-3xl uppercase my-8 font-bold">
    <div className="flex items-center p-0">
      <Box className="size-12 shadow-dynamic shadow-[0_0_12px] m-0" >
        {icon}
      </Box>
    </div>
    <span className="flex-1 flex flex-col justify-between">
    <div className="my-auto">{children}</div>
    <div className="h-0.5 w-full bg-linear-to-r from-dynamic to-transparent" />
  </span>
  </div>
)