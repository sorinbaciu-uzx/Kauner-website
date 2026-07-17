"use client";

import { motion, useReducedMotion } from "framer-motion";

/*
 * A9 (§4.11) — the vertical-integration wheel: R&D → Design → Fabricație →
 * Service around a technology core. Segments light up in sequence when the
 * wheel scrolls into view (stagger); reduced-motion shows them all lit. Blue is
 * the chapter accent.
 */

const SEGMENTS = ["R&D", "Design", "Fabricație", "Service"];
const CX = 130;
const CY = 130;
const R_OUT = 118;
const R_IN = 74;
const GAP = 3; // degrees

function polar(cx: number, cy: number, r: number, deg: number): [number, number] {
  const a = ((deg - 90) * Math.PI) / 180;
  return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
}

function donutSegment(a0: number, a1: number): string {
  const [x0o, y0o] = polar(CX, CY, R_OUT, a0);
  const [x1o, y1o] = polar(CX, CY, R_OUT, a1);
  const [x1i, y1i] = polar(CX, CY, R_IN, a1);
  const [x0i, y0i] = polar(CX, CY, R_IN, a0);
  const large = a1 - a0 > 180 ? 1 : 0;
  return `M${x0o},${y0o} A${R_OUT},${R_OUT} 0 ${large} 1 ${x1o},${y1o} L${x1i},${y1i} A${R_IN},${R_IN} 0 ${large} 0 ${x0i},${y0i} Z`;
}

export function IntegrationWheel() {
  const reduce = useReducedMotion() ?? false;

  return (
    <svg
      viewBox="0 0 260 260"
      className="mx-auto w-full max-w-[300px]"
      role="img"
      aria-label="Roata integrării verticale Han's Laser: cercetare-dezvoltare, proiectare, fabricație și service, în jurul unui nucleu de tehnologii proprii."
    >
      <motion.g
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
        variants={{ show: { transition: { staggerChildren: 0.14 } } }}
      >
        {SEGMENTS.map((label, i) => {
          const a0 = i * 90 + GAP;
          const a1 = (i + 1) * 90 - GAP;
          const mid = i * 90 + 45;
          const [lx, ly] = polar(CX, CY, (R_OUT + R_IN) / 2, mid);
          return (
            <g key={label}>
              {/* base ring */}
              <path d={donutSegment(a0, a1)} fill="#F5F5F4" stroke="#E4E4E2" strokeWidth={1} />
              {/* lit overlay */}
              <motion.path
                d={donutSegment(a0, a1)}
                fill="#0D009F"
                variants={reduce ? undefined : { hidden: { opacity: 0 }, show: { opacity: 1 } }}
                style={reduce ? { opacity: 1 } : undefined}
                transition={{ duration: 0.4 }}
              />
              <text
                x={lx}
                y={ly + 4}
                textAnchor="middle"
                fontSize={12}
                className="font-mono"
                fill="#FFFFFF"
              >
                {label}
              </text>
            </g>
          );
        })}
      </motion.g>

      {/* core */}
      <circle cx={CX} cy={CY} r={R_IN - 6} fill="#FFFFFF" stroke="#E4E4E2" strokeWidth={1} />
      <text x={CX} y={CY - 6} textAnchor="middle" fontSize={11} className="font-mono" fill="#0B0B0C">
        nucleu tehnologic
      </text>
      <text x={CX} y={CY + 12} textAnchor="middle" fontSize={9} className="font-mono" fill="#8A8A94">
        surse · optică
      </text>
      <text x={CX} y={CY + 24} textAnchor="middle" fontSize={9} className="font-mono" fill="#8A8A94">
        cap · CNC
      </text>
    </svg>
  );
}
