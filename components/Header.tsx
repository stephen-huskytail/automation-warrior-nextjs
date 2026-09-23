"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const links = [
  { href: "/fractional-caio", label: "Fractional CAIO" },
  { href: "/ai-consulting", label: "AI Consulting" },
  { href: "/#results", label: "Results" },
  { href: "/about", label: "About" },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  return (
    <header className={"header-section" + (scrolled ? " scrolled" : "")}>
      <div className="padding-global padding-none">
        <div className="container">
          <div className="header-inner">
            <div className="header-column">
              <Link
                href="/"
                className="header-logo-link"
                onClick={() => setMenuOpen(false)}
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
              <nav className="header-nav" aria-label="Main navigation">
                {links.map((link) => (
                  <Link href={link.href} className="nav-link" key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="header-button-box">
                <Link href="/book-a-call" className="header-button">
                  Book an AI Strategy Call
                </Link>
              </div>
              <button
                className={"mobile-menu-toggle" + (menuOpen ? " open" : "")}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                <span className="mobile-menu-line" />
                <span className="mobile-menu-line" />
                <span className="mobile-menu-line" />
              </button>
            </div>
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className={"mobile-menu-dropdown" + (menuOpen ? " open" : "")}
            >
              {links.map((link) => (
                <Link
                  href={link.href}
                  className="mobile-nav-link"
                  key={link.href}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/ai-implementation"
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                Implementation & Training
              </Link>
              <a
                href="tel:7022766921"
                className="mobile-nav-link"
                onClick={() => setMenuOpen(false)}
              >
                702-276-6921
              </a>
              <Link
                href="/book-a-call"
                className="mobile-primary-button"
                onClick={() => setMenuOpen(false)}
              >
                Book an AI Strategy Call
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
