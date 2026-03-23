import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ApproachSection from "@/components/ApproachSection";
import AboutSection from "@/components/AboutSection";
import ResultsSection from "@/components/ResultsSection";
import ServicesSection from "@/components/ServicesSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <Hero />
          <LogoMarquee />
          <ApproachSection />
          <AboutSection />
          <ResultsSection />
          <ServicesSection />
          <ComparisonSection />
          <ProcessSection />
          <TeamSection />
          <CtaSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
