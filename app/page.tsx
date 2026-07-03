import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ApproachSection from "@/components/ApproachSection";
import ServicesSection from "@/components/ServicesSection";
import WeekOneSection from "@/components/WeekOneSection";
import ResultsSection from "@/components/ResultsSection";
import ComparisonSection from "@/components/ComparisonSection";
import TeamSection from "@/components/TeamSection";
import HomeFaqSection from "@/components/HomeFaqSection";
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
          <ServicesSection />
          <WeekOneSection />
          <ResultsSection />
          <ComparisonSection />
          <TeamSection />
          <HomeFaqSection />
          <CtaSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
