/**
 * Hardcoded role destinations — never trust query redirect params (no open redirects).
 */
export function roleHome(user) {
  if (!user) return '/login';
  if (user.role === 'hospital') return '/console';
  if (user.role === 'admin') return '/admin';
  return '/home';
}

/** Auth screen mode from ?role= — defaults to donor. */
export function parseAuthRole(searchParams) {
  const r = (typeof searchParams?.get === 'function'
    ? searchParams.get('role')
    : ''
  ) || '';
  return String(r).toLowerCase() === 'hospital' ? 'hospital' : 'donor';
}
