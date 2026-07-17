/* eslint-disable @next/next/no-img-element */

/**
 * The KAUNER logo is a supplied vector asset — never typeset.
 * Files live in /public/brand. Pick the variant by background.
 *
 *  K mark viewBox      632.7 x 373.36  (ratio ~1.694)
 *  Wordmark viewBox   1228.86 x 143.02 (ratio ~8.59)
 *  Stacked lockup      632.7 x 460.92  (ratio ~1.373)
 */

const K_RATIO = 632.7 / 373.36;
const WORDMARK_RATIO = 1228.86 / 143.02;
const LOCKUP_RATIO = 632.7 / 460.92;

/**
 * Horizontal nav lockup: K mark + wordmark, optically spaced. Adaptive by tone —
 * `ink` (blue K + black wordmark) on the light scrolled nav; `white` (white K +
 * white wordmark) while the nav is transparent over the hero photography.
 */
export function NavLogo({
  kHeight = 30,
  tone = "ink",
}: {
  kHeight?: number;
  tone?: "ink" | "white";
}) {
  const wordHeight = kHeight * 0.46;
  const kSrc = tone === "white" ? "/brand/logo_K_alb.svg" : "/brand/logo_K.svg";
  const wordSrc =
    tone === "white"
      ? "/brand/Logo_Kauner_alb.svg"
      : "/brand/Logo_Kauner_negru.svg";
  return (
    <span className="inline-flex items-center" style={{ gap: kHeight * 0.42 }}>
      <img
        src={kSrc}
        alt=""
        width={kHeight * K_RATIO}
        height={kHeight}
        style={{ height: kHeight, width: kHeight * K_RATIO }}
        aria-hidden
      />
      <img
        src={wordSrc}
        alt="KAUNER"
        width={wordHeight * WORDMARK_RATIO}
        height={wordHeight}
        style={{ height: wordHeight, width: wordHeight * WORDMARK_RATIO }}
      />
    </span>
  );
}

type LockupProps = { height?: number; className?: string };

/** Stacked lockup, blue K + white wordmark — for dark hero/footer moments. */
export function LockupDark({ height = 120, className = "" }: LockupProps) {
  return (
    <img
      src="/brand/Logo_Kauner_cu_K_alb.svg"
      alt="KAUNER"
      width={height * LOCKUP_RATIO}
      height={height}
      style={{ height, width: height * LOCKUP_RATIO }}
      className={className}
    />
  );
}

/** Stacked lockup, blue K + black wordmark — for light backgrounds. */
export function LockupLight({ height = 120, className = "" }: LockupProps) {
  return (
    <img
      src="/brand/Logo_Kauner_cu_K.svg"
      alt="KAUNER"
      width={height * LOCKUP_RATIO}
      height={height}
      style={{ height, width: height * LOCKUP_RATIO }}
      className={className}
    />
  );
}
