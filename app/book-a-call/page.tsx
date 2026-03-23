import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import BookACallForm from "@/components/BookACallForm";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Automation Warrior",
  description: "30 minutes to explore how AI automation can help your business grow without growing headcount.",
  alternates: {
    canonical: "https://www.automationwarrior.ai/book-a-call",
  },
};

const CHECK_ICON = (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="10" cy="10" r="10" fill="#ff4533" fillOpacity="0.12" />
    <path d="M6 10.5L8.5 13L14 7.5" stroke="#ff4533" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function BookACallPage() {
  return (
    <main className="page-wrapper">
      <CustomCursor />
      <Header />

      {/* ── Page hero ─────────────────────────────────────────────────── */}
      <section className="bac-hero-section">
        <div className="padding-global" style={{ width: "100%", position: "relative", zIndex: 2 }}>
          <div className="container">
            <div className="bac-hero-inner">

              {/* Left — copy */}
              <div className="bac-copy-col">
                <span className="sub-heading">Free Strategy Call</span>
                <h1 className="heading-h1 bac-heading">
                  Let&apos;s build your AI roadmap.
                </h1>
                <p className="text-paragraph bac-subtext">
                  30 minutes, no pressure. We&apos;ll map out exactly where AI
                  automation can unlock capacity in your business.
                </p>

                <ul className="bac-checklist">
                  <li className="bac-check-item">
                    {CHECK_ICON}
                    <span>Walk through your current workflows &amp; bottlenecks</span>
                  </li>
                  <li className="bac-check-item">
                    {CHECK_ICON}
                    <span>Identify the highest-ROI automation opportunities</span>
                  </li>
                  <li className="bac-check-item">
                    {CHECK_ICON}
                    <span>Leave with a clear, actionable AI strategy</span>
                  </li>
                  <li className="bac-check-item">
                    {CHECK_ICON}
                    <span>No commitment required</span>
                  </li>
                </ul>
              </div>

              {/* Right — contact form */}
              <div className="bac-form-col">
                <div className="bac-form-card">
                  <h2 className="bac-form-card-heading">Get in touch</h2>
                  <p className="bac-form-card-subtext">
                    Fill out the form and we&apos;ll reach out within one business day.
                  </p>
                  <BookACallForm />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Background blobs */}
        <div className="bac-blob-wrap">
          <div className="bac-blob1" />
          <div className="bac-blob2" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
