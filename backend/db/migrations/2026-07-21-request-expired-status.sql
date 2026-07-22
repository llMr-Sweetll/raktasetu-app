-- Allow auto-expiry to set status = 'expired' (escalation cron).
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM pg_constraint WHERE conname = 'blood_requests_status_check'
  ) THEN
    ALTER TABLE blood_requests DROP CONSTRAINT blood_requests_status_check;
  END IF;
END $$;

ALTER TABLE blood_requests
  ADD CONSTRAINT blood_requests_status_check
  CHECK (status IN ('open', 'filled', 'closed', 'expired'));
