"use client";

import { motion, useReducedMotion } from "framer-motion";

const FADE_DURATION = 0.3;

export function PageTransition({ children }: { children: React.ReactNode }) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={{ opacity: shouldReduceMotion ? 1 : 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: shouldReduceMotion ? 0 : FADE_DURATION,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
}
