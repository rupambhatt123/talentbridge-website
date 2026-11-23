"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, MotionConfig } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

export default function Faq() {
  const faqData =
    websiteData.categories.TalentBridge.sections.FAQ.variants.TBFAQ1;

  const [activeFaq, setActiveFaq] = useState<number | null>(
    faqData.defaultOpenIndex
  );

  const toggleFaq = (index: number) =>
    setActiveFaq(activeFaq === index ? null : index);

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="faqs"
        className={`${montserrat.className} relative overflow-x-clip bg-[#fdfdff] py-10 lg:py-12`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#cfd6e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 40%, transparent 100%)",
            }}
          />
          <div className="absolute -left-40 top-0 h-[440px] w-[440px] rounded-full bg-[#990012]/[0.06] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[440px] w-[440px] rounded-full bg-[#0B2545]/[0.07] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[5fr_7fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[330px] px-3 py-3 sm:max-w-[460px] sm:px-6 sm:py-4 lg:sticky lg:top-28 lg:max-w-none lg:self-start lg:px-6">
            <div className="relative">
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 24, y: 24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="absolute -left-3.5 -top-3.5 h-[42%] w-[40%] rounded-bl-[1.25rem] rounded-tl-[1.75rem] rounded-tr-[1.25rem] bg-[#990012] sm:-left-6 sm:-top-6 sm:rounded-bl-[1.5rem] sm:rounded-tl-[2rem] sm:rounded-tr-[1.5rem]"
              />
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: -24, y: -24 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: 0.25, ease: "easeOut" }}
                className="absolute -bottom-3.5 -right-3.5 h-[32%] w-[42%] rounded-bl-[1.25rem] rounded-br-[1.75rem] rounded-tr-[1.25rem] bg-[#0B2545] sm:-bottom-6 sm:-right-6 sm:rounded-bl-[1.5rem] sm:rounded-br-[2rem] sm:rounded-tr-[1.5rem]"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="relative overflow-hidden rounded-[1.75rem] rounded-tr-[3rem] border-[3px] border-white bg-slate-100 shadow-2xl shadow-slate-400/30 sm:rounded-[2.5rem] sm:rounded-tr-[4rem]"
              >
                <img
                  src={faqData.image}
                  alt={faqData.imageAlt}
                  className="h-[270px] w-full object-cover object-top sm:h-[400px] lg:h-[470px]"
                />
              </motion.div>
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-2 rounded-2xl bg-[#fde4e7] px-4 py-2 text-sm font-extrabold text-[#0B2545] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-lg">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#a0001a] text-xs font-black text-white sm:h-6 sm:w-6 sm:text-sm">
                  {faqData.badgeIcon}
                </span>
                {faqData.badge}
              </div>
              <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#0B2545] sm:text-4xl lg:text-[2.6rem] lg:leading-[1.15]">
                {faqData.title}{" "}
                <span className="text-[#a0001a]">{faqData.titleHighlight}</span>
              </h2>
              <p className="mt-2 text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-[17px]">
                {faqData.description}
              </p>
            </motion.div>

            <div className="mt-6 space-y-3">
              {faqData.items.map((faq, index) => {
                const isOpen = activeFaq === index;
                return (
                  <motion.div
                    key={faq.question}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.07,
                      ease: "easeOut",
                    }}
                    className={`overflow-hidden rounded-2xl border transition-shadow duration-300 ${
                      isOpen
                        ? "border-[#8f0a2a] bg-[#fdeef0] shadow-lg shadow-[#8f0a2a]/15"
                        : "border-slate-200 bg-white shadow-md shadow-slate-300/40 hover:shadow-lg"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => toggleFaq(index)}
                      aria-expanded={isOpen}
                      className={`flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-base font-bold transition-colors duration-300 sm:gap-4 sm:px-6 sm:py-4 sm:text-lg lg:text-[1.2rem] ${
                        isOpen ? "bg-[#8f0a2a] text-white" : "text-[#0B2545]"
                      }`}
                    >
                      <span className="leading-snug">{faq.question}</span>
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 sm:h-10 sm:w-10 ${
                          isOpen
                            ? "bg-white text-[#8f0a2a]"
                            : "border-2 border-[#0B2545] text-[#0B2545]"
                        }`}
                      >
                        <AnimatePresence mode="wait" initial={false}>
                          <motion.span
                            key={isOpen ? "minus" : "plus"}
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.18 }}
                            className="flex"
                          >
                            {isOpen ? (
                              <Minus size={18} strokeWidth={3} className="sm:h-[22px] sm:w-[22px]" />
                            ) : (
                              <Plus size={18} strokeWidth={3} className="sm:h-[22px] sm:w-[22px]" />
                            )}
                          </motion.span>
                        </AnimatePresence>
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-4 py-3.5 text-sm font-medium leading-relaxed text-slate-700 sm:px-6 sm:py-4 sm:text-base">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}