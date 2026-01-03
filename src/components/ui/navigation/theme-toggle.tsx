"use client";

import Button from "@/components/ui/buttons/button";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <Button onClick={toggleTheme} className="size-12">
      {mounted && (isDark ? <LuSun size={18}/> : <LuMoon size={18}/>)}
    </Button>
  );
};