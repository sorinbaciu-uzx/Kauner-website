"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";

/*
 * A1 (§4.2 / §2.5) — "lanțul integrat" build-on-scroll diagram.
 * Desktop: a short *pinned* moment — the connector draws like a beam and the
 * nodes light in sequence as you scroll (position: sticky + useScroll).
 * Mobile: a static vertical timeline. Reduced-motion: static, complete.
 * Blue is the chapter's single accent moment (§2.1).
 */

type Node = { label: string; sub?: string };

// Verbatim node chain from §4.2.
const NODES: Node[] = [
  { label: "diodă de pompaj" },
  { label: "fibră dopată", sub: "sursă" },
  { label: "fascicul" },
  { label: "colimator" },
  { label: "focalizare" },
  { label: "duză", sub: "cap" },
  { label: "CNC" },
  { label: "mașină" },
  { label: "automatizare" },
];

const VB_W = 980;
const VB_H = 132;
const PAD = 70;
const Y = 56;
const STEP = (VB_W - PAD * 2) / (NODES.length - 1);
const X = (i: number) => PAD + i * STEP;
// Connector draws over the first 0.8 of progress; the tail is breathing room.
const DRAW_END = 0.8;

function ChainNode({
  i,
  node,
  progress,
  reduce,
}: {
  i: number;
  node: Node;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const activeAt = (i / (NODES.length - 1)) * DRAW_END;
  const lit = useTransform(progress, [activeAt - 0.02, activeAt + 0.04], [0, 1], {
    clamp: true,
  });
  const opacity = reduce ? 1 : lit;
  const x = X(i);

  return (
    <g>
      {/* resting dot */}
      <circle cx={x} cy={Y} r={5.5} className="fill-mist-200" />
      {/* lit state — blue fill + halo ring */}
      <motion.circle cx={x} cy={Y} r={5.5} className="fill-blue-600" style={{ opacity }} />
      <motion.circle
        cx={x}
        cy={Y}
        r={11}
        fill="none"
        strokeWidth={1.5}
        className="stroke-blue-600/35"
        style={{ opacity }}
      />
      <text
        x={x}
        y={Y + 30}
        textAnchor="middle"
        className="fill-ink font-mono"
        style={{ fontSize: 9, letterSpacing: "0.02em" }}
      >
        {node.label}
      </text>
      {node.sub && (
        <text
          x={x}
          y={Y + 43}
          textAnchor="middle"
          className="fill-steel-400 font-mono"
          style={{ fontSize: 7 }}
        >
          ({node.sub})
        </text>
      )}
    </g>
  );
}

function DesktopSvg({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const draw = useTransform(progress, [0, DRAW_END], [0, 1]);
  const beamX = useTransform(progress, [0, DRAW_END], [X(0), X(NODES.length - 1)]);
  const beamOpacity = useTransform(
    progress,
    [0, 0.04, DRAW_END - 0.04, DRAW_END],
    [0, 1, 1, 0],
  );

  return (
    <svg
      viewBox={`0 0 ${VB_W} ${VB_H}`}
      className="w-full"
      role="img"
      aria-label="Lanțul integrat: diodă de pompaj, fibră dopată, fascicul, colimator, focalizare, duză, CNC, mașină, automatizare — dezvoltate in-house."
    >
      {/* resting rail */}
      <line
        x1={X(0)}
        y1={Y}
        x2={X(NODES.length - 1)}
        y2={Y}
        className="stroke-mist-200"
        strokeWidth={2}
      />
      {/* drawn beam */}
      <motion.line
        x1={X(0)}
        y1={Y}
        x2={X(NODES.length - 1)}
        y2={Y}
        className="stroke-blue-600"
        strokeWidth={2}
        style={{ pathLength: reduce ? 1 : draw }}
      />
      {/* traveling beam head */}
      {!reduce && (
        <motion.circle
          cy={Y}
          r={3.5}
          className="fill-blue-500"
          style={{ cx: beamX, opacity: beamOpacity }}
        />
      )}
      {NODES.map((node, i) => (
        <ChainNode key={node.label} i={i} node={node} progress={progress} reduce={reduce} />
      ))}
    </svg>
  );
}

export function IntegratedChainDiagram() {
  const reduce = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="mt-12 md:mt-16">
      {/* Desktop — pinned build-on-scroll (or static block if reduced-motion) */}
      {reduce ? (
        <div className="container-kauner hidden md:block">
          <DesktopSvg progress={scrollYProgress} reduce />
          <ChainCaption />
        </div>
      ) : (
        <div ref={trackRef} className="relative hidden h-[180vh] md:block">
          <div className="sticky top-[72px] flex h-[calc(100vh-72px)] items-center">
            <div className="container-kauner w-full">
              <DesktopSvg progress={scrollYProgress} reduce={false} />
              <ChainCaption />
            </div>
          </div>
        </div>
      )}

      {/* Mobile — static vertical timeline */}
      <div className="container-kauner md:hidden">
        <ol className="ml-1 space-y-4 border-l border-line pl-6">
          {NODES.map((n) => (
            <li key={n.label} className="relative">
              <span
                className="absolute -left-[27px] top-1.5 block h-2.5 w-2.5 rounded-full bg-blue-600"
                aria-hidden
              />
              <span className="font-mono text-sm text-ink">{n.label}</span>
              {n.sub && <span className="ml-2 font-mono text-xs text-steel-400">({n.sub})</span>}
            </li>
          ))}
        </ol>
        <ChainCaption />
      </div>
    </div>
  );
}

function ChainCaption() {
  return (
    <p className="mt-8 text-[0.95rem] leading-relaxed text-ink-soft">
      Toate — dezvoltate și fabricate in-house de Han&apos;s Laser.
    </p>
  );
}
