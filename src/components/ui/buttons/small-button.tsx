"use client";

import { ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

export default function SmallButton({ onClick, children, className = "" }: ButtonProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const baseStyles = `group relative size-12 mx-1 flex items-center justify-center
                     border border-zinc-950/10 dark:border-white/10
                     rounded-xl transition-all duration-200 ${className}`;

  if (!mounted) {
    return (
      <div className={`${baseStyles} bg-white/5 opacity-50 cursor-default`}>
        <div className="relative z-10 grayscale">{children}</div>
      </div>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 
                 dark:hover:text-white hover:border-dynamic hover:bg-white/5 cursor-pointer
                 backdrop-blur-xs shadow-lg
                 hover:shadow-dynamic hover:shadow-[0_0_12px]`}
    >
      <div className="relative z-10">{children}</div>
    </button>
  );
}