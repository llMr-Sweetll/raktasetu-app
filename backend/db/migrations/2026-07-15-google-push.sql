-- Google Sign-In + Web Push subscriptions
-- Apply: psql "$DATABASE_URL" -f backend/db/migrations/2026-07-15-google-push.sql

ALTER TABLE users ADD COLUMN IF NOT EXISTS google_sub varchar UNIQUE;
ALTER TABLE users ADD COLUMN IF NOT EXISTS deleted_at timestamptz;

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  endpoint text NOT NULL UNIQUE,
  p256dh text NOT NULL,
  auth text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_push_subscriptions_user ON push_subscriptions(user_id);
