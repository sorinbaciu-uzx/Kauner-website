"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * A8 (§4.9) — FMS + PLC + CNC dispatch. The FMS terminal routes through the PLC
 * to the machines; dispatch pulses travel down each branch on a loop. In-view
 * only; reduced-motion shows the static topology. Blue is the chapter accent.
 */

const CNC_X = [150, 340, 530];
const PLC = { x: 340, y: 136 };

function Box({ x, y, label }: { x: number; y: number; label: string }) {
  const w = 120;
  const h = 44;
  return (
    <g>
      <rect x={x - w / 2} y={y} width={w} height={h} rx={3} fill="#FFFFFF" stroke="#26262B" strokeWidth={1.6} />
      <text x={x} y={y + h / 2 + 4} textAnchor="middle" fontSize={12} className="font-mono" fill="#0B0B0C">
        {label}
      </text>
    </g>
  );
}

export function FmsDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { amount: 0.5 });
  const reduce = useReducedMotion() ?? false;
  const play = inView && !reduce;

  return (
    <div ref={ref} className="w-full overflow-x-auto">
      <svg viewBox="0 0 680 250" className="w-full min-w-[560px]" role="img" aria-label="Dispecerizare FMS + PLC + CNC: terminalul FMS rutează prin PLC către mașinile CNC.">
        {/* FMS → PLC */}
        <line x1={340} y1={60} x2={340} y2={PLC.y} stroke="#B7B7C0" strokeWidth={2} />
        {/* PLC → CNC branches */}
        {CNC_X.map((x) => (
          <line key={x} x1={PLC.x} y1={PLC.y + 40} x2={x} y2={196} stroke="#B7B7C0" strokeWidth={2} />
        ))}

        <Box x={340} y={16} label="FMS" />
        <Box x={340} y={PLC.y} label="PLC" />
        {CNC_X.map((x, i) => (
          <Box key={x} x={x} y={196} label={`CNC ${i + 1}`} />
        ))}

        {/* dispatch pulses */}
        {play &&
          CNC_X.map((x, i) => (
            <motion.circle
              key={x}
              r={4}
              fill="#0D009F"
              initial={{ cx: PLC.x, cy: PLC.y + 40 }}
              animate={{ cx: [PLC.x, x], cy: [PLC.y + 40, 196] }}
              transition={{ duration: 1.1, repeat: Infinity, ease: "easeIn", delay: i * 0.35, repeatDelay: 0.6 }}
            />
          ))}

        <text x={12} y={238} fontSize={11} className="font-mono" fill="#8A8A94">
          dispecerizare „lights-out” · FMS + PLC + CNC
        </text>
      </svg>
    </div>
  );
}
