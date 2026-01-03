"use client";
import AnchorButton from "@/components/ui/buttons/anchor-button";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {LuMail} from "react-icons/lu";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <footer className="max-w-8xl mx-auto px-4 h-16 flex items-center justify-center w-full border-t border-zinc-950/10 dark:border-white/10">
    <div className="flex-1 text-sm text-zinc-500 dark:text-zinc-400">
      © {currentYear} Jirre Verkerk, All rights reserved.
    </div>

    <div className="flex-1 flex justify-end gap-2">
      <AnchorButton href="https://github.com/Jirre/" target="_blank" rel="noreferrer" className="size-12" >
        <FaGithub size={18} />
      </AnchorButton>
      <AnchorButton href="https://linkedin.com/in/jirre-verkerk-a92183105/" target="_blank" rel="noreferrer" className="size-12" >
        <FaLinkedin size={18} />
      </AnchorButton>
      <AnchorButton href="mailto:jirreamon@gmail.com" target="_blank" rel="noreferrer" className="size-12" >
        <LuMail size={18} />
      </AnchorButton>
    </div>
  </footer>
  );
}