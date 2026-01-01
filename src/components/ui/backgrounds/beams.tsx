"use client";
import React, {useEffect, useMemo, useState} from "react";
import { motion } from "motion/react";
import { cn } from "@/utils";

const PATH_TEMPLATES = [
  {
    fn: (o: number) =>
      `M${-380+o} ${-189-o} C${-380+o} ${-189-o} ${-312+o} ${216-o} ${152+o} ${343-o} C${616+o} ${470-o} ${684+o} ${875-o} ${684+o} ${875-o}`,
    viewBox: "-400 -600 3500 2500"
  },
  {
    fn: (o: number) =>
      `M${-1500+o} ${-500-o} C${-1000+o} ${0-o} ${-500+o} ${500-o} ${o} ${1000-o} C${250+o} ${1250-o} ${500+o} ${1500-o} ${500+o} ${1500-o}`,
    viewBox: "-500 -500 2000 2000"
  },
  {
    fn: (o: number) =>
      `M${o-1000} ${-500} C${o-800} ${500} ${o-1200} ${1000} ${o-1000} ${2000} C${o-1000} ${2000} ${o-1000} ${2000} ${o-1000} ${2000}`,
    viewBox: "-500 0 1500 1500"
  },
  {
    fn: (o: number) =>
      `M${-1000+o*1.5} ${-500} C${-750+o*1.1} ${125} ${-500+o*0.7} ${750} ${-250+o*0.4} ${1375} C${-125+o*0.2} ${1687} ${o} ${2000} ${o} ${2000}`,
    viewBox: "-500 -200 2000 1800"
  },
  {
    fn: (o: number) =>
      `M${-500+o} ${-500} C${500+o} ${500} ${-500+o} ${1000} ${500+o} ${2000} C${500+o} ${2000} ${500+o} ${2000} ${500+o} ${2000}`,
    viewBox: "-800 0 2400 1600"
  }
];

export const BackgroundBeams = React.memo(
  ({ className }: { className?: string }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
      setIsMounted(true);
    }, []);

    const { paths } = useMemo(() => {
      if (!isMounted) return { paths: [], viewBox: "0 0 1000 1000" };

      const template = PATH_TEMPLATES[Math.floor(Math.random() * PATH_TEMPLATES.length)];

      // 200 paths for a rich, dense texture
      const generatedPaths = Array.from({ length: 200 }).map((_, i) => {
        // Offset multiplier increased to 25 to spread 200 lines across 5000 units
        const offset = i * 16;
        return template.fn(offset);
      });

      return { paths: generatedPaths, viewBox: template.viewBox };
    }, [isMounted]);

    if (!isMounted) return null;
    return (
      <motion.div
        className={cn(
          "absolute inset-0 flex h-full w-full items-center justify-center mask-no-repeat mask-size-[40px]",
          className,
        )}
        animate={{ "--beam-hue": [0, 360] } as any}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <svg
          className="pointer-events-none absolute z-0 h-full w-full"
          width="100%"
          height="100%"
          viewBox="0 0 696 316"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {paths.map((path, index) => (
            <path
              key={`bg-path-` + index}
              d={path}
              stroke="url(#paint0_radial_242_278)"
              strokeOpacity="0.15"
              strokeWidth="0.5"
            ></path>
          ))}

          {paths.map((path, index) => (
            <motion.path
              key={`path-` + index}
              d={path}
              stroke={`url(#linearGradient-${index})`}
              strokeOpacity="0.4"
              strokeWidth="1"
            ></motion.path>
          ))}
          <defs>
            {paths.map((_, index) => (
              <motion.linearGradient
                id={`linearGradient-${index}`}
                key={`gradient-${index}`}
                initial={{
                  x1: "0%",
                  x2: "0%",
                  y1: "0%",
                  y2: "0%",
                }}
                animate={{
                  x1: ["5%", "100%"],
                  x2: ["0%", "95%"],
                  y1: ["5%", "100%"],
                  y2: ["0%", `${93 + Math.random() * 8}%`],
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  ease: "easeInOut",
                  repeat: Infinity,
                  delay: Math.random() * -10,
                }}
              >
                <stop stopColor="hsl(var(--beam-hue), 100%, 75%)" stopOpacity="0" offset="0%"></stop>
                <stop stopColor="hsl(var(--beam-hue), 100%, 75%)" offset="50%"></stop>
                <stop stopColor="hsl(var(--beam-hue), 100%, 75%)" stopOpacity="0" offset="100%"></stop>
              </motion.linearGradient>
            ))}

            <radialGradient
              id="paint0_radial_242_278"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(352 34) rotate(90) scale(555 1560.62)"
            >
              <stop offset="0.0666667" stopColor="#d4d4d4"></stop>
              <stop offset="0.243243" stopColor="#d4d4d4"></stop>
              <stop offset="0.43594" stopColor="white" stopOpacity="0"></stop>
            </radialGradient>
          </defs>
        </svg>
      </motion.div>
    );
  },
);

BackgroundBeams.displayName = "BackgroundBeams";