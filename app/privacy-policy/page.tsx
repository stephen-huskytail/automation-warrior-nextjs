import { serviceMetadata } from "@/lib/serviceMetadata";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata = serviceMetadata(
  "Privacy Policy | Automation Warrior",
  "Privacy policy for automationwarrior.ai — how we collect and use data.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <>
      <CustomCursor />
      <main className="page-wrapper">
        <Header />
        <div id="scroll" className="main-wrapper" tabIndex={-1}>
          <section className="legal-page-section">
            <div className="padding-global">
              <div className="legal-page-container">
                <h1 className="legal-page-heading">Privacy Policy</h1>
                <p className="legal-page-date">Last updated: September 23, 2026</p>

                <p className="legal-page-text">
                  This Privacy Policy describes how Automation Warrior (&quot;we,&quot; &quot;us,&quot; or
                  &quot;our&quot;) collects, uses, and shares information when you visit
                  automationwarrior.ai (the &quot;Site&quot;).
                </p>

                <h2 className="legal-page-subheading">Information We Collect</h2>
                <p className="legal-page-text">
                  When you request a strategy call, we collect your name, email address,
                  message, and any company or phone details you choose to provide. We save
                  the inquiry in a private database and use email to notify our team and
                  acknowledge your request. The form requests a conversation; it does not
                  book an appointment with an external scheduling service.
                </p>
                <p className="legal-page-text">
                  Our hosting and measurement services process request information such as
                  IP addresses, page URLs, referring sites, browser and device details,
                  approximate location, and loading-performance measurements. To prevent
                  form abuse, we use a short-lived verification token and temporary counters
                  keyed by protected hashes of your IP and email address. Raw IP addresses
                  are not saved in our inquiry database. We also record email delivery
                  identifiers and status, such as delivery failures.
                </p>

                <h2 className="legal-page-subheading">How We Use Information</h2>
                <ul className="legal-page-list">
                  <li>To respond to inquiries and fulfill requests</li>
                  <li>To schedule and conduct strategy calls and consultations</li>
                  <li>To improve the Site and its content</li>
                  <li>To analyze traffic and usage patterns via analytics</li>
                  <li>To protect the inquiry form, retry failed notifications, and monitor delivery</li>
                  <li>To comply with legal obligations</li>
                </ul>

                <h2 className="legal-page-subheading">Cookies and Tracking</h2>
                <p className="legal-page-text">
                  We use Vercel Web Analytics for aggregate site usage and Vercel Speed
                  Insights for performance measurements. These services do not use tracking
                  cookies. We do not send inquiry form contents to these analytics services.
                  Submitting an inquiry does not subscribe you to a marketing mailing list.
                  Third-party websites you visit through our links may use their own cookies.
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
                    <strong>Vercel</strong> — Hosts the website, processes requests and logs,
                    and provides Web Analytics and Speed Insights. See the{" "}
                    <a href="https://vercel.com/legal/privacy-policy" className="legal-page-link" target="_blank" rel="noopener noreferrer">Vercel privacy policy</a>.
                  </li>
                  <li>
                    <strong>Neon</strong> — Stores inquiry details and notification status
                    in our private database. See the{" "}
                    <a href="https://neon.com/privacy-policy" className="legal-page-link" target="_blank" rel="noopener noreferrer">Neon privacy notice</a>.
                  </li>
                  <li>
                    <strong>Resend</strong> — Processes recipient addresses and email content
                    to send inquiry notifications and acknowledgments, and reports delivery
                    status. See the{" "}
                    <a href="https://resend.com/legal/privacy-policy" className="legal-page-link" target="_blank" rel="noopener noreferrer">Resend privacy policy</a>.
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
                  Inquiry records and their notification status are automatically removed
                  from the website database after 365 days. Temporary abuse-prevention
                  counters expire within an hour and are cleared by scheduled cleanup;
                  delivery-event records are retained for up to 30 days. Email correspondence
                  and records relating to an active client relationship may be retained
                  separately for business or legal purposes. You may request access or
                  deletion by contacting stephen@automationwarrior.ai.
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
