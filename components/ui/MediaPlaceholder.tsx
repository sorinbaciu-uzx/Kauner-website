/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import { Play } from "lucide-react";

type MediaPlaceholderProps = {
  /** "image" shows a still slot; "video" adds a play glyph + VIDEO badge. */
  kind?: "image" | "video";
  /** CSS aspect-ratio, e.g. "16 / 9", "21 / 9", "4 / 5". */
  ratio?: string;
  /** Subject / shot description shown centered (e.g. "macro front tăiere"). */
  label: string;
  /** Optional caption rendered as a <figcaption> under the frame. */
  caption?: string;
  /** Light surface (default) for open chapters; dark for photographic bands. */
  tone?: "light" | "dark";
  /**
   * Real image path under /public. When present it renders on top with zero
   * layout shift (video playback lands via <DarkMoment>/<VideoFill> instead).
   */
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
};

/**
 * §2.6 — the media slot for the technology page. Extends the existing image
 * placeholder system (tech grid, K watermark, crop marks) with a media kind,
 * a mono shot badge and a figcaption, so every future filming/photo target is
 * documented in place. Reserves the aspect ratio; drop a real `src` later with
 * no reflow.
 */
export function MediaPlaceholder({
  kind = "image",
  ratio = "16 / 9",
  label,
  caption,
  tone = "light",
  src,
  alt,
  className = "",
  priority = false,
}: MediaPlaceholderProps) {
  const dark = tone === "dark";
  const cornerCls = dark ? "border-line-dark" : "border-line";
  const labelCls = dark ? "text-white/40" : "text-steel-400";

  return (
    <figure className={`w-full ${className}`}>
      <div
        className={`relative w-full overflow-hidden ${dark ? "bg-ink" : "bg-paper-2"}`}
        style={{ aspectRatio: ratio }}
      >
        {/* Placeholder visual — sits beneath any real image */}
        <div className="absolute inset-0" aria-hidden={!!src}>
          <div
            className={`absolute inset-0 ${
              dark ? "tech-grid-dark opacity-50" : "tech-grid-fine opacity-60"
            }`}
          />
          <img
            src={dark ? "/brand/logo_K_alb.svg" : "/brand/logo_K.svg"}
            alt=""
            aria-hidden
            className="absolute left-1/2 top-1/2 w-[24%] max-w-[200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.06]"
          />

          {/* corner crop marks — engineering register */}
          <span className={`absolute left-4 top-4 h-3 w-3 border-l border-t ${cornerCls}`} />
          <span className={`absolute right-4 top-4 h-3 w-3 border-r border-t ${cornerCls}`} />
          <span className={`absolute bottom-4 left-4 h-3 w-3 border-b border-l ${cornerCls}`} />
          <span className={`absolute bottom-4 right-4 h-3 w-3 border-b border-r ${cornerCls}`} />

          {/* media-kind badge */}
          <span className={`mono-label absolute left-4 top-4 pl-5 ${labelCls}`}>
            {kind === "video" ? "VIDEO" : "IMAGINE"}
          </span>

          {/* play glyph for video slots */}
          {kind === "video" && (
            <span
              className={`absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border ${
                dark ? "border-white/25 text-white/60" : "border-steel-400/50 text-steel-500"
              }`}
            >
              <Play className="h-5 w-5 translate-x-[1px]" strokeWidth={1.75} aria-hidden />
            </span>
          )}

          <div className="absolute inset-x-0 bottom-4 flex justify-center px-6 text-center">
            <span className={`mono-label ${labelCls}`}>{label}</span>
          </div>
        </div>

        {/* Real render — drops in with zero layout shift */}
        {src && kind === "image" && (
          <Image
            src={src}
            alt={alt ?? label}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        )}
      </div>

      {caption && (
        <figcaption
          className={`mono-label mt-3 ${dark ? "text-white/40" : "text-steel-500"}`}
        >
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
