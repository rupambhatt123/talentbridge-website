"use client";

import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Testimonials() {
  const testimonialsData =
    websiteData.categories.TalentBridge.sections.Testimonials.variants
      .TBTestimonials1;

  const [mobileIndex, setMobileIndex] = useState(0);
  const totalItems = testimonialsData.items.length;
  const activeItem = testimonialsData.items[mobileIndex];

  const handlePrev = () => {
    setMobileIndex((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  const handleNext = () => {
    setMobileIndex((prev) => (prev === totalItems - 1 ? 0 : prev + 1));
  };

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="testimonials"
        className={`${montserrat.className} relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#cfd6e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 35%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 35%, transparent 100%)",
            }}
          />
          <div className="absolute -left-40 top-10 h-[380px] w-[380px] rounded-full bg-[#990012]/[0.06] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-[#0B2545]/[0.06] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <motion.div
            {...reveal()}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f0b8bf] bg-[#fde4e7] px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-[#a0001a] sm:px-5 sm:text-sm">
              <Quote size={15} fill="currentColor" />
              {testimonialsData.badge}
            </div>

            <h2 className="mt-4 text-2xl font-extrabold leading-[1.2] tracking-tight text-[#0B2545] sm:text-4xl sm:leading-[1.15] lg:text-[2.6rem]">
              {testimonialsData.title}{" "}
              <span className="text-[#a0001a]">
                {testimonialsData.titleHighlight}
              </span>
            </h2>

            <p className="mt-3 text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-[17px]">
              {testimonialsData.description}
            </p>
          </motion.div>

          <div className="mt-8 md:hidden">
            <motion.article
              key={activeItem.id}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="flex flex-col justify-between rounded-[1.5rem] border border-slate-200/80 bg-[#eef2f8]/70 p-5 shadow-lg shadow-slate-300/35"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1 text-[#c8102e]">
                    {Array.from({ length: activeItem.rating }).map((_, sIdx) => (
                      <Star
                        key={sIdx}
                        size={16}
                        fill="currentColor"
                        strokeWidth={1.8}
                      />
                    ))}
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#fde4e7] text-[#a0001a]">
                    <Quote size={16} fill="currentColor" />
                  </span>
                </div>

                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700">
                  “{activeItem.review}”
                </p>
              </div>

              <div className="mt-5 flex items-center gap-3 border-t border-slate-200 pt-4">
                <img
                  src={activeItem.image}
                  alt={activeItem.name}
                  className="h-11 w-11 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                />
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-extrabold text-[#0B2545]">
                    {activeItem.name}
                  </h3>
                  <p className="truncate text-xs font-semibold text-[#a0001a]">
                    {activeItem.role}
                  </p>
                </div>
              </div>
            </motion.article>

            <div className="mt-5 flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous testimonial"
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
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-[#0B2545] shadow-sm transition hover:border-[#a0001a] hover:bg-[#fde4e7] hover:text-[#a0001a] active:scale-95"
              >
                <ChevronRight size={22} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          <div className="mt-10 hidden grid-cols-1 gap-6 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {testimonialsData.items.map((item, idx) => (
              <motion.article
                key={item.id}
                {...reveal(0.1 + idx * 0.08)}
                className="flex flex-col justify-between rounded-[1.75rem] border border-slate-200/80 bg-[#eef2f8]/70 p-6 shadow-lg shadow-slate-300/35 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1 text-[#c8102e]">
                      {Array.from({ length: item.rating }).map((_, sIdx) => (
                        <Star
                          key={sIdx}
                          size={17}
                          fill="currentColor"
                          strokeWidth={1.8}
                        />
                      ))}
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#fde4e7] text-[#a0001a]">
                      <Quote size={18} fill="currentColor" />
                    </span>
                  </div>

                  <p className="mt-5 text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                    “{item.review}”
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3.5 border-t border-slate-200 pt-5">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-12 w-12 shrink-0 rounded-full border-2 border-white object-cover shadow-sm"
                  />
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-extrabold text-[#0B2545]">
                      {item.name}
                    </h3>
                    <p className="truncate text-xs font-semibold text-[#a0001a] sm:text-sm">
                      {item.role}
                    </p>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}