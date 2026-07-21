/** Public site origin for SEO meta, canonical URLs, and share previews. */
const DEFAULT_SITE_ORIGIN = 'https://raktasetu-production.up.railway.app';

export function resolveSiteOrigin(raw = import.meta.env.VITE_SITE_ORIGIN) {
  const value = String(raw || DEFAULT_SITE_ORIGIN).trim().replace(/\/$/, '');
  return value || DEFAULT_SITE_ORIGIN;
}

export const SITE_ORIGIN = resolveSiteOrigin();
