/**
 * Optional host → CANONICAL_ORIGIN 301 redirect (off unless CANONICAL_ORIGIN is set).
 * Exempts API/health/socket so railway.app health checks keep working during cutover.
 */
export function parseCanonicalOrigin(raw) {
  if (!raw || typeof raw !== 'string') return null;
  const trimmed = raw.trim().replace(/\/$/, '');
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return null;
    if (!url.hostname) return null;
    return {
      origin: `${url.protocol}//${url.host}`,
      hostname: url.hostname,
    };
  } catch {
    return null;
  }
}

export function isCanonicalRedirectExempt(path = '/') {
  if (path === '/health' || path.startsWith('/health?')) return true;
  if (path === '/api' || path.startsWith('/api/')) return true;
  if (path === '/socket.io' || path.startsWith('/socket.io/')) return true;
  return false;
}

export function createCanonicalRedirectMiddleware(env = process.env) {
  const canonical = parseCanonicalOrigin(env.CANONICAL_ORIGIN);
  if (!canonical) {
    return function canonicalRedirectDisabled(_req, _res, next) {
      next();
    };
  }

  return function canonicalRedirect(req, res, next) {
    if (isCanonicalRedirectExempt(req.path)) return next();

    const requestHost = String(req.hostname || '').toLowerCase();
    if (!requestHost || requestHost === canonical.hostname.toLowerCase()) {
      return next();
    }

    const target = new URL(req.originalUrl || req.url || '/', canonical.origin);
    return res.redirect(301, target.toString());
  };
}
