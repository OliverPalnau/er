"use client";

import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/translations/translations";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Parallax from "@/components/Parralax";
import ServicesSectionAlternate from "@/components/ServicesSectionAlternate";
import ThreePanelComponent from "@/components/ThreePanelComponent";
import ChinaSvg from "@/public/images/China.svg";
import USSvg from "@/public/images/US.svg";

export default function Home() {
  const { language } = useLanguage();

  return (
    <div>
      <Header />
      <Hero />
      <ServicesSectionAlternate />
      <ThreePanelComponent />
      <Parallax />
      <ContactSection />
      <Footer />
    </div>
  );
}
