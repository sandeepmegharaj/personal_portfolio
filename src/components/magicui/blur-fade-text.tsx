"use client";

import { cn } from "@/lib/utils";
import { motion, Variants } from "motion/react";
import { useMemo } from "react";

interface BlurFadeTextProps {
  text: string;
  className?: string;
  variant?: {
    hidden: { y: number };
    visible: { y: number };
  };
  duration?: number;
  characterDelay?: number;
  delay?: number;
  yOffset?: number;
  animateByCharacter?: boolean;
}
const BlurFadeText = ({
  text,
  className,
  variant,
  duration = 0.25,
  characterDelay = 0.02,
  delay = 0,
  yOffset = 4,
  animateByCharacter = false,
}: BlurFadeTextProps) => {
  const defaultVariants: Variants = {
    hidden: { y: -yOffset, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;
  const characters = useMemo(() => Array.from(text), [text]);

  if (animateByCharacter) {
    return (
      <div className="flex">
        {characters.map((char, i) => {
          const charVariants: Variants = {
            hidden: { y: -yOffset, opacity: 0 },
            visible: { y: 0, opacity: 1 },
          };
          return (
            <motion.span
              key={i}
              initial="hidden"
              animate="visible"
              variants={charVariants}
              transition={{
                duration,
                delay: Math.min(delay + i * characterDelay, 0.2),
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              className={cn("inline-block", className)}
              style={{ width: char.trim() === "" ? "0.2em" : "auto" }}
            >
              {char}
            </motion.span>
          );
        })}
      </div>
    );
  }

  return (
    <div className="flex">
      <motion.span
        initial="hidden"
        animate="visible"
        variants={combinedVariants}
        transition={{
          duration,
          delay: Math.min(delay, 0.1),
          ease: [0.21, 0.47, 0.32, 0.98],
        }}
        className={cn("inline-block", className)}
      >
        {text}
      </motion.span>
    </div>
  );
};

export default BlurFadeText;
