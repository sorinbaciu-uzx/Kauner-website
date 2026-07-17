/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type PhotoFillProps = {
  /** Subject caption shown (mono) while no real render exists. */
  label: string;
  /** Real asset path under /public (e.g. "/images/hero-laser.jpg"). */
  src?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** Where the mono subject label sits. "top" keeps it clear of bottom UI. */
  labelPosition?: "bottom" | "top";
};

/**
 * Full-bleed *photographic* placeholder — the dark, cinematic counterpart to
 * the light <Placeholder>. Used for the hero and the technology band: a rich
 * `ink` field with a cold radial sheen, a faint white K watermark and a mono
 * subject label. Drop a real photo at `src` and it renders on top with zero
 * layout shift. Scrims for text legibility are applied by the parent section.
 */
export function PhotoFill({
  label,
  src,
  alt,
  priority = false,
  sizes = "100vw",
  className = "",
  labelPosition = "bottom",
}: PhotoFillProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden bg-ink ${className}`}>
      {/* Placeholder visual — sits beneath any real image */}
      <div className="absolute inset-0" aria-hidden={!!src}>
        {/* cold sheen: a steel glow off-center, echoing a beam on metal */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 90% at 72% 18%, rgba(107,92,255,0.16) 0%, rgba(10,10,12,0) 55%), radial-gradient(90% 70% at 20% 90%, rgba(28,28,36,0.9) 0%, rgba(10,10,12,0) 60%)",
          }}
        />
        <div className="absolute inset-0 tech-grid-dark opacity-[0.5]" />
        <img
          src="/brand/logo_K_alb.svg"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 w-[22%] max-w-[260px] -translate-x-1/2 -translate-y-1/2 opacity-[0.05]"
        />
        <div
          className={`absolute inset-x-0 flex justify-center px-6 text-center ${
            labelPosition === "top" ? "top-28" : "bottom-6"
          }`}
        >
          <span className="mono-label text-white/35">{label}</span>
        </div>
      </div>

      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      )}
    </div>
  );
}
