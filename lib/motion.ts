import type { Variants } from "framer-motion";

// Engineered ease — decisive, no overshoot (cubic-bezier tuple).
export const easeEngineered: [number, number, number, number] = [0.16, 1, 0.3, 1];

// Reveal: opacity 0->1 + translateY 16->0, 500ms, ease-out.
export const reveal: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeEngineered },
  },
};

// Stagger container — 80ms between children.
export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

// Hairline draw-in (scaleX from left).
export const hairlineDraw: Variants = {
  hidden: { scaleX: 0, opacity: 0.6 },
  show: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: easeEngineered },
  },
};

// Shared viewport config for whileInView.
export const inView = { once: true, amount: 0.25 } as const;
