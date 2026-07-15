BEGIN;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_roles WHERE rolname = 'raktasetu_app') THEN
    CREATE ROLE raktasetu_app NOLOGIN NOSUPERUSER NOCREATEDB NOCREATEROLE NOINHERIT NOREPLICATION NOBYPASSRLS;
  END IF;
END $$;

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS account_status varchar NOT NULL DEFAULT 'active',
  ADD COLUMN IF NOT EXISTS date_of_birth date;
ALTER TABLE hospitals
  ADD COLUMN IF NOT EXISTS approval_status varchar NOT NULL DEFAULT 'pending',
  ADD COLUMN IF NOT EXISTS approved_by uuid REFERENCES users(id),
  ADD COLUMN IF NOT EXISTS approved_at timestamptz,
  ADD COLUMN IF NOT EXISTS updated_at timestamptz NOT NULL DEFAULT now();
ALTER TABLE audit_logs ADD COLUMN IF NOT EXISTS legal_hold boolean NOT NULL DEFAULT false;

UPDATE hospitals
SET approval_status = 'approved',
    approved_at = COALESCE(approved_at, now()),
    updated_at = now()
WHERE is_verified = true
  AND approval_status = 'pending';

UPDATE users
SET account_status = 'active'
WHERE account_status IS NULL
   OR (account_status = 'pending_onboarding' AND role <> 'donor' AND deleted_at IS NULL);

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'users_account_status_check') THEN
    ALTER TABLE users ADD CONSTRAINT users_account_status_check
      CHECK (account_status IN ('pending_onboarding', 'active', 'suspended', 'deleted'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'hospitals_approval_status_check') THEN
    ALTER TABLE hospitals ADD CONSTRAINT hospitals_approval_status_check
      CHECK (approval_status IN ('pending', 'approved', 'rejected', 'suspended'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'users_role_check') THEN
    ALTER TABLE users ADD CONSTRAINT users_role_check CHECK (role IN ('donor', 'hospital', 'admin'));
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS users_email_lower_unique
  ON users (lower(email)) WHERE deleted_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS users_phone_unique_active
  ON users (phone) WHERE deleted_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS users_google_sub_unique_active
  ON users (google_sub) WHERE google_sub IS NOT NULL AND deleted_at IS NULL;
CREATE UNIQUE INDEX IF NOT EXISTS hospitals_user_unique ON hospitals (user_id);

CREATE TABLE IF NOT EXISTS pending_google_registrations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  token_hash varchar(64) NOT NULL UNIQUE,
  google_sub varchar NOT NULL UNIQUE,
  email varchar NOT NULL,
  display_name varchar NOT NULL,
  expires_at timestamptz NOT NULL,
  consumed_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS refresh_tokens (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  token_hash varchar(64) NOT NULL UNIQUE,
  family_id uuid NOT NULL,
  expires_at timestamptz NOT NULL,
  revoked_at timestamptz,
  replaced_by uuid REFERENCES refresh_tokens(id),
  created_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX IF NOT EXISTS refresh_tokens_user_idx ON refresh_tokens(user_id);
CREATE INDEX IF NOT EXISTS refresh_tokens_expiry_idx ON refresh_tokens(expires_at);

DO $$
BEGIN
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'donor_responses_request_donor_unique') THEN
      ALTER TABLE donor_responses ADD CONSTRAINT donor_responses_request_donor_unique UNIQUE (request_id, donor_id);
    END IF;
  EXCEPTION WHEN unique_violation OR duplicate_table OR duplicate_object THEN
    RAISE NOTICE 'Skipping donor_responses unique constraint due to existing duplicates';
  END;
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'donations_request_donor_unique') THEN
      ALTER TABLE donations ADD CONSTRAINT donations_request_donor_unique UNIQUE (request_id, donor_id);
    END IF;
  EXCEPTION WHEN unique_violation OR duplicate_table OR duplicate_object THEN
    RAISE NOTICE 'Skipping donations unique constraint due to existing duplicates';
  END;
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'credits_related_donation_unique') THEN
      ALTER TABLE credits ADD CONSTRAINT credits_related_donation_unique UNIQUE (related_donation_id);
    END IF;
  EXCEPTION WHEN unique_violation OR duplicate_table OR duplicate_object THEN
    RAISE NOTICE 'Skipping credits unique constraint due to existing duplicates';
  END;
  BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'token_blacklist_jti_unique') THEN
      ALTER TABLE token_blacklist ADD CONSTRAINT token_blacklist_jti_unique UNIQUE (token_jti);
    END IF;
  EXCEPTION WHEN unique_violation OR duplicate_table OR duplicate_object THEN
    RAISE NOTICE 'Skipping token_blacklist unique constraint due to existing duplicates';
  END;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'donor_responses_status_check') THEN
    ALTER TABLE donor_responses ADD CONSTRAINT donor_responses_status_check
      CHECK (status IN ('pending', 'accepted', 'declined', 'arrived', 'completed'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'blood_requests_status_check') THEN
    ALTER TABLE blood_requests ADD CONSTRAINT blood_requests_status_check
      CHECK (status IN ('open', 'filled', 'closed'));
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'donations_units_check') THEN
    ALTER TABLE donations ADD CONSTRAINT donations_units_check CHECK (units BETWEEN 1 AND 10);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'credits_type_check') THEN
    ALTER TABLE credits ADD CONSTRAINT credits_type_check CHECK (type IN ('earned', 'redeemed', 'adjustment'));
  END IF;
END $$;

CREATE INDEX IF NOT EXISTS blood_requests_hospital_created_idx ON blood_requests(hospital_id, created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS blood_requests_open_created_idx ON blood_requests(created_at DESC, id DESC) WHERE status = 'open';
CREATE INDEX IF NOT EXISTS donor_responses_donor_created_idx ON donor_responses(donor_id, created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS donations_donor_created_idx ON donations(donor_id, created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS notifications_user_created_idx ON notifications(user_id, created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS audit_logs_created_idx ON audit_logs(created_at DESC, id DESC);

CREATE OR REPLACE FUNCTION app_user_id() RETURNS uuid
LANGUAGE sql STABLE AS $$
  SELECT NULLIF(current_setting('app.user_id', true), '')::uuid
$$;
CREATE OR REPLACE FUNCTION app_role() RETURNS text
LANGUAGE sql STABLE AS $$
  SELECT NULLIF(current_setting('app.role', true), '')
$$;
CREATE OR REPLACE FUNCTION app_hospital_id() RETURNS uuid
LANGUAGE sql STABLE AS $$
  SELECT NULLIF(current_setting('app.hospital_id', true), '')::uuid
$$;

REVOKE CREATE ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON ALL TABLES IN SCHEMA public FROM PUBLIC;
REVOKE ALL ON ALL SEQUENCES IN SCHEMA public FROM PUBLIC;
GRANT USAGE ON SCHEMA public TO raktasetu_app;
GRANT SELECT, INSERT, UPDATE, DELETE ON
  users, hospitals, blood_requests, donor_responses, donations, credits,
  family_members, notifications, push_subscriptions, token_blacklist,
  audit_logs, pending_google_registrations, refresh_tokens
TO raktasetu_app;
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA public TO raktasetu_app;

ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE users FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS users_isolation ON users;
CREATE POLICY users_isolation ON users TO raktasetu_app
USING (
  app_role() = 'admin'
  OR id = app_user_id()
  OR app_role() IN ('auth', 'session')
)
WITH CHECK (
  app_role() = 'admin'
  OR id = app_user_id()
  OR app_role() = 'auth'
);

ALTER TABLE hospitals ENABLE ROW LEVEL SECURITY;
ALTER TABLE hospitals FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS hospitals_isolation ON hospitals;
CREATE POLICY hospitals_isolation ON hospitals TO raktasetu_app
USING (
  app_role() = 'admin'
  OR user_id = app_user_id()
  OR id = app_hospital_id()
  OR app_role() = 'auth'
  OR (app_role() = 'donor' AND approval_status = 'approved')
  OR (app_role() = 'session' AND user_id = app_user_id())
)
WITH CHECK (
  app_role() = 'admin'
  OR user_id = app_user_id()
  OR app_role() = 'auth'
);

ALTER TABLE blood_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE blood_requests FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS blood_requests_isolation ON blood_requests;
CREATE POLICY blood_requests_isolation ON blood_requests TO raktasetu_app
USING (
  app_role() = 'admin'
  OR hospital_id = app_hospital_id()
  OR (app_role() = 'donor' AND status = 'open')
)
WITH CHECK (app_role() = 'admin' OR hospital_id = app_hospital_id());

ALTER TABLE donor_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE donor_responses FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS donor_responses_isolation ON donor_responses;
CREATE POLICY donor_responses_isolation ON donor_responses TO raktasetu_app
USING (
  app_role() = 'admin'
  OR donor_id = app_user_id()
  OR EXISTS (
    SELECT 1 FROM blood_requests br
    WHERE br.id = donor_responses.request_id AND br.hospital_id = app_hospital_id()
  )
)
WITH CHECK (
  app_role() = 'admin'
  OR donor_id = app_user_id()
  OR EXISTS (
    SELECT 1 FROM blood_requests br
    WHERE br.id = donor_responses.request_id AND br.hospital_id = app_hospital_id()
  )
);

ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS donations_isolation ON donations;
CREATE POLICY donations_isolation ON donations TO raktasetu_app
USING (app_role() = 'admin' OR donor_id = app_user_id() OR hospital_id = app_hospital_id())
WITH CHECK (app_role() = 'admin' OR hospital_id = app_hospital_id());

ALTER TABLE credits ENABLE ROW LEVEL SECURITY;
ALTER TABLE credits FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS credits_isolation ON credits;
CREATE POLICY credits_isolation ON credits TO raktasetu_app
USING (app_role() = 'admin' OR donor_id = app_user_id())
WITH CHECK (app_role() = 'admin' OR donor_id = app_user_id() OR app_role() = 'hospital');

ALTER TABLE family_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE family_members FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS family_members_isolation ON family_members;
CREATE POLICY family_members_isolation ON family_members TO raktasetu_app
USING (app_role() = 'admin' OR donor_id = app_user_id())
WITH CHECK (app_role() = 'admin' OR donor_id = app_user_id());

ALTER TABLE notifications ENABLE ROW LEVEL SECURITY;
ALTER TABLE notifications FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS notifications_isolation ON notifications;
CREATE POLICY notifications_isolation ON notifications TO raktasetu_app
USING (app_role() = 'admin' OR user_id = app_user_id())
WITH CHECK (app_role() = 'admin' OR user_id = app_user_id() OR app_role() = 'hospital');

ALTER TABLE push_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE push_subscriptions FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS push_subscriptions_isolation ON push_subscriptions;
CREATE POLICY push_subscriptions_isolation ON push_subscriptions TO raktasetu_app
USING (app_role() = 'admin' OR user_id = app_user_id())
WITH CHECK (app_role() = 'admin' OR user_id = app_user_id());

ALTER TABLE token_blacklist ENABLE ROW LEVEL SECURITY;
ALTER TABLE token_blacklist FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS token_blacklist_isolation ON token_blacklist;
CREATE POLICY token_blacklist_isolation ON token_blacklist TO raktasetu_app
USING (app_role() IN ('admin', 'session') OR user_id = app_user_id())
WITH CHECK (app_role() IN ('admin', 'session') OR user_id = app_user_id());

ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS audit_logs_isolation ON audit_logs;
CREATE POLICY audit_logs_isolation ON audit_logs TO raktasetu_app
USING (app_role() = 'admin')
WITH CHECK (app_role() IN ('admin', 'auth', 'donor', 'hospital', 'session') AND (user_id IS NULL OR user_id = app_user_id() OR app_role() = 'admin'));

ALTER TABLE pending_google_registrations ENABLE ROW LEVEL SECURITY;
ALTER TABLE pending_google_registrations FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS pending_google_auth_only ON pending_google_registrations;
CREATE POLICY pending_google_auth_only ON pending_google_registrations TO raktasetu_app
USING (app_role() = 'auth')
WITH CHECK (app_role() = 'auth');

ALTER TABLE refresh_tokens ENABLE ROW LEVEL SECURITY;
ALTER TABLE refresh_tokens FORCE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS refresh_tokens_owner ON refresh_tokens;
CREATE POLICY refresh_tokens_owner ON refresh_tokens TO raktasetu_app
USING (app_role() IN ('auth', 'session') OR user_id = app_user_id() OR app_role() = 'admin')
WITH CHECK (app_role() IN ('auth', 'session') OR user_id = app_user_id() OR app_role() = 'admin');

COMMIT;
