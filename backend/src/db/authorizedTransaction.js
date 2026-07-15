import { pool, applyContext } from '../db.js';

export async function withAuthorizationContext(
  { userId = '', role, hospitalId = '' },
  work,
) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await applyContext(client, { userId, role, hospitalId });
    const result = await work(client);
    await client.query('COMMIT');
    return result;
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}
