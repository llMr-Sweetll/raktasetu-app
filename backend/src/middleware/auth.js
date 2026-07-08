import jwt from 'jsonwebtoken';
import { query } from '../db.js';
import { isTokenBlacklisted } from '../utils/compliance.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({ success: false, error: 'Authentication required' });
  }
  const token = authHeader.slice(7);
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    
    // Check if token has been blacklisted (secure logout)
    if (decoded.jti && await isTokenBlacklisted(decoded.jti)) {
      return res.status(401).json({ success: false, error: 'Token has been revoked' });
    }
    
    // Verify user still exists and get current role from DB (prevents JWT role tampering)
    // Also check token_version to prevent use of old tokens after password change
    const result = await query(
      'SELECT id, email, name, role, is_verified, token_version FROM users WHERE id = $1',
      [decoded.id]
    );
    if (result.rows.length === 0) {
      return res.status(401).json({ success: false, error: 'User not found' });
    }
    
    const user = result.rows[0];
    
    // If token has a token_version, verify it matches current DB version
    if (decoded.token_version !== undefined && decoded.token_version !== user.token_version) {
      return res.status(401).json({ success: false, error: 'Token invalidated by security action' });
    }
    
    req.user = user;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError' || err.name === 'TokenExpiredError') {
      return res.status(401).json({ success: false, error: 'Invalid token' });
    }
    console.error('Auth middleware error:', err.message);
    return res.status(500).json({ success: false, error: 'Authentication failed' });
  }
};

export const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({ success: false, error: 'Insufficient permissions' });
  }
  next();
};
