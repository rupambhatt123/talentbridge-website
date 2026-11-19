"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export default function Navbar() {
  const headerData =
    websiteData.categories.TalentBridge.sections.Header.variants.TBHeader1;

  const [active, setActive] = useState(headerData.defaultActiveId);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const navigateToSection = (idOrHref: string, closeDrawer = false) => {
    const cleanId = idOrHref.replace(/^#/, "");
    setActive(cleanId);
    if (closeDrawer) {
      setOpen(false);
    }

    const scrollNow = () => {
      const target = document.getElementById(cleanId);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.hash = cleanId;
      }
    };

    if (closeDrawer) {
      setTimeout(scrollNow, 120);
    } else {
      scrollNow();
    }
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = headerData.navLinks
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => !!el);
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headerData.navLinks]);

  return (
    <MotionConfig reducedMotion="user">
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`${montserrat.className} sticky top-0 z-50 border-b backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "border-slate-200/70 bg-white/95 shadow-md shadow-slate-300/30"
            : "border-transparent bg-white/80"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-3 px-4 sm:h-24 sm:px-6">
          <a
            href={`#${headerData.defaultActiveId}`}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection(headerData.defaultActiveId, true);
            }}
            className="flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.03]"
          >
            <Image
              src={headerData.logo}
              alt={headerData.logoAlt}
              width={headerData.logoWidth}
              height={headerData.logoHeight}
              className="h-14 w-auto max-w-[190px] object-contain sm:h-16 sm:max-w-[230px] lg:h-[4.25rem] lg:max-w-none"
              priority
            />
          </a>

          <nav className="hidden items-center gap-9 lg:flex xl:gap-12">
            {headerData.navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    navigateToSection(link.id, false);
                  }}
                  className={`group relative py-2 text-[17px] font-semibold transition-colors duration-300 ${
                    isActive
                      ? "text-[#c8102e]"
                      : "text-[#0B2545] hover:text-[#c8102e]"
                  }`}
                >
                  {link.name}
                  {isActive ? (
                    <motion.span
                      layoutId="nav-underline"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 32,
                      }}
                      className="absolute -bottom-1 -left-2 -right-2 h-[3px] rounded-full bg-[#c8102e]"
                    />
                  ) : (
                    <span className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left scale-x-0 rounded-full bg-[#c8102e]/50 transition-transform duration-300 group-hover:scale-x-100" />
                  )}
                </a>
              );
            })}
          </nav>

          <a
            href={headerData.ctaButton.href}
            onClick={(e) => {
              e.preventDefault();
              navigateToSection(headerData.ctaButton.href, false);
            }}
            className="group hidden items-center gap-2.5 rounded-xl bg-gradient-to-b from-[#a50d28] to-[#8a0a22] px-7 py-3 text-[17px] font-bold text-white shadow-lg shadow-[#8a0a22]/25 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 lg:inline-flex"
          >
            {headerData.ctaButton.text}
            <ArrowRight
              size={20}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? headerData.closeMenuLabel : headerData.openMenuLabel}
            aria-expanded={open}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0B2545] shadow-xs transition-colors hover:bg-slate-50 active:scale-95 lg:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-100 bg-white/98 shadow-lg lg:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col gap-1.5 px-4 py-4 sm:px-6">
                {headerData.navLinks.map((link) => (
                  <button
                    key={link.id}
                    type="button"
                    onClick={() => navigateToSection(link.id, true)}
                    className={`w-full rounded-xl px-4 py-3 text-left text-base font-semibold transition-colors ${
                      active === link.id
                        ? "bg-[#fde4e7] text-[#c8102e]"
                        : "text-[#0B2545] hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => navigateToSection(headerData.ctaButton.href, true)}
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#8a0a22] px-6 py-3.5 text-base font-bold text-white shadow-md"
                >
                  {headerData.ctaButton.text}{" "}
                  <ArrowRight size={18} strokeWidth={2.5} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </MotionConfig>
  );
}