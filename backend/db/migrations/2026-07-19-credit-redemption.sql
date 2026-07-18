-- Credit redemption: family members, redemptions table, reserved/released ledger types,
-- hospital completion via SECURITY DEFINER (no hospital SELECT on raw redemptions).

BEGIN;

-- ── family_members: relation + created_at + max 4 ────────────────────────────
ALTER TABLE family_members ADD COLUMN IF NOT EXISTS relation text;
ALTER TABLE family_members ADD COLUMN IF NOT EXISTS created_at timestamptz DEFAULT now();

DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'family_members' AND column_name = 'relationship'
  ) THEN
    EXECUTE $sql$
      UPDATE family_members
      SET relation = relationship
      WHERE relation IS NULL AND relationship IS NOT NULL
    $sql$;
  END IF;
END $$;

UPDATE family_members SET relation = 'other' WHERE relation IS NULL;
UPDATE family_members SET created_at = COALESCE(created_at, now()) WHERE created_at IS NULL;

ALTER TABLE family_members ALTER COLUMN relation SET NOT NULL;

-- Legacy column from early schema; keep nullable so new rows can omit it.
DO $$
BEGIN
  IF EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_schema = 'public' AND table_name = 'family_members'
      AND column_name = 'relationship' AND is_nullable = 'NO'
  ) THEN
    ALTER TABLE family_members ALTER COLUMN relationship DROP NOT NULL;
  END IF;
END $$;

UPDATE family_members
SET relationship = relation
WHERE relationship IS NULL AND relation IS NOT NULL;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'family_members_relation_check') THEN
    ALTER TABLE family_members ADD CONSTRAINT family_members_relation_check
      CHECK (relation IN ('spouse', 'parent', 'child', 'sibling', 'other'));
  END IF;
END $$;

CREATE OR REPLACE FUNCTION enforce_family_member_limit()
RETURNS trigger
LANGUAGE plpgsql
AS $$
BEGIN
  IF (SELECT COUNT(*) FROM family_members WHERE donor_id = NEW.donor_id) >= 4 THEN
    RAISE EXCEPTION 'Maximum of 4 family members per donor'
      USING ERRCODE = 'check_violation';
  END IF;
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS family_members_max_four ON family_members;
CREATE TRIGGER family_members_max_four
  BEFORE INSERT ON family_members
  FOR EACH ROW
  EXECUTE PROCEDURE enforce_family_member_limit();

-- ── credits: related_redemption_id + expanded types ──────────────────────────
ALTER TABLE credits ADD COLUMN IF NOT EXISTS related_redemption_id uuid;

DO $$
BEGIN
  IF EXISTS (SELECT 1 FROM pg_constraint WHERE conname = 'credits_type_check') THEN
    ALTER TABLE credits DROP CONSTRAINT credits_type_check;
  END IF;
END $$;

ALTER TABLE credits ADD CONSTRAINT credits_type_check
  CHECK (type IN ('earned', 'redeemed', 'adjustment', 'reserved', 'reserve_released'));

-- ── redemptions ──────────────────────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS redemptions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id uuid NOT NULL REFERENCES users(id),
  family_member_id uuid REFERENCES family_members(id) ON DELETE SET NULL,
  code_hash varchar NOT NULL,
  status text NOT NULL DEFAULT 'active'
    CHECK (status IN ('active', 'completed', 'expired', 'cancelled')),
  hospital_id uuid REFERENCES hospitals(id),
  credits_amount integer NOT NULL DEFAULT 100,
  created_at timestamptz NOT NULL DEFAULT now(),
  expires_at timestamptz NOT NULL DEFAULT (now() + INTERVAL '24 hours'),
  completed_at timestamptz,
  verified_by uuid REFERENCES users(id)
);

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_constraint
    WHERE conname = 'credits_related_redemption_fkey'
  ) THEN
    ALTER TABLE credits
      ADD CONSTRAINT credits_related_redemption_fkey
      FOREIGN KEY (related_redemption_id) REFERENCES redemptions(id);
  END IF;
END $$;

CREATE UNIQUE INDEX IF NOT EXISTS redemptions_code_hash_uidx ON redemptions (code_hash);
CREATE UNIQUE INDEX IF NOT EXISTS redemptions_one_active_per_donor_uidx
  ON redemptions (donor_id) WHERE status = 'active';
CREATE INDEX IF NOT EXISTS redemptions_donor_created_idx
  ON redemptions (donor_id, created_at DESC, id DESC);
CREATE INDEX IF NOT EXISTS redemptions_active_expires_idx
  ON redemptions (expires_at) WHERE status = 'active';
CREATE INDEX IF NOT EXISTS credits_related_redemption_idx
  ON credits (related_redemption_id) WHERE related_redemption_id IS NOT NULL;

-- ── RLS ──────────────────────────────────────────────────────────────────────
ALTER TABLE redemptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE redemptions FORCE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS redemptions_isolation ON redemptions;
CREATE POLICY redemptions_isolation ON redemptions TO raktasetu_rls
USING (
  app_role() = 'admin'
  OR donor_id = app_user_id()
)
WITH CHECK (
  app_role() = 'admin'
  OR donor_id = app_user_id()
);

GRANT SELECT, INSERT, UPDATE, DELETE ON redemptions TO raktasetu_rls;

-- Hospitals complete only through this helper (minimal return columns; no raw SELECT).
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
    WHERE id = v_redemption.id AND status = 'active';

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
    AND status = 'active';

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

REVOKE ALL ON FUNCTION hospital_complete_redemption(text) FROM PUBLIC;
GRANT EXECUTE ON FUNCTION hospital_complete_redemption(text) TO raktasetu_rls;

COMMIT;
