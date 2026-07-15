ALTER TABLE users
  ADD COLUMN IF NOT EXISTS consent_policy_version varchar;

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS consent_source varchar;
