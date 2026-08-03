# Automation Warrior Blog Publishing SOP

**Applies to:** `automationwarrior.ai` affiliate blog
**Platform:** Next.js + Velite MDX → GitHub `main` → Vercel
**Cadence:** one post every 48 hours, released only after the control gates below pass
**Authority:** Path A releases are pre-approved by Stephen when all gates pass. This SOP does not authorize DNS, billing, credential, dependency, or unrelated site changes.

## Purpose

Publish one useful, non-duplicate affiliate article per cadence without relying on a stale local checkout, an ambiguous `*/2` calendar expression, or a scheduler completion flag alone.

## Sources of truth, in order

1. `origin/main` in `stephen-huskytail/automation-warrior-nextjs` — publish history and source.
2. The canonical public route, blog hub, and sitemap on `https://www.automationwarrior.ai` — delivery proof.
3. `LEARNINGS.md` on `origin/main` — rotation and last published post.
4. The active Hermes recovery controller — control-plane health and Slack visibility.

A local checkout, a historical Multica run, or a green outer scheduler status is evidence only. None is publication proof.

## Control-plane rules

- The recovery controller runs **daily at the scheduler-local time that resolves to 17:30 UTC**. It may publish only when `origin/main` and the live site show that the next 48-hour slot is due and missing. Before each DST boundary or scheduler-host change, read back `next_run_at` with its UTC offset and correct the expression. At the current `-07:00` offset, `30 10 * * *` resolves to 17:30 UTC.
- Do not use a day-of-month `*/2` schedule as a 48-hour controller. It can reset at month boundaries and can drift from the actual publication ledger.
- Before every run, the controller must `git fetch origin main`; it must never use a local branch or working tree as the publication baseline.
- The controller's working directory must be the canonical checkout: `/home/sgardne0926/work/repos/automation-warrior-nextjs` (or a clean isolated worktree created from `origin/main`).
- A dirty shared checkout is never a reason to overwrite, rebase, reset, or abandon a due release. Create a clean isolated worktree from `origin/main` instead.
- The controller must use the same durable publish decision every run: latest article date/slug from `origin/main` plus direct live-route and sitemap proof. If those sources disagree, it reports `BLOCKED — publication-state mismatch` and does not create a replacement article.
- Every material outcome is posted once to `#hermes-blogs`: `PUBLISHED`, `NO-OP`, or a specific `BLOCKED` state with the release condition. No message is proof without the named live URL or blocker evidence.

## Per-run release checklist

1. **Establish the due state.** Read current UTC time, fetch `origin/main`, inspect `LEARNINGS.md`, the latest remote MDX frontmatter, the blog hub, sitemap, and latest live article.
2. **Deduplicate.** If the due article is already on `origin/main`, its canonical public route is HTTP 200, and its title/canonical match, return `NO-OP`. If it exists remotely but has no live proof, report its exact slug and deployment blocker; do not write another article.
3. **Select one topic.** Use the next category in the remote rotation and confirm that the slug and material topic are not already published. Use official current sources for claims that can change.
4. **Create safely.** Begin from current `origin/main` in a clean isolated worktree. Create one restore tag at the actual remote base. Add only the MDX post, featured image, and `LEARNINGS.md` ledger update. Do not add `package-lock.json` to this Bun-managed repository.
5. **Content gates.** Require accurate source-backed claims; natural keyword placement in title/intro/H2/slug/alt; valid frontmatter; internal links that resolve; `/go/` registry links only for active affiliates; no raw affiliate URL or inline disclosure; Quick Summary, TOC, honest limitations, E-E-A-T, and FAQs.
6. **Asset gates.** Use GPT Image 2 medium or better for AI art, 1536×1024, no baked-in text, visually inspect the final asset, and confirm the referenced file exists.
7. **Build and source-control gates.** Run `bun run build` (or the repo-native production build), review the scoped diff, stage only intended paths, run whitespace and credential-marker checks, commit, push to `main`, and confirm remote SHA parity.
8. **Production gates.** Confirm the deployment associated with the pushed SHA is Ready; then verify the canonical article HTTP 200, title, canonical URL, metadata, Article/Breadcrumb schema, featured image, blog hub discovery, and sitemap entry. Desktop/mobile visual QA is required for a changed article template or image issue; routine content releases still require the direct rendered page check.
9. **Record and report.** `LEARNINGS.md` must reflect the final date, category, slug, and next category. Report the exact live URL, commit SHA, and verification result in the canonical Slack thread.

## Failure and recovery protocol

- **Missing primary run or stale scheduler state:** the daily recovery controller independently evaluates the durable remote/live ledger. It may recover exactly one missing due slot; it must not backfill multiple articles.
- **Stale or dirty local checkout:** preserve it untouched; use an isolated worktree from fetched `origin/main`.
- **Remote/local conflict:** fetch first. If remote state conflicts with the live site or the ledger, stop and report the two exact states. Never force-push or fabricate a new post.
- **Build, deploy, image, link, or live-proof failure:** do not claim completion. Preserve the candidate/commit, report the first failed gate and observable release condition, and let the next controlled recovery run re-evaluate it idempotently.
- **Scheduler delivery failure:** publishing and Slack delivery are separate boundaries. The controller must emit a durable result; the delivery backstop may relay that result but must never publish another post.

## Incident rule

When a due post is missed, update all three control surfaces before calling the incident resolved:

1. this SOP and `LEARNINGS.md` in the canonical repository;
2. the live Hermes recovery controller's prompt, schedule, and working directory; and
3. a fresh live proof check or the next natural due run.

The next natural run is the end-to-end confirmation boundary. Until then, describe the control as **repaired-pending-natural-run-confirmation**.
