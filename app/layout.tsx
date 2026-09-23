import type { Metadata } from "next";
import localFont from "next/font/local";
import { siteSocial } from "@/lib/serviceMetadata";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const satoshi = localFont({
  src: [
    { path: "../public/fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "../public/fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "../public/fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  adjustFontFallback: "Arial",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.automationwarrior.ai"),
  title: "Fractional CAIO & AI Consulting | Automation Warrior",
  description:
    "Make AI work for your business. Fractional Chief AI Officer, AI consulting, implementation, and team development for 7–9 figure businesses.",
  openGraph: {
    ...siteSocial,
    title: "Fractional CAIO & AI Consulting | Automation Warrior",
    description:
      "AI leadership for 7–9 figure businesses. Build the strategy, systems, and team capabilities to grow your capacity with the team you have.",
    url: "https://www.automationwarrior.ai",
    siteName: "Automation Warrior",
    type: "website",
  },
  alternates: {
    canonical: "https://www.automationwarrior.ai",
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/webclip.png",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Automation Warrior",
  url: "https://www.automationwarrior.ai",
  logo: "https://www.automationwarrior.ai/images/bgBlack_1-removebg-preview-1.png",
  telephone: "+1-702-276-6921",
  description:
    "Fractional Chief AI Officer, AI consulting, implementation, and team development for 7–9 figure businesses.",
  areaServed: "US",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    addressCountry: "US",
  },
  founder: {
    "@type": "Person",
    name: "Stephen Gardner",
    url: "https://www.automationwarrior.ai/about",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Fractional CAIO (Chief AI Officer)",
        url: "https://www.automationwarrior.ai/fractional-caio",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI Consulting & Roadmaps",
        url: "https://www.automationwarrior.ai/ai-consulting",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "AI Implementation & Team Training",
        url: "https://www.automationwarrior.ai/ai-implementation",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={satoshi.variable}>
      <body>
        <a href="#scroll" className="skip-link">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {children}
        {/* JS is injected dynamically by CustomCursor component — no blocking */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
