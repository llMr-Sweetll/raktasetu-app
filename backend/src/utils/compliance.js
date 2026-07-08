import { query } from '../db.js';
import { v4 as uuidv4 } from 'uuid';

/**
 * HIPAA / DPDP Audit Logger
 * Logs all access to Protected Health Information (PHI) and sensitive operations.
 */
export async function logAudit({ userId, action, resourceType, resourceId, details, req }) {
  try {
    const ip = req?.ip || req?.headers['x-forwarded-for'] || req?.connection?.remoteAddress || null;
    const userAgent = req?.headers['user-agent'] || null;
    
    // Sanitize details: never log passwords, tokens, or raw PII
    const safeDetails = details ? JSON.parse(JSON.stringify(details)) : {};
    if (safeDetails.password) safeDetails.password = '[REDACTED]';
    if (safeDetails.token) safeDetails.token = '[REDACTED]';
    if (safeDetails.password_hash) safeDetails.password_hash = '[REDACTED]';

    await query(
      `INSERT INTO audit_logs (id, user_id, action, resource_type, resource_id, details, ip_address, user_agent, created_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, NOW())`,
      [uuidv4(), userId || null, action, resourceType, resourceId || null, JSON.stringify(safeDetails), ip, userAgent]
    );
  } catch (err) {
    // Audit logging must never break the main flow
    console.error('[AUDIT] Failed to write audit log:', err.message);
  }
}

/**
 * Check if a token JTI is blacklisted (user logged out)
 */
export async function isTokenBlacklisted(jti) {
  try {
    const result = await query(
      'SELECT id FROM token_blacklist WHERE token_jti = $1 AND expires_at > NOW()',
      [jti]
    );
    return result.rows.length > 0;
  } catch (err) {
    console.error('[AUTH] Token blacklist check failed:', err.message);
    return false; // Fail open to avoid lockouts, but log the error
  }
}

/**
 * Blacklist a token (secure logout)
 */
export async function blacklistToken(jti, userId, expiresAt) {
  try {
    await query(
      'INSERT INTO token_blacklist (id, token_jti, user_id, expires_at, created_at) VALUES ($1, $2, $3, $4, NOW())',
      [uuidv4(), jti, userId, expiresAt]
    );
    // Cleanup expired tokens
    await query('DELETE FROM token_blacklist WHERE expires_at < NOW()');
  } catch (err) {
    console.error('[AUTH] Token blacklist failed:', err.message);
  }
}

/**
 * Password strength validator (DPDP / HIPAA security best practice)
 */
export function validatePassword(password) {
  const errors = [];
  if (!password || password.length < 8) {
    errors.push('Password must be at least 8 characters');
  }
  if (!/[A-Z]/.test(password)) {
    errors.push('Password must contain at least one uppercase letter');
  }
  if (!/[a-z]/.test(password)) {
    errors.push('Password must contain at least one lowercase letter');
  }
  if (!/[0-9]/.test(password)) {
    errors.push('Password must contain at least one digit');
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    errors.push('Password must contain at least one special character');
  }
  return {
    valid: errors.length === 0,
    errors
  };
}
