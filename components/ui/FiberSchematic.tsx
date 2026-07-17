"use client";

import { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

/*
 * A2 (§4.3) — animated fiber-laser schematic: diode → doped fiber → FBG →
 * output. Hovering (or focusing) a step highlights the matching zone in the
 * SVG; on entry the beam "flows" through the fiber. Reduced-motion: no flow,
 * highlight-on-hover still works. Blue is the chapter accent (§2.1).
 */

// Verbatim steps from §4.3.
const STEPS = [
  {
    term: "Pompaj",
    body: "Diode semiconductoare injectează lumină la ~976 nm în fibră. Sunt eficiente și au durată lungă de viață.",
  },
  {
    term: "Amplificare",
    body: "Miezul fibrei e dopat cu iterbiu (Yb³⁺). Lumina de pompaj excită ionii, iar aceștia eliberează energie la 1080 nm — lungimea de undă de lucru.",
  },
  {
    term: "Rezonator",
    body: "Rețele Bragg înscrise în fibră (FBG) joacă rolul oglinzilor și formează cavitatea. Totul e sudat optic, monolitic — fără traseu de lumină deschis.",
  },
  {
    term: "Livrare",
    body: "Fasciculul iese printr-o fibră de transport (conector QBH) direct în capul de tăiere.",
  },
];

const INK = "#0B0B0C";
const STEEL = "#B7B7C0";
const BLUE = "#0D009F";

const X0 = 96; // fiber start (right of diode)
const X1 = 628; // fiber end (arrow)
const YF = 96; // fiber center

export function FiberSchematic() {
  const [active, setActive] = useState<number | null>(null);
  const reduce = useReducedMotion() ?? false;
  const svgRef = useRef<SVGSVGElement>(null);
  const inView = useInView(svgRef, { amount: 0.4 });
  const flow = !reduce && inView;

  // A zone reads "on" when its step is hovered.
  const on = (i: number) => active === i;
  const zoneStroke = (i: number) => (on(i) ? BLUE : STEEL);
  const zoneText = (i: number) => (on(i) ? BLUE : INK);
  const trans = { transition: "stroke 200ms ease, fill 200ms ease" };

  return (
    <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
      {/* Schema (left) */}
      <svg
        ref={svgRef}
        viewBox="0 0 680 200"
        className="w-full"
        role="img"
        aria-label="Schema unui laser cu fibră: diodă de pompaj, fibră dopată cu iterbiu, rețele Bragg (FBG), fascicul de ieșire prin conector QBH."
      >
        {/* base fiber rail */}
        <line x1={X0} y1={YF} x2={X1} y2={YF} stroke={STEEL} strokeWidth={2} />

        {/* Zone 0 — Pompaj (diode + lead) */}
        <g style={trans}>
          <rect
            x={34}
            y={YF - 22}
            width={58}
            height={44}
            rx={3}
            fill="none"
            stroke={zoneStroke(0)}
            strokeWidth={on(0) ? 2.5 : 1.75}
            style={trans}
          />
          <text x={63} y={YF + 40} textAnchor="middle" fontSize={10} className="font-mono" fill={zoneText(0)} style={trans}>
            diodă
          </text>
          <text x={63} y={YF - 34} textAnchor="middle" fontSize={9} className="font-mono" fill={on(0) ? BLUE : STEEL} style={trans}>
            ~976 nm
          </text>
        </g>

        {/* Zone 1 — Amplificare (doped fiber segment + dopant dots) */}
        <g style={trans}>
          <line x1={175} y1={YF} x2={380} y2={YF} stroke={zoneStroke(1)} strokeWidth={on(1) ? 6 : 5} strokeLinecap="round" style={trans} />
          {[200, 235, 270, 305, 340].map((cx) => (
            <circle key={cx} cx={cx} cy={YF} r={2} fill={on(1) ? "#FFFFFF" : "#F5F5F4"} />
          ))}
          <text x={277} y={YF + 40} textAnchor="middle" fontSize={10} className="font-mono" fill={zoneText(1)} style={trans}>
            fibră dopată (Yb³⁺)
          </text>
        </g>

        {/* Zone 2 — Rezonator (FBG hatch marks bracketing the coil) */}
        <g style={trans}>
          {[160, 167, 174, 381, 388, 395].map((x, k) => (
            <line
              key={x}
              x1={x}
              y1={YF - 12}
              x2={x}
              y2={YF + 12}
              stroke={zoneStroke(2)}
              strokeWidth={on(2) ? 2 : 1.25}
              opacity={k === 2 || k === 3 ? 0.6 : 1}
              style={trans}
            />
          ))}
          <text x={277} y={YF - 26} textAnchor="middle" fontSize={9} className="font-mono" fill={zoneText(2)} style={trans}>
            FBG · cavitate monolitică
          </text>
        </g>

        {/* Zone 3 — Livrare (output fiber + QBH + beam out) */}
        <g style={trans}>
          <line x1={400} y1={YF} x2={560} y2={YF} stroke={zoneStroke(3)} strokeWidth={on(3) ? 3 : 2} style={trans} />
          <rect x={560} y={YF - 15} width={28} height={30} rx={2} fill="none" stroke={zoneStroke(3)} strokeWidth={on(3) ? 2.5 : 1.75} style={trans} />
          <line x1={588} y1={YF} x2={624} y2={YF} stroke={zoneStroke(3)} strokeWidth={on(3) ? 3 : 2} style={trans} />
          <path d={`M624,${YF - 6} L636,${YF} L624,${YF + 6} Z`} fill={zoneStroke(3)} style={trans} />
          <text x={574} y={YF + 40} textAnchor="middle" fontSize={10} className="font-mono" fill={zoneText(3)} style={trans}>
            QBH → cap
          </text>
        </g>

        {/* flowing beam head */}
        {flow && (
          <motion.circle
            cy={YF}
            r={3.5}
            fill="#1B0FD1"
            initial={{ cx: X0 }}
            animate={{ cx: [X0, X1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "linear" }}
          />
        )}
      </svg>

      {/* Steps (right) */}
      <ol
        className="space-y-2"
        onMouseLeave={() => setActive(null)}
      >
        {STEPS.map((s, i) => (
          <li key={s.term}>
            <button
              type="button"
              className={`w-full rounded-sharp border-l-2 py-3 pl-5 pr-3 text-left transition-colors ${
                active === i ? "border-blue-600 bg-blue-tint" : "border-transparent"
              }`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              aria-pressed={active === i}
            >
              <div className="flex items-baseline gap-3">
                <span className="mono-label tnum text-blue-600">{String(i + 1).padStart(2, "0")}</span>
                <span className="font-display-600 text-ink">{s.term}</span>
              </div>
              <p className="mt-1 pl-8 text-[0.925rem] leading-relaxed text-ink-soft">{s.body}</p>
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}
