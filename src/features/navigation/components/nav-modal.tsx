"use client";

import { NavLink } from "@/features/navigation/components/nav-link";
import { navLinks } from "@/features/navigation/config/nav-links";
import { useScrollLock } from "@/hooks/use-scroll-lock";
import { cn } from "@/utils";

interface props {
  isOpen: boolean;
  onClose: () => void;
}

export const NavModal = ({isOpen, onClose}: props) => {
  useScrollLock(isOpen);

  return (
    <nav className="flex items-center gap-4">
      <div className={cn(
        "fixed inset-0 -m-2 outline w-screen h-screen bg-white dark:bg-zinc-950 outline-white dark:outline-zinc-950",
        "flex flex-col items-center justify-center gap-10",
        "transition-all duration-500 ease-in-out lg:hidden z-90",
        isOpen
          ? "opacity-100 pointer-events-auto translate-y-0"
          : "opacity-0 pointer-events-none -translate-y-5"
      )}>
        <div className="flex flex-col items-center gap-8">
          {
            navLinks.map(({name, href}) => <NavLink key={name} href={href} onClick={onClose} isMobile>{name}</NavLink>)
          }
          <div className="w-16 h-1 bg-dynamic/50"/>
          <NavLink href="/resume.pdf" onClick={onClose} isMobile newTab>Resume</NavLink>
        </div>
      </div>
    </nav>
  )
}