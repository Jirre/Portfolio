import { cn } from "@/utils";
import { ReactNode, ElementType } from "react";

interface HeadingProps {
  children: ReactNode;
  id?: string;
  className?: string;
  as?: ElementType;
}

// H1: The Hero Title
export const H1 = ({ children, className, id, as: Component = "h1" }: HeadingProps) => (
  <Component
    id={id}
    className={cn(
    "font-mono text-4xl lg:text-6xl font-bold leading-tight tracking-tight",
    "text-foreground",
    className
  )}>
    {children}
  </Component>
);

// H2: The Section Header
export const H2 = ({ children, className, id, as: Component = "h2" }: HeadingProps) => (
  <Component
    id={id}
    className={cn(
      "relative font-mono text-2xl lg:text-3xl font-extrabold text-center uppercase tracking-widest",
      "text-foreground py-6 mb-12",
      "after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:border-b-4 after:border-dynamic",
      className
    )}
  >
    {children}
  </Component>
);

// H3: The Content/Card Header
export const H3 = ({ children, className, id, as: Component = "h3" }: HeadingProps) => (
  <Component
    id={id}
    className={cn(
      "font-mono text-xl font-bold leading-snug",
      "border-b border-dynamic/30 pb-2 mb-4",
      "text-foreground",
      className
    )}
  >
    {children}
  </Component>
);