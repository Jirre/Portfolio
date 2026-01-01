"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

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

  if (!mounted) return <div className="h-full px-4 w-[58px]" />;

  return (
    <button
      onClick={toggleTheme}
      className="ml-auto group relative h-12 w-12 mx-1 flex items-center justify-center
                 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white
                 transition-all duration-300
                 border border-white/10 hover:border-dynamic
                 rounded-xl hover:bg-white/5 cursor-pointer"
    >
      <div className="relative z-10">
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </div>
    </button>
  );
};