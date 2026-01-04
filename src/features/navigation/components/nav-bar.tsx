import { navLinks } from "@/features/navigation/config/nav-links";
import { LuExternalLink } from "react-icons/lu";
import { NavLink } from "./nav-link";

export const NavBar = () => (
  <nav className="hidden lg:flex items-center gap-2 h-full mx-auto">
    {
      navLinks.map(({name, href}) => <NavLink key={name} href={href}>{name}</NavLink>)
    }
    <div className="w-0.5 h-8 bg-dynamic/50" />
    <NavLink href="/resume.pdf" newTab>Resume <LuExternalLink className="size-4" /></NavLink>
  </nav>
)