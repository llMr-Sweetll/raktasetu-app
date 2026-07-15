import bcrypt from 'bcryptjs';
import pg from 'pg';
import { v4 as uuidv4 } from 'uuid';

if (process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT) {
  throw new Error('Fixture seeding is disabled in production');
}
if (!process.env.TEST_DATABASE_URL || !process.env.FIXTURE_PASSWORD) {
  throw new Error('TEST_DATABASE_URL and FIXTURE_PASSWORD are required');
}

const { Client } = pg;
const client = new Client({
  connectionString: process.env.TEST_DATABASE_URL,
  ssl: process.env.TEST_DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false },
});
await client.connect();
try {
  const passwordHash = await bcrypt.hash(process.env.FIXTURE_PASSWORD, 12);
  const fixtures = [
    ['donor@test.invalid', '+15550000001', 'Fixture Donor', 'donor'],
    ['hospital@test.invalid', '+15550000002', 'Fixture Hospital', 'hospital'],
    ['admin@test.invalid', '+15550000003', 'Fixture Admin', 'admin'],
  ];
  await client.query('BEGIN');
  for (const [email, phone, name, role] of fixtures) {
    const id = uuidv4();
    await client.query(
      `INSERT INTO users (
         id,email,phone,password_hash,name,role,blood_group,date_of_birth,city,state,
         is_verified,is_on_call,ping_radius_km,consent_given,consent_given_at,
         consent_policy_version,consent_source,account_status,token_version,created_at,updated_at
       ) VALUES (
         $1,$2,$3,$4,$5,$6,$7,$8,'Test City','Test State',true,false,$9,true,NOW(),
         '2026-07-15','test_fixture','active',0,NOW(),NOW()
       ) ON CONFLICT (email) DO UPDATE SET password_hash=EXCLUDED.password_hash,updated_at=NOW()`,
      [id, email, phone, passwordHash, name, role, role === 'donor' ? 'O+' : null, role === 'donor' ? '1990-01-01' : null, role === 'donor' ? 10 : null],
    );
  }
  await client.query('COMMIT');
  console.log('test fixtures created');
} catch (error) {
  await client.query('ROLLBACK');
  throw error;
} finally {
  await client.end();
}
