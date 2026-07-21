-- Fix ambiguous "status" in hospital_complete_redemption: RETURNS TABLE(status text)
-- shadows redemptions.status in UPDATE ... WHERE status = 'active'.

CREATE OR REPLACE FUNCTION hospital_complete_redemption(p_code_hash text)
RETURNS TABLE (
  redemption_id uuid,
  donor_id uuid,
  donor_first_name text,
  beneficiary_name text,
  beneficiary_relation text,
  credits_amount integer,
  status text
)
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  v_redemption redemptions%ROWTYPE;
  v_donor_name text;
  v_ben_name text;
  v_ben_relation text;
BEGIN
  IF app_role() IS DISTINCT FROM 'hospital' OR app_hospital_id() IS NULL THEN
    RAISE EXCEPTION 'hospital redemption completion denied'
      USING ERRCODE = '42501';
  END IF;

  SELECT r.* INTO v_redemption
  FROM redemptions r
  WHERE r.code_hash = p_code_hash
  FOR UPDATE;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'REDEMPTION_NOT_FOUND'
      USING ERRCODE = 'P0002';
  END IF;

  IF v_redemption.status = 'completed' THEN
    RAISE EXCEPTION 'REDEMPTION_ALREADY_COMPLETED'
      USING ERRCODE = 'P0001';
  END IF;

  IF v_redemption.status <> 'active' THEN
    RAISE EXCEPTION 'REDEMPTION_NOT_ACTIVE'
      USING ERRCODE = 'P0001';
  END IF;

  IF v_redemption.expires_at < NOW() THEN
    UPDATE redemptions
    SET status = 'expired'
    WHERE id = v_redemption.id AND redemptions.status = 'active';

    INSERT INTO credits (id, donor_id, amount, type, description, related_redemption_id, created_at)
    SELECT uuid_generate_v4(), v_redemption.donor_id, v_redemption.credits_amount,
           'reserve_released', 'Redemption expired — credits released', v_redemption.id, NOW()
    WHERE NOT EXISTS (
      SELECT 1 FROM credits c
      WHERE c.related_redemption_id = v_redemption.id
        AND c.type = 'reserve_released'
    );

    RAISE EXCEPTION 'REDEMPTION_EXPIRED'
      USING ERRCODE = 'P0001';
  END IF;

  UPDATE redemptions
  SET status = 'completed',
      hospital_id = app_hospital_id(),
      verified_by = app_user_id(),
      completed_at = NOW()
  WHERE id = v_redemption.id
    AND redemptions.status = 'active';

  IF NOT FOUND THEN
    RAISE EXCEPTION 'REDEMPTION_ALREADY_COMPLETED'
      USING ERRCODE = 'P0001';
  END IF;

  UPDATE credits
  SET type = 'redeemed',
      description = 'Credits redeemed for replacement unit'
  WHERE related_redemption_id = v_redemption.id
    AND type = 'reserved';

  SELECT split_part(u.name, ' ', 1) INTO v_donor_name
  FROM users u
  WHERE u.id = v_redemption.donor_id;

  IF v_redemption.family_member_id IS NULL THEN
    v_ben_name := v_donor_name;
    v_ben_relation := 'Self';
  ELSE
    SELECT fm.name, initcap(fm.relation)
    INTO v_ben_name, v_ben_relation
    FROM family_members fm
    WHERE fm.id = v_redemption.family_member_id;
    v_ben_name := COALESCE(v_ben_name, 'Family');
    v_ben_relation := COALESCE(v_ben_relation, 'Family');
  END IF;

  redemption_id := v_redemption.id;
  donor_id := v_redemption.donor_id;
  donor_first_name := COALESCE(v_donor_name, 'Donor');
  beneficiary_name := v_ben_name;
  beneficiary_relation := v_ben_relation;
  credits_amount := v_redemption.credits_amount;
  status := 'completed';
  RETURN NEXT;
END;
$$;
