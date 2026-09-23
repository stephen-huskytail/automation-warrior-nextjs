CREATE TABLE IF NOT EXISTS aw_leads (
  id uuid PRIMARY KEY,
  namespace text NOT NULL,
  submission_id uuid NOT NULL,
  fingerprint text NOT NULL,
  payload jsonb NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (namespace, submission_id),
  UNIQUE (namespace, fingerprint)
);

CREATE TABLE IF NOT EXISTS aw_lead_submissions (
  namespace text NOT NULL,
  submission_id uuid NOT NULL,
  lead_id uuid NOT NULL REFERENCES aw_leads(id) ON DELETE CASCADE,
  PRIMARY KEY (namespace, submission_id)
);

CREATE TABLE IF NOT EXISTS aw_lead_notifications (
  id text PRIMARY KEY,
  lead_id uuid NOT NULL REFERENCES aw_leads(id) ON DELETE CASCADE,
  kind text NOT NULL CHECK (kind IN ('team', 'receipt')),
  status text NOT NULL DEFAULT 'pending',
  attempts integer NOT NULL DEFAULT 0,
  first_attempt_at timestamptz,
  next_attempt_at timestamptz NOT NULL DEFAULT now(),
  lock_until timestamptz,
  lock_token uuid,
  email_id text UNIQUE,
  error_code text,
  last_event_at timestamptz,
  updated_at timestamptz NOT NULL DEFAULT now(),
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (lead_id, kind)
);
CREATE INDEX IF NOT EXISTS aw_lead_notifications_due
  ON aw_lead_notifications (next_attempt_at) WHERE status IN ('pending', 'retry', 'processing');

CREATE TABLE IF NOT EXISTS aw_lead_rate_limits (
  key text PRIMARY KEY,
  hits integer NOT NULL,
  expires_at timestamptz NOT NULL
);

-- Only delivery identifiers and status are retained, not webhook message bodies.
CREATE TABLE IF NOT EXISTS aw_email_events (
  email_id text PRIMARY KEY,
  status text NOT NULL,
  event_at timestamptz NOT NULL,
  received_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS aw_lead_monitor (
  namespace text PRIMARY KEY,
  checked_at timestamptz NOT NULL DEFAULT now(),
  summary jsonb NOT NULL
);
