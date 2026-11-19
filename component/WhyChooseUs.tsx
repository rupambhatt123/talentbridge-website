"use client";
import { motion, MotionConfig } from "framer-motion";
import { Users, Award, Settings, Handshake, TrendingUp } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const reasonIcons = {
  users: Users,
  award: Award,
  settings: Settings,
  handshake: Handshake,
  trending: TrendingUp,
} as const;

export default function WhyChooseUs() {
  const whyData =
    websiteData.categories.TalentBridge.sections.WhyChooseUs.variants
      .TBWhyChooseUs1;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="why-us"
        className={`${montserrat.className} relative overflow-hidden bg-white py-10 lg:py-12`}
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
          <div className="absolute -left-40 top-20 h-[420px] w-[420px] rounded-full bg-[#990012]/[0.06] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#0B2545]/[0.07] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:gap-12 sm:px-6 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="flex items-center gap-3.5 text-2xl font-extrabold tracking-tight text-[#0B2545] sm:gap-5 sm:text-4xl lg:text-[2.8rem]"
            >
              <motion.span
                aria-hidden
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                className="inline-block h-[0.95em] w-[6px] origin-center rounded-[2px] bg-[#c8102e] sm:w-[7px]"
              />
              <span>
                {whyData.title}{" "}
                <span className="text-[#c8102e]">{whyData.titleHighlight}</span>
              </span>
            </motion.h2>

            <ul className="mt-5 lg:mt-6">
              {whyData.reasons.map((item, idx) => {
                const Icon =
                  reasonIcons[item.icon as keyof typeof reasonIcons];
                return (
                  <motion.li
                    key={item.title}
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: idx * 0.08,
                      ease: "easeOut",
                    }}
                    className="group flex"
                  >
                    <div className="py-2 sm:py-[9px]">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#b0001a] text-white shadow-md shadow-[#b0001a]/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110 sm:h-[52px] sm:w-[52px]">
                        <Icon size={20} strokeWidth={2} className="sm:h-6 sm:w-6" />
                      </div>
                    </div>
                    <div className="ml-3.5 flex flex-1 items-center border-b border-slate-200 py-2 group-last:border-b-0 sm:ml-5 sm:py-0">
                      <h3 className="text-sm font-medium leading-snug text-[#0B2545] transition-transform duration-300 group-hover:translate-x-1 sm:text-lg lg:text-[1.2rem]">
                        {item.title}
                      </h3>
                    </div>
                  </motion.li>
                );
              })}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto mb-[10%] ml-[6%] w-[88%] max-w-[340px] sm:mb-[9%] sm:ml-[8%] sm:w-[86%] sm:max-w-[540px] lg:mx-0 lg:ml-auto lg:mr-0 lg:w-full">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="aspect-square w-full rounded-full border-[4px] border-[#0B2545] bg-white p-1.5 shadow-2xl shadow-slate-300/60 sm:border-[6px] sm:p-2"
              >
                <div className="h-full w-full overflow-hidden rounded-full">
                  <img
                    src={whyData.mainImage}
                    alt={whyData.mainImageAlt}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
                className="absolute -bottom-[10%] -left-[8%] z-10 w-[46%] sm:-left-[9%] sm:w-[47%]"
              >
                <motion.div
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="aspect-square w-full rounded-full border-[4px] border-[#0B2545] bg-white p-1 shadow-xl shadow-slate-400/40 sm:border-[5px] sm:p-1.5"
                >
                  <div className="h-full w-full overflow-hidden rounded-full">
                    <img
                      src={whyData.teamImage}
                      alt={whyData.teamImageAlt}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}