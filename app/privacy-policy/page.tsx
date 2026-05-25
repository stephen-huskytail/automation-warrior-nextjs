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
                <p className="legal-page-date">Last updated: May 25, 2026</p>

                <p className="legal-page-text">
                  This Privacy Policy describes how Automation Warrior (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) collects, uses, and shares information when you visit
                  automationwarrior.ai (the &quot;Site&quot;).
                </p>

                <h2 className="legal-page-subheading">Information We Collect</h2>
                <p className="legal-page-text">
                  We may collect information you provide directly — such as your name, email
                  address, and business details when you submit a contact form, book a strategy
                  call, or opt in to communications. We also collect information automatically,
                  including your IP address, browser type, device type, referring URL, and pages
                  visited, through standard web server logs and analytics tools.
                </p>

                <h2 className="legal-page-subheading">How We Use Information</h2>
                <ul className="legal-page-list">
                  <li>To respond to inquiries and fulfill requests</li>
                  <li>To schedule and conduct strategy calls and consultations</li>
                  <li>To improve the Site and its content</li>
                  <li>To analyze traffic and usage patterns via analytics</li>
                  <li>To send relevant communications when you opt in</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h2 className="legal-page-subheading">Cookies and Tracking</h2>
                <p className="legal-page-text">
                  We use cookies and similar technologies for analytics and to improve user
                  experience. You can disable cookies in your browser settings, though some
                  functionality may be affected. We do not sell your data through cookie tracking.
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

                <h2 className="legal-page-subheading">Third-Party Service Providers</h2>
                <p className="legal-page-text">
                  We use the following third-party services that may process your data on our
                  behalf:
                </p>
                <ul className="legal-page-list">
                  <li>
                    <strong>Vercel</strong> — Site hosting and edge network. Processes server
                    logs and request metadata.
                  </li>
                  <li>
                    <strong>Google Analytics</strong> — Website traffic and usage analytics.
                    Subject to{" "}
                    <a
                      href="https://policies.google.com/privacy"
                      className="legal-page-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Google&apos;s Privacy Policy
                    </a>
                    .
                  </li>
                  <li>
                    <strong>Cal.com / Calendly</strong> — Appointment scheduling. Collects name,
                    email, and meeting details when you book a call.
                  </li>
                  <li>
                    <strong>Email marketing platform</strong> — Used to send newsletters and
                    follow-up communications to opted-in subscribers.
                  </li>
                  <li>
                    <strong>Affiliate networks</strong> — Including Go High Level and others
                    listed in our{" "}
                    <Link href="/affiliate-disclosure" className="legal-page-link">
                      Affiliate Disclosure
                    </Link>
                    . These services may set their own cookies when you click affiliate links.
                  </li>
                </ul>
                <p className="legal-page-text">
                  Each of these providers has their own privacy policy governing how they handle
                  your data. We encourage you to review them.
                </p>

                <h2 className="legal-page-subheading">Data Retention</h2>
                <p className="legal-page-text">
                  We retain personal information only as long as necessary to fulfill the purposes
                  described in this policy, maintain business records, or as required by law.
                  You may request deletion of your data at any time by contacting us.
                </p>

                <h2 className="legal-page-subheading">Your Rights</h2>
                <p className="legal-page-text">
                  Depending on your jurisdiction, you may have rights regarding your personal
                  data, including the right to access, correct, delete, or restrict its use.
                </p>

                <h2 className="legal-page-subheading">California Residents (CCPA)</h2>
                <p className="legal-page-text">
                  If you are a California resident, the California Consumer Privacy Act (CCPA)
                  provides you with additional rights:
                </p>
                <ul className="legal-page-list">
                  <li>
                    <strong>Right to Know</strong> — You may request information about the
                    categories and specific pieces of personal information we have collected about
                    you, and how it is used and shared.
                  </li>
                  <li>
                    <strong>Right to Delete</strong> — You may request that we delete personal
                    information we have collected from you, subject to certain exceptions.
                  </li>
                  <li>
                    <strong>Right to Opt Out of Sale</strong> — We do not sell your personal
                    information to third parties.
                  </li>
                  <li>
                    <strong>Right to Non-Discrimination</strong> — We will not discriminate
                    against you for exercising any of your CCPA rights.
                  </li>
                </ul>
                <p className="legal-page-text">
                  To exercise your California rights, contact us at{" "}
                  <a href="mailto:stephen@automationwarrior.ai" className="legal-page-link">
                    stephen@automationwarrior.ai
                  </a>
                  . We will respond within 45 days as required by law.
                </p>

                <h2 className="legal-page-subheading">Children&apos;s Privacy</h2>
                <p className="legal-page-text">
                  This Site is not directed to children under 13. We do not knowingly collect
                  personal information from children. If you believe a child has provided us
                  with personal data, please contact us and we will promptly delete it.
                </p>

                <h2 className="legal-page-subheading">Changes to This Policy</h2>
                <p className="legal-page-text">
                  We may update this Privacy Policy periodically. Material changes will be noted
                  with an updated &quot;Last updated&quot; date at the top of this page. Continued
                  use of the Site after changes constitutes your acceptance of the updated policy.
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
