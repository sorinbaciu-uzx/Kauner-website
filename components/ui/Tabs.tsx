"use client";

import { useId, useRef, useState, type ReactNode } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type Tab = { label: string; panel: ReactNode };

/**
 * Reusable tabset with a short crossfade between panels (§4.7 / §4.8). Mono
 * tab labels ("data" signal), a single blue underline as the active accent
 * (§2.1). Reduced-motion: instant swap, no transform.
 *
 * Implements the full ARIA tabs pattern: tab↔panel wiring via
 * `aria-controls`/`aria-labelledby` and roving tabindex with Arrow/Home/End
 * keyboard navigation.
 */
export function Tabs({ tabs, ariaLabel }: { tabs: Tab[]; ariaLabel?: string }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion() ?? false;
  const id = useId();
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const tabId = (k: number) => `${id}-tab-${k}`;
  const panelId = (k: number) => `${id}-panel-${k}`;

  const focusTab = (k: number) => {
    const next = (k + tabs.length) % tabs.length;
    setI(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") focusTab(i + 1);
    else if (e.key === "ArrowLeft") focusTab(i - 1);
    else if (e.key === "Home") focusTab(0);
    else if (e.key === "End") focusTab(tabs.length - 1);
    else return;
    e.preventDefault();
  };

  return (
    <div>
      <div
        role="tablist"
        aria-label={ariaLabel}
        className="flex flex-wrap gap-x-1 gap-y-1 border-b border-line"
        onKeyDown={onKeyDown}
      >
        {tabs.map((t, k) => (
          <button
            key={t.label}
            ref={(el) => {
              tabRefs.current[k] = el;
            }}
            role="tab"
            type="button"
            id={tabId(k)}
            aria-selected={k === i}
            aria-controls={panelId(k)}
            tabIndex={k === i ? 0 : -1}
            onClick={() => setI(k)}
            className={`mono-label -mb-px border-b-2 px-3 py-2.5 transition-colors ${
              k === i
                ? "border-blue-600 text-ink"
                : "border-transparent text-steel-500 hover:text-ink"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={i}
            role="tabpanel"
            id={panelId(i)}
            aria-labelledby={tabId(i)}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? { opacity: 1 } : { opacity: 0, y: -6 }}
            transition={{ duration: reduce ? 0 : 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            {tabs[i].panel}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
