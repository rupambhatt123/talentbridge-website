"use client";
import React, { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { Briefcase, ChevronLeft, ChevronRight } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Services() {
  const servicesData =
    websiteData.categories.TalentBridge.sections.Services.variants.TBServices1;

  const [mobileIndex, setMobileIndex] = useState(0);
  const totalItems = servicesData.items.length;
  const activeMobileService = servicesData.items[mobileIndex];

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="services"
        className={`${montserrat.className} relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#cfd6e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, black 0%, transparent 35%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 0%, transparent 35%)",
            }}
          />
          <div className="absolute left-1/2 top-0 h-[300px] w-[560px] -translate-x-1/2 rounded-full bg-[#990012]/[0.06] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mx-auto mb-7 max-w-3xl text-center lg:mb-8"
          >
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#f0b8bf] bg-[#fde4e7] px-4 py-2 text-xs font-bold uppercase tracking-wide text-[#a0001a] shadow-sm shadow-[#a0001a]/10 sm:px-5 sm:text-sm">
              <Briefcase size={16} fill="currentColor" />
              {servicesData.badge}
            </div>
            <h2 className="text-2xl font-extrabold leading-[1.2] tracking-tight text-[#0B2545] sm:text-4xl sm:leading-[1.15] lg:text-[2.6rem]">
              {servicesData.titleLine1}{" "}
              <span className="text-[#a0001a]">
                {servicesData.titleHighlight}
              </span>
            </h2>
          </motion.div>

          <div className="md:hidden">
            <motion.article
              key={activeMobileService.num}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="group rounded-2xl border border-slate-200 bg-white p-4 shadow-md shadow-slate-300/40"
            >
              <div className="overflow-hidden rounded-xl shadow-sm">
                <img
                  src={activeMobileService.image}
                  alt={activeMobileService.title}
                  className="h-[175px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              <div className="mt-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-extrabold leading-snug text-[#0B2545]">
                    {activeMobileService.title}
                  </h3>
                  <span className="shrink-0 text-3xl font-black text-[#c8102e]">
                    {activeMobileService.num}
                  </span>
                </div>
                <span className="mt-1.5 block h-[3px] w-12 rounded-full bg-[#c8102e]" />
                <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700">
                  {activeMobileService.description}
                </p>
              </div>
            </motion.article>

            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B2545] shadow-sm transition hover:border-[#a0001a] hover:bg-[#fde4e7] hover:text-[#a0001a] active:scale-95"
              >
                <ChevronLeft size={22} strokeWidth={2.4} />
              </button>

              <span className="text-sm font-bold text-[#0B2545]">
                {mobileIndex + 1} / {totalItems}
              </span>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Next service"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B2545] shadow-sm transition hover:border-[#a0001a] hover:bg-[#fde4e7] hover:text-[#a0001a] active:scale-95"
              >
                <ChevronRight size={22} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div className="hidden divide-y divide-slate-200 md:block">
            {servicesData.items.map((s) => (
              <motion.article
                key={s.num}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="group grid grid-cols-1 items-center gap-4 py-5 md:grid-cols-[minmax(0,300px)_1fr_auto] md:gap-8 lg:grid-cols-[minmax(0,360px)_1fr_auto] lg:gap-10"
              >
                <div className="overflow-hidden rounded-2xl shadow-md shadow-slate-300/50">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="h-[160px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:h-[150px]"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-extrabold leading-snug text-[#0B2545] lg:text-[1.4rem]">
                    {s.title}
                  </h3>
                  <span className="mt-1.5 block h-[3px] w-12 rounded-full bg-[#c8102e] transition-all duration-500 group-hover:w-24" />
                  <p className="mt-3 max-w-md text-[15px] font-medium leading-relaxed text-slate-700 lg:text-base">
                    {s.description}
                  </p>
                </div>

                <div className="flex items-center gap-5 md:pr-2">
                  <span className="hidden h-16 w-[3px] bg-[#c8102e] md:block" />
                  <span className="text-4xl font-black text-slate-300 transition-colors duration-300 group-hover:text-[#c8102e] md:text-5xl lg:text-6xl">
                    {s.num}
                  </span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}