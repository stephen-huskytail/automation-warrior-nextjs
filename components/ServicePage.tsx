import type { ComponentProps, ReactNode } from "react";
import Header from "@/components/Header";
import Hero, { type HeroProps } from "@/components/Hero";
import BusinessSection from "@/components/BusinessSection";
import HomeFaqSection, { faqSchema } from "@/components/HomeFaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
export default function ServicePage({
  name,
  path,
  hero,
  sections,
  faqs,
  children,
}: {
  name: string;
  path: string;
  hero: Partial<HeroProps>;
  sections: ComponentProps<typeof BusinessSection>[];
  faqs: { q: string; a: string }[];
  children?: ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    url: "https://www.automationwarrior.ai" + path,
    description: hero.paragraph,
    provider: {
      "@type": "Organization",
      name: "Automation Warrior",
      url: "https://www.automationwarrior.ai",
    },
    areaServed: "US",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqs)) }}
      />
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper" tabIndex={-1}>
          <Hero {...hero} />
          {sections.map((section) => (
            <BusinessSection key={section.title} {...section} />
          ))}
          {children}
          <HomeFaqSection items={faqs} />
          <CtaSection />
        </div>
        <Footer />
      </main>
    </>
  );
}
