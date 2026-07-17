"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type Seg = { x1: number; y1: number; x2: number; y2: number; key: string };
type Node = { x: number; y: number; key: string };

type Props = {
  children: ReactNode;
  className?: string;
  /** Selector for the cards to connect (must sit inside this component). */
  itemSelector?: string;
};

/**
 * Draws an animated "flow" network between a grid of cards: thin blue links
 * between neighbouring cards, small nodes at each connection point, and pulses
 * of light that travel the links in a staggered cascade — signalling that the
 * cards are one interconnected system. Purely decorative (pointer-events: none),
 * measured from layout so it adapts to any column count, and static (no pulses)
 * under prefers-reduced-motion.
 */
export function CardFlow({
  children,
  className = "",
  itemSelector = ".flow-card",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // Pause the infinite pulses while the section is off-screen (framer doesn't
  // stop offscreen loops on its own).
  const inView = useInView(ref, { amount: 0.15 });
  const [segs, setSegs] = useState<Seg[]>([]);
  const [nodes, setNodes] = useState<Node[]>([]);
  const [size, setSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const measure = () => {
      // offset* is layout-based (ignores the cards' reveal transforms), so
      // positions are correct even mid-animation.
      const w = root.offsetWidth;
      const h = root.offsetHeight;
      const cards = Array.from(
        root.querySelectorAll<HTMLElement>(itemSelector),
      ).map((el) => {
        const left = el.offsetLeft;
        const top = el.offsetTop;
        const cw = el.offsetWidth;
        const ch = el.offsetHeight;
        return {
          left,
          top,
          right: left + cw,
          bottom: top + ch,
          cx: left + cw / 2,
          cy: top + ch / 2,
        };
      });

      // Group cards into rows by their top edge.
      const tol = 12;
      const rows: (typeof cards)[] = [];
      cards
        .slice()
        .sort((a, b) => a.top - b.top || a.left - b.left)
        .forEach((c) => {
          const row = rows.find((r) => Math.abs(r[0].top - c.top) < tol);
          if (row) row.push(c);
          else rows.push([c]);
        });
      rows.forEach((r) => r.sort((a, b) => a.left - b.left));

      const nextSegs: Seg[] = [];
      const nodeMap = new Map<string, Node>();
      const addNode = (x: number, y: number) => {
        const key = `${Math.round(x)},${Math.round(y)}`;
        if (!nodeMap.has(key)) nodeMap.set(key, { x, y, key });
      };

      // Horizontal links between neighbours in the same row (across the gap).
      rows.forEach((r) => {
        for (let i = 0; i < r.length - 1; i++) {
          const a = r[i];
          const b = r[i + 1];
          nextSegs.push({
            x1: a.right,
            y1: a.cy,
            x2: b.left,
            y2: b.cy,
            key: `h-${Math.round(a.right)}-${Math.round(a.cy)}`,
          });
          addNode(a.right, a.cy);
          addNode(b.left, b.cy);
        }
      });

      // Vertical links between consecutive rows, matched by column (close cx).
      for (let ri = 0; ri < rows.length - 1; ri++) {
        rows[ri].forEach((a) => {
          const b = rows[ri + 1].find((c) => Math.abs(c.cx - a.cx) < 60);
          if (b) {
            nextSegs.push({
              x1: a.cx,
              y1: a.bottom,
              x2: b.cx,
              y2: b.top,
              key: `v-${Math.round(a.cx)}-${Math.round(a.bottom)}`,
            });
            addNode(a.cx, a.bottom);
            addNode(b.cx, b.top);
          }
        });
      }

      setSize({ w, h });
      setSegs(nextSegs);
      setNodes(Array.from(nodeMap.values()));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(root);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [itemSelector]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      {size.w > 0 && segs.length > 0 && (
        <svg
          className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
          viewBox={`0 0 ${size.w} ${size.h}`}
          fill="none"
          aria-hidden
        >
          {segs.map((s) => (
            <line
              key={s.key}
              x1={s.x1}
              y1={s.y1}
              x2={s.x2}
              y2={s.y2}
              stroke="#0D009F"
              strokeOpacity={0.2}
              strokeWidth={1.25}
            />
          ))}

          {nodes.map((n) => (
            <circle
              key={n.key}
              cx={n.x}
              cy={n.y}
              r={2.5}
              fill="#0D009F"
              fillOpacity={0.45}
            />
          ))}

          {!reduce &&
            inView &&
            segs.map((s, i) => {
              const dx = s.x2 - s.x1;
              const dy = s.y2 - s.y1;
              return (
                <motion.g
                  key={`p-${s.key}`}
                  initial={{ x: 0, y: 0, opacity: 0 }}
                  animate={{ x: [0, dx], y: [0, dy], opacity: [0, 1, 1, 0] }}
                  transition={{
                    duration: 1.4,
                    ease: "easeInOut",
                    repeat: Infinity,
                    repeatDelay: 0.7,
                    delay: i * 0.22,
                  }}
                >
                  <circle cx={s.x1} cy={s.y1} r={6} fill="#1B0FD1" opacity={0.16} />
                  <circle cx={s.x1} cy={s.y1} r={2.5} fill="#1B0FD1" />
                </motion.g>
              );
            })}
        </svg>
      )}

      {children}
    </div>
  );
}
