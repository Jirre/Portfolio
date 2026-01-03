import { Box } from "@/components/ui/box";
import { cn } from "@/utils";
import { ReactNode } from "react";

export const SectionHeader = ({id, children, icon, className, variant = "center"}: {
  id?: string;
  children: ReactNode;
  icon: ReactNode;
  className?: string;
  variant?: "left" | "center"
}) => (
  <div
    className={cn(
      "font-mono text-zinc-950 dark:text-white text-xl lg:text-3xl uppercase my-8 font-bold",
      variant === "left" && "flex items-center",
      variant === "center" && "relative w-fit mx-auto",
      className)}>
    <div className={cn("mr-4",
      variant === "center" && "absolute right-full top-1/2 -translate-y-1/2"
    )}>
      <Box className="size-12 shadow-dynamic shadow-[0_0_12px] m-0">
        {icon}
      </Box>
    </div>
    <h1 id={id} className="m-0 pl-2">
      {children}
    </h1>
  </div>
)