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
                <p className="legal-page-date">Last updated: May 9, 2026</p>

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

                <h2 className="legal-page-subheading">Affiliate Relationships</h2>
                <p className="legal-page-text">
                  This Site participates in affiliate programs. We may earn commissions when you
                  purchase products or services through links on this Site. This does not affect
                  the price you pay or our editorial independence.
                </p>

                <h2 className="legal-page-subheading">No Warranty</h2>
                <p className="legal-page-text">
                  This Site is provided &quot;as is&quot; without any warranty, express or
                  implied. We do not guarantee that the Site will be error-free or uninterrupted.
                </p>

                <h2 className="legal-page-subheading">Limitation of Liability</h2>
                <p className="legal-page-text">
                  To the maximum extent permitted by law, Automation Warrior is not liable for any
                  indirect, incidental, or consequential damages arising from your use of this
                  Site or reliance on its content.
                </p>

                <h2 className="legal-page-subheading">External Links</h2>
                <p className="legal-page-text">
                  This Site contains links to third-party websites. We are not responsible for the
                  content, privacy practices, or terms of those sites.
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
