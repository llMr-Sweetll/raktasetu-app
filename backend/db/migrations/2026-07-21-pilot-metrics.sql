-- Pilot metrics: track request escalation for rare-type / radius expansions.
ALTER TABLE blood_requests
  ADD COLUMN IF NOT EXISTS escalation_level integer NOT NULL DEFAULT 0;

COMMENT ON COLUMN blood_requests.escalation_level IS
  '0 = initial radius; higher values mean the request was escalated outward';
