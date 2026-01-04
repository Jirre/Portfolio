import { boxStyles } from "@/components/ui/box/styles";
import { cn } from "@/utils";

const buttonHoverStyles = `
  group h-12 mx-1 flex items-center justify-center
  cursor-pointer 
  hover:bg-background/[0.03]
  hover:shadow-[0_0_12px] hover:shadow-dynamic hover:dark:shadow-dynamic-dark)]
  active:scale-95
`;

export const buttonStyles: Record<string, string> = {
  default: cn(boxStyles.default, "text-foreground/75 hover:text-foreground", buttonHoverStyles),
  highlight: cn(boxStyles.highlight, "text-foreground hover:text-dynamic", buttonHoverStyles),
  glass: cn(boxStyles.glass, "text-foreground/75 hover:text-foreground", buttonHoverStyles),
};