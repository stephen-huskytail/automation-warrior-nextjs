# Inquiry storage and delivery

The two public inquiry URLs use the same validation, spam controls, and database transaction. Success means the inquiry and two notification jobs have committed to Neon. Email is attempted after that response, with a 15-minute Vercel cron recovering interrupted or failed attempts.

## Production services

- Neon database: `automation-warrior-leads`, provisioned through the Vercel Marketplace on its free plan in `iad1`. Connection credentials are server environment variables.
- Resend: the existing send-only key remains in use. The webhook at `/api/webhooks/resend` verifies signatures and stores only delivery events tagged `source=aw-inquiry`.
- Cron: `/api/cron/leads`, every 15 minutes, requires the platform-supplied `CRON_SECRET` authorization header. It retries, reconciles delivery events, removes expired records, and saves a timestamped status summary.
- Preview and development inquiries use a separate database namespace and never send real emails. They are removed after seven days.

The deployment needs `DATABASE_URL`, `LEAD_FORM_SECRET`, `CRON_SECRET`, `RESEND_API_KEY`, and `RESEND_WEBHOOK_SECRET`. Never put these in public environment variables or commit environment files.

## Reading status or recovering an inquiry

In a trusted local session, pull the production environment to an ignored file and run:

```sh
vercel env pull .env.production.local --environment=production
bun --env-file=.env.production.local scripts/lead-status.ts
# Add a reference from the notification or status output to retrieve that inquiry:
bun --env-file=.env.production.local scripts/lead-status.ts INQUIRY_UUID
```

Default status output contains no contact details. Supplying a reference intentionally reveals that inquiry's details locally. The last scheduled check should be within 30 minutes; a stale timestamp needs investigation in Vercel Cron/Runtime Logs. Look for `[leads] intake_unavailable`, `scheduled_check_failed`, or `delivery_attention`.

`accepted` means Resend accepted the send; it is not proof of delivery. `delivered` is recorded only from a verified provider event. Bounces, complaints, suppressions, and failures are retained for follow-up. There is no automatic resend to a bounced or suppressed recipient. The private database remains the recovery source if email is unavailable.

Transient send failures retry with increasing delays. Worker leases and provider idempotency keys prevent duplicate email when a worker restarts. Automatic attempts stop after eight attempts or 23 hours from the first attempt, before Resend's 24-hour idempotency window expires. `needs_attention` requires checking Resend before any manual resend. This avoids duplicate messages after an uncertain send.

The 15-minute recovery interval lets the free database suspend between checks. The free plan has a compute quota; review usage in Neon and move to a paid plan before increased inquiry traffic exhausts it. Normal inquiries attempt email immediately.

Runtime error records and database summaries provide delivery monitoring. No separate SMS or third-party alert destination is configured.

## Privacy and abuse controls

Inquiries are private, server-accessed records retained for 365 days. Raw client IPs are not stored in the inquiry database. Temporary rate counters use HMAC-protected IP/email identifiers and expire within an hour. The form uses origin checks, a signed and time-limited challenge, a honeypot, body/field limits, persistent rate limits, and plain-text notifications. The legacy endpoint has no validation bypass.

## Validation

```sh
TEST_LEAD_DATABASE=1 bun --env-file=.env.local test tests/leads.test.ts
bun run lint
bunx tsc --noEmit
```

The database tests use a unique test namespace, a fake mail transport, and remove their own synthetic records. They cover concurrent deduplication, outage recovery, worker locking, rate limits, webhook signatures/order, retry expiry, and storage failure. Browser preview tests must not use real client data.
