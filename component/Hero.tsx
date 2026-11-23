"use client";
import { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { Users, Building2, Award, TrendingUp } from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const statIcons = {
  users: Users,
  building: Building2,
  award: Award,
  trending: TrendingUp,
} as const;

function Counter({
  to,
  suffix,
  start,
  instant,
}: {
  to: number;
  suffix: string;
  start: boolean;
  instant: boolean;
}) {
  const [n, setN] = useState(instant ? to : 0);

  useEffect(() => {
    if (instant) {
      setN(to);
      return;
    }
    if (!start) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [start, to, instant]);

  return (
    <>
      {n.toLocaleString("en-US")}
      {suffix}
    </>
  );
}

export default function Hero() {
  const heroData =
    websiteData.categories.TalentBridge.sections.Hero.variants.TBHero1;

  const reduce = useReducedMotion();

  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.5 });

  return (
    <section
      id="home"
      className={`${montserrat.className} relative overflow-x-clip bg-[#ffffff] pt-5 pb-0 sm:pt-7 lg:pt-6`}
    >
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-4 px-4 sm:px-6 lg:grid-cols-[1fr_1.15fr] lg:gap-4">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="z-10 space-y-4 pb-2 sm:space-y-5 lg:pb-16"
        >
          <div className="inline-flex max-w-full flex-wrap items-center gap-2 rounded-full bg-[#fde4e7] px-4 py-2 text-xs font-bold text-[#990012] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-[15px]">
            <Users
              size={18}
              fill="currentColor"
              strokeWidth={1.5}
              className="shrink-0 sm:h-[22px] sm:w-[22px]"
            />
            {heroData.badgeItems.map((item, idx) => (
              <span key={item} className="inline-flex items-center gap-2 sm:gap-2.5">
                {idx > 0 && <span className="text-[#990012]/80">•</span>}
                <span>{item}</span>
              </span>
            ))}
          </div>

          <h1
            className="text-3xl font-extrabold leading-[1.14] tracking-tight text-blue-950 sm:text-5xl sm:leading-[1.12] lg:text-[3.5rem]"
            style={{ color: "#0B2545" }}
          >
            {heroData.titleLine1}
            <br />
            {heroData.titleLine2}
            <br />
            <span
              className="relative inline-block text-[#a0001a] sm:whitespace-nowrap"
              style={{ color: "#a0001a" }}
            >
              {heroData.titleHighlight}
              <svg
                aria-hidden
                viewBox="0 0 300 20"
                preserveAspectRatio="none"
                className="absolute -bottom-2.5 left-[24%] h-3 w-[56%] sm:-bottom-3.5 sm:left-[36%] sm:h-4 sm:w-[48%]"
                fill="none"
              >
                <motion.path
                  d="M3 14 C 80 4, 200 2, 297 9"
                  stroke="#a0001a"
                  strokeWidth="5"
                  strokeLinecap="round"
                  initial={{ pathLength: reduce ? 1 : 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.9, delay: 0.7, ease: "easeOut" }}
                />
              </svg>
            </span>
          </h1>

          <p
            className="max-w-[28rem] pt-2 text-sm font-medium leading-relaxed text-blue-950 sm:pt-3 sm:text-lg"
            style={{ color: "#0B2545" }}
          >
            {heroData.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          className="relative flex items-end justify-center pt-6 sm:pt-14 lg:justify-end"
        >
          <div className="relative flex w-full max-w-[340px] items-end justify-center pb-5 sm:max-w-[650px] sm:pb-8 lg:max-w-[700px]">
            <div className="h-[235px] w-[92%] overflow-hidden rounded-[2rem] shadow-lg sm:h-[385px] sm:w-[86%] sm:rounded-[2.25rem] lg:h-[425px]">
              <img
                src={heroData.bgImage}
                alt={heroData.bgImageAlt}
                className="h-full w-full object-cover"
              />
            </div>

            <img
              src={heroData.image}
              alt={heroData.imageAlt}
              className="pointer-events-none absolute -bottom-2 z-10 block max-h-[295px] w-full select-none object-contain object-bottom drop-shadow-[0_14px_24px_rgba(11,37,69,0.28)] sm:-bottom-3 sm:max-h-[520px] sm:w-[108%] sm:max-w-none lg:max-h-[560px]"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        className="relative z-20 mx-auto mt-0 max-w-[84rem] px-4 sm:px-6"
      >
        <div
          className="grid grid-cols-1 gap-5 rounded-[1.5rem] bg-[#0B2545] px-4 py-6 text-white shadow-xl shadow-[#0B2545]/25 sm:grid-cols-2 sm:gap-y-7 sm:rounded-[2rem] md:grid-cols-4 lg:py-7"
          style={{ backgroundColor: "#0B2545" }}
        >
          {heroData.stats.map((stat, i) => {
            const Icon = statIcons[stat.icon as keyof typeof statIcons];
            return (
              <div
                key={stat.label}
                className="relative flex items-center justify-start gap-3.5 px-2 sm:justify-center sm:gap-4"
              >
                {i > 0 && (
                  <span
                    aria-hidden
                    className="absolute left-0 top-1/2 hidden h-14 w-px -translate-y-1/2 bg-white/60 md:block"
                  />
                )}
                <Icon
                  className="h-9 w-9 shrink-0 text-white sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                  strokeWidth={1.75}
                  fill={stat.fill ? "currentColor" : "none"}
                />
                <div className="leading-tight">
                  <p className="text-xl font-extrabold tabular-nums sm:text-3xl lg:text-[2rem]">
                    <Counter
                      to={stat.to}
                      suffix={stat.suffix}
                      start={statsInView}
                      instant={!!reduce}
                    />
                  </p>
                  <p className="mt-1 text-xs font-medium text-white sm:text-base">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}