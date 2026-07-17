/* eslint-disable @next/next/no-img-element */
import Image from "next/image";

type PlaceholderProps = {
  /** Intended subject, shown as a mono caption while no render exists. */
  label: string;
  /** CSS aspect-ratio, e.g. "16 / 10", "4 / 5", "1 / 1". */
  ratio?: string;
  /**
   * Real asset path under /public (e.g. "/images/equip-laser.jpg").
   * When the file exists it renders on top with zero layout shift; until then
   * the light placeholder shows. Alt text must never reference origin.
   */
  src?: string;
  alt?: string;
  /** Adds the hover-zoom layer (parent must be `group overflow-hidden`). */
  zoom?: boolean;
  className?: string;
  priority?: boolean;
};

/**
 * Zero-layout-shift image slot — light-first. Reserves the aspect ratio and
 * shows a calm mist.100 surface with a hairline border, a faint blue K
 * watermark and a centered subject label. Drop a real file at `src` to replace
 * the placeholder visual with no reflow.
 */
export function Placeholder({
  label,
  ratio = "16 / 10",
  src,
  alt,
  zoom = false,
  className = "",
  priority = false,
}: PlaceholderProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-mist-100 ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {/* Placeholder visual (always rendered; sits beneath any real image) */}
      <div className="absolute inset-0" aria-hidden={!!src}>
        <div className="absolute inset-0 tech-grid-fine opacity-60" />
        {/* faint K watermark — the brand monogram, barely there */}
        <img
          src="/brand/logo_K.svg"
          alt=""
          aria-hidden
          className="absolute left-1/2 top-1/2 w-[34%] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
        />
        {/* corner crop marks — engineering register */}
        <span className="absolute left-4 top-4 h-3 w-3 border-l border-t border-mist-200" />
        <span className="absolute right-4 top-4 h-3 w-3 border-r border-t border-mist-200" />
        <span className="absolute bottom-4 left-4 h-3 w-3 border-b border-l border-mist-200" />
        <span className="absolute bottom-4 right-4 h-3 w-3 border-b border-r border-mist-200" />
        <div className="absolute inset-x-0 bottom-4 flex justify-center px-6 text-center">
          <span className="mono-label text-steel-400">{label}</span>
        </div>
      </div>

      {/* Real render — drops in with zero layout shift */}
      {src && (
        <Image
          src={src}
          alt={alt ?? label}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, 50vw"
          className={`object-cover ${
            zoom
              ? "transition-transform duration-[600ms] ease-out-engineered group-hover:scale-[1.04]"
              : ""
          }`}
        />
      )}
    </div>
  );
}
