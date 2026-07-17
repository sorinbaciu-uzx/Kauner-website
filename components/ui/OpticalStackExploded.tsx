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
 * A4 (§4.5) — the cutting head's optical stack, "exploded" on scroll. This is
 * the SECOND (and last) pinned moment on the page — A1 is the other.
 * Desktop: sticky + useScroll — as you scroll the components spread apart along
 * the optical axis and their labels fade in; scrolling back reassembles them.
 * Reduced-motion / mobile: static, fully exploded. Blue is the chapter accent.
 */

type Item = { name: string; does: string; type: GlyphType };
type GlyphType = "fiber" | "lens" | "glass" | "nozzle" | "plate";

// Node chain + "ce face" lines drawn from the §4.5 paragraph.
const STACK: Item[] = [
  { name: "fibră de transport", does: "aduce fasciculul din sursă în cap", type: "fiber" },
  { name: "colimator", does: "preia fasciculul divergent din fibră și îl face paralel", type: "lens" },
  { name: "lentilă de focalizare", does: "îl strânge în spotul de lucru", type: "lens" },
  { name: "geam de protecție (sacrificial)", does: "apără lentila scumpă de stropi și fum", type: "glass" },
  {
    name: "duză + inel ceramic",
    does: "dirijează fasciculul și gazul de asistență coaxial; inelul ține duza și face parte din reglarea capacitivă a înălțimii",
    type: "nozzle",
  },
  { name: "piesă", does: "materialul tăiat", type: "plate" },
];

const COMPRESS = 34; // px each row travels from clustered → natural
const CENTER = (STACK.length - 1) / 2;

function Glyph({ type }: { type: GlyphType }) {
  const stroke = "#26262B";
  const common = { fill: "none", stroke, strokeWidth: 1.6 } as const;
  return (
    <svg viewBox="0 0 56 40" className="h-10 w-14 shrink-0" aria-hidden>
      {type === "fiber" && (
        <>
          <line x1={6} y1={20} x2={40} y2={20} {...common} />
          <rect x={40} y={13} width={10} height={14} rx={1.5} {...common} />
        </>
      )}
      {type === "lens" && <ellipse cx={28} cy={20} rx={7} ry={15} {...common} />}
      {type === "glass" && <rect x={24} y={6} width={8} height={28} rx={1} {...common} />}
      {type === "nozzle" && (
        <>
          <path d="M20,8 L36,8 L31,30 L25,30 Z" {...common} />
          <ellipse cx={28} cy={31} rx={7} ry={2.5} {...common} />
        </>
      )}
      {type === "plate" && (
        <>
          <rect x={8} y={22} width={40} height={9} rx={1} {...common} />
          <line x1={28} y1={22} x2={28} y2={31} stroke={stroke} strokeWidth={1.2} />
        </>
      )}
    </svg>
  );
}

function StackRow({
  i,
  item,
  progress,
  reduce,
}: {
  i: number;
  item: Item;
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  const start = (i / STACK.length) * 0.7;
  const rowOpacity = useTransform(progress, [start, start + 0.18], [0.12, 1], { clamp: true });
  const y = useTransform(progress, [0, 1], [(CENTER - i) * COMPRESS, 0]);

  return (
    <motion.div
      className="relative flex items-center gap-5 pl-8"
      style={reduce ? undefined : { y, opacity: rowOpacity }}
    >
      {/* node dot on the optical-axis guide */}
      <span
        className="absolute left-0 top-1/2 block h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600"
        aria-hidden
      />
      <Glyph type={item.type} />
      <div className="min-w-0">
        <h3 className="font-mono text-sm text-ink">{item.name}</h3>
        <p className="mt-0.5 text-[0.9rem] leading-snug text-steel-500">{item.does}</p>
      </div>
    </motion.div>
  );
}

function Stack({
  progress,
  reduce,
}: {
  progress: MotionValue<number>;
  reduce: boolean;
}) {
  return (
    <div className="relative mx-auto max-w-xl space-y-7 border-l border-blue-600/30 py-2">
      {STACK.map((item, i) => (
        <StackRow key={item.name} i={i} item={item} progress={progress} reduce={reduce} />
      ))}
    </div>
  );
}

export function OpticalStackExploded() {
  const reduce = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });

  return (
    <div className="mt-10 md:mt-12">
      {reduce ? (
        <div className="hidden md:block">
          <Stack progress={scrollYProgress} reduce />
        </div>
      ) : (
        <div ref={trackRef} className="relative hidden h-[200vh] md:block">
          <div className="sticky top-[72px] flex h-[calc(100vh-72px)] items-center">
            <div className="w-full">
              <Stack progress={scrollYProgress} reduce={false} />
            </div>
          </div>
        </div>
      )}

      {/* Mobile — static, fully exploded */}
      <div className="md:hidden">
        <Stack progress={scrollYProgress} reduce />
      </div>
    </div>
  );
}
