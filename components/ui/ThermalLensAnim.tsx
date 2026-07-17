"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * A5 (§4.6) — the thermal-lensing effect: contamination lands on the protective
 * glass, absorbs the beam, heats, and drifts the focal point off target. Loops
 * only while in view; reduced-motion shows the clean, correct-focus state.
 */

const LOOP = { duration: 5, repeat: Infinity, ease: "easeInOut" as const };

export function ThermalLensAnim() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion() ?? false;
  const play = inView && !reduce;

  return (
    <div ref={ref} className="rounded-sharp border border-line bg-paper-2 p-5">
      <svg viewBox="0 0 240 190" className="w-full" role="img" aria-label="Efectul de lentilă termică: contaminarea de pe geamul de protecție deviază punctul de focalizare.">
        {/* focusing lens */}
        <ellipse cx={120} cy={26} rx={26} ry={7} fill="none" stroke="#26262B" strokeWidth={1.6} />
        {/* converging rays to the glass */}
        <path d="M96,30 L120,96 M144,30 L120,96" stroke="#1B0FD1" strokeWidth={1.4} fill="none" opacity={0.7} />
        {/* protective glass */}
        <line x1={70} y1={100} x2={170} y2={100} stroke="#B7B7C0" strokeWidth={3} strokeLinecap="round" />
        <text x={176} y={103} fontSize={8} className="font-mono" fill="#8A8A94">geam</text>

        {/* clean beam → on-target focal spot */}
        <motion.g
          initial={{ opacity: 1 }}
          animate={play ? { opacity: [1, 1, 0, 0, 1] } : { opacity: 1 }}
          transition={play ? { ...LOOP, times: [0, 0.25, 0.55, 0.9, 1] } : undefined}
        >
          <line x1={120} y1={100} x2={120} y2={168} stroke="#0D009F" strokeWidth={2} />
          <circle cx={120} cy={168} r={4} fill="#0D009F" />
        </motion.g>

        {/* drifted beam → off-target, diffuse spot */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={play ? { opacity: [0, 0, 1, 1, 0] } : { opacity: 0 }}
          transition={play ? { ...LOOP, times: [0, 0.35, 0.6, 0.9, 1] } : undefined}
        >
          <line x1={120} y1={100} x2={140} y2={168} stroke="#B45309" strokeWidth={2} opacity={0.85} />
          <circle cx={140} cy={168} r={7} fill="#B45309" opacity={0.35} />
          <circle cx={140} cy={168} r={3.5} fill="#B45309" />
        </motion.g>

        {/* contamination + heat halo on the glass */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={play ? { opacity: [0, 1, 1, 0] } : { opacity: 0 }}
          transition={play ? { ...LOOP, times: [0, 0.35, 0.85, 1] } : undefined}
        >
          <circle cx={120} cy={100} r={9} fill="#B45309" opacity={0.22} />
          <circle cx={120} cy={100} r={3.5} fill="#7C2D12" />
        </motion.g>

        {/* nominal focal guide line */}
        <line x1={110} y1={176} x2={130} y2={176} stroke="#B7B7C0" strokeWidth={1} />
        <text x={120} y={188} fontSize={7.5} textAnchor="middle" className="font-mono" fill="#8A8A94">
          focar nominal
        </text>
      </svg>
    </div>
  );
}
