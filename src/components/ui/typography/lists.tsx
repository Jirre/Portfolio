import { cn } from "@/utils";
import { HTMLAttributes } from "react";

export const Li = ({className, ...props}: HTMLAttributes<HTMLLIElement>) =>
  <li className={cn("list-item marker:content-['◆\\a0\\a0'] marker:text-primary marker:text-dynamic")} {...props}>
    {props.children}
  </li>