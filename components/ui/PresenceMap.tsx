"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
 * §4.11 — a discrete abstract "global presence" field: scattered office nodes
 * (100+ țări · 180+ birouri) with România marked by a blue, gently pulsing pin.
 * Not a geographic map — a calm, light-first network. Reduced-motion: no pulse.
 */

// Deterministic scatter of office nodes (illustrative, not geographic).
const NODES: [number, number][] = [
  [40, 60], [90, 40], [130, 90], [180, 55], [230, 100], [70, 120],
  [150, 140], [210, 165], [260, 70], [300, 120], [340, 90], [380, 150],
  [420, 60], [110, 185], [260, 190], [330, 175], [400, 200], [60, 165],
  [200, 210], [150, 60], [310, 45], [370, 110], [440, 140], [90, 90],
];

const RO: [number, number] = [250, 118]; // Kauner node

export function PresenceMap() {
  const reduce = useReducedMotion() ?? false;

  return (
    <svg
      viewBox="0 0 480 240"
      className="w-full"
      role="img"
      aria-label="Rețea globală de peste 180 de birouri în 100+ țări, cu Kauner ca punct în România."
    >
      {/* faint reference grid */}
      <g stroke="#E4E4E2" strokeWidth={1}>
        {[60, 120, 180].map((y) => (
          <line key={y} x1={20} y1={y} x2={460} y2={y} />
        ))}
      </g>

      {/* office nodes */}
      {NODES.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={2.5} fill="#B7B7C0" />
      ))}

      {/* România — Kauner pin */}
      {!reduce && (
        <motion.circle
          cx={RO[0]}
          cy={RO[1]}
          r={6}
          fill="none"
          stroke="#0D009F"
          strokeWidth={1.5}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ opacity: [0.6, 0, 0.6], scale: [1, 2.6, 1] }}
          transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          style={{ transformOrigin: `${RO[0]}px ${RO[1]}px` }}
        />
      )}
      <circle cx={RO[0]} cy={RO[1]} r={5} fill="#0D009F" />
      <text x={RO[0] + 12} y={RO[1] + 4} fontSize={11} className="font-mono" fill="#0B0B0C">
        România · Kauner
      </text>

      <text x={20} y={228} fontSize={11} className="font-mono" fill="#8A8A94">
        100+ țări · 180+ birouri
      </text>
    </svg>
  );
}
