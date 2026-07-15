-- RaktaSetu Neon schema snapshot (2026-07-15)
-- Source: Neon project cool-firefly-17917748 / database neondb
-- Apply with: psql "$DATABASE_URL" -f backend/db/schema.sql
-- Requires: CREATE EXTENSION IF NOT EXISTS "uuid-ossp"; (or pgcrypto uuid_generate_v4)

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  email varchar NOT NULL,
  phone varchar NOT NULL,
  password_hash varchar NOT NULL,
  name varchar NOT NULL,
  role varchar NOT NULL,
  blood_group varchar,
  latitude numeric,
  longitude numeric,
  city varchar,
  state varchar,
  is_verified boolean DEFAULT false,
  aadhaar_hash varchar,
  is_on_call boolean DEFAULT false,
  ping_radius_km integer DEFAULT 10,
  last_donation_date date,
  next_eligible_date date,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now(),
  consent_given boolean NOT NULL DEFAULT false,
  consent_given_at timestamptz,
  token_version integer NOT NULL DEFAULT 0,
  google_sub varchar UNIQUE,
  deleted_at timestamptz
);

CREATE TABLE IF NOT EXISTS hospitals (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id),
  name varchar NOT NULL,
  address text NOT NULL,
  license_number varchar,
  latitude numeric,
  longitude numeric,
  city varchar,
  state varchar,
  phone varchar,
  is_verified boolean DEFAULT false,
  operating_hours jsonb,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS blood_requests (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  hospital_id uuid REFERENCES hospitals(id),
  blood_group varchar NOT NULL,
  units_needed integer NOT NULL DEFAULT 1,
  urgency varchar NOT NULL,
  status varchar NOT NULL DEFAULT 'open',
  radius_km integer DEFAULT 5,
  latitude numeric,
  longitude numeric,
  notes text,
  ref_code varchar,
  needed_by timestamptz,
  filled_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS donor_responses (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  request_id uuid REFERENCES blood_requests(id),
  donor_id uuid REFERENCES users(id),
  status varchar NOT NULL DEFAULT 'pending',
  responded_at timestamptz,
  arrived_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS donations (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id uuid REFERENCES users(id),
  request_id uuid REFERENCES blood_requests(id),
  hospital_id uuid REFERENCES hospitals(id),
  units integer NOT NULL DEFAULT 1,
  blood_group varchar NOT NULL,
  verified_by uuid,
  verified_at timestamptz,
  credits_earned integer DEFAULT 100,
  ref_code varchar,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS credits (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id uuid REFERENCES users(id),
  amount integer NOT NULL,
  type varchar NOT NULL,
  description text,
  related_donation_id uuid REFERENCES donations(id),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS family_members (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  donor_id uuid REFERENCES users(id),
  name varchar NOT NULL,
  relationship varchar NOT NULL,
  blood_group varchar,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS notifications (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id),
  type varchar NOT NULL,
  title varchar NOT NULL,
  body text,
  data jsonb,
  is_read boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS token_blacklist (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  token_jti varchar NOT NULL,
  user_id uuid REFERENCES users(id),
  expires_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS audit_logs (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid REFERENCES users(id),
  action varchar NOT NULL,
  resource_type varchar NOT NULL,
  resource_id uuid,
  details jsonb,
  ip_address inet,
  user_agent text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS push_subscriptions (
  id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id uuid NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  endpoint text NOT NULL UNIQUE,
  p256dh text NOT NULL,
  auth text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_push_subscriptions_user ON push_subscriptions(user_id);
