import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import websiteData from "../data/websiteData.json";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const commonData = websiteData.common;
const heroData =
  websiteData.categories.TalentBridge.sections.Hero.variants.TBHero1;

export const metadata: Metadata = {
  title: `${commonData.siteName} | ${commonData.tagline}`,
  description: heroData.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${montserrat.className} bg-white text-blue-950 antialiased selection:bg-[#990012] selection:text-white`}
        style={{ color: "#0B2545" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}