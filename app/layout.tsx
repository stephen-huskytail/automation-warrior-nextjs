import type { Metadata } from "next";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.automationwarrior.ai"),
  title: "Automation Warrior",
  description: "We build Generative AI Automation Workflows & AI Agents that accelerate your business.",
  alternates: {
    canonical: "https://www.automationwarrior.ai",
  },
  icons: {
    icon: "/images/favicon.ico",
    apple: "/images/webclip.png",
  },
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
        {children}
        {/* JS is injected dynamically by CustomCursor component — no blocking */}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
