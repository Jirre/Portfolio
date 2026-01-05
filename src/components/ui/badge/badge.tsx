import { Box } from "@/components/ui/box";
import { cn } from "@/utils";
import React, { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export const Badge = ({ children, className }: BadgeProps) => {
  return (
    <Box
      variant="badge"
      className={cn(
        "rounded-md shadow-sm p-1 py-0.5 h-fit inline-flex items-center justify-center mx-0.5",
        className
      )}
    >
      {children}
    </Box>
  );
};