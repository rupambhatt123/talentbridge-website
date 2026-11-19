"use client";
import Image from "next/image";
import { motion, MotionConfig } from "framer-motion";
import { Mail, Phone, MapPin, ChevronRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const socialPaths = {
  Facebook:
    "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
  X:
    "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z",
  LinkedIn:
    "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z",
  Instagram:
    "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
} as const;

const contactIcons = {
  phone: Phone,
  mail: Mail,
  map: MapPin,
} as const;

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

function FooterLogo({
  logo,
  logoAlt,
  logoWidth,
  logoHeight,
}: {
  logo: string;
  logoAlt: string;
  logoWidth: number;
  logoHeight: number;
}) {
  return (
    <div className="flex items-center">
      <Image
        src={logo}
        alt={logoAlt}
        width={logoWidth}
        height={logoHeight}
        className="h-14 w-auto max-w-[190px] object-contain sm:h-16 sm:max-w-[230px] lg:h-[4.25rem] lg:max-w-none"
      />
    </div>
  );
}

export default function Footer() {
  const footerData =
    websiteData.categories.TalentBridge.sections.Footer.variants.TBFooter1;

  return (
    <MotionConfig reducedMotion="user">
      <footer className={`${montserrat.className} bg-white text-slate-800`}>
        <div className="relative overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage: "radial-gradient(#cfd6e4 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                maskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 70%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse at center, black 0%, transparent 70%)",
              }}
            />
            <div className="absolute left-1/2 top-0 h-[300px] w-[620px] -translate-x-1/2 rounded-full bg-[#990012]/[0.05] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-4xl px-4 py-10 text-center sm:px-6 lg:py-12">
            <motion.h2
              {...reveal()}
              className="text-3xl font-extrabold tracking-tight text-[#0B2545] sm:text-5xl lg:text-[3.2rem] lg:leading-tight"
            >
              {footerData.ctaTitle}{" "}
              <span className="text-[#d11a2e]">{footerData.ctaHighlight}</span>
            </motion.h2>

            <div className="mt-3 flex items-center justify-center gap-3">
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="h-[2px] w-16 origin-right bg-[#0B2545] sm:w-32"
              />
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 }}
                className="h-3 w-11 -skew-x-[22deg] bg-[#d11a2e]"
              />
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="h-[2px] w-16 origin-left bg-[#0B2545] sm:w-32"
              />
            </div>

            <motion.p
              {...reveal(0.15)}
              className="mx-auto mt-5 max-w-xl px-2 text-sm font-medium leading-relaxed text-slate-700 sm:px-0 sm:text-base"
            >
              {footerData.ctaLine1}
              <br />
              {footerData.ctaLine2}
            </motion.p>

            <motion.div {...reveal(0.25)} className="mt-6">
              <a
                href={`mailto:${footerData.email}`}
                className="group inline-flex max-w-full items-center transition-transform duration-300 hover:scale-[1.03]"
              >
                <span className="relative z-10 -mr-6 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#d11a2e] text-white shadow-lg shadow-[#d11a2e]/30 sm:-mr-7 sm:h-[3.5rem] sm:w-[3.5rem]">
                  <Mail size={22} strokeWidth={2} className="sm:h-[26px] sm:w-[26px]" />
                </span>
                <span className="flex h-11 items-center truncate rounded-full bg-[#0B2545] pl-8 pr-5 text-sm font-bold tracking-wide text-white shadow-lg shadow-[#0B2545]/25 sm:h-12 sm:pl-10 sm:pr-7 sm:text-lg">
                  {footerData.email}
                </span>
              </a>
            </motion.div>

            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {footerData.socials.map((s, i) => (
                <motion.a
                  key={s.name}
                  href={s.url}
                  aria-label={s.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.35 + i * 0.07,
                    ease: "easeOut",
                  }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border-[1.5px] border-[#0B2545] bg-white text-[#0B2545] shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#d11a2e] hover:bg-[#d11a2e] hover:text-white hover:shadow-lg sm:h-12 sm:w-12"
                >
                  <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                    <path d={socialPaths[s.name as keyof typeof socialPaths]} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-b from-[#0a1f3d] via-[#0B2545] to-[#08203f] pt-9 pb-5 text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid grid-cols-1 gap-8 pb-8 md:grid-cols-[1.25fr_1fr_1.15fr] md:gap-0">
              <motion.div {...reveal()} className="md:pr-12">
                <FooterLogo
                  logo={footerData.logo}
                  logoAlt={footerData.logoAlt}
                  logoWidth={footerData.logoWidth}
                  logoHeight={footerData.logoHeight}
                />
                <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-slate-200 sm:text-base">
                  {footerData.about}
                </p>
              </motion.div>

              <motion.div
                {...reveal(0.1)}
                className="md:border-l md:border-white/25 md:px-12"
              >
                <h4 className="text-lg font-extrabold">
                  {footerData.quickLinksTitle}
                </h4>
                <span className="mt-2 block h-1.5 w-14 bg-[#d11a2e]" />
                <ul className="mt-4 space-y-2.5 sm:space-y-2">
                  {footerData.quickLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="group flex items-center gap-3 text-base font-medium text-slate-100 transition-colors hover:text-white"
                      >
                        <ChevronRight
                          size={20}
                          strokeWidth={3.5}
                          className="shrink-0 text-[#e3202f] transition-transform duration-300 group-hover:translate-x-1"
                        />
                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                          {link.name}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                {...reveal(0.2)}
                className="md:border-l md:border-white/25 md:pl-12"
              >
                <h4 className="text-lg font-extrabold">
                  {footerData.contactTitle}
                </h4>
                <span className="mt-2 block h-1.5 w-14 bg-[#d11a2e]" />
                <ul className="mt-4 space-y-3 text-sm font-medium text-slate-100 sm:space-y-2.5 sm:text-base">
                  {footerData.contactItems.map((item) => {
                    const Icon =
                      contactIcons[item.icon as keyof typeof contactIcons];
                    return (
                      <li key={item.lines[0]} className="group flex items-center gap-3.5 sm:gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#d11a2e] text-white transition-transform duration-300 group-hover:scale-110">
                          <Icon
                            size={20}
                            fill={item.fill ? "currentColor" : "none"}
                            strokeWidth={item.fill ? 1.5 : 2}
                          />
                        </span>
                        <span className="break-words leading-snug">
                          {item.lines.map((l, i) => (
                            <span key={i} className="block">
                              {l}
                            </span>
                          ))}
                        </span>
                      </li>
                    );
                  })}
                </ul>
              </motion.div>
            </div>

            <div className="border-t border-white/30 pt-4 text-center text-xs font-medium text-slate-100 sm:text-sm">
              <p>{footerData.copyright}</p>
            </div>
          </div>
        </div>
      </footer>
    </MotionConfig>
  );
}