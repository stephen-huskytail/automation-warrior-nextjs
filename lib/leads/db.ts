import { neon } from "@neondatabase/serverless";

export function database() {
  if (!process.env.DATABASE_URL) throw new Error("lead_database_unconfigured");
  return neon(process.env.DATABASE_URL, { fetchOptions: { cache: "no-store" } });
}

export function leadNamespace() {
  return process.env.LEAD_NAMESPACE ||
    (process.env.VERCEL_ENV === "production" ? "production" : "preview");
}
