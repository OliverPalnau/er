import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import OurServicesSection from "@/components/OurServices";
import Parallax from "@/components/Parralax";
import ServicesSectionAlternate from "@/components/ServicesSectionAlternate";
import ThreePanelComponent from "@/components/ThreePanelComponent";

export default function Home() {
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
