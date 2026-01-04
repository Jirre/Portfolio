import { cn } from "@/utils";

const variants = [
  "default",
  "highlight",
  "glass",
  "badge"
] as const

export type BoxVariant = typeof variants[number];

const baseStyle = "rounded-2xl border backdrop-blur-xs shadow-lg transition-all duration-300 text-foreground";

export const boxStyles: Record<string, string> = {
  default: cn(baseStyle, "bg-background/10 border-foreground/10"),
  highlight: cn(baseStyle, "bg-background/20 border-dynamic"),
  glass: cn(baseStyle, "bg-background/70 backdrop-blur-md border-foreground/10"),
  badge: cn(baseStyle, "rounded-md text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-none border-foreground/20 text-foreground/75")
};