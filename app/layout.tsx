import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.automationwarrior.ai"),
  title: "AI Consultant for Service Businesses | Automation Warrior",
  description:
    "Stephen Gardner builds AI agent teams for service businesses that want to scale without scaling headcount. Former Google Search team. HIPAA-compliant private deployments.",
  openGraph: {
    title: "AI Consultant for Service Businesses | Automation Warrior",
    description:
      "AI agent teams and fractional CAIO engagements for 7- to 9-figure service businesses. Former Google Search team. CMO through a $1M-to-$50M run.",
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
    "AI consulting, AI agent teams, and fractional Chief AI Officer engagements for service businesses that want to scale without scaling headcount.",
  areaServed: "US",
  address: { "@type": "PostalAddress", addressLocality: "Las Vegas", addressRegion: "NV", addressCountry: "US" },
  founder: { "@type": "Person", name: "Stephen Gardner", url: "https://www.automationwarrior.ai/about" },
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Fractional CAIO (Chief AI Officer)", url: "https://www.automationwarrior.ai/fractional-caio" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Managed AI Agent Teams", url: "https://www.automationwarrior.ai/agent-teams" } },
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {children}
        {/* JS is injected dynamically by CustomCursor component — no blocking */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
