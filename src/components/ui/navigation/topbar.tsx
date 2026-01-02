"use client";
import {useState, useEffect} from "react";
import {Box} from "@/components/ui/box";
import {ThemeToggle} from "@/components/ui/theme-toggle";
import {cn} from "@/utils";
import Link from "next/link";
import {ReactNode} from "react";
import {LuExternalLink, LuMenu, LuX} from "react-icons/lu";

const Links = [
  {name: "Home", href: "/"},
  {name: "Projects", href: "/projects"},
  {name: "About", href: "/about"},
]

export const Topbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when the mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full h-24 p-2 z-50">
      <Box className="mx-auto flex items-center justify-between max-w-7xl h-full px-4">
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-100 p-2 text-zinc-500 dark:text-zinc-400 cursor-pointer"
          aria-label="Toggle Menu"
        >
          {isOpen ? <LuX size={32}/> : <LuMenu size={32}/>}
        </button>

        <div className="flex flex-col justify-between items-center gap-0.5 mx-4 text-zinc-950 dark:text-white">
          <span className="font-bold uppercase mx-4 m-0.5 font-mono text-lg">Jirre Verkerk</span>
          <div className="w-full h-0.5 bg-dynamic" />
          <span className="text-sm mx-4 opacity-65 italic font-mono">Game Programmer</span>
        </div>

        <div className="hidden md:flex items-center gap-2 h-full mx-auto">
          {
            Links.map(({name, href}) => <NavLink key={name} href={href}>{name}</NavLink>)
          }
          <div className="w-0.5 h-8 bg-dynamic/50" />
          <NavLink href="/resume.pdf" newTab>Resume <LuExternalLink className="size-4" /></NavLink>
        </div>

        <div className="flex items-center gap-4">
          <div className={cn(
            "fixed inset-0 -m-2 outline w-screen h-screen bg-white dark:bg-zinc-950 outline-white dark:outline-zinc-950",
            "flex flex-col items-center justify-center gap-10",
            "transition-all duration-500 ease-in-out md:hidden z-90",
            isOpen
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-5"
          )}>
            <div className="flex flex-col items-center gap-8">
              {
                Links.map(({name, href}) => <NavLink key={name} href={href} onClick={() => setIsOpen(false)} isMobile>{name}</NavLink>)
              }
              <div className="w-16 h-1 bg-dynamic/50"/>
              <NavLink href="/resume.pdf" onClick={() => setIsOpen(false)} isMobile newTab>Resume</NavLink>
            </div>
          </div>
        </div>
        <ThemeToggle/>
      </Box>
    </nav>
  );
};

const NavLink = ({
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