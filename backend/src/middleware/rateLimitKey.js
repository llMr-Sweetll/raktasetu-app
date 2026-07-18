import jwt from 'jsonwebtoken';

/**
 * Rate-limit key for API traffic under shared NATs (CGNAT / mobile carriers).
 * Prefer authenticated user id from the Bearer access token `sub` claim;
 * fall back to client IP for anonymous requests.
 *
 * Auth-route limiters stay separate and tighter (see createApp); they still
 * key by IP so credential-stuffing against one mailbox is not amortized across users.
 */
export function apiRateLimitKey(req) {
  const auth = req.headers?.authorization;
  if (typeof auth === 'string' && auth.startsWith('Bearer ')) {
    try {
      const decoded = jwt.decode(auth.slice(7));
      if (decoded && typeof decoded.sub === 'string' && decoded.sub.length > 0) {
        return `user:${decoded.sub}`;
      }
    } catch {
      /* ignore malformed tokens; use IP */
    }
  }
  return req.ip || req.socket?.remoteAddress || 'anonymous';
}
