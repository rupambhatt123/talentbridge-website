import Hero from "@/component/Hero";
import About from "@/component/About";
import TeamBanner from "@/component/TeamBanner";
import Services from "@/component/Services";
import WhyChooseUs from "@/component/WhyChooseUs";
import Testimonials from "@/component/Testimonials";
import Faq from "@/component/Faq";
import Contact from "@/component/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <TeamBanner />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Faq />
      <Contact />
    </main>
  );
}