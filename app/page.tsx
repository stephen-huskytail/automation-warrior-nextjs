import Header from "@/components/Header";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import ProblemSection from "@/components/ProblemSection";
import PillarsSection from "@/components/PillarsSection";
import AgentTeamSection from "@/components/AgentTeamSection";
import WeekOneSection from "@/components/WeekOneSection";
import ResultsSection from "@/components/ResultsSection";
import WaysToWorkSection from "@/components/WaysToWorkSection";
import FitSection from "@/components/FitSection";
import AboutShortSection from "@/components/AboutShortSection";
import TeamSection from "@/components/TeamSection";
import HomeFaqSection, { homeFaqItems, faqSchema } from "@/components/HomeFaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

const fitItems = [
  "Service businesses at seven figures and up, with processes already in place",
  "Law firms, medical and health practices, coaching and consulting companies, professional-services firms",
  "Regulated industries — that's where private deployment pays off",
  "Owners who want to grow without hiring fifty more people",
];

const notFitItems = [
  "Startups still finding their first process",
  "Anyone shopping for a chatbot",
  "E-commerce and D2C brands — good businesses, not this practice",
  "Teams that want a demo instead of a deployment",
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqItems)) }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <Hero />
          <LogoMarquee />
          <ProblemSection />
          <PillarsSection />
          <AgentTeamSection />
          <WeekOneSection />
          <ResultsSection />
          <WaysToWorkSection />
          <FitSection
            title="Right fit matters more than fast fit."
            fitItems={fitItems}
            notFitItems={notFitItems}
          />
          <AboutShortSection />
          <TeamSection />
          <HomeFaqSection />
          <CtaSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
