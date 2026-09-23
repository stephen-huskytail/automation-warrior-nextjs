import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.automationwarrior.ai"),
  title: "Fractional CAIO & AI Consulting | Automation Warrior",
  description:
    "Make AI work for your business. Fractional Chief AI Officer, AI consulting, implementation, and team development for 7–9 figure businesses.",
  openGraph: {
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
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;1,400&display=swap"
          rel="stylesheet"
        />
        {/* mouse-follower CSS — loaded statically in <head> */}
        <link
          rel="stylesheet"
          href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css"
        />
      </head>
      <body>
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
