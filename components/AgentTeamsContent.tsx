const BOOK_URL = "/book-a-call";

type Row = { label: string; starter: string; scale: string };

const roles = [
  "Inbox and support triage",
  "CRM upkeep",
  "Content and blogging",
  "Reporting",
  "Google Business Profile posts",
  "QC checks",
];

const tiers = [
  { name: "Starter Team", key: "starter" as const, agents: "5 AI agents", price: "$497/mo", blobPosition: "left" as const },
  { name: "Scale Team", key: "scale" as const, agents: "20 AI agents", price: "$1,997/mo", blobPosition: "right" as const },
];

const rows: Row[] = [
  { label: "AI agents", starter: "5", scale: "20" },
  { label: "Monthly price", starter: "$497/mo", scale: "$1,997/mo" },
  { label: "One-time setup fee", starter: "One month of the tier ($497)", scale: "One month of the tier ($1,997)" },
  { label: "Term", starter: "3-month minimum, then month-to-month", scale: "3-month minimum, then month-to-month" },
  { label: "Support", starter: "Included", scale: "Included, with priority support" },
  { label: "Training", starter: "Included", scale: "Included" },
  { label: "Integration", starter: "Included", scale: "Included" },
  { label: "Ongoing security", starter: "Included", scale: "Included" },
  { label: "Private services", starter: "Included", scale: "Included" },
  { label: "Skills and best-practices training", starter: "Included", scale: "Included" },
  { label: "AI-model agnostic", starter: "Yes", scale: "Yes" },
  {
    label: "Local-model options",
    starter: "Can run compatible local models; deployment scope confirmed before setup",
    scale: "Private/local-model deployment option included; deployment scope confirmed before setup",
  },
  { label: "Monthly strategy session", starter: "Not included", scale: "Included" },
];

const security = [
  {
    title: "Approval steps for risky actions.",
    text: "We define approval requirements for actions such as sending messages to customers, publishing, spending money and deleting data. The workflow specifies who may approve an action and whether approval covers a single action or an agreed recurring task.",
  },
  {
    title: "Credential handling.",
    text: "We scope access to the agent’s agreed job and use the credential-sharing method agreed during setup. Do not send passwords or API keys through ordinary chat or email.",
  },
  {
    title: "Activity records.",
    text: "We agree what activity is recorded, how it can be reviewed and how long records are kept. Coverage depends on the connected tools and deployment.",
  },
  {
    title: "Data use.",
    text: "We do not use your business data to train our own AI models. Your chosen model providers and connected services process data under their own terms and account settings, including any training and retention provisions.",
  },
  {
    title: "Local-model options.",
    text: "We can discuss a local-model deployment for compatible workflows. Running a model locally does not by itself keep all workflow data local: connected tools, support access and activity records also need to be considered. Deployment details are agreed before setup.",
  },
];

const hiring = [
  {
    label: "Recurring service fee",
    hire: "Hiring costs depend on the role, location and hours",
    starter: "$497/mo, plus setup and model usage",
    scale: "$1,997/mo, plus setup and model usage",
  },
  {
    label: "What you get",
    hire: "One person",
    starter: "5 AI agents, each with one job",
    scale: "20 AI agents, each with one job",
  },
  {
    label: "Best at",
    hire: "Judgment, relationships and decisions",
    starter: "Repeatable tasks, with people approving what matters",
    scale: "Repeatable tasks across more roles, with people approving what matters",
  },
];

function Blob({ position }: { position: "left" | "right" }) {
  return (
    <div
      className={
        position === "right"
          ? "service-background-box right-background"
          : "service-background-box"
      }
    >
      <div className="service-bg-blob1" />
      <div className="service-bg-blob2" />
      <div className="service-bg-blob3" />
    </div>
  );
}

export default function AgentTeamsContent() {
  return (
    <>
      <section id="what-is-an-agent" className="approach-section business-section">
        <div className="padding-global">
          <div className="inner-container">
            <div className="approach-inner">
              <div className="content-box">
                <h2 className="heading-h2">What is an AI agent?</h2>
                <p className="text-paragraph width-640">
                  An AI agent is one AI teammate with one job. It works in the
                  tools your team already uses, follows the rules we agree with
                  you, and hands off to a person when a decision is needed.
                </p>
                <p className="text-paragraph width-640">
                  A team of agents covers the repeatable work around your
                  business. Typical roles include:
                </p>
              </div>
              <div className="approach-steps-grid grid-two-col">
                {roles.map((role) => (
                  <article
                    className="approach-slider-box approach-step-card"
                    key={role}
                  >
                    <h3 className="heading-h3 approach-heading">{role}</h3>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="services-section" data-scroll-target="">
        <div className="padding-global">
          <div className="inner-container">
            <div className="services-inner">
              <div className="content-box-680">
                <h2 className="heading-h2">Choose your team</h2>
                <p className="text-paragraph">
                  Choose five or twenty agents. The recurring service fee,
                  one-time setup fee and separate model usage are explained
                  below.
                </p>
              </div>
              <div className="service-column product-card-column">
                {tiers.map((tier) => (
                  <article className="service-item-box product-card" key={tier.name}>
                    <Blob position={tier.blobPosition} />
                    <div className="product-card-header">
                      <h3 className="heading-h3-large product-card-title">{tier.name}</h3>
                      <p className="product-card-description">{tier.agents}</p>
                    </div>
                    <div className="product-card-price-row">
                      <span className="product-card-price">{tier.price}</span>
                      <span className="product-card-setup">
                        One-time setup fee: {rows[2][tier.key]}
                      </span>
                    </div>
                    <ul className="product-card-list">
                      {rows.slice(3).map((row) => (
                        <li key={row.label}>
                          <span>
                            <strong>{row.label}:</strong> {row[tier.key]}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="product-card-buttons">
                      <a href={BOOK_URL} className="primary-button">
                        Book an AI Strategy Call
                      </a>
                    </div>
                  </article>
                ))}
              </div>
              <div className="content-box-680 agent-teams-notes">
                <p className="text-paragraph">
                  Build support for more repeatable workflows.
                </p>
                <p className="text-paragraph">
                  <strong>Setup and model usage are separate from the monthly service fee.</strong>{" "}
                  The one-time setup fee is additional to the recurring service
                  fee; it is $497 for Starter Team or $1,997 for Scale Team. You
                  pay for your own AI model usage (tokens) on your own accounts.
                  Free and open models are available, but running them may
                  involve hosting, hardware or other provider costs. The service
                  fee still applies.
                </p>
                <p className="text-paragraph">
                  <strong>Initial term:</strong> Both teams have a 3-month
                  minimum, then continue month-to-month.
                </p>
                <div className="button-group">
                  <a href={BOOK_URL} className="primary-button">
                    Book an AI Strategy Call
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="approach-section business-section">
        <div className="padding-global">
          <div className="inner-container">
            <div className="content-box">
              <h2 className="heading-h2">Proof: we run on it</h2>
              <p className="text-paragraph width-640">
                We run our own agency on a team of 25+ AI agents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="security" className="approach-section business-section">
        <div className="padding-global">
          <div className="inner-container">
            <div className="approach-inner">
              <div className="content-box">
                <h2 className="heading-h2">Security and data handling</h2>
                <p className="text-paragraph width-640">
                  Before setup, we agree which workflows agents can run, which
                  tools and data they can access, and which actions need human
                  approval.
                </p>
              </div>
              <div className="approach-steps-grid">
                {security.map((item) => (
                  <article
                    className="approach-slider-box approach-step-card"
                    key={item.title}
                  >
                    <h3 className="heading-h3 approach-heading">{item.title}</h3>
                    <p className="approach-slider-text">{item.text}</p>
                  </article>
                ))}
              </div>
              <p className="text-paragraph width-640 agent-teams-note">
                These controls reduce risk; they do not eliminate it. AI output
                can be inaccurate and needs review appropriate to the task.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="compare-hiring" className="approach-section agent-teams-table-section">
        <div className="padding-global">
          <div className="inner-container">
            <div className="content-box">
              <h2 className="heading-h2">How it compares to hiring</h2>
            </div>
            <table className="agent-teams-table agent-teams-table-wide">
              <thead>
                <tr>
                  <th scope="col"><span className="visually-hidden">Feature</span></th>
                  <th scope="col">One admin hire</th>
                  <th scope="col">Starter Team</th>
                  <th scope="col">Scale Team</th>
                </tr>
              </thead>
              <tbody>
                {hiring.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td data-label="One admin hire">{row.hire}</td>
                    <td data-label="Starter Team">{row.starter}</td>
                    <td data-label="Scale Team">{row.scale}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className="text-paragraph width-640 agent-teams-note">
              An agent team and an employee serve different needs. Agents can
              support defined, repeatable tasks; people remain responsible for
              decisions, relationships and oversight. This comparison does not
              promise staff replacement, equivalent output or cost savings. The
              setup fee and client-paid model usage are additional to the
              recurring service fees shown above.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
