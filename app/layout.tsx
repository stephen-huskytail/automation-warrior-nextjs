import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "swiper/css";
import "swiper/css/navigation";

export const metadata: Metadata = {
  title: "Automation Warrior",
  description: "We build Generative AI Automation Workflows & AI Agents that accelerate your business.",
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
        <link
          rel="stylesheet"
          href="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.css"
        />
      </head>
      <body>
        {children}
        {/* mouse-follower CDN — GSAP bundled inside, matches live Webflow behavior exactly */}
        <Script
          src="https://unpkg.com/mouse-follower@1/dist/mouse-follower.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
