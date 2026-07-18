export const REFRESH_COOKIE_NAME = 'rs_refresh';
export const REFRESH_COOKIE_PATH = '/api/auth';
const THIRTY_DAYS_MS = 30 * 24 * 60 * 60 * 1000;

export function isProductionEnv(env = process.env) {
  return env.NODE_ENV === 'production' || Boolean(env.RAILWAY_ENVIRONMENT);
}

export function wantsNativeRefreshBody(req) {
  return String(req.get?.('X-Client-Platform') || '').toLowerCase() === 'native';
}

export function refreshCookieOptions(env = process.env) {
  return {
    httpOnly: true,
    secure: isProductionEnv(env),
    sameSite: 'strict',
    path: REFRESH_COOKIE_PATH,
    maxAge: THIRTY_DAYS_MS,
  };
}

export function setRefreshCookie(res, refreshToken, env = process.env) {
  if (!refreshToken || typeof refreshToken !== 'string') return;
  res.cookie(REFRESH_COOKIE_NAME, refreshToken, refreshCookieOptions(env));
}

export function clearRefreshCookie(res, env = process.env) {
  res.clearCookie(REFRESH_COOKIE_NAME, {
    httpOnly: true,
    secure: isProductionEnv(env),
    sameSite: 'strict',
    path: REFRESH_COOKIE_PATH,
  });
}

export function readRefreshToken(req) {
  const fromCookie = req.cookies?.[REFRESH_COOKIE_NAME];
  if (typeof fromCookie === 'string' && fromCookie.length >= 32) return fromCookie;
  const fromBody = req.body?.refresh_token;
  if (typeof fromBody === 'string' && fromBody.length >= 32) return fromBody;
  return null;
}

/** Session JSON for clients: never put refresh in body for web; native still needs it. */
export function publicSessionFields(session, { includeRefresh = false } = {}) {
  const payload = {
    token: session.token,
    expires_at: session.expires_at,
  };
  if (includeRefresh && session.refresh_token) {
    payload.refresh_token = session.refresh_token;
  }
  return payload;
}

export function deliverSession(res, session, req, env = process.env) {
  setRefreshCookie(res, session.refresh_token, env);
  return publicSessionFields(session, { includeRefresh: wantsNativeRefreshBody(req) });
}
