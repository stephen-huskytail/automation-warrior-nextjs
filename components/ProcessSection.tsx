import Image from "next/image";

const steps = [
  {
    icon: "/images/98y0kj9b5eamam3xob5.svg",
    title: "Discover",
    text: "You need a better understanding of AI and where it can be deployed to help your business.",
  },
  {
    icon: "/images/j6ayzax2azmam3xyu2.svg",
    title: "Build",
    text: "You've got some use cases in mind but need help developing solutions.",
  },
  {
    icon: "/images/6lxtzenzwudmam3y721.svg",
    title: "Adopt",
    text: "You are already using AI but are struggling with adoption or measurable ROI.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="process-section" data-scroll-target="">
      <div className="padding-global">
        <div className="inner-container">
          <div className="process-inner">
            <div className="content-box-680">
              <div className="sub-heading">Process</div>
              <h2 className="heading-h2">Partners for wherever you are on your AI journey.</h2>
            </div>

            <div className="process-column">
              {steps.map((step, i) => (
                <div
                  key={i}
                  className={`process-box${i === steps.length - 1 ? " last-process-box" : ""}`}
                >
                  <div className="process-image-box">
                    <Image src={step.icon} alt={step.title} width={70} height={70} className="process-image" />
                  </div>
                  <div className="process-content-box">
                    <h4 className="heading-h4">{step.title}</h4>
                    <p className="text-paragraph small-text">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
