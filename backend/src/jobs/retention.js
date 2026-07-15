import pg from 'pg';

const connectionString = process.env.RETENTION_DATABASE_URL ||
  (process.env.NODE_ENV !== 'production' && !process.env.RAILWAY_ENVIRONMENT ? process.env.DATABASE_URL : null);
if (!connectionString) throw new Error('RETENTION_DATABASE_URL is required for production retention jobs');

const { Client } = pg;
const client = new Client({
  connectionString,
  ssl: connectionString.includes('localhost') ? false : { rejectUnauthorized: false },
});
await client.connect();
try {
  const lock = await client.query('SELECT pg_try_advisory_lock(78254103) AS acquired');
  if (!lock.rows[0].acquired) {
    console.log('retention job already running');
    process.exitCode = 0;
  } else {
    const tasks = [
      ['pending_google_registrations', 'expires_at < NOW() - INTERVAL \'1 day\''],
      ['refresh_tokens', 'expires_at < NOW() - INTERVAL \'7 days\' OR revoked_at < NOW() - INTERVAL \'30 days\''],
      ['token_blacklist', 'expires_at < NOW() - INTERVAL \'1 day\''],
      ['notifications', 'created_at < NOW() - INTERVAL \'365 days\''],
      ['audit_logs', 'created_at < NOW() - INTERVAL \'7 years\' AND legal_hold = false'],
    ];
    for (const [table, condition] of tasks) {
      let total = 0;
      for (;;) {
        const result = await client.query(
          `WITH expired AS (SELECT ctid FROM ${table} WHERE ${condition} LIMIT 1000)
           DELETE FROM ${table} WHERE ctid IN (SELECT ctid FROM expired)`,
        );
        total += result.rowCount;
        if (result.rowCount < 1000) break;
      }
      console.log(`${table}: removed ${total}`);
    }
    await client.query('SELECT pg_advisory_unlock(78254103)');
  }
} finally {
  await client.end();
}
