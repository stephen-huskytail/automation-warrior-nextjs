import Image from "next/image";

const BOOK_URL = "https://automation-warrior.moxieapp.com/public/ai-intro";

export default function AboutSection() {
  return (
    <section id="about-us" className="about-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="about-inner">
            <div className="heading-box-about">
              <h2 className="heading-h2 small-heading-h2">
                If your team is drowning in work or missing opportunities, AI might be the solution
                you&apos;re looking for. We work with you to understand your business and identify
                where it can create value.
              </h2>
            </div>
            <a href={BOOK_URL} className="primary-button">
              <span>Book a Strategy Call</span>
              <Image src="/images/svgviewer-output-1.svg" alt="" width={18} height={18} className="button-icon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
