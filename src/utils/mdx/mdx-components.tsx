import { H1, H2, H3 } from "@/components/ui/typography/headers";
import { Box } from "@/components/ui/box";
import { Li } from "@/components/ui/typography/lists";
import { Anchor } from "@/features/navigation/components/anchor";
import { cn } from "@/utils";
import { HTMLAttributes } from "react";

export const mdxComponents = {
  h1: (props: HTMLAttributes<HTMLHeadingElement>) => <H1 children={props.children} {...props} />,
  h2: (props: HTMLAttributes<HTMLHeadingElement>) => <H2 children={props.children} className={cn(props.className, "mb-2 mt-4")} {...props} />,
  h3: (props: HTMLAttributes<HTMLHeadingElement>) => <H3 children={props.children} {...props} />,
  p: (props: HTMLAttributes<HTMLParagraphElement>) => (
    <p className="leading-7 text-foreground/80" {...props} />
  ),
  ul: (props: HTMLAttributes<HTMLUListElement>) => (
    <ul className="list-disc pl-6 space-y-2 text-foreground/80" {...props} />
  ),
  li: (props: HTMLAttributes<HTMLLIElement>) => <Li className="text-foreground/80" {...props} />,
  strong: (props: HTMLAttributes<HTMLElement>) => <strong className="font-bold text-foreground" {...props} />,
  Box,
  a: Anchor
};
