import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export default function LinkButton({ href, children, className = "" }: ButtonProps) {
  const baseStyles = `group relative h-12 mx-1 flex items-center justify-center
                     border border-dynamic rounded-xl transition-all duration-200 ${className}`;
  return (
    <Link
      href={href}
      className={`${baseStyles} text-zinc-700 hover:text-zinc-900 dark:text-zinc-400 
                 dark:hover:text-white border-dynamic hover:bg-white/5 cursor-pointer
                 font-black
                 backdrop-blur-xs shadow-lg hover:shadow-dynamic hover:shadow-[0_0_12px]`}
    >
      {children}
    </Link>
  );
}