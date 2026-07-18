-- India NBTC/NACO whole-blood donation intervals:
-- male donors: 90 days; female donors: 120 days.
-- Safe fallback when sex is unset: 120 days (more conservative).
-- Audit: KLE pilot P0 — replace incorrect 56-day interval.

BEGIN;

ALTER TABLE users
  ADD COLUMN IF NOT EXISTS sex text;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'users_sex_check'
  ) THEN
    ALTER TABLE users
      ADD CONSTRAINT users_sex_check
      CHECK (sex IS NULL OR sex IN ('male', 'female'));
  END IF;
END $$;

CREATE OR REPLACE FUNCTION hospital_record_donor_donation(p_donor_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE users
  SET last_donation_date = CURRENT_DATE,
      next_eligible_date = CURRENT_DATE + CASE
        WHEN sex = 'male' THEN INTERVAL '90 days'
        ELSE INTERVAL '120 days'
      END,
      updated_at = NOW()
  WHERE id = p_donor_id
    AND role = 'donor'
    AND account_status = 'active'
    AND deleted_at IS NULL
    AND app_role() = 'hospital'
    AND app_hospital_id() IS NOT NULL;
$$;

-- Backfill last_donation_date from the old 56-day window when missing.
UPDATE users
SET last_donation_date = next_eligible_date - INTERVAL '56 days',
    updated_at = NOW()
WHERE role = 'donor'
  AND deleted_at IS NULL
  AND last_donation_date IS NULL
  AND next_eligible_date IS NOT NULL;

-- Recalculate next_eligible_date from last donation using NBTC intervals.
-- Unknown/null sex uses the conservative 120-day female interval.
UPDATE users
SET next_eligible_date = last_donation_date + CASE
      WHEN sex = 'male' THEN INTERVAL '90 days'
      ELSE INTERVAL '120 days'
    END,
    updated_at = NOW()
WHERE role = 'donor'
  AND deleted_at IS NULL
  AND last_donation_date IS NOT NULL;

-- Pair with JWT_SECRET rotation: invalidate refresh sessions and bump token_version.
UPDATE users
SET token_version = token_version + 1,
    updated_at = NOW()
WHERE deleted_at IS NULL;

UPDATE refresh_tokens
SET revoked_at = NOW()
WHERE revoked_at IS NULL;

COMMIT;
