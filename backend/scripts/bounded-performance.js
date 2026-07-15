import pg from 'pg';

if (!process.env.TEST_DATABASE_URL || process.env.NODE_ENV === 'production' || process.env.RAILWAY_ENVIRONMENT) {
  throw new Error('Bounded performance checks require TEST_DATABASE_URL outside production');
}

const { Client } = pg;
const client = new Client({
  connectionString: process.env.TEST_DATABASE_URL,
  ssl: process.env.TEST_DATABASE_URL.includes('localhost') ? false : { rejectUnauthorized: false },
});
await client.connect();
try {
  const cases = [
    ['open requests', `SELECT id,hospital_id,blood_group,created_at FROM blood_requests WHERE status='open' ORDER BY created_at DESC,id DESC LIMIT 100`],
    ['donor history', `SELECT id,donor_id,created_at FROM donations WHERE donor_id='00000000-0000-0000-0000-000000000000' ORDER BY created_at DESC,id DESC LIMIT 100`],
    ['notification feed', `SELECT id,user_id,created_at FROM notifications WHERE user_id='00000000-0000-0000-0000-000000000000' ORDER BY created_at DESC,id DESC LIMIT 100`],
  ];
  for (const [name, sql] of cases) {
    const result = await client.query(`EXPLAIN (ANALYZE, BUFFERS, FORMAT JSON) ${sql}`);
    const milliseconds = result.rows[0]['QUERY PLAN'][0]['Execution Time'];
    if (milliseconds > 500) throw new Error(`${name} exceeded 500ms (${milliseconds}ms)`);
    console.log(`${name}: ${milliseconds.toFixed(2)}ms`);
  }
} finally {
  await client.end();
}
