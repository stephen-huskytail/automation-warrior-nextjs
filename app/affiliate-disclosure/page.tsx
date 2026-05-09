import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Automation Warrior",
  description:
    "Automation Warrior affiliate disclosure — how we earn commissions and how it affects our content.",
  alternates: { canonical: "https://www.automationwarrior.ai/affiliate-disclosure" },
};

export default function AffiliateDisclosurePage() {
  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <section className="legal-page-section">
            <div className="padding-global">
              <div className="legal-page-container">
                <h1 className="legal-page-heading">Affiliate Disclosure</h1>
                <p className="legal-page-date">Last updated: May 9, 2026</p>

                <p className="legal-page-text">
                  Automation Warrior participates in affiliate marketing programs, which means we
                  may earn a commission when you click certain links and make a purchase — at no
                  additional cost to you.
                </p>

                <h2 className="legal-page-subheading">FTC Compliance</h2>
                <p className="legal-page-text">
                  In accordance with the Federal Trade Commission (FTC) guidelines on endorsements
                  and testimonials (16 CFR Part 255), we disclose material connections between
                  this Site and the companies whose products we review or recommend.
                </p>
                <p className="legal-page-text">
                  Any post containing affiliate links includes a disclosure notice at the top of
                  the article. We also display a site-wide disclosure on every blog post.
                </p>

                <h2 className="legal-page-subheading">Our Affiliate Partners</h2>
                <p className="legal-page-text">
                  We currently participate in affiliate programs offered by companies including
                  (but not limited to):
                </p>
                <ul className="legal-page-list">
                  <li>Go High Level</li>
                  <li>n8n</li>
                  <li>Make.com</li>
                  <li>ActiveCampaign</li>
                  <li>Kartra</li>
                  <li>Other AI and automation tools reviewed on this Site</li>
                </ul>

                <h2 className="legal-page-subheading">Editorial Independence</h2>
                <p className="legal-page-text">
                  Affiliate relationships do not influence our editorial content. We only recommend
                  tools and services that we have personally used and believe provide genuine value.
                  We include honest assessments of pros, cons, and limitations — including for
                  products we have affiliate relationships with.
                </p>
                <p className="legal-page-text">
                  We do not accept payment for positive reviews. If a company offers us a
                  sponsored placement, that will be clearly labeled as sponsored content.
                </p>

                <h2 className="legal-page-subheading">How Commissions Work</h2>
                <p className="legal-page-text">
                  When you click an affiliate link and purchase, the company pays us a referral
                  commission. Commissions are paid by the companies, not by you — the price you
                  pay is the same whether or not you use our affiliate link.
                </p>

                <h2 className="legal-page-subheading">Questions</h2>
                <p className="legal-page-text">
                  If you have questions about our affiliate relationships or this disclosure,
                  contact us at{" "}
                  <a href="mailto:stephen@automationwarrior.ai" className="legal-page-link">
                    stephen@automationwarrior.ai
                  </a>
                  .
                </p>
              </div>
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  );
}
