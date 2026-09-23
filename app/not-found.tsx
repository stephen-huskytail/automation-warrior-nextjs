import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import styles from "./not-found.module.css";

export const metadata: Metadata = {
  title: "Page not found | Automation Warrior",
  description: "Find your way back to AI leadership, consulting, and business insights from Automation Warrior.",
  alternates: { canonical: null },
  openGraph: null,
  twitter: null,
};

const helpfulPages = [
  {
    href: "/fractional-caio",
    title: "Fractional CAIO",
    description: "AI leadership for your next stage of growth.",
  },
  {
    href: "/ai-consulting",
    title: "AI Consulting",
    description: "A practical plan for your business and your team.",
  },
  {
    href: "/blog",
    title: "Business Insights",
    description: "Ideas for stronger teams and measurable results.",
  },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="scroll" tabIndex={-1} className={styles.main}>
        <section className={styles.hero} aria-labelledby="not-found-heading">
          <p className={styles.code} aria-hidden="true">404</p>
          <p className={styles.eyebrow}>Page not found</p>
          <h1 id="not-found-heading" className={styles.heading}>
            Let’s get you back on track.
          </h1>
          <p className={styles.description}>
            This page may have moved or is no longer available.
            There’s still plenty of good work ahead.
          </p>
          <div className={styles.actions}>
            <Link href="/" className="primary-button">Back to home</Link>
            <Link href="/book-a-call" className="secondary-button">
              Book an AI Strategy Call
            </Link>
          </div>
        </section>

        <nav className={styles.routes} aria-label="Helpful pages">
          {helpfulPages.map((page) => (
            <Link key={page.href} href={page.href} className={styles.route}>
              <span className={styles.routeTitle}>
                {page.title}<span className={styles.arrow} aria-hidden="true">↗</span>
              </span>
              <span className={styles.routeDescription}>{page.description}</span>
            </Link>
          ))}
        </nav>
      </main>
      <Footer />
    </>
  );
}
