"use client";

import type { ReactNode } from "react";
import { PhotoFill } from "@/components/ui/PhotoFill";
import { VideoFill } from "@/components/ui/VideoFill";

type DarkMomentProps = {
  /** "video" uses <VideoFill> (autoplay loop); "image" uses <PhotoFill>. */
  kind?: "image" | "video";
  /** Mono placeholder caption for the underlying media slot. */
  label: string;
  alt?: string;
  /** Min-height utility for the band, e.g. "min-h-[88vh]". */
  minH?: string;
  /** Vertical placement of the text slot within the band. */
  align?: "start" | "center" | "end";
  /** Ink overlay opacity for text legibility (0.55–0.70 per §2.6). */
  overlay?: number;
  /** Real image (kind="image"). */
  src?: string;
  /** Real video sources + poster (kind="video"). */
  srcMp4?: string;
  srcWebm?: string;
  poster?: string;
  id?: string;
  className?: string;
  children?: ReactNode;
};

/**
 * §2.6 — the *only* way a dark band appears on the site: a full-bleed real
 * photo/video under an `--ink` overlay, never a flat black rectangle. Wraps the
 * media placeholder + scrim and exposes a `container-kauner` text slot so the
 * light→dark→light rhythm reads as a photographic palate-cleanser.
 */
export function DarkMoment({
  kind = "video",
  label,
  alt,
  minH = "min-h-[70vh]",
  align = "center",
  overlay = 0.62,
  src,
  srcMp4,
  srcWebm,
  poster,
  id,
  className = "",
  children,
}: DarkMomentProps) {
  const alignCls =
    align === "end" ? "items-end" : align === "start" ? "items-start" : "items-center";

  return (
    <section
      id={id}
      className={`relative flex w-full overflow-hidden bg-ink ${minH} ${alignCls} ${className}`}
    >
      {kind === "video" ? (
        <VideoFill
          label={label}
          alt={alt}
          srcMp4={srcMp4}
          srcWebm={srcWebm}
          poster={poster}
        />
      ) : (
        <PhotoFill label={label} alt={alt} src={src} sizes="100vw" />
      )}

      {/* scrim — top a touch lighter, base darkest, for legibility ≥ 4.5:1 */}
      <div
        className="absolute inset-0"
        aria-hidden
        style={{
          background: `linear-gradient(180deg, rgba(11,11,12,${overlay * 0.82}) 0%, rgba(11,11,12,${overlay}) 45%, rgba(11,11,12,${Math.min(overlay * 1.25, 0.95)}) 100%)`,
        }}
      />

      <div className="container-kauner relative z-10 w-full py-16 md:py-20">
        {children}
      </div>
    </section>
  );
}
