import { describe, expect, it } from 'vitest';
import { resolveSiteOrigin } from '../siteOrigin.js';
import { normalizeSiteOrigin, DEFAULT_SITE_ORIGIN } from '../../vite.site-origin.js';

describe('site origin', () => {
  it('defaults to the Railway production URL', () => {
    expect(normalizeSiteOrigin(undefined)).toBe(DEFAULT_SITE_ORIGIN);
    expect(normalizeSiteOrigin('')).toBe(DEFAULT_SITE_ORIGIN);
    expect(resolveSiteOrigin(undefined)).toBe(DEFAULT_SITE_ORIGIN);
  });

  it('strips trailing slashes', () => {
    expect(normalizeSiteOrigin('https://raktasetu.in/')).toBe('https://raktasetu.in');
  });
});
