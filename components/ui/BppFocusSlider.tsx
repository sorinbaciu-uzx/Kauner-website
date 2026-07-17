"use client";

import { useState } from "react";

/*
 * A3 (§4.4) — interactive BPP → spot visual. Sliding BPP from ≤1 to ≤4 grows
 * the focused spot and lowers the (relative) power density, with the verbatim
 * "bun pentru" label from §4.4. Only the ≤1 spot has a doc-stated figure
 * (sub 0,1 mm); the rest stay qualitative — no invented specifications. The
 * density meter is explicitly relative/illustrative.
 */

type Stop = {
  bpp: string;
  spot: string;
  density: number; // relative, illustrative only
  densityLabel: string;
  good: string; // verbatim §4.4
  spotR: number; // illustrative SVG radius
};

const STOPS: Stop[] = [
  { bpp: "≤ 1", spot: "sub 0,1 mm", density: 100, densityLabel: "maximă", good: "tablă subțire", spotR: 5 },
  { bpp: "≤ 2", spot: "spot intermediar", density: 66, densityLabel: "ridicată", good: "uz general", spotR: 10 },
  { bpp: "≤ 4", spot: "spot mai larg", density: 40, densityLabel: "mai distribuită", good: "tablă groasă", spotR: 16 },
];

export function BppFocusSlider() {
  const [i, setI] = useState(0);
  const s = STOPS[i];

  return (
    <div className="rounded-sharp border border-line bg-paper-2 p-6 md:p-7">
      <p className="mono-label text-steel-500">BPP → SPOT FOCALIZAT</p>

      <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-6">
        {/* Focusing cone → spot */}
        <svg viewBox="0 0 150 150" className="h-[150px] w-[150px] shrink-0" aria-hidden>
          {/* lens */}
          <line x1={35} y1={26} x2={115} y2={26} stroke="#B7B7C0" strokeWidth={3} strokeLinecap="round" />
          {/* converging rays */}
          <path
            d={`M40,28 L${75 - s.spotR},120 M110,28 L${75 + s.spotR},120`}
            stroke="#1B0FD1"
            strokeWidth={1.5}
            fill="none"
            style={{ transition: "d 220ms ease" }}
          />
          {/* depth-of-focus waist */}
          <line x1={75 - s.spotR} y1={120} x2={75 + s.spotR} y2={120} stroke="#0D009F" strokeWidth={1.5} style={{ transition: "all 220ms ease" }} />
          {/* focused spot */}
          <circle cx={75} cy={120} r={s.spotR + 5} fill="rgba(13,0,159,0.10)" style={{ transition: "r 220ms ease" }} />
          <circle cx={75} cy={120} r={s.spotR} fill="#0D009F" style={{ transition: "r 220ms ease" }} />
        </svg>

        {/* Readouts */}
        <div className="min-w-0">
          <div className="flex items-baseline gap-2">
            <span className="mono-label text-steel-500">BPP</span>
            <span className="font-display text-h3 tnum text-ink">{s.bpp}</span>
            <span className="mono-label text-steel-500">mm·mrad</span>
          </div>

          <dl className="mt-4 space-y-2 text-sm">
            <div className="flex justify-between gap-4 border-b border-line pb-2">
              <dt className="text-steel-500">Spot focalizat</dt>
              <dd className="text-right font-medium text-ink">{s.spot}</dd>
            </div>
            <div className="border-b border-line pb-2">
              <div className="flex justify-between gap-4">
                <dt className="text-steel-500">Densitate de putere (relativ)</dt>
                <dd className="font-medium text-ink">{s.densityLabel}</dd>
              </div>
              <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-mist-200">
                <div
                  className="h-full rounded-full bg-blue-600"
                  style={{ width: `${s.density}%`, transition: "width 220ms ease" }}
                />
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-steel-500">Bun pentru</dt>
              <dd className="text-right font-medium text-blue-600">{s.good}</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* Slider */}
      <div className="mt-6">
        <input
          type="range"
          min={0}
          max={2}
          step={1}
          value={i}
          onChange={(e) => setI(Number(e.target.value))}
          className="w-full accent-blue-600"
          aria-label="Calitatea fasciculului (BPP)"
          aria-valuetext={`BPP ${s.bpp} mm·mrad — bun pentru ${s.good}`}
        />
        <div className="mt-2 flex justify-between font-mono text-xs text-steel-500">
          {STOPS.map((stop, k) => (
            <button
              key={stop.bpp}
              type="button"
              onClick={() => setI(k)}
              className={k === i ? "text-blue-600" : "hover:text-ink"}
            >
              {stop.bpp}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
