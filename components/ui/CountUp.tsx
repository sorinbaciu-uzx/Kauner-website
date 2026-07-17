"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// RO thousands separator ("." → e.g. 30000 → "30.000").
const fmt = new Intl.NumberFormat("ro-RO");

// Animate only clean numbers, optionally "~"-prefixed / "+"-suffixed, with "."
// thousands separators. Anything with letters (e.g. "ISO 9001") or symbols
// (e.g. "#3") stays static.
const NUMERIC = /^~?[\d.]+\+?$/;

/**
 * Count-up number that runs once when scrolled into view. SSR/no-JS and
 * reduced-motion visitors see the final value immediately; everyone else sees
 * it tick up from zero. Non-numeric values render unchanged.
 */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduce = useReducedMotion();

  const animatable = NUMERIC.test(value);
  const prefix = value.startsWith("~") ? "~" : "";
  const suffix = value.endsWith("+") ? "+" : "";
  const target = animatable ? Number(value.replace(/[~+.]/g, "")) : 0;

  // null → render the raw value (SSR + before the animation arms).
  const [display, setDisplay] = useState<string | null>(null);

  // On the client, arm the counter at zero (stats sit below the fold).
  useEffect(() => {
    if (animatable && !reduce) setDisplay(fmt.format(0));
  }, [animatable, reduce]);

  useEffect(() => {
    if (!animatable || reduce || !inView) return;
    const controls = animate(0, target, {
      duration: 1.1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(fmt.format(Math.round(v))),
    });
    return () => controls.stop();
  }, [animatable, reduce, inView, target]);

  if (!animatable || reduce) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref}>
      {display === null ? value : `${prefix}${display}${suffix}`}
    </span>
  );
}
