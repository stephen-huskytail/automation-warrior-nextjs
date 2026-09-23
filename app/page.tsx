import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ResultsSection from "@/components/ResultsSection";
import WaysToWorkSection from "@/components/WaysToWorkSection";
import TeamEnablementSection from "@/components/TeamEnablementSection";
import EngagementProcess from "@/components/EngagementProcess";
import PillarsSection from "@/components/PillarsSection";
import AboutShortSection from "@/components/AboutShortSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import HomeFaqSection, {
  homeFaqItems,
  faqSchema,
} from "@/components/HomeFaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema(homeFaqItems)),
        }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <Hero />
          <ResultsSection />
          <WaysToWorkSection />
          <TeamEnablementSection />
          <EngagementProcess />
          <PillarsSection />
          <AboutShortSection />
          <TestimonialsSection />
          <HomeFaqSection />
          <CtaSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
