import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Terms of Use | Automation Warrior",
  description: "Terms of use for automationwarrior.ai.",
  alternates: { canonical: "https://www.automationwarrior.ai/terms" },
};

export default function TermsPage() {
  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <section className="legal-page-section">
            <div className="padding-global">
              <div className="legal-page-container">
                <h1 className="legal-page-heading">Terms of Use</h1>
                <p className="legal-page-date">Last updated: May 25, 2026</p>

                <p className="legal-page-text">
                  By accessing automationwarrior.ai (the &quot;Site&quot;), you agree to these
                  Terms of Use. If you do not agree, please do not use the Site.
                </p>

                <h2 className="legal-page-subheading">Use of Content</h2>
                <p className="legal-page-text">
                  All content on this Site — including articles, guides, reviews, and media — is
                  the property of Automation Warrior and protected by copyright. You may share
                  excerpts with attribution and a link back to the original article. You may not
                  reproduce full articles without written permission.
                </p>

                <h2 className="legal-page-subheading">Accuracy of Information</h2>
                <p className="legal-page-text">
                  We strive to provide accurate, up-to-date information. However, content on this
                  Site is for informational purposes only and should not be construed as
                  professional advice. Tool pricing, features, and affiliate commissions change
                  frequently — always verify with the source before making purchasing decisions.
                </p>

                <h2 className="legal-page-subheading">Earnings &amp; Results Disclaimer</h2>
                <p className="legal-page-text">
                  Any results, statistics, or outcomes referenced on this Site — including but
                  not limited to claims such as increased booking volume, lead generation
                  improvements, or percentage of tasks automated — represent examples or averages
                  and are <strong>not guaranteed</strong>. Individual results will vary based on
                  your industry, business model, implementation, team, and numerous other factors
                  outside our control.
                </p>
                <p className="legal-page-text">
                  Nothing on this Site constitutes a guarantee of income, revenue, or specific
                  business outcomes. We make no representation that you will achieve similar
                  results by using AI automation tools or services referenced or recommended here.
                  Any forward-looking statements about business improvement are illustrative only.
                </p>

                <h2 className="legal-page-subheading">Affiliate Relationships</h2>
                <p className="legal-page-text">
                  This Site participates in affiliate programs. We may earn commissions when you
                  purchase products or services through links on this Site. This does not affect
                  the price you pay or our editorial independence. See our full{" "}
                  <a href="/affiliate-disclosure" className="legal-page-link">
                    Affiliate Disclosure
                  </a>{" "}
                  for details.
                </p>

                <h2 className="legal-page-subheading">No Warranty</h2>
                <p className="legal-page-text">
                  This Site is provided &quot;as is&quot; without any warranty, express or
                  implied. We do not guarantee that the Site will be error-free or uninterrupted.
                  We make no warranty regarding the accuracy, completeness, or reliability of any
                  content on the Site.
                </p>

                <h2 className="legal-page-subheading">Limitation of Liability</h2>
                <p className="legal-page-text">
                  To the maximum extent permitted by law, Automation Warrior is not liable for any
                  indirect, incidental, consequential, or punitive damages arising from your use
                  of this Site, reliance on its content, or your use of any tools or services
                  referenced here.
                </p>

                <h2 className="legal-page-subheading">External Links</h2>
                <p className="legal-page-text">
                  This Site contains links to third-party websites, including affiliate and
                  partner sites. We are not responsible for the content, privacy practices,
                  accuracy, or terms of those sites. Linking to a third-party site does not
                  constitute an endorsement beyond what is stated in our editorial content.
                </p>

                <h2 className="legal-page-subheading">Governing Law</h2>
                <p className="legal-page-text">
                  These Terms are governed by the laws of the State of Nevada, without regard to
                  conflict of law principles. Any disputes arising from use of this Site shall be
                  subject to the exclusive jurisdiction of the courts located in Clark County,
                  Nevada.
                </p>

                <h2 className="legal-page-subheading">Changes to Terms</h2>
                <p className="legal-page-text">
                  We may update these Terms at any time. Continued use of the Site after changes
                  constitutes acceptance of the updated Terms.
                </p>

                <h2 className="legal-page-subheading">Contact</h2>
                <p className="legal-page-text">
                  Questions? Email{" "}
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
