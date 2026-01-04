import { boxStyles, BoxVariant } from "@/components/ui/box/styles";
import { cn } from "@/utils";
import { ReactNode } from "react";

interface props {
  children: ReactNode;
  className?: string;
  variant?: BoxVariant;
}

export const Box = ({ children, className, variant = "default" }: props) => {
  return (
    <div className={cn(
      boxStyles[variant],
      className
    )}>
      {children}
    </div>
  )
}