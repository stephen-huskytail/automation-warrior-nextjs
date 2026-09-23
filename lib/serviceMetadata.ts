import type { Metadata } from "next";
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
      title,
      description,
      url,
      siteName: "Automation Warrior",
      type: "website",
    },
  };
}
