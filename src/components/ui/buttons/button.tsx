"use client";
import { boxStyles, BoxVariant } from "@/components/ui/box/styles";
import { buttonStyles } from "@/components/ui/buttons/styles";
import {cn} from "@/utils";
import { ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
  variant?: BoxVariant;
}

export function Button({ onClick, children, className = "", variant = "default" }: ButtonProps) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={cn(boxStyles[variant], className, "grayscale")}>
        {children}
      </div>
    );
  }

  return (
    <button onClick={onClick} className={cn(buttonStyles[variant], className)}>
      {children}
    </button>
  )
}