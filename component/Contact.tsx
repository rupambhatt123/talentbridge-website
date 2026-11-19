"use client";

import { useState, FormEvent } from "react";
import { motion, MotionConfig } from "framer-motion";
import {
  MapPin,
  PhoneCall,
  Mail,
  MessageCircle,
  CornerUpRight,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const contactIcons = {
  location: MapPin,
  phone: PhoneCall,
  email: Mail,
} as const;

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm placeholder:text-slate-500 transition focus:border-[#a0001a] focus:outline-none focus:ring-4 focus:ring-[#a0001a]/10 sm:px-5 sm:py-3 sm:text-base";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Contact() {
  const contactData =
    websiteData.categories.TalentBridge.sections.Contact.variants.TBContact1;

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <MotionConfig reducedMotion="user">
        <section
          id="contact"
          className={`${montserrat.className} relative overflow-hidden bg-white py-14 sm:py-16 lg:py-20`}
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
            <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#990012]/[0.06] blur-3xl" />
            <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#0B2545]/[0.07] blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="rounded-[1.75rem] border border-slate-200/80 bg-[#eef2f8] px-6 py-10 text-center shadow-xl shadow-slate-300/40 sm:rounded-[2rem] sm:px-10 sm:py-12"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#fde4e7] text-[#a0001a] shadow-sm sm:h-20 sm:w-20">
                <CheckCircle2 size={38} strokeWidth={2.2} />
              </div>

              <h2 className="mt-5 text-2xl font-extrabold tracking-tight text-[#0B2545] sm:text-3xl lg:text-4xl">
                {contactData.thankYou.title}{" "}
                <span className="text-[#a0001a]">
                  {contactData.thankYou.titleHighlight}
                </span>
              </h2>

              <p className="mx-auto mt-3 max-w-lg text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
                {contactData.thankYou.description}
              </p>

              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-7 inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#8f0a2a] px-6 py-3 text-sm font-extrabold uppercase text-white shadow-lg shadow-[#8f0a2a]/30 transition duration-300 hover:-translate-y-0.5 hover:bg-[#760820] sm:px-7 sm:py-3.5 sm:text-base"
              >
                <ArrowLeft size={18} strokeWidth={2.5} />
                {contactData.thankYou.backButtonText}
              </button>
            </motion.div>
          </div>
        </section>
      </MotionConfig>
    );
  }

  return (
    <MotionConfig reducedMotion="user">
      <section
        id="contact"
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
          <div className="absolute -left-40 top-10 h-[420px] w-[420px] rounded-full bg-[#990012]/[0.06] blur-3xl" />
          <div className="absolute -right-40 bottom-0 h-[460px] w-[460px] rounded-full bg-[#0B2545]/[0.07] blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 sm:gap-10 sm:px-6 lg:grid-cols-[6fr_7fr] lg:gap-12">
          <div>
            <motion.div {...reveal()}>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-[#fde4e7] px-4 py-2 text-sm font-extrabold uppercase text-[#a0001a] sm:gap-2.5 sm:px-5 sm:py-2.5 sm:text-lg">
                <MessageCircle
                  size={20}
                  fill="currentColor"
                  strokeWidth={1.5}
                  className="sm:h-[22px] sm:w-[22px]"
                />
                {contactData.badge}
              </div>
            </motion.div>

            <motion.h2
              {...reveal(0.08)}
              className="mt-4 text-2xl font-extrabold leading-[1.15] tracking-tight text-[#0B2545] sm:text-4xl lg:text-[2.5rem]"
            >
              {contactData.titleLine1}
              <br />
              <span className="text-[#a0001a]">{contactData.titleHighlight}</span>
            </motion.h2>

            <motion.p
              {...reveal(0.16)}
              className="mt-3 max-w-lg text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-[17px]"
            >
              {contactData.description}
            </motion.p>

            <div className="mt-6 space-y-3.5 sm:space-y-4">
              {contactData.contactInfo.map((item, i) => {
                const Icon =
                  contactIcons[item.icon as keyof typeof contactIcons];
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -28 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{
                      duration: 0.5,
                      delay: 0.2 + i * 0.09,
                      ease: "easeOut",
                    }}
                    className="group flex items-center gap-3.5 sm:gap-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#fde4e7] text-[#a0001a] shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 sm:h-14 sm:w-14">
                      <Icon
                        size={20}
                        strokeWidth={2.2}
                        className="sm:h-6 sm:w-6"
                      />
                    </div>
                    <span className="h-9 w-[3px] shrink-0 rounded-full bg-[#c8102e] sm:h-10" />
                    <div className="min-w-0">
                      <p className="text-xs font-medium text-slate-600 sm:text-base">
                        {item.label}
                      </p>
                      <p className="break-words text-base font-extrabold text-[#0B2545] sm:text-lg lg:text-[1.3rem]">
                        {item.value}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="rounded-[1.5rem] bg-[#eef2f8] p-5 shadow-xl shadow-slate-300/40 sm:rounded-[2rem] sm:p-8"
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-x-6 gap-y-4 md:grid-cols-2"
            >
              {contactData.fields.map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="mb-1.5 block text-sm font-extrabold text-[#0B2545] sm:mb-2 sm:text-base lg:text-lg"
                  >
                    {f.label}
                    {f.required && <span className="text-[#c8102e]">*</span>}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required={f.required}
                    className={inputClass}
                  />
                </div>
              ))}

              <div className="md:col-span-2">
                <label
                  htmlFor={contactData.messageField.id}
                  className="mb-1.5 block text-sm font-extrabold text-[#0B2545] sm:mb-2 sm:text-base lg:text-lg"
                >
                  {contactData.messageField.label}
                  {contactData.messageField.required && (
                    <span className="text-[#c8102e]">*</span>
                  )}
                </label>
                <textarea
                  id={contactData.messageField.id}
                  name={contactData.messageField.id}
                  rows={contactData.messageField.rows}
                  placeholder={contactData.messageField.placeholder}
                  required={contactData.messageField.required}
                  className={`${inputClass} resize-y`}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-between gap-4 rounded-xl bg-[#8f0a2a] py-2.5 pl-6 pr-3 text-base font-extrabold uppercase text-white shadow-lg shadow-[#8f0a2a]/30 transition duration-300 hover:-translate-y-0.5 hover:bg-[#760820] hover:shadow-xl active:translate-y-0 sm:w-auto sm:justify-start sm:gap-6 sm:py-3 sm:pl-8 sm:pr-4 sm:text-lg"
                >
                  {contactData.submitButtonText}
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#8f0a2a] sm:h-10 sm:w-10">
                    <CornerUpRight
                      size={18}
                      strokeWidth={3}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 sm:h-5 sm:w-5"
                    />
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}