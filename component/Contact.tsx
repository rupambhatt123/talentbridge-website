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
  Globe,
} from "lucide-react";
import { Montserrat } from "next/font/google";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

type ContactSocialLink = {
  name: string;
  icon: string;
  href: string;
};

type ContactInfoItem = {
  icon: string;
  label: string;
  value: string;
};

type ContactField = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required?: boolean;
};

type TBContact1Data = {
  badge: string;
  titleLine1: string;
  titleHighlight: string;
  description: string;
  contactInfo: ContactInfoItem[];
  socialLinks?: ContactSocialLink[];
  fields: ContactField[];
  messageField: {
    id: string;
    label: string;
    rows: number;
    placeholder: string;
    required?: boolean;
  };
  submitButtonText: string;
  thankYou: {
    title: string;
    titleHighlight: string;
    description: string;
    backButtonText: string;
  };
};

type WebsiteDataShape = {
  categories: {
    TalentBridge: {
      sections: {
        Contact: {
          variants: {
            TBContact1: TBContact1Data;
          };
        };
      };
    };
  };
};

const contactIcons = {
  location: MapPin,
  phone: PhoneCall,
  email: Mail,
} as const;

function SocialGlyph({ icon }: { icon: string }) {
  switch (icon.toLowerCase()) {
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
          <path d="M6.94 8.5H3.56V19.5H6.94V8.5ZM5.25 3.5C4.14 3.5 3.25 4.39 3.25 5.5C3.25 6.6 4.14 7.5 5.25 7.5C6.35 7.5 7.25 6.6 7.25 5.5C7.25 4.39 6.35 3.5 5.25 3.5ZM20.44 13.02C20.44 9.88 18.76 8.22 16.16 8.22C14.37 8.22 13.48 9.2 13.02 9.93V8.5H9.65C9.7 9.48 9.65 19.5 9.65 19.5H13.02V13.36C13.02 13.02 13.05 12.69 13.15 12.45C13.42 11.78 14.03 11.09 15.07 11.09C16.41 11.09 17.06 12.11 17.06 13.6V19.5H20.44V13.02Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
          <path d="M12 7.3A4.7 4.7 0 1 0 16.7 12 4.7 4.7 0 0 0 12 7.3Zm0 7.75A3.05 3.05 0 1 1 15.05 12 3.05 3.05 0 0 1 12 15.05Zm6-7.94a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1ZM21.2 8.07A6.17 6.17 0 0 0 19.63 4.1 6.17 6.17 0 0 0 15.66 2.53C14.38 2.02 11.15 2.15 12 2.15h0c-.85 0-4.08-.13-5.36.38A6.17 6.17 0 0 0 2.67 4.1 6.17 6.17 0 0 0 1.1 8.07C.59 9.35.72 12.58.72 12s-.13 2.65.38 3.93a6.17 6.17 0 0 0 1.57 3.97 6.17 6.17 0 0 0 3.97 1.57c1.28.51 4.51.38 5.36.38h0c.85 0 4.08.13 5.36-.38a6.17 6.17 0 0 0 3.97-1.57 6.17 6.17 0 0 0 1.57-3.97c.51-1.28.38-4.51.38-3.93s.13-2.65-.38-3.93ZM19.2 17.32a4.42 4.42 0 0 1-2.49 2.49c-.86.34-2.9.26-4.71.26s-3.85.08-4.71-.26a4.42 4.42 0 0 1-2.49-2.49c-.34-.86-.26-2.9-.26-4.71s-.08-3.85.26-4.71a4.42 4.42 0 0 1 2.49-2.49c.86-.34 2.9-.26 4.71-.26s3.85-.08 4.71.26a4.42 4.42 0 0 1 2.49 2.49c.34.86.26 2.9.26 4.71s.08 3.85-.26 4.71Z" />
        </svg>
      );
    case "twitter":
    case "x":
      return (
        <svg viewBox="0 0 24 24" className="h-[17px] w-[17px] fill-current" aria-hidden>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className="h-[18px] w-[18px] fill-current" aria-hidden>
          <path d="M13.5 9H16V6h-2.5C11.57 6 10 7.57 10 9.5V11H8v3h2v7h3v-7h2.25l.75-3H13V9.5c0-.28.22-.5.5-.5Z" />
        </svg>
      );
    default:
      return <Globe size={18} strokeWidth={2.2} />;
  }
}

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-700 shadow-sm placeholder:text-slate-500 transition focus:border-[#a0001a] focus:outline-none focus:ring-4 focus:ring-[#a0001a]/10 sm:px-5 sm:py-3 sm:text-base";

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.55, delay, ease: "easeOut" as const },
});

export default function Contact() {
  const typedData = websiteData as unknown as WebsiteDataShape;
  const contactData =
    typedData.categories.TalentBridge.sections.Contact.variants.TBContact1;
  const socialLinks = contactData.socialLinks ?? [];

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
              className="mt-3 line-clamp-2 max-w-lg text-sm font-medium leading-relaxed text-slate-700 sm:text-base lg:text-[17px]"
            >
              {contactData.description}
            </motion.p>

            <div className="mt-6 space-y-3.5 sm:space-y-4">
              {contactData.contactInfo.map((item, i) => {
                const Icon =
                  contactIcons[item.icon as keyof typeof contactIcons] ?? MapPin;
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

            {socialLinks.length > 0 && (
              <div className="mt-6 flex flex-wrap items-center gap-3">
                {socialLinks.map((social) => {
                  const isExternal = /^https?:\/\//i.test(social.href);
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      aria-label={social.name}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0B2545] shadow-sm transition hover:-translate-y-0.5 hover:border-[#a0001a] hover:bg-[#fde4e7] hover:text-[#a0001a]"
                    >
                      <SocialGlyph icon={social.icon} />
                    </a>
                  );
                })}
              </div>
            )}
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