import type { Metadata } from "next";
export const siteSocial = {
  images: [{ url: "/images/blog/fractional-caio-first-30-days.jpg", width: 1200, height: 630,
    alt: "A focused roadmap for putting AI to work in your business." }],
  locale: "en_US",
};
export function serviceMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const url = "https://www.automationwarrior.ai" + path;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      ...siteSocial,
      title,
      description,
      url,
      siteName: "Automation Warrior",
      type: "website",
    },
  };
}
