import Image from "next/image";
import Link from "next/link";

const PHONE = "702-276-6921";
const PHONE_TEL = "tel:7022766921";
const BOOK_URL = "/book-a-call";

const columns: { heading: string; links: { label: string; href: string }[] }[] = [
  {
    heading: "Work with Stephen",
    links: [
      { label: "Fractional CAIO", href: "/fractional-caio" },
      { label: "AI Agent Teams", href: "/agent-teams" },
      { label: "AI Operations Assessment", href: "/#services" },
      { label: "Book a Strategy Call", href: BOOK_URL },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Stephen", href: "/about" },
      { label: "Results", href: "/#results" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms", href: "/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="footer-section">
      <div className="padding-global">
        <div className="inner-container">
          <div className="footer-inner">
            <div className="footer-block1">
              <Image
                src="/images/bgBlack_1-removebg-preview-1.png"
                alt="Automation Warrior"
                width={200}
                height={50}
                className="footer-logo"
                style={{ objectFit: "contain" }}
              />
              <a
                href={PHONE_TEL}
                className="footer-menu-link"
                style={{ display: "inline-flex", alignItems: "center", gap: "6px", marginTop: "12px", fontSize: "14px" }}
              >
                📞 {PHONE}
              </a>
            </div>
            <div className="footer-block2">
              <div className="footer-column1">
                <div className="footer-column1-content-box">
                  <h4 className="footer-heading">Bring the workflow that eats your team&apos;s week.</h4>
                  <p className="footer-text footer-text-width">
                    Thirty minutes with Stephen. He&apos;ll tell you whether AI belongs there, what it
                    would take, and what it would be worth. No deck. No pitch.
                  </p>
                </div>
                <a href={BOOK_URL} className="primary-button">Book a Strategy Call</a>
              </div>
              <div className="footer-column2">
                {columns.map((col) => (
                  <div className="foomenu-box" key={col.heading}>
                    <h4 className="footer-heading small-heading-footer">{col.heading}</h4>
                    <ul className="footer-menu-ul">
                      {col.links.map((l) => (
                        <li key={l.label}>
                          <Link href={l.href} className="footer-menu-link">{l.label}</Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            <div className="footer-bottom">
              <p className="footer-text footer-bottom-text">
                © {new Date().getFullYear()} Automation Warrior · Las Vegas, NV · AI consulting, agent teams, and
                fractional CAIO engagements for service businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
