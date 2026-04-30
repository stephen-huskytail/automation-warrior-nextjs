import Image from "next/image";

const BOOK_URL = "/book-a-call";

const teamMembers = [
  {
    name: "Stephen Gardner",
    job: "AI Expert / CEO",
    image: "/images/SG-1.jpg",
    linkedin: "https://www.linkedin.com/in/stephengardner76",
    text: "Founder of Automation Warrior - Pioneers AI-driven transformation, empowering businesses to scale smarter, move faster, and lead the future of automation.",
  },
  {
    name: "Myla Mercado",
    job: "Operations Lead",
    image: "/images/MM-1.jpg",
    linkedin: "https://www.linkedin.com/in/mylamercado",
    text: "Drives internal efficiency, optimizes systems, and ensures smooth execution across all AI initiatives at Automation Warrior.",
  },
  {
    name: "Viktor Ai",
    job: "AI Automation Agent",
    image: "/images/VA-1.jpg",
    linkedin: "https://www.getviktor.com",
    text: "Autonomous AI agent powering Automation Warrior's workflows — from lead follow-up and reporting to content and CRM, running 24/7 without missing a beat.",
  },
  {
    name: "Rhodora Villadegracia",
    job: "Project Manager",
    image: "/images/Rhodora.png",
    linkedin: "https://www.linkedin.com/in/stephengardner76",
    text: "Skilled in leading cross-functional teams, managing timelines, and ensuring projects are delivered on time, within scope, and aligned with strategic goals.",
  },
  {
    name: "Maru Perez",
    job: "Automation Specialist",
    image: "/images/Maru.png",
    linkedin: "https://www.linkedin.com/in/jay-joshi-611a13366",
    text: "Expert in streamlining workflows and implementing automation solutions to optimize processes, increase efficiency, and drive measurable results.",
  },
];

// Duplicate for seamless loop
const allMembers = [...teamMembers, ...teamMembers];

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="padding-global">
        <div className="inner-container">
          <div className="team-inner">
            <div className="content-box-680">
              <div className="sub-heading">Team</div>
              <h2 className="heading-h2">AI experts that speak your language.</h2>
              <p className="text-paragraph">
                The right expertise is critical, and it&apos;s built by doing. Our team has scoped and
                deployed AI solutions across a wide range of use cases and businesses.
              </p>
              <a href={BOOK_URL} className="primary-button">
                <span>Book a Strategy Call</span>
                <Image src="/images/svgviewer-output-1.svg" alt="" width={18} height={18} className="button-icon" />
              </a>
            </div>

            <div className="team-column">
              <div className="team-slider">
                {allMembers.map((member, i) => (
                  <a
                    key={i}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-slider-item"
                  >
                    {/* LinkedIn hover overlay */}
                    <div className="mouse-hover-animation-box">
                      <p className="mouse-text">View on</p>
                      <h3 className="mouse-heading">LinkedIn</h3>
                    </div>

                    {/* Photo */}
                    <div className="team-slider-image-box">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="team-slider-image"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="team-slider-image-overlay" />
                    </div>

                    {/* Name + role */}
                    <div className="team-content-box">
                      <div className="team-headingbox">
                        <h3 className="team-name">{member.name}</h3>
                        <p className="team-job">{member.job}</p>
                      </div>
                      <div className="team-text-box">
                        <p className="team-text">{member.text}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
