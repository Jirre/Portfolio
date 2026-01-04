"use client";
import { FilterBar } from "@/components/ui/filter-bar/filter-bar";
import { SkillGrid } from "@/features/skills/components/skill-grid";
import { Skill, SkillTag, skillTags } from "../types";
import { useState, useMemo } from "react";

interface SectionProps {
  skills: Skill[];
}

export const SkillsDisplay = ({skills}: SectionProps) => {
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
      <SkillGrid skills={filteredSkills} />
    </section>
  );
};