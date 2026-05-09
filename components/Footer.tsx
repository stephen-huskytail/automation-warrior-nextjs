import Image from "next/image";
import Link from "next/link";

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
            </div>
            <div className="footer-block2">
              <div className="footer-column1">
                <div className="footer-column1-content-box">
                  <h4 className="footer-heading">Stay ahead of the AI curve</h4>
                  <p className="footer-text footer-text-width">
                    Sign up to our substack newsletter below to stay up to date with the latest in AI.
                  </p>
                </div>
                <a href="#" className="primary-button">Stay up to date</a>
              </div>
              <div className="footer-column2">
                <div className="foomenu-box">
                  <h4 className="footer-heading small-heading-footer">Links</h4>
                  <ul className="footer-menu-ul">
                    <li>
                      <a href="#results" className="footer-menu-link">Results</a>
                    </li>
                    <li>
                      <a href="#services" className="footer-menu-link">Services</a>
                    </li>
                    <li>
                      <a href="#process" className="footer-menu-link">Process</a>
                    </li>
                    <li>
                      <Link href="/blog" className="footer-menu-link">Blog</Link>
                    </li>
                  </ul>
                </div>
                <div className="foomenu-box">
                  <h4 className="footer-heading small-heading-footer">Information</h4>
                  <ul className="footer-menu-ul">
                    <li>
                      <Link href="/about" className="footer-menu-link">About</Link>
                    </li>
                    <li>
                      <Link href="/affiliate-disclosure" className="footer-menu-link">Affiliate Disclosure</Link>
                    </li>
                    <li>
                      <Link href="/privacy-policy" className="footer-menu-link">Privacy Policy</Link>
                    </li>
                    <li>
                      <Link href="/terms" className="footer-menu-link">Terms</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
