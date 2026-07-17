"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * A laser "cutting" sweep for equipment card images: a thin blue beam with a
 * soft glow travels top→bottom across the image on a slow loop, evoking a laser
 * head passing over the material. Staggered per card (via `delay`) so the grid
 * reads as an ambient wave of scanning rather than all firing at once.
 *
 * Drop inside a `relative overflow-hidden` image container. Purely decorative
 * and disabled under prefers-reduced-motion.
 */
export function LaserScan({ delay = 0 }: { delay?: number }) {
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <div
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      aria-hidden
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(27,15,209,0) 44%, rgba(27,15,209,0.10) 49%, rgba(27,15,209,0.85) 50%, rgba(27,15,209,0.10) 51%, rgba(27,15,209,0) 56%)",
        }}
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: ["-100%", "100%"], opacity: [0, 0.9, 0.9, 0] }}
        transition={{
          duration: 2.4,
          ease: "linear",
          repeat: Infinity,
          repeatDelay: 2.8,
          delay,
        }}
      />
    </div>
  );
}
