"use client";
import { Box } from "@/components/ui/box";
import { FilterBar } from "@/components/ui/filter-bar/filter-bar";
import { SkillCard } from "@/features/skills/components/skill-card";
import { AnimatePresence, motion } from "framer-motion";
import { Skill, SkillTag, skillTags } from "../types";
import { useState, useMemo } from "react";

interface SectionProps {
  skills: Skill[];
}

export const SkillsGrid = ({skills}: SectionProps) => {
  const [activeFilter, setActiveFilter] = useState<SkillTag>("all");

  const filteredSkills = useMemo(() => (
    skills.filter(skill => activeFilter === "all" || skill.tags?.includes(activeFilter))
  ), [activeFilter]);

  return (
    <section id="skills" className="flex flex-col gap-6 w-full">
      <FilterBar
        options={skillTags}
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />

      <Box className="p-8 min-h-80 overflow-hidden">
        <motion.div
          layout
          className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-6 justify-items-center"
        >
          <AnimatePresence mode='popLayout'>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.1 } }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              >
                <SkillCard skill={skill} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Box>
    </section>
  );
};