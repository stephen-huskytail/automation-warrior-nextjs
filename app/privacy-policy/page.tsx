import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Privacy Policy | Automation Warrior",
  description: "Privacy policy for automationwarrior.ai — how we collect and use data.",
  alternates: { canonical: "https://www.automationwarrior.ai/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper">
          <section className="legal-page-section">
            <div className="padding-global">
              <div className="legal-page-container">
                <h1 className="legal-page-heading">Privacy Policy</h1>
                <p className="legal-page-date">Last updated: May 9, 2026</p>

                <p className="legal-page-text">
                  This Privacy Policy describes how Automation Warrior (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) collects, uses, and shares information when you visit
                  automationwarrior.ai (the &quot;Site&quot;).
                </p>

                <h2 className="legal-page-subheading">Information We Collect</h2>
                <p className="legal-page-text">
                  We may collect information you provide directly (such as your name and email
                  address when you submit a contact form) and information collected automatically
                  (such as your IP address, browser type, and pages visited) through standard web
                  server logs and analytics tools.
                </p>

                <h2 className="legal-page-subheading">How We Use Information</h2>
                <ul className="legal-page-list">
                  <li>To respond to inquiries and fulfill requests</li>
                  <li>To improve the Site and its content</li>
                  <li>To analyze traffic and usage patterns (via analytics)</li>
                  <li>To send relevant communications when you opt in</li>
                </ul>

                <h2 className="legal-page-subheading">Cookies and Tracking</h2>
                <p className="legal-page-text">
                  We use cookies and similar technologies for analytics and to improve user
                  experience. You can disable cookies in your browser settings, though some
                  functionality may be affected.
                </p>

                <h2 className="legal-page-subheading">Affiliate Links</h2>
                <p className="legal-page-text">
                  This Site contains affiliate links. When you click these links, third-party
                  sites may place cookies on your device to track referrals. Please review the
                  privacy policies of any third-party sites you visit.{" "}
                  <Link href="/affiliate-disclosure" className="legal-page-link">
                    See our full affiliate disclosure →
                  </Link>
                </p>

                <h2 className="legal-page-subheading">Third-Party Services</h2>
                <p className="legal-page-text">
                  We may use third-party analytics services (such as Google Analytics) and email
                  providers. These services have their own privacy policies governing the use of
                  your information.
                </p>

                <h2 className="legal-page-subheading">Data Retention</h2>
                <p className="legal-page-text">
                  We retain personal information only as long as necessary to fulfill the purposes
                  described in this policy, or as required by law.
                </p>

                <h2 className="legal-page-subheading">Your Rights</h2>
                <p className="legal-page-text">
                  Depending on your jurisdiction, you may have rights to access, correct, or
                  delete your personal data. Contact us at{" "}
                  <a href="mailto:stephen@automationwarrior.ai" className="legal-page-link">
                    stephen@automationwarrior.ai
                  </a>{" "}
                  to exercise these rights.
                </p>

                <h2 className="legal-page-subheading">Changes to This Policy</h2>
                <p className="legal-page-text">
                  We may update this Privacy Policy periodically. Material changes will be noted
                  with an updated &quot;Last updated&quot; date at the top of this page.
                </p>

                <h2 className="legal-page-subheading">Contact</h2>
                <p className="legal-page-text">
                  Questions about this policy? Email{" "}
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
