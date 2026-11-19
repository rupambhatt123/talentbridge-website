"use client";
import { motion } from "framer-motion";
import websiteData from "../data/websiteData.json";

export default function TeamBanner() {
  const bannerData =
    websiteData.categories.TalentBridge.sections.TeamBanner.variants
      .TBTeamBanner1;

  return (
    <section className="bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={bannerData.image}
            alt={bannerData.alt}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}