-- Allow donors to notify the hospital for requests they responded to.
-- Direct INSERT into notifications fails RLS WITH CHECK (hospital-only cross-user writes).

BEGIN;

CREATE OR REPLACE FUNCTION enqueue_notification(
  p_user_id uuid,
  p_type text,
  p_title text,
  p_body text,
  p_data jsonb DEFAULT '{}'::jsonb
) RETURNS uuid
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_id uuid := uuid_generate_v4();
  v_allowed boolean := false;
BEGIN
  IF app_role() = 'admin' THEN
    v_allowed := true;
  ELSIF app_role() = 'hospital' AND app_hospital_id() IS NOT NULL THEN
    v_allowed := true;
  ELSIF app_user_id() IS NOT NULL AND p_user_id = app_user_id() THEN
    v_allowed := true;
  ELSIF app_role() = 'donor' AND app_user_id() IS NOT NULL THEN
    SELECT EXISTS (
      SELECT 1
      FROM blood_requests br
      JOIN hospitals h ON h.id = br.hospital_id
      JOIN donor_responses dr ON dr.request_id = br.id
      WHERE h.user_id = p_user_id
        AND dr.donor_id = app_user_id()
    ) INTO v_allowed;
  END IF;

  IF NOT v_allowed THEN
    RAISE EXCEPTION 'notification enqueue denied'
      USING ERRCODE = '42501';
  END IF;

  INSERT INTO notifications (id, user_id, type, title, body, data, is_read, created_at)
  VALUES (
    v_id,
    p_user_id,
    p_type,
    p_title,
    p_body,
    COALESCE(p_data, '{}'::jsonb),
    false,
    NOW()
  );

  RETURN v_id;
END;
$$;

REVOKE ALL ON FUNCTION enqueue_notification(uuid, text, text, text, jsonb) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION enqueue_notification(uuid, text, text, text, jsonb) TO raktasetu_rls;

COMMIT;
