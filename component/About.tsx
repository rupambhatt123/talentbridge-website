"use client";
import { useEffect, useRef, useState } from "react";
import { animate, motion, MotionConfig, useInView } from "framer-motion";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800", "900"],
  display: "swap",
});

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.6, delay, ease: "easeOut" as const },
});

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: "easeOut",
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return <span ref={ref}>{n}</span>;
}

function PeopleMark() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 120 90"
      className="h-14 w-16 shrink-0 sm:h-20 sm:w-24 lg:h-[5.5rem] lg:w-28"
    >
      <circle cx="60" cy="16" r="13" fill="#a0001a" />
      <circle cx="20" cy="34" r="11" fill="#0B2545" />
      <circle cx="100" cy="34" r="11" fill="#0B2545" />
      <path d="M32 82 A28 28 0 0 1 88 82 Z" fill="#a0001a" />
      <path
        d="M4 82 C4 62 14 52 28 50"
        stroke="#0B2545"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M116 82 C116 62 106 52 92 50"
        stroke="#0B2545"
        strokeWidth="11"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function About() {
  const aboutData =
    websiteData.categories.TalentBridge.sections.About.variants.TBAbout1;

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="about"
        className={`${montserrat.className} relative overflow-hidden bg-white py-10 sm:py-12 lg:py-14`}
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: "radial-gradient(#cfd6e4 1px, transparent 1px)",
              backgroundSize: "26px 26px",
              maskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent 0%, black 30%, transparent 100%)",
            }}
          />
          <div className="absolute -right-40 top-0 h-[380px] w-[380px] rounded-full bg-[#990012]/[0.06] blur-3xl" />
          <div className="absolute -left-40 bottom-0 h-[380px] w-[380px] rounded-full bg-[#0B2545]/[0.06] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-start gap-4 sm:gap-5 lg:grid-cols-12 lg:gap-10">
            <motion.div {...reveal()} className="lg:col-span-2 lg:pt-1">
              <span className="inline-block whitespace-nowrap rounded-full border-2 border-[#0B2545] bg-white px-6 py-1.5 text-sm font-semibold text-[#0B2545] sm:px-8 sm:py-2 sm:text-lg">
                {aboutData.badge}
              </span>
            </motion.div>

            <motion.h2
              {...reveal(0.1)}
              className="text-2xl font-extrabold leading-[1.16] tracking-tight text-[#0B2545] sm:text-4xl sm:leading-[1.15] lg:col-span-10 lg:text-[2.3rem] xl:text-[2.85rem]"
            >
              {aboutData.titleLine1}
              <br className="hidden xl:block" /> {aboutData.titleLine2}{" "}
              <span className="text-[#a0001a]">{aboutData.titleHighlight}</span>
            </motion.h2>
          </div>

          <div className="mt-7 grid grid-cols-1 gap-x-10 gap-y-12 sm:mt-8 sm:gap-y-16 lg:mt-9 lg:grid-cols-12">
            <div className="lg:col-span-6 lg:pb-12">
              <motion.div {...reveal(0.1)} className="relative pl-0 lg:pl-8">
                <div className="group overflow-hidden rounded-[1.5rem] shadow-lg shadow-slate-300/40 sm:rounded-[2rem]">
                  <img
                    src={aboutData.teamImage}
                    alt={aboutData.teamImageAlt}
                    className="h-[220px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[300px] lg:h-[300px] xl:h-[320px]"
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                  className="absolute -bottom-11 left-2 flex h-[132px] w-[156px] flex-col items-center justify-center rounded-b-[1.25rem] rounded-tl-[1.25rem] rounded-tr-[3rem] bg-[#a0001a] px-2 text-center text-white shadow-xl shadow-[#a0001a]/25 sm:-bottom-12 sm:-left-2 sm:h-[170px] sm:w-[205px] sm:rounded-b-[1.5rem] sm:rounded-tl-[1.5rem] sm:rounded-tr-[3.5rem] lg:-bottom-[7rem] lg:left-0 lg:h-[200px] lg:w-[240px] lg:rounded-b-[2rem] lg:rounded-tl-[2rem] lg:rounded-tr-[5rem]"
                >
                  <span className="text-5xl font-black leading-none sm:text-6xl lg:text-[5rem]">
                    <CountUp to={aboutData.experienceYears} />
                  </span>
                  <span className="mt-1.5 text-xs font-semibold sm:mt-2 sm:text-base lg:text-lg">
                    {aboutData.experienceLabel}
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                {...reveal(0.3)}
                className="mt-14 flex flex-wrap items-center gap-3 sm:mt-16 sm:flex-nowrap sm:gap-4 lg:mt-6 lg:pl-[17.5rem]"
              >
                <div className="flex -space-x-2.5 sm:-space-x-3">
                  {aboutData.avatars.map((src, i) => (
                    <img
                      key={i}
                      src={src}
                      alt=""
                      className="h-10 w-10 rounded-full border-2 border-white object-cover object-top shadow-sm sm:h-12 sm:w-12"
                    />
                  ))}
                </div>
                <div className="h-9 w-0.5 shrink-0 bg-[#0B2545] sm:h-11" />
                <div className="leading-tight">
                  <p className="text-sm font-semibold text-[#0B2545] sm:text-base lg:text-lg">
                    {aboutData.teamTitle}
                  </p>
                  <p className="whitespace-nowrap text-base font-extrabold text-[#a0001a] sm:text-lg lg:text-xl">
                    {aboutData.teamHighlight}
                  </p>
                </div>
              </motion.div>
            </div>

            <div className="flex flex-col lg:col-span-6">
              <motion.p
                {...reveal(0.2)}
                className="max-w-[34rem] text-base font-medium leading-[1.68] text-slate-800 sm:text-lg sm:leading-[1.7] lg:pt-4 lg:text-xl"
              >
                {aboutData.description}
              </motion.p>

              <motion.div
                {...reveal(0.35)}
                className="mt-7 flex items-end justify-between gap-4 sm:mt-8 sm:justify-end sm:gap-8 lg:mt-auto lg:pt-6"
              >
                <PeopleMark />
                <div className="group w-[165px] overflow-hidden rounded-[1.5rem] shadow-lg shadow-slate-300/40 sm:w-[230px] sm:rounded-[1.75rem] lg:w-[250px]">
                  <img
                    src={aboutData.handshakeImage}
                    alt={aboutData.handshakeImageAlt}
                    className="h-[165px] w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 sm:h-[220px] lg:h-[215px]"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </MotionConfig>
  );
}