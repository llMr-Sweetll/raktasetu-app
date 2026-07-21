/**
 * Ensures VITE_SITE_ORIGIN is available for HTML %VITE_SITE_ORIGIN% replacement
 * and writes robots.txt / sitemap.xml into dist (no literal origins in source).
 */
export const DEFAULT_SITE_ORIGIN = 'https://raktasetu-production.up.railway.app';

export function normalizeSiteOrigin(raw) {
  const value = String(raw || DEFAULT_SITE_ORIGIN).trim().replace(/\/$/, '');
  return value || DEFAULT_SITE_ORIGIN;
}

export function resolveSiteOriginFromEnv(env = process.env) {
  return normalizeSiteOrigin(env.VITE_SITE_ORIGIN);
}

export function siteOriginPlugin(siteOrigin) {
  const origin = normalizeSiteOrigin(siteOrigin);

  return {
    name: 'raktasetu-site-origin',
    config() {
      // Vite HTML env replacement reads process.env / loadEnv for %VITE_*%.
      process.env.VITE_SITE_ORIGIN = origin;
      return {
        define: {
          'import.meta.env.VITE_SITE_ORIGIN': JSON.stringify(origin),
        },
      };
    },
    transformIndexHtml(html) {
      // Guarantee replacement even when loadEnv ran before the default was applied.
      return html.replaceAll('%VITE_SITE_ORIGIN%', origin);
    },
    configureServer(server) {
      const robots = robotsTxt(origin);
      const sitemap = sitemapXml(origin);
      server.middlewares.use((req, res, next) => {
        if (req.url === '/robots.txt' || req.url?.startsWith('/robots.txt?')) {
          res.setHeader('Content-Type', 'text/plain; charset=utf-8');
          res.end(robots);
          return;
        }
        if (req.url === '/sitemap.xml' || req.url?.startsWith('/sitemap.xml?')) {
          res.setHeader('Content-Type', 'application/xml; charset=utf-8');
          res.end(sitemap);
          return;
        }
        next();
      });
    },
    generateBundle() {
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: robotsTxt(origin),
      });
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: sitemapXml(origin),
      });
    },
  };
}

function robotsTxt(origin) {
  return [
    'User-agent: *',
    'Allow: /',
    'Disallow: /api/',
    'Disallow: /socket.io/',
    '',
    `Sitemap: ${origin}/sitemap.xml`,
    '',
  ].join('\n');
}

function sitemapXml(origin) {
  const lastmod = new Date().toISOString().slice(0, 10);
  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    '  <url>',
    `    <loc>${origin}/</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    '    <changefreq>weekly</changefreq>',
    '    <priority>1.0</priority>',
    '  </url>',
    '</urlset>',
    '',
  ].join('\n');
}
