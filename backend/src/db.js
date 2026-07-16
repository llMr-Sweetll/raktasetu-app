import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';
import { AsyncLocalStorage } from 'async_hooks';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL?.includes('localhost') ? false : { rejectUnauthorized: false },
  max: Number(process.env.DB_POOL_MAX || 10),
  statement_timeout: Number(process.env.DB_STATEMENT_TIMEOUT_MS || 10000),
  idle_in_transaction_session_timeout: 10000,
});

pool.on('error', (err) => {
  console.error('Unexpected DB error:', err);
});

const authorizationStore = new AsyncLocalStorage();

/** Neon login roles may retain BYPASSRLS; assume a NOLOGIN NOBYPASSRLS runtime role. */
export async function ensureRlsRole(client) {
  const role = process.env.DB_RUNTIME_ROLE
    || (process.env.NODE_ENV === 'production' ? 'raktasetu_rls' : '');
  if (!role) return;
  if (!/^[A-Za-z_][A-Za-z0-9_]*$/.test(role)) {
    throw new Error('Invalid DB_RUNTIME_ROLE');
  }
  await client.query(`SET ROLE ${role}`);
}

export function runWithAuthorizationContext(context, work) {
  return authorizationStore.run(context, work);
}

async function applyContext(client, context) {
  await client.query("SELECT set_config('app.user_id', $1, true)", [context?.userId || '']);
  await client.query("SELECT set_config('app.role', $1, true)", [context?.role || '']);
  await client.query("SELECT set_config('app.hospital_id', $1, true)", [context?.hospitalId || '']);
}

export async function query(text, params) {
  const context = authorizationStore.getStore();
  const client = await pool.connect();
  try {
    await ensureRlsRole(client);
    if (!context) {
      return await client.query(text, params);
    }
    await client.query('BEGIN READ WRITE');
    await applyContext(client, context);
    const result = await client.query(text, params);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    if (context) {
      try { await client.query('ROLLBACK'); } catch { /* ignore */ }
    }
    throw error;
  } finally {
    client.release();
  }
}

export { applyContext };
