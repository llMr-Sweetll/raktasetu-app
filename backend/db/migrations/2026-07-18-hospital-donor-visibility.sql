-- Hospital ↔ donor visibility for matching/verify under raktasetu_rls.
-- Audit: docs/superpowers/specs/2026-07-18-user-ready-audit.md (users_isolation gap).
-- Design: option A — SECURITY DEFINER helpers with minimal columns; no full-row hospital SELECT on users.

BEGIN;

CREATE OR REPLACE FUNCTION hospital_visible_on_call_donors(p_blood_groups text[])
RETURNS TABLE (
  id uuid,
  blood_group text,
  latitude double precision,
  longitude double precision
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT u.id, u.blood_group, u.latitude, u.longitude
  FROM users u
  WHERE u.role = 'donor'
    AND u.account_status = 'active'
    AND u.is_on_call = true
    AND u.deleted_at IS NULL
    AND u.blood_group = ANY (p_blood_groups)
    AND app_role() = 'hospital'
    AND app_hospital_id() IS NOT NULL;
$$;

CREATE OR REPLACE FUNCTION hospital_donor_blood_group(p_donor_id uuid)
RETURNS text
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT u.blood_group
  FROM users u
  WHERE u.id = p_donor_id
    AND u.role = 'donor'
    AND u.account_status = 'active'
    AND u.deleted_at IS NULL
    AND app_role() = 'hospital'
    AND app_hospital_id() IS NOT NULL;
$$;

CREATE OR REPLACE FUNCTION hospital_record_donor_donation(p_donor_id uuid)
RETURNS void
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  UPDATE users
  SET last_donation_date = CURRENT_DATE,
      next_eligible_date = CURRENT_DATE + INTERVAL '56 days',
      updated_at = NOW()
  WHERE id = p_donor_id
    AND role = 'donor'
    AND account_status = 'active'
    AND deleted_at IS NULL
    AND app_role() = 'hospital'
    AND app_hospital_id() IS NOT NULL;
$$;

-- Push delivery must load endpoints for notified donors while the hospital session is active.
CREATE OR REPLACE FUNCTION deliverable_push_subscriptions(p_user_id uuid)
RETURNS TABLE (
  id uuid,
  endpoint text,
  p256dh text,
  auth text
)
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT ps.id, ps.endpoint, ps.p256dh, ps.auth
  FROM push_subscriptions ps
  WHERE ps.user_id = p_user_id
    AND (
      app_user_id() = p_user_id
      OR app_role() = 'admin'
      OR (app_role() = 'hospital' AND app_hospital_id() IS NOT NULL)
    )
  ORDER BY ps.created_at DESC
  LIMIT 10;
$$;

CREATE OR REPLACE FUNCTION delete_gone_push_subscription(p_id uuid, p_user_id uuid)
RETURNS integer
LANGUAGE sql
SECURITY DEFINER
SET search_path = public
AS $$
  WITH deleted AS (
    DELETE FROM push_subscriptions ps
    WHERE ps.id = p_id
      AND ps.user_id = p_user_id
      AND (
        app_user_id() = p_user_id
        OR app_role() = 'admin'
        OR (app_role() = 'hospital' AND app_hospital_id() IS NOT NULL)
      )
    RETURNING 1
  )
  SELECT count(*)::integer FROM deleted;
$$;

REVOKE ALL ON FUNCTION hospital_visible_on_call_donors(text[]) FROM PUBLIC;
REVOKE ALL ON FUNCTION hospital_donor_blood_group(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION hospital_record_donor_donation(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION deliverable_push_subscriptions(uuid) FROM PUBLIC;
REVOKE ALL ON FUNCTION delete_gone_push_subscription(uuid, uuid) FROM PUBLIC;

GRANT EXECUTE ON FUNCTION hospital_visible_on_call_donors(text[]) TO raktasetu_rls;
GRANT EXECUTE ON FUNCTION hospital_donor_blood_group(uuid) TO raktasetu_rls;
GRANT EXECUTE ON FUNCTION hospital_record_donor_donation(uuid) TO raktasetu_rls;
GRANT EXECUTE ON FUNCTION deliverable_push_subscriptions(uuid) TO raktasetu_rls;
GRANT EXECUTE ON FUNCTION delete_gone_push_subscription(uuid, uuid) TO raktasetu_rls;

COMMIT;
