"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * A7 (§4.7) — EtherCAT control loop: controler CNC ↔ drivere servo ↔ cap ↔
 * sursă, with a data "packet" pulsing along the bus to suggest the
 * microsecond-scale scan cycle. Loops in view; reduced-motion shows the static
 * bus. Blue is the chapter accent.
 */

const NODES = ["controler CNC", "drivere servo", "cap", "sursă"];

const BOX_W = 150;
const BOX_H = 56;
const GAP = 26;
const Y = 46;
const BUS_Y = Y + BOX_H / 2;
const X = (i: number) => 12 + i * (BOX_W + GAP);
const BUS_START = X(0);
const BUS_END = X(NODES.length - 1) + BOX_W;

export function EtherCatDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion() ?? false;
  const play = inView && !reduce;

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg
        viewBox={`0 0 ${BUS_END + 12} 150`}
        className="w-full min-w-[640px]"
        role="img"
        aria-label="Arhitectură EtherCAT: controler CNC, drivere servo, cap și sursă legate pe aceeași magistrală, cu ciclu de scanare la scară de microsecunde."
      >
        {/* bus rail */}
        <line x1={BUS_START} y1={BUS_Y} x2={BUS_END} y2={BUS_Y} stroke="#B7B7C0" strokeWidth={2} />

        {/* nodes */}
        {NODES.map((n, i) => (
          <g key={n}>
            <rect
              x={X(i)}
              y={Y}
              width={BOX_W}
              height={BOX_H}
              rx={3}
              fill="#FFFFFF"
              stroke="#26262B"
              strokeWidth={1.6}
            />
            <text
              x={X(i) + BOX_W / 2}
              y={BUS_Y + 4}
              textAnchor="middle"
              fontSize={12}
              className="font-mono"
              fill="#0B0B0C"
            >
              {n}
            </text>
          </g>
        ))}

        {/* traveling packet */}
        {play && (
          <motion.rect
            y={BUS_Y - 4}
            width={16}
            height={8}
            rx={2}
            fill="#0D009F"
            initial={{ x: BUS_START }}
            animate={{ x: [BUS_START, BUS_END - 16] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        )}
        {!play && <rect x={BUS_START} y={BUS_Y - 4} width={16} height={8} rx={2} fill="#0D009F" />}

        <text x={BUS_START} y={132} fontSize={11} className="font-mono" fill="#8A8A94">
          buclă de scanare la scară de microsecunde
        </text>
      </svg>
    </div>
  );
}
