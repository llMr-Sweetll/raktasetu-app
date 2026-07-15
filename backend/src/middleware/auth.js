import { resolveSession } from '../auth/session.js';
import { runWithAuthorizationContext } from '../db.js';

export const authenticate = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader?.startsWith('Bearer ')) {
    return res.status(401).json({
      success: false,
      error: { code: 'AUTHENTICATION_REQUIRED', message: 'Authentication required' },
    });
  }
  const token = authHeader.slice(7);
  try {
    const session = await resolveSession(token);
    req.user = session.user;
    req.auth = { token, claims: session.claims };
    return runWithAuthorizationContext({
      userId: session.user.id,
      role: session.user.role,
      hospitalId: session.user.hospital_id || '',
    }, next);
  } catch (err) {
    const status = err.status || 503;
    return res.status(status).json({
      success: false,
      error: { code: err.code || 'AUTHENTICATION_FAILED', message: err.message || 'Authentication failed' },
    });
  }
};

export const requireRole = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role)) {
    return res.status(403).json({
      success: false,
      error: { code: 'ROLE_DENIED', message: 'Insufficient permissions' },
    });
  }
  next();
};

export const requireActiveAccount = (req, res, next) => {
  if (req.user?.account_status !== 'active') {
    return res.status(403).json({ success: false, error: { code: 'ACCOUNT_NOT_ACTIVE', message: 'Account is not active' } });
  }
  return next();
};

export const requireApprovedHospital = (req, res, next) => {
  if (req.user?.role !== 'hospital' || req.user?.approval_status !== 'approved' || !req.user?.hospital_id) {
    return res.status(403).json({ success: false, error: { code: 'HOSPITAL_APPROVAL_REQUIRED', message: 'Hospital approval is required' } });
  }
  return next();
};
