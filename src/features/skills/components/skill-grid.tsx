import { Box } from "@/components/ui/box";
import { SkillCard } from "./skillCard";
import { Skill } from "../types";
import { AnimatePresence, motion } from "framer-motion";

export const SkillGrid = ({ skills }: { skills: Skill[] }) => (
  <Box className="p-8 min-h-80 overflow-hidden">
    <motion.div
      layout
      className="grid grid-cols-[repeat(auto-fill,minmax(7rem,1fr))] gap-6 justify-items-center"
    >
      <AnimatePresence mode='popLayout'>
        {skills.map((skill) => (
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
);