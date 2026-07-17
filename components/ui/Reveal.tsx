"use client";

import { motion } from "framer-motion";
import type { ElementType, ReactNode } from "react";
import { reveal, stagger, inView } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Render as a stagger container; direct <Reveal.Item> children animate in sequence. */
  as?: "div" | "section" | "ul" | "li" | "span";
  delay?: number;
};

/** Single element that fades + rises into view. */
export function Reveal({ children, className, as = "div", delay = 0 }: RevealProps) {
  const Comp = motion[as] as ElementType;
  return (
    <Comp
      className={className}
      variants={reveal}
      initial="hidden"
      whileInView="show"
      viewport={inView}
      transition={delay ? { delay } : undefined}
    >
      {children}
    </Comp>
  );
}

/** Container that staggers its <RevealItem> children. */
export function RevealGroup({ children, className, as = "div" }: RevealProps) {
  const Comp = motion[as] as ElementType;
  return (
    <Comp
      className={className}
      variants={stagger}
      initial="hidden"
      whileInView="show"
      viewport={inView}
    >
      {children}
    </Comp>
  );
}

export function RevealItem({
  children,
  className,
  as = "div",
}: RevealProps) {
  const Comp = motion[as] as ElementType;
  return (
    <Comp className={className} variants={reveal}>
      {children}
    </Comp>
  );
}
