import pg from 'pg';
const { Pool } = pg;
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.on('error', (err) => {
  console.error('Unexpected DB error:', err);
});

export const query = (text, params) => pool.query(text, params);
