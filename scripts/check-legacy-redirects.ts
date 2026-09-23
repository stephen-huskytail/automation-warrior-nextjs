import assert from "node:assert/strict";
import { legacyBlogRedirects } from "../lib/legacyBlogRedirects";
import { blog } from "../.velite";

// Run against a production build, or the published site after deployment.
// Example: bun scripts/check-legacy-redirects.ts http://127.0.0.1:3067
const base = new URL(process.argv[2] || "http://127.0.0.1:3067");
const results: { source: string; status: number; destination: string | null }[] = [];

async function get(path: string) {
  const response = await fetch(new URL(path, base), { redirect: "manual" });
  await response.arrayBuffer();
  return response;
}

const queue = [...legacyBlogRedirects];
await Promise.all(Array.from({ length: 4 }, async () => {
  while (queue.length) {
    const redirect = queue.shift()!;
    const response = await get(redirect.source);
    const location = response.headers.get("location");
    assert.equal(response.status, 308, `${redirect.source} must be permanent`);
    assert.ok(location, `${redirect.source} must have a destination`);
    assert.equal(new URL(location, base).href, new URL(redirect.destination, base).href);
    results.push({ source: redirect.source, status: response.status, destination: location });
  }
}));

for (const destination of new Set(legacyBlogRedirects.map(r => r.destination))) {
  assert.equal((await get(destination)).status, 200, `${destination} must resolve without another redirect`);
}
for (const post of blog.filter(p => !p.draft)) {
  assert.equal((await get(`/blog/${post.slug}`)).status, 200, `Current article ${post.slug} must stay live`);
}

const sample = legacyBlogRedirects.find(r => r.source === "/blog/chatgpt-api-guide")!;
const tagged = await get(`${sample.source}?utm_source=google&utm_campaign=legacy`);
assert.equal(tagged.status, 308);
const taggedTarget = new URL(tagged.headers.get("location")!, base);
assert.equal(taggedTarget.pathname, sample.destination);
assert.equal(taggedTarget.searchParams.get("utm_source"), "google");
assert.equal(taggedTarget.searchParams.get("utm_campaign"), "legacy");

const trailing = await get(`${sample.source}/`);
assert.equal(trailing.status, 308);
const normalized = new URL(trailing.headers.get("location")!, base);
assert.ok([sample.source, sample.destination].includes(normalized.pathname));
if (normalized.pathname === sample.source) {
  assert.equal((await get(normalized.href)).headers.get("location"), sample.destination);
}

// These five files were drafts, never published. Unknown URLs remain true 404s.
for (const slug of ["how-to-connect-chatgpt-to-n8n", "kartra-review", "make-com-review", "n8n-vs-make", "n8n-vs-zapier", "redirect-check-not-a-real-post"]) {
  assert.equal((await get(`/blog/${slug}`)).status, 404, `${slug} must not be caught by a broad redirect`);
}
const strategy = await get("/strategy");
assert.equal(strategy.status, 308);
assert.equal(strategy.headers.get("location"), "/book-a-call");

console.log(JSON.stringify({
  checkedAt: new Date().toISOString(),
  base: base.href,
  redirects: results.length,
  activeArticles: blog.filter(p => !p.draft).length,
  queryParametersPreserved: true,
  trailingSlashHandled: true,
  unknownAndDraftUrlsRemain404: true,
  results: results.sort((a, b) => a.source.localeCompare(b.source)),
}, null, 2));
