import { Badge } from "@/components/ui/badge";
import { Box } from "@/components/ui/box";
import { LinkButton } from "@/components/ui/buttons";
import { H3 } from "@/components/ui/typography/headers";
import { ProjectMetadata, ProjectType, projectTypeColors } from "@/features/projects/types";
import { cn } from "@/utils";
import { FC } from "react";
import { FaGithub } from "react-icons/fa";
import { DynamicIcon } from "@/components/icons/dynamic-icon";

type Props = {
  className?: string;
  metadata: ProjectMetadata
}

export const Details: FC<Props> = ({className, metadata}) =>
  <div className={cn("flex flex-col gap-2", className)}>
    <Box className="p-4">
      <H3>{metadata.title}</H3>
      <span className="text-foreground/65 italic font-mono text-xs">{metadata.date}</span>
      <table className="w-full">
        <tbody className="*:not-last:border-b *not-last:border-border *:border-foreground/50 *:*:py-2">
        <tr>
          <td><strong>Project Type:</strong></td>
          <td>
            <Badge key={metadata.type}
                   className={projectTypeColors[metadata.type as ProjectType]}>{metadata.type}</Badge>
          </td>
        </tr>
        <tr>
          <td><strong>Platforms:</strong></td>
          <td>
            {metadata.platforms.map((platform) => <Badge key={platform}>{platform}</Badge>)}
          </td>
        </tr>
        <tr>
          <td><strong>Stack:</strong></td>
          <td>
            {metadata.stack.map((tool) => <Badge key={tool}>{tool}</Badge>)}
          </td>
        </tr>
        <tr>
          <td><strong>Tags:</strong></td>
          <td>
            {metadata.tags.map((tag) => <Badge key={tag}>{tag}</Badge>)}
          </td>
        </tr>
        </tbody>
      </table>
    </Box>
    <div className="flex justify-center lg:flex-col gap-2">
      {
        metadata.links?.map((link) => <LinkButton key={link.name} variant="highlight" href={link.url} className="px-8">
          <DynamicIcon name={link.icon} size={20} className={"mr-2"} /> {link.name}
        </LinkButton>)

      }
      {
        metadata.github &&
          <LinkButton variant="highlight" href={metadata.github} className="px-8">
              <FaGithub size={20} className={"mr-2"} /> Github Repository
          </LinkButton>
      }
    </div>
  </div>;