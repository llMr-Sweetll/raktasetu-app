-- DPDP account deletion: soft-deactivate with 30-day restore window, then retention purge.
-- Adds account_status value 'deactivated' (grace period + post-purge until row is kept anonymized).

BEGIN;

ALTER TABLE users DROP CONSTRAINT IF EXISTS users_account_status_check;
ALTER TABLE users ADD CONSTRAINT users_account_status_check
  CHECK (account_status IN ('pending_onboarding', 'active', 'suspended', 'deactivated', 'deleted'));

CREATE INDEX IF NOT EXISTS users_deleted_at_grace_idx
  ON users (deleted_at)
  WHERE deleted_at IS NOT NULL AND account_status = 'deactivated';

COMMIT;
