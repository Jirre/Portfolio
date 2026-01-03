import { cn } from "@/utils";
import { ReactNode } from "react";

export const Box = ({children, className}: { children: ReactNode, className?: string }) => (
  <div className={
    cn(
      "bg-zinc-100/10 dark:bg-zinc-900/10 rounded-2xl border " +
      "border-zinc-950/10 dark:border-white/10 " +
      "backdrop-blur-xs shadow-lg", className)
  }>
    {children}
  </div>
)