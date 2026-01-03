"use client";
import {Box} from "@/components/ui/box";
import {cn} from "@/utils";
import {ProjectMetadata} from "@/utils/mdx/project-reader";
import Link from "next/link";
import React from 'react';
import {FaGlobe} from "react-icons/fa";
import {SiGithub} from "react-icons/si";
// Added icon imports

const colors: Record<string, string> = {
  'app': 'bg-blue-300 dark:bg-blue-700',
  'game': 'bg-green-300 dark:bg-green-700',
  'tool': 'bg-purple-300 dark:bg-purple-700',
  'website': 'bg-yellow-300 dark:bg-yellow-700',
  'other': 'bg-gray-300 dark:bg-gray-700',
}

const ProjectCard = ({metadata}: {metadata: ProjectMetadata}) => {
  return (
    <Link className="group relative rounded-2xl p-0.5 transition-all duration-300 hover:scale-[1.02]"
          href={`/projects/${metadata.slug}`}>
      <Box className="relative h-full w-full overflow-hidden flex flex-col transition-all duration-300
                 hover:border-dynamic hover:bg-white/5 cursor-pointer
                 backdrop-blur-xs shadow-lg
                 hover:shadow-dynamic hover:shadow-[0_0_12px]">

        {/* Thumbnail Header */}
        <div className="relative h-48 w-full overflow-hidden border-b border-zinc-200 dark:border-zinc-800">
          <img
            src={`/projects/${metadata.slug}/${metadata.thumbnail}`}
            alt={"thumbnail"}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div
            className={cn("absolute top-3 left-3 rounded-full bg-zinc-950/70 px-3 py-1 text-xs font-bold text-zinc-950 dark:text-white backdrop-blur-md border border-white/10 uppercase",
              colors[metadata.type.toLowerCase()] ?? "bg-zinc-950/70")}>
            {metadata.type}
          </div>
        </div>

        <div className="flex flex-col p-5 gap-2 relative">
          <h3 className="text-xl font-bold font-mono mb-2 group-hover:text-dynamic transition-colors">
            {metadata.title}
          </h3>
          <span className={"text-zinc-950/50 dark:text-white/50 italic font-mono text-xs -mt-2 mb-2"}>
            {metadata.date}
          </span>

          <div className="mt-auto flex flex-wrap gap-2 pr-16">
            {metadata.stack.map((e) => (
              <span
                key={e}
                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300/50 dark:border-zinc-700/50"
              >
                {e}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap gap-2 pr-16">
            {metadata.tags.map((e) => (
              <span
                key={e}
                className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-zinc-200/50 dark:bg-zinc-800/50 text-zinc-700 dark:text-zinc-300 border border-zinc-300/50 dark:border-zinc-700/50"
              >
                {e}
              </span>
            ))}
          </div>

          <div className="absolute bottom-5 right-5 flex items-center gap-2 text-zinc-400 dark:text-zinc-500 transition-colors group-hover:text-dynamic">
            {metadata.github && <SiGithub size={16} />}
            {metadata.link && <FaGlobe size={16} />}
          </div>
        </div>
      </Box>
    </Link>
  );
};

export default ProjectCard;