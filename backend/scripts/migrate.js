import crypto from 'crypto';
import { readdir, readFile } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Client } = pg;
const production = process.env.NODE_ENV === 'production' || Boolean(process.env.RAILWAY_ENVIRONMENT);
const connectionString = process.env.MIGRATION_DATABASE_URL ||
  (!production ? process.env.TEST_DATABASE_URL || process.env.DATABASE_URL : null);

if (!connectionString) {
  throw new Error(production
    ? 'MIGRATION_DATABASE_URL is required for production migrations'
    : 'Set MIGRATION_DATABASE_URL, TEST_DATABASE_URL, or DATABASE_URL');
}

const directory = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../db/migrations');
const client = new Client({
  connectionString,
  ssl: connectionString.includes('localhost') ? false : { rejectUnauthorized: false },
});

await client.connect();
try {
  await client.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name text PRIMARY KEY,
      checksum varchar(64) NOT NULL,
      applied_at timestamptz NOT NULL DEFAULT now()
    )
  `);
  const files = (await readdir(directory)).filter((name) => name.endsWith('.sql')).sort();
  for (const name of files) {
    const sql = await readFile(path.join(directory, name), 'utf8');
    const checksum = crypto.createHash('sha256').update(sql).digest('hex');
    const recorded = await client.query('SELECT checksum FROM schema_migrations WHERE name=$1', [name]);
    if (recorded.rows[0]) {
      if (recorded.rows[0].checksum !== checksum) throw new Error(`Applied migration changed: ${name}`);
      console.log(`already applied: ${name}`);
      continue;
    }
    await client.query(sql);
    await client.query('INSERT INTO schema_migrations(name,checksum) VALUES ($1,$2)', [name, checksum]);
    console.log(`applied: ${name}`);
  }
} finally {
  await client.end();
}
