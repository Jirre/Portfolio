"use client";
import { FilterBar } from "@/components/ui/filter-bar";
import { ProjectCard } from "@/features/projects/components/project-card";
import { Project, ProjectType, projectTypes } from "@/features/projects/types";
import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";

export const ProjectsGrid = ({projects}: {projects: Project[]}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectType | "all">("all");

  const filteredProjects = useMemo(() => (
    projects.filter(project => activeFilter === "all" || project.metadata.types.includes(activeFilter))
  ), [activeFilter]);

  return (
    <section id="skills" className="flex flex-col gap-6 w-full">
      <FilterBar
        options={["all", ...projectTypes]}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <motion.div
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center"
      >
        <AnimatePresence mode='popLayout'>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.file}
              layout
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            >
              <ProjectCard metadata={project.metadata} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}