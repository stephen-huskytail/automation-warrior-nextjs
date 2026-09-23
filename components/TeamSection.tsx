import Image from "next/image";

const BOOK_URL = "/book-a-call";

const teamMembers: {
  name: string;
  job: string;
  image: string;
  imagePosition?: string;
  linkedin: string | null;
  text: string;
}[] = [
  {
    name: "Stephen Gardner",
    job: "Founder & Fractional CAIO",
    image: "/images/stephen-gardner-portrait.png",
    imagePosition: "center 15%",
    linkedin: "https://www.linkedin.com/in/stephengardner76",
    text: "Former Google Search team. CMO during growth from $1M to a $50M run rate. Leads AI strategy, implementation, and team development for 7–9 figure businesses.",
  },
  {
    name: "Myla Mercado",
    job: "Operations Lead",
    image: "/images/myla-mercado-office.png",
    imagePosition: "center 25%",
    linkedin: "https://www.linkedin.com/in/mylamercado",
    text: "Drives internal efficiency, optimizes systems, and ensures smooth execution across all AI initiatives at Automation Warrior.",
  },
  {
    name: "Rhodora Villadegracia",
    job: "Project Manager",
    image: "/images/rhodora-villadegracia-office.png",
    linkedin: null,
    text: "Skilled in leading cross-functional teams, managing timelines, and ensuring projects are delivered on time, within scope, and aligned with strategic goals.",
  },
  {
    name: "Maru Perez",
    job: "Automation Specialist",
    image: "/images/maru-perez-office.png",
    linkedin: null,
    text: "Expert in streamlining workflows and implementing automation solutions to optimize processes, increase efficiency, and drive measurable results.",
  },
];

function MemberCard({ member }: { member: (typeof teamMembers)[number] }) {
  return (
    <>
      {/* Photo */}
      <div className="team-photo">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 600px) 90vw, (max-width: 1100px) 45vw, 460px"
          className="team-portrait"
          style={{ objectFit: "cover", objectPosition: member.imagePosition }}
        />
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
        {member.linkedin && (
          <span className="team-profile-link">View LinkedIn profile ↗</span>
        )}
      </div>
    </>
  );
}

export default function TeamSection() {
  return (
    <section className="team-section">
      <div className="padding-global">
        <div className="inner-container">
          <div className="team-inner">
            <div className="content-box-680">
              <div className="sub-heading">Team</div>
              <h2 className="heading-h2">The team behind the work.</h2>
              <p className="text-paragraph">
                Stephen leads strategy and stays involved in implementation. Our
                team supports operations, delivery, and automation, with AI
                helping us work more effectively.
              </p>
              <a href={BOOK_URL} className="primary-button">
                <span>Book an AI Strategy Call</span>
                <Image
                  src="/images/svgviewer-output-1.svg"
                  alt=""
                  width={18}
                  height={18}
                  className="button-icon"
                />
              </a>
            </div>

            <div className="team-grid">
              {teamMembers.map((member) =>
                member.linkedin ? (
                  <a
                    key={member.name}
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="team-card"
                  >
                    <MemberCard member={member} />
                  </a>
                ) : (
                  <div key={member.name} className="team-card">
                    <MemberCard member={member} />
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
