"use client";
import SmallButton from "@/components/ui/buttons/small-button";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {LuMail} from "react-icons/lu";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
  <footer className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center w-full">
    <div className="flex-1 text-sm text-zinc-500 dark:text-zinc-400">
      © {currentYear} Jirre Verkerk
    </div>

    <div className="flex-1 flex justify-end">
      <SmallButton onClick={() => window.open("https://github.com/Jirre/", "_blank")} >
        <FaGithub size={18} />
      </SmallButton>
      <SmallButton onClick={() => window.open("https://linkedin.com/in/jirre-verkerk-a92183105/", "_blank")} >
        <FaLinkedin size={18} />
      </SmallButton>
      <SmallButton onClick={() => window.open("mailto:jirreamon@gmail.com", "_blank")} >
        <LuMail size={18} />
      </SmallButton>
    </div>
  </footer>
  );
}