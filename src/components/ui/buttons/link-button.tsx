import { BoxVariant } from "@/components/ui/box/styles";
import { buttonStyles } from "@/components/ui/buttons/styles";
import { cn } from "@/utils";
import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: BoxVariant;
  newTab?: boolean;
}

export function LinkButton({ href, children, className = "", variant = "default", newTab = false }: ButtonProps) {
  if (newTab) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={cn(buttonStyles[variant], className)}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cn(buttonStyles[variant], className)}>
      {children}
    </Link>
  )
}