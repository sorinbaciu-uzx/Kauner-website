"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * A6 (§4.6) — the sacrificial protective glass swapped through a sealed access
 * door: a dirty cartridge slides out, a clean one seats back in. Loops in view;
 * reduced-motion shows the seated, clean state.
 */

const LOOP = { duration: 4.6, repeat: Infinity, ease: "easeInOut" as const };

export function CoverSlideAnim() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion() ?? false;
  const play = inView && !reduce;

  return (
    <div ref={ref} className="rounded-sharp border border-line bg-paper-2 p-5">
      <svg viewBox="0 0 240 190" className="w-full" role="img" aria-label="Schimbarea geamului de protecție sacrificial printr-o ușă de acces etanșă.">
        {/* head housing */}
        <rect x={40} y={64} width={96} height={62} rx={4} fill="none" stroke="#26262B" strokeWidth={1.8} />
        {/* sealed access slot on the right */}
        <line x1={136} y1={74} x2={136} y2={116} stroke="#B7B7C0" strokeWidth={2} />
        <text x={88} y={56} fontSize={8} textAnchor="middle" className="font-mono" fill="#8A8A94">cap</text>
        <text x={186} y={140} fontSize={8} textAnchor="middle" className="font-mono" fill="#8A8A94">ușă acces</text>

        {/* cartridge (frame + glass pane) — slides out and back */}
        <motion.g
          initial={{ x: 0 }}
          animate={play ? { x: [0, 70, 70, 0] } : { x: 0 }}
          transition={play ? { ...LOOP, times: [0, 0.35, 0.6, 1] } : undefined}
        >
          <rect x={96} y={78} width={34} height={34} rx={2} fill="#FFFFFF" stroke="#26262B" strokeWidth={1.6} />
          <rect x={103} y={85} width={20} height={20} rx={1} fill="none" stroke="#0D009F" strokeWidth={1.4} />
          {/* contamination on the pane — clears while the cartridge is out (swap) */}
          <motion.g
            initial={{ opacity: 0 }}
            animate={play ? { opacity: [0.85, 0.85, 0, 0, 0.85] } : { opacity: 0 }}
            transition={play ? { ...LOOP, times: [0, 0.35, 0.48, 0.95, 1] } : undefined}
          >
            <circle cx={110} cy={92} r={2.4} fill="#7C2D12" opacity={0.7} />
            <circle cx={117} cy={99} r={1.8} fill="#7C2D12" opacity={0.6} />
            <circle cx={113} cy={100} r={1.4} fill="#7C2D12" opacity={0.6} />
          </motion.g>
        </motion.g>
      </svg>
    </div>
  );
}
