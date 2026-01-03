import {cn} from "@/utils";
import {AnchorHTMLAttributes} from "react";

export default function AnchorButton({ className, children, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...props}
      className={cn(`group relative h-12 mx-1 flex items-center justify-center
                     border border-zinc-950/10 dark:border-white/10
                     rounded-xl transition-all duration-200
                     text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 
                 dark:hover:text-white hover:border-dynamic hover:bg-white/5 cursor-pointer
                 backdrop-blur-xs shadow-lg
                 hover:shadow-dynamic hover:shadow-[0_0_12px]`, className)}
    >
      {children}
    </a>
  )
}

