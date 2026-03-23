import Image from "next/image";

const BOOK_URL = "/book-a-call";

function GradientBlob({ position }: { position: "left" | "right" | "right-blue" | "bottom" }) {
  const cls =
    position === "right"
      ? "service-background-box right-background"
      : position === "right-blue"
      ? "service-background-box right-background-blue"
      : position === "bottom"
      ? "service-background-box bottom-background"
      : "service-background-box";

  return (
    <div className={cls}>
      <div className="service-bg-blob1" />
      <div className="service-bg-blob2" />
      <div className="service-bg-blob3" />
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="services-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="services-inner">
            <div className="content-box-680">
              <div className="sub-heading">Services</div>
              <h2 className="heading-h2">Address your biggest business needs.</h2>
            </div>

            <div className="service-column">
              {/* Card 1 - AI Prompt Engineering */}
              <div className="service-item-box">
                <GradientBlob position="left" />
                <h3 className="heading-h3-large">AI Prompt Engineering</h3>
                <p className="service-text">
                  Unlock the full potential of your AI systems with our expert AI Prompt Engineering
                  services! In today&apos;s fast-paced digital landscape, the ability to craft precise
                  and effective prompts is crucial for maximizing the performance of your AI models.
                  Our team of skilled professionals specializes in designing tailored prompts that
                  ensure your AI delivers accurate, relevant, and high-quality outputs every time.
                  Whether you&apos;re looking to enhance customer interactions, streamline workflows, or
                  generate insightful data, our prompt engineering solutions will empower your AI to
                  achieve remarkable results.
                </p>
              </div>

              {/* Card 2 - AI Workflow Automation */}
              <div className="service-item-box">
                <GradientBlob position="right" />
                <h3 className="heading-h3-large">AI Workflow Automation</h3>
                <p className="service-text">
                  Transform your small business with our AI Automation Service, designed to
                  streamline operations and enhance efficiency. We analyze your existing workflows to
                  identify tailored automation opportunities, seamlessly integrating various
                  applications and systems, including CRMs and task management tools. This approach
                  reduces costs and provides real-time data access for informed decision-making,
                  freeing you from high overhead expenses. Embrace the future of business with our
                  custom AI solutions to optimize tasks or overhaul your entire workflow, unlocking
                  your business&apos;s full potential and boosting productivity.
                </p>
              </div>

              {/* Card 3 - AI Agent Building (spans 2 cols) */}
              <div className="service-item-box span-2">
                <GradientBlob position="right-blue" />
                <GradientBlob position="bottom" />
                <h3 className="heading-h3-large">AI Agent Building</h3>
                <p className="service-text">
                  Transform the way you interact with customers and streamline operations through our
                  AI Agent Development service. We specialize in creating intelligent, responsive AI
                  agents tailored to your specific business needs. These agents can handle customer
                  inquiries, automate routine tasks, and provide personalized experiences, all while
                  learning and adapting to improve their performance over time. By integrating AI
                  agents into your operations, you can enhance customer satisfaction, reduce response
                  times, and free up valuable resources for your team.
                  <br /><br />
                  Our expert team collaborates with you to design and develop AI agents that
                  seamlessly integrate with your existing systems. We focus on building solutions
                  that not only meet your immediate needs but also scale as your business grows.
                  Contact us today to discover how our AI agents can revolutionize your business
                  operations and elevate your customer engagement!
                </p>
              </div>
            </div>
          </div>

          <div className="services-button-box">
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
