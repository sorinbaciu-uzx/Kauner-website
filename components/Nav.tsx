"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown, ChevronRight, Menu, X } from "lucide-react";
import { NavLogo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { LanguageSwitch } from "@/components/ui/LanguageSwitch";
import { useT } from "@/lib/i18n/LocaleProvider";

export function Nav() {
  const t = useT();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  // Equipment mega-menu (desktop): which category is previewed on the right.
  const [equipOpen, setEquipOpen] = useState(false);
  const [activeCat, setActiveCat] = useState(0);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const EQUIP_HREF = "/echipamente";

  // Each top-level section is its own route now.
  const links = [
    { label: t.nav.home, href: "/" },
    { label: t.nav.equipment, href: EQUIP_HREF },
    { label: t.nav.technology, href: "/tehnologie" },
    { label: t.nav.service, href: "/service" },
    { label: t.nav.team, href: "/echipa" },
    { label: t.nav.contact, href: "/contact" },
  ];

  // A tiny grace delay before closing keeps the menu from flickering when the
  // pointer crosses the seam between the trigger and the panel.
  const openEquip = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setEquipOpen(true);
  };
  const closeEquip = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setEquipOpen(false), 120);
  };

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  // Only the homepage has the full-bleed hero the nav floats over; everywhere
  // else the bar is solid from the top.
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setScrolled(false);
      return;
    }
    // Flip to the solid bar once the hero photo has largely scrolled past.
    const onScroll = () => {
      const threshold = Math.max(window.innerHeight - 96, 120);
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [isHome]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mega-menu on navigation and on Escape.
  useEffect(() => {
    setEquipOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!equipOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setEquipOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [equipOpen]);

  // Over the hero the nav is transparent with a white logo/links; on scroll it
  // becomes a solid white bar with a hairline and ink content. Off the homepage
  // it is always solid.
  const onLight = scrolled || !isHome || equipOpen;

  return (
    <header
      id="top"
      onMouseLeave={closeEquip}
      // Close the mega-menu when keyboard focus leaves the header entirely —
      // otherwise a Tab past the nav leaves an orphaned open panel.
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setEquipOpen(false);
        }
      }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ease-out-engineered ${
        onLight
          ? "border-b border-mist-200 bg-white/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-kauner flex h-[72px] items-center justify-between">
        <Link href="/" aria-label="KAUNER" className="shrink-0">
          <NavLogo kHeight={onLight ? 26 : 30} tone={onLight ? "ink" : "white"} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {links.map((link) => {
            const active = isActive(link.href);
            const tone = onLight
              ? active
                ? "text-ink"
                : "text-steel-500 hover:text-ink"
              : active
                ? "text-white"
                : "text-white/70 hover:text-white";
            // The Equipment item carries the mega-menu; it still navigates on
            // click, but hovering/focusing it reveals the category panel.
            if (link.href === EQUIP_HREF) {
              return (
                // Fragment: the trigger AND its panel sit together in the DOM,
                // so Tab moves from the trigger straight into the open panel.
                <span key={link.href} className="contents">
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    aria-expanded={equipOpen}
                    aria-haspopup="true"
                    onMouseEnter={openEquip}
                    onFocus={openEquip}
                    className={`mono-label inline-flex items-center gap-1 transition-colors ${tone}`}
                  >
                    {link.label}
                    <ChevronDown
                      className={`h-3.5 w-3.5 transition-transform duration-300 ${
                        equipOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </Link>

                  {/* Equipment mega-menu (desktop only) — absolute, anchored to
                      the fixed header, so DOM position doesn't affect layout. */}
                  <AnimatePresence>
                    {equipOpen && (
                      <motion.div
                        key="equip-mega"
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                        onMouseEnter={openEquip}
                        onMouseLeave={closeEquip}
                        className="absolute inset-x-0 top-full hidden border-b border-mist-200 bg-white shadow-[0_24px_48px_-24px_rgba(15,23,42,0.18)] lg:block"
                      >
                        <div className="container-kauner grid grid-cols-[minmax(0,320px)_1fr] gap-12 py-10">
                          {/* Left — category list */}
                          <div className="border-r border-mist-200 pr-10">
                            <p className="mono-label text-steel-400">
                              {t.equipment.label}
                            </p>
                            <ul className="mt-6 flex flex-col">
                              {t.equipment.items.map((item, i) => {
                                const current = i === activeCat;
                                return (
                                  <li key={item.slug}>
                                    <Link
                                      href={`${EQUIP_HREF}#${item.slug}`}
                                      onMouseEnter={() => setActiveCat(i)}
                                      onFocus={() => setActiveCat(i)}
                                      onClick={() => setEquipOpen(false)}
                                      className={`group/cat -mx-4 flex items-center justify-between gap-4 rounded-sharp px-4 py-3 font-display-600 text-[1.05rem] transition-colors ${
                                        current
                                          ? "bg-mist-100 text-kauner-blue"
                                          : "text-steel-500 hover:text-ink"
                                      }`}
                                    >
                                      {item.name}
                                      <ArrowRight
                                        className={`h-4 w-4 text-kauner-blue transition-all duration-300 ease-out-engineered ${
                                          current
                                            ? "translate-x-0 opacity-100"
                                            : "-translate-x-1 opacity-0 group-hover/cat:translate-x-0 group-hover/cat:opacity-60"
                                        }`}
                                        strokeWidth={2.5}
                                        aria-hidden
                                      />
                                    </Link>
                                  </li>
                                );
                              })}
                            </ul>
                          </div>

                          {/* Right — models within the active category */}
                          <div className="min-w-0">
                            <h3 className="font-display-600 text-h4 text-ink">
                              {t.equipment.items[activeCat].name}
                            </h3>

                            {t.equipment.items[activeCat].models.length > 0 ? (
                              <ul className="mt-7 grid grid-cols-2 gap-x-10 gap-y-1 xl:grid-cols-3">
                                {t.equipment.items[activeCat].models.map(
                                  (model) => (
                                    <li key={model.slug}>
                                      <Link
                                        href={`${EQUIP_HREF}/${model.slug}`}
                                        onClick={() => setEquipOpen(false)}
                                        className="block py-2 text-[0.95rem] text-steel-400 outline-none transition-colors hover:text-ink focus-visible:text-ink"
                                      >
                                        {model.name}
                                      </Link>
                                    </li>
                                  ),
                                )}
                              </ul>
                            ) : (
                              <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-steel-700">
                                {t.equipment.items[activeCat].desc}
                              </p>
                            )}

                            <Link
                              href={`${EQUIP_HREF}#${t.equipment.items[activeCat].slug}`}
                              onClick={() => setEquipOpen(false)}
                              className="group mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-steel-500 outline-none transition-colors hover:text-ink focus-visible:text-ink"
                            >
                              {t.equipment.learnMore}
                              <ChevronRight
                                className="h-4 w-4 text-kauner-blue transition-transform duration-300 ease-out-engineered group-hover:translate-x-1"
                                strokeWidth={2.5}
                                aria-hidden
                              />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </span>
              );
            }
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                onMouseEnter={closeEquip}
                className={`mono-label transition-colors ${tone}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right cluster */}
        <div className="hidden items-center gap-5 lg:flex">
          <LanguageSwitch tone={onLight ? "ink" : "white"} />
          <span
            className={`h-4 w-px ${onLight ? "bg-mist-200" : "bg-white/30"}`}
            aria-hidden
          />
          <Button
            href="/contact"
            variant={onLight ? "ghost-dark" : "ghost-light"}
            className="px-5 py-2.5 text-sm"
          >
            {t.nav.contactCta}
          </Button>
        </div>

        {/* Mobile trigger */}
        <button
          className="lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label={t.nav.openMenu}
        >
          <Menu className={`h-6 w-6 ${onLight ? "text-ink" : "text-white"}`} />
        </button>
      </div>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
          >
            <div className="container-kauner flex h-[72px] items-center justify-between border-b border-mist-200">
              <NavLogo kHeight={26} tone="ink" />
              <button
                onClick={() => setMobileOpen(false)}
                aria-label={t.nav.closeMenu}
              >
                <X className="h-6 w-6 text-ink" />
              </button>
            </div>
            <motion.nav
              className="container-kauner flex flex-1 flex-col justify-center gap-1"
              aria-label="Mobile"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.05 } } }}
            >
              {links.map((link) => (
                <motion.div
                  key={link.href}
                  variants={{
                    hidden: { opacity: 0, x: -16 },
                    show: { opacity: 1, x: 0 },
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={isActive(link.href) ? "page" : undefined}
                    className={`block border-b border-mist-200 py-5 font-display-600 text-3xl ${
                      isActive(link.href) ? "text-kauner-blue" : "text-ink"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-10 flex items-center justify-between">
                <Button
                  href="/contact"
                  variant="ghost-dark"
                  className="flex-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {t.nav.contactCta}
                </Button>
                <LanguageSwitch tone="ink" className="ml-5" />
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
