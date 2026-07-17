"use client";

import { motion } from "framer-motion";
import { hairlineDraw, inView } from "@/lib/motion";

type SectionLabelProps = {
  children: string;
  className?: string;
};

/**
 * Mono uppercase eyebrow preceded by a short blue hairline that draws in on entry.
 * Light-first: muted steel label on white, the only blue is the leading hairline.
 * e.g.  ──  TECHNOLOGY
 */
export function SectionLabel({ children, className = "" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <motion.span
        className="block h-px w-9 origin-left bg-kauner-blue"
        variants={hairlineDraw}
        initial="hidden"
        whileInView="show"
        viewport={inView}
        aria-hidden
      />
      <span className="mono-label text-steel-500">{children}</span>
    </div>
  );
}
