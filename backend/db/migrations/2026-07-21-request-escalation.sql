-- Request radius escalation + auto-expiry tracking.
-- escalation_level already exists (pilot metrics). This adds last-escalation
-- timestamp so the cron can wait a full urgency threshold between levels.

ALTER TABLE blood_requests
  ADD COLUMN IF NOT EXISTS last_escalated_at timestamptz;

COMMENT ON COLUMN blood_requests.last_escalated_at IS
  'When the request last widened radius / re-pinged newly in-range donors';

COMMENT ON COLUMN blood_requests.escalation_level IS
  '0 = initial radius; 1 = widened to >=10 km; 2 = widened to >=25 km (max)';
