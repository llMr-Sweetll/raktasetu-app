import { pool } from './src/db.js';

const tables = ['users', 'hospitals', 'blood_requests', 'donor_responses', 'donations', 'credits', 'family_members', 'notifications'];

for (const t of tables) {
  const res = await pool.query(`SELECT column_name, data_type, is_nullable FROM information_schema.columns WHERE table_name = $1 AND table_schema = 'public' ORDER BY ordinal_position`, [t]);
  console.log(`\n--- ${t} ---`);
  res.rows.forEach(r => console.log(r.column_name, r.data_type, r.is_nullable === 'YES' ? 'NULL' : 'NOT NULL'));
}
await pool.end();
