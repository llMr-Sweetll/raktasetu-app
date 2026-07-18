/**
 * TLS options for Postgres clients.
 * Neon and other managed hosts verify by default.
 * Set DATABASE_SSL_INSECURE=1 only for break-glass local/debug use.
 */
export function postgresSslConfig(connectionString, env = process.env) {
  if (!connectionString || connectionString.includes('localhost') || connectionString.includes('127.0.0.1')) {
    return false;
  }
  if (env.DATABASE_SSL_INSECURE === '1') {
    return { rejectUnauthorized: false };
  }
  return { rejectUnauthorized: true };
}
