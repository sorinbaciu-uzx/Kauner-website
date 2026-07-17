"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { easeEngineered } from "@/lib/motion";

type Props = {
  /** One or more sets of labels. Each set scrolls, then the strip
      cross-fades to the next set and cycles back around. */
  sets: string[][];
  /** How long (seconds) each set dwells on screen before the swap.
      Falls back to 12s when a set has no entry. */
  dwell?: number[];
  /** Scroll speed in pixels per second — kept constant across sets so
      the motion reads the same regardless of how much text a set holds. */
  speed?: number;
};

/**
 * Premium, always-in-motion capability strip. Each set glides right→left in a
 * seamless loop; every few seconds the strip cross-fades to the next set.
 * Honours prefers-reduced-motion by rendering a calm static row instead.
 */
export function CapabilityMarquee({ sets, dwell, speed = 44 }: Props) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  // Advance through the sets, each with its own dwell time.
  useEffect(() => {
    if (reduce || sets.length < 2) return;
    const ms = (dwell?.[active] ?? 12) * 1000;
    const id = setTimeout(
      () => setActive((i) => (i + 1) % sets.length),
      ms,
    );
    return () => clearTimeout(id);
  }, [active, reduce, sets.length, dwell]);

  // Reduced motion → a single, still row (the first set).
  if (reduce) {
    return (
      <div className="flex justify-center py-5">
        <Segment items={sets[0]} />
      </div>
    );
  }

  return (
    <div
      className="relative grid overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent 0%, #000 7%, #000 93%, transparent 100%)",
      }}
    >
      <AnimatePresence>
        <motion.div
          key={active}
          className="[grid-area:1/1]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: easeEngineered }}
        >
          <MarqueeTrack items={sets[active]} speed={speed} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/** A single set, tiled twice and translated by exactly one tile width so the
    loop is seamless. Duration is derived from the measured width to hold a
    constant pixel-per-second speed. */
function MarqueeTrack({ items, speed }: { items: string[]; speed: number }) {
  const tileRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const el = tileRef.current;
    if (!el) return;
    const measure = () => setWidth(el.scrollWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [items]);

  const duration = width ? width / speed : 24;

  return (
    <motion.div
      className="flex w-max will-change-transform"
      animate={width ? { x: [0, -width] } : undefined}
      transition={{ duration, ease: "linear", repeat: Infinity }}
    >
      <Segment ref={tileRef} items={items} />
      <Segment items={items} aria-hidden />
    </motion.div>
  );
}

const Segment = forwardRef<
  HTMLDivElement,
  { items: string[] } & React.HTMLAttributes<HTMLDivElement>
>(function Segment({ items, ...rest }, ref) {
  return (
    <div ref={ref} className="flex shrink-0 items-center py-5" {...rest}>
      {items.map((item) => (
        <div key={item} className="flex items-center">
          <span className="mono-label whitespace-nowrap px-6 text-white/55 md:px-8">
            {item}
          </span>
          {/* hairline separator, echoing the original divided strip */}
          <span aria-hidden className="h-3 w-px bg-white/15" />
        </div>
      ))}
    </div>
  );
});
