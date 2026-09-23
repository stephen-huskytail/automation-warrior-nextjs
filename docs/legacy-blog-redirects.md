# Retired blog URLs

The owner chose to keep the old articles retired and redirect their former URLs to the closest maintained content. `lib/legacyBlogRedirects.ts` contains 71 exact permanent redirects: 69 published articles removed on September 6, 2026, and two earlier articles removed on May 25.

The map covers every previously published blog slug found in repository history, including all 17 retired article URLs visible in the three pages of Google results checked on September 23. The other seven visible Google results are current pages. A public `site:` search is not an exhaustive index export; the signed-in Search Console account did not have this site's property.

Destinations are grouped by subject: tool selection and evaluation, implementation, agent workflows, team knowledge, and the current Hermes guide. Some retired reviews/pricing pages have no equivalent replacement. These redirects support visitor navigation; they do not guarantee preserved rankings, and Google may treat non-equivalent destinations as soft 404s. See [Google's site-move guidance](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes#start-site-move).

The five historical draft posts remain unpublished. Current articles and unknown blog paths are excluded from the map. Keep retired URLs out of the sitemap, preserve query parameters, and keep these redirects indefinitely unless a relevant destination changes. Add newly discovered legacy URLs explicitly rather than introducing a catch-all redirect to the homepage.

Validate against a production server with `bun scripts/check-legacy-redirects.ts http://127.0.0.1:3067`, or pass the public site URL after deployment. The check exercises all 71 redirect responses and all destinations, current articles, query parameters, trailing slashes, draft/unknown 404s, and the existing booking redirect.
