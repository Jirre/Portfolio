"use client";

import { ExperienceCard, experiences } from "@/features/experiences";
import { ExperienceType, experienceTypes } from "@/features/experiences/types/_experience";
import { ReactNode, useMemo, useState } from "react";
import { FilterBar } from "@/components/ui/filter-bar";
import { FaBriefcase, FaGraduationCap, FaTrophy } from "react-icons/fa";
import { motion } from "motion/react";

// 1. Move icon logic out of the component body
const TYPE_ICONS: Record<ExperienceType, ReactNode> = {
  achievement: <FaTrophy size={20} />,
  education: <FaGraduationCap size={22} />,
  job: <FaBriefcase size={20} />,
};

export const Timeline = () => {
  const [activeFilter, setActiveFilter] = useState<ExperienceType | "all">("all");

  const filteredExperiences = useMemo(() => (
    experiences.filter(exp => activeFilter === "all" || exp.type === activeFilter)
  ), [activeFilter]);

  return (
    <div className="py-8">
      <FilterBar
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
        options={["all", ...experienceTypes]}
      />

      <div className="relative w-full mx-auto my-12 px-4">
        {/* The Vertical Line */}
        <div className="absolute left-10 lg:left-1/2 -translate-x-1/2 top-4 bottom-4 w-0.5 bg-dynamic/30 z-0" />

        <div className="flex flex-col gap-12 lg:gap-0">
          {filteredExperiences.map((item, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                layout
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  layout: { duration: 0.4 }
                }}
                key={`${item.type}-${index}`}
                className={`
                  relative flex flex-col lg:flex-row items-center justify-between w-full 
                  ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'}
                  ${index !== 0 ? 'lg:-mt-12' : ''} 
                `}
              >
                {/* Card */}
                <div className="w-full lg:w-[45%] z-20">
                  <ExperienceCard
                    experience={item}
                    className="ml-16 lg:ml-0"
                  />
                </div>

                {/* Icon */}
                <motion.div
                  layout
                  suppressHydrationWarning
                  className="absolute left-6 lg:left-1/2 top-10 lg:top-1/2 -translate-x-1/2 -translate-y-1/2
                                w-12 h-12 rounded-full bg-zinc-50 dark:bg-zinc-950
                                border-4 border-dynamic z-30 flex items-center justify-center
                                text-dynamic shadow-lg shadow-dynamic/20">
                  {TYPE_ICONS[item.type]}
                </motion.div>
                <div className="hidden lg:block w-[45%]" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};