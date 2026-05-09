"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const BOOK_URL = "/book-a-call";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      const offset = window.innerWidth < 768 ? 70 : 100;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <header className="header-section">
      <div className="padding-global padding-none">
        <div className="container">
          <div className="header-inner">
            <div className="header-column">
              {/* Logo — click scrolls to top */}
              <Link
                href="/"
                className="header-logo-link"
                onClick={(e) => {
                  if (window.location.pathname === "/") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                <Image
                  src="/images/bgBlack_1-removebg-preview-1.png"
                  alt="Automation Warrior"
                  width={160}
                  height={40}
                  className="header-logo"
                  priority
                />
              </Link>

              {/* Desktop nav */}
              <nav className="header-nav">
                <a href="#clients" className="nav-link" onClick={(e) => handleNavClick(e, "#clients")}>About Us</a>
                <a href="#results" className="nav-link" onClick={(e) => handleNavClick(e, "#results")}>Results</a>
                <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, "#services")}>Services</a>
                <a href="#process" className="nav-link" onClick={(e) => handleNavClick(e, "#process")}>Process</a>
                <Link href="/blog" className="nav-link">Blog</Link>
              </nav>

              {/* Desktop CTA */}
              <div className="header-button-box">
                <a href={BOOK_URL} className="header-button">Book a call</a>
              </div>

              {/* Mobile hamburger */}
              <button
                className={`mobile-menu-toggle${menuOpen ? " open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <span className="mobile-menu-line" />
                <span className="mobile-menu-line" />
                <span className="mobile-menu-line" />
              </button>
            </div>

            {/* Mobile dropdown */}
            <div className={`mobile-menu-dropdown${menuOpen ? " open" : ""}`}>
              <a href="#clients" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#clients")}>About Us</a>
              <a href="#results" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#results")}>Results</a>
              <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#services")}>Services</a>
              <a href="#process" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#process")}>Process</a>
              <Link href="/blog" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Blog</Link>
              <a href={BOOK_URL} className="mobile-primary-button">Book a Strategy Call</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
