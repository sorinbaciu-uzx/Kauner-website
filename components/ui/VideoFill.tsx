"use client";

/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from "react";

type VideoFillProps = {
  /** Subject caption shown (mono) while no real render exists. */
  label: string;
  /**
   * Real video assets under /public (e.g. "/videos/hero-laser.mp4"). Provide
   * the MP4 always; add the WebM for a smaller file where supported. When set,
   * the video renders on top of the placeholder with zero layout shift.
   */
  srcMp4?: string;
  srcWebm?: string;
  /**
   * Still frame shown before the video loads and whenever motion is reduced /
   * autoplay is blocked (e.g. "/images/hero-laser.jpg"). Strongly recommended.
   */
  poster?: string;
  alt?: string;
  className?: string;
  /**
   * Classes applied to the actual media (video + poster) — e.g.
   * "brightness-[0.6]" to temper a high-key clip so overlaid copy stays
   * readable. Kept off the placeholder so the fallback is unaffected.
   */
  mediaClassName?: string;
  /** Where the mono subject label sits. "top" keeps it clear of bottom UI. */
  labelPosition?: "bottom" | "top";
};

/**
 * Full-bleed *video* placeholder — the moving counterpart to <PhotoFill>.
 * Shares the same dark, cinematic placeholder (cold sheen, faint K watermark,
 * mono label) so the hero looks identical until a real clip is dropped in.
 *
 * The loop is decorative: muted + inline so it autoplays on mobile, and it is
 * skipped entirely when the visitor prefers reduced motion — the poster (or the
 * placeholder) shows instead. Scrims for text legibility come from the parent.
 */
export function VideoFill({
  label,
  srcMp4,
  srcWebm,
  poster,
  alt,
  className = "",
  mediaClassName = "",
  labelPosition = "bottom",
}: VideoFillProps) {
  const hasVideo = Boolean(srcMp4 || srcWebm);

  // Respect prefers-reduced-motion: no looping background for those visitors.
  const [reduceMotion, setReduceMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const showVideo = hasVideo && !reduceMotion;
  const showPosterOnly = hasVideo && reduceMotion && Boolean(poster);

  return (
    <div className={`absolute inset-0 overflow-hidden bg-ink ${className}`}>
      {/* Placeholder visual — sits beneath any real media */}
      <div className="absolute inset-0" aria-hidden={hasVideo}>
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

      {/* Reduced-motion visitors get the still poster, never the loop */}
      {showPosterOnly && (
        <img
          src={poster}
          alt={alt ?? label}
          className={`absolute inset-0 h-full w-full object-cover ${mediaClassName}`}
        />
      )}

      {/* Real render — decorative background loop, drops in with zero reflow */}
      {showVideo && (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          aria-label={alt ?? label}
          className={`absolute inset-0 h-full w-full object-cover ${mediaClassName}`}
        >
          {srcWebm && <source src={srcWebm} type="video/webm" />}
          {srcMp4 && <source src={srcMp4} type="video/mp4" />}
        </video>
      )}
    </div>
  );
}
