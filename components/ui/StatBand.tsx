"use client";

import { CountUp } from "@/components/ui/CountUp";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";

export type Stat = {
  /** Mono label above the figure. */
  note: string;
  /** Numeric value (count-up animates clean numbers). */
  value?: string;
  /** Unit suffix (e.g. "kW", "m/min") rendered small, in blue. */
  unit?: string;
  /** Multi-line text values (e.g. certifications) — skips count-up. */
  lines?: string[];
};

type StatBandProps = {
  items: Stat[];
  /** Light band for open chapters (default) or dark for photographic bands. */
  tone?: "light" | "dark";
  /** Tailwind grid-template override; defaults to a 6-up responsive grid. */
  columnsClass?: string;
  className?: string;
};

/**
 * §6 — the numeric recap band with `useCountUp`. Tabular numerals, hairline
 * dividers, the key unit in the rare blue accent. Tone-aware so it works on the
 * light chapters and inside a <DarkMoment>. Non-numeric values (ISO 9001…) stay
 * static via <CountUp>.
 */
export function StatBand({
  items,
  tone = "light",
  columnsClass = "sm:grid-cols-3 lg:grid-cols-6",
  className = "",
}: StatBandProps) {
  const dark = tone === "dark";
  const border = dark ? "border-line-dark" : "border-line";
  const noteCls = dark ? "text-steel-400" : "text-steel-500";
  const figCls = dark ? "text-white" : "text-ink";

  return (
    <RevealGroup
      as="ul"
      className={`grid grid-cols-1 gap-x-6 gap-y-9 border-t ${border} pt-10 ${columnsClass} lg:gap-x-0`}
    >
      {items.map((s, i) => (
        <RevealItem
          as="li"
          key={s.note}
          className={`min-w-0 text-center lg:px-6 ${
            i > 0
              ? `border-t ${border} pt-6 sm:border-t-0 sm:pt-0 lg:border-l`
              : ""
          }`}
        >
          <span className={`mono-label flex min-h-[2.4em] items-end justify-center text-center ${noteCls}`}>
            {s.note}
          </span>
          {s.lines && s.lines.length > 0 ? (
            <div className="mt-3 space-y-1">
              {s.lines.map((line) => (
                <p
                  key={line}
                  className={`font-display-600 text-[1.15rem] leading-tight tracking-tight ${figCls}`}
                >
                  {line}
                </p>
              ))}
            </div>
          ) : (
            <p
              className={`tnum mt-3 font-display-600 leading-none tracking-tight text-[clamp(1.5rem,2.4vw,2rem)] ${figCls}`}
            >
              <CountUp value={s.value ?? ""} />
              {s.unit && (
                <span
                  className={`ml-1.5 align-baseline font-sans text-[0.46em] font-normal tracking-wide ${
                    dark ? "text-blue-300" : "text-blue-600"
                  }`}
                >
                  {s.unit}
                </span>
              )}
            </p>
          )}
        </RevealItem>
      ))}
    </RevealGroup>
  );
}

// Re-export the single-item reveal helper so callers can wrap headings.
export { Reveal };
