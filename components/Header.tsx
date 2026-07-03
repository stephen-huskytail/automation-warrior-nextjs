"use client";
import { useState, useEffect } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";

const BOOK_URL = "/book-a-call";
const PLANS_HASH = "#services";
const PHONE = "702-276-6921";
const PHONE_TEL = "tel:7022766921";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      // On the homepage — smooth scroll to section
      const offset = window.innerWidth < 768 ? 70 : 100;
      const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: "smooth" });
    } else {
      // On another page (blog, etc.) — navigate to homepage with hash
      window.location.href = `/${href}`;
    }
  };

  return (
    <header className={`header-section${scrolled ? " scrolled" : ""}`}>
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
                <a href="#clients" className="nav-link" onClick={(e) => handleNavClick(e, "#clients")}>How it works</a>
                <a href="#services" className="nav-link" onClick={(e) => handleNavClick(e, "#services")}>Pricing</a>
                <a href="#results" className="nav-link" onClick={(e) => handleNavClick(e, "#results")}>Results</a>
                <a href="#faq" className="nav-link" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
                <Link href="/blog" className="nav-link">Blog</Link>
              </nav>

              {/* Desktop CTA */}
              <div className="header-button-box">
                <a href={PHONE_TEL} className="nav-link" style={{ fontVariantNumeric: "tabular-nums" }}>📞 {PHONE}</a>
                <a href={PLANS_HASH} className="header-secondary-button" onClick={(e) => handleNavClick(e, PLANS_HASH)}>See pricing</a>
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
              <a href="#clients" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#clients")}>How it works</a>
              <a href="#services" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#services")}>Pricing</a>
              <a href="#results" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#results")}>Results</a>
              <a href="#faq" className="mobile-nav-link" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
              <Link href="/blog" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>Blog</Link>
              <a href={PHONE_TEL} className="mobile-nav-link" onClick={() => setMenuOpen(false)}>📞 {PHONE}</a>
              <a href={PLANS_HASH} className="mobile-secondary-button" onClick={(e) => handleNavClick(e, PLANS_HASH)}>See pricing</a>
              <a href={BOOK_URL} className="mobile-primary-button">Book a Strategy Call</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
