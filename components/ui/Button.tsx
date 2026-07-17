import Link from "next/link";
import type { ReactNode } from "react";
import { ChevronRight } from "lucide-react";

type Variant = "primary" | "ghost-light" | "ghost-dark";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  withChevron?: boolean;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-sharp px-7 py-[14px] " +
  "font-sans text-[0.9375rem] font-semibold tracking-[0.01em] " +
  "transition-all duration-300 ease-out-engineered will-change-transform " +
  "focus-visible:outline-2 focus-visible:outline-offset-2";

const variants: Record<Variant, string> = {
  // Solid ink, white text — blue stays an accent, so it appears only on hover.
  primary:
    "bg-ink text-white hover:bg-kauner-blue hover:-translate-y-0.5 " +
    "shadow-[0_0_0_0_rgba(13,0,159,0)] hover:shadow-[0_14px_40px_-14px_rgba(13,0,159,0.45)]",
  // 1px ink hairline on light surfaces, fills to ink on hover.
  "ghost-dark":
    "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white",
  // 1px white hairline for the rare element placed on ink (kept for completeness).
  "ghost-light":
    "border border-white/35 text-white hover:border-white hover:bg-white hover:text-ink",
};

function Inner({
  children,
  withChevron,
}: {
  children: ReactNode;
  withChevron?: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {withChevron && (
        <ChevronRight
          className="h-4 w-4 transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
          strokeWidth={2.25}
          aria-hidden
        />
      )}
    </>
  );
}

export function Button({
  children,
  href,
  variant = "primary",
  withChevron = false,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (href) {
    return (
      <Link href={href} className={cls} onClick={onClick}>
        <Inner withChevron={withChevron}>{children}</Inner>
      </Link>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      <Inner withChevron={withChevron}>{children}</Inner>
    </button>
  );
}
