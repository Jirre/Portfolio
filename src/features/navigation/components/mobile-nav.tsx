"use client";
import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
import { NavModal } from "./nav-modal";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <>
      <button
        onClick={toggle}
        className="lg:hidden relative z-100 p-2 text-zinc-500 dark:text-zinc-400 cursor-pointer"
        aria-label="Toggle Menu"
      >
        {isOpen ? <LuX size={32}/> : <LuMenu size={32}/>}
      </button>

      <NavModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};