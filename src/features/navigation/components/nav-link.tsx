import { cn } from "@/utils";
import Link from "next/link";
import { ReactNode } from "react";

export const NavLink = ({
                   href,
                   children,
                   onClick,
                   isMobile,
                   newTab
                 }: {
  href: string;
  children: ReactNode;
  onClick?: () => void;
  isMobile?: boolean,
  newTab?: boolean
}) => {
  const classes = cn(
    "group relative flex items-center justify-center font-bold tracking-widest uppercase transition-colors duration-300",
    "text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",
    isMobile ? "text-3xl" : "h-full px-4 text-sm"
  );

  const Components = () => <>
    <span className="relative z-10 flex gap-2">{children}</span>
    <span className={cn(
      "absolute bg-dynamic transition-all duration-300 ease-in-out rounded-full",
      isMobile
        ? "-bottom-2 left-0 w-0 h-1 group-hover:w-full"
        : "bottom-4 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-1/2"
    )}/></>

  return (newTab ? (
    <a target="_blank" href={href} rel="noopener noreferrer" onClick={onClick} className={classes}>
      <Components/>
    </a>
  ) : <Link
    href={href}
    onClick={onClick}
    className={classes}
  >
    <Components/>
  </Link>);
}