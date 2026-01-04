import { cn } from "@/utils";
import { FC, HTMLAttributes } from "react";

export const Anchor: FC<HTMLAttributes<HTMLAnchorElement>> = ({className, ...props}) => (
  <a {...props}
     className={cn("font-semibold underline underline-offset-4 decoration-dynamic hover:text-dynamic", className)}>
    {props.children}
  </a>);
