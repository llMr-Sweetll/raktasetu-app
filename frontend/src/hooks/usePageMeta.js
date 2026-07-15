import { useEffect } from 'react';

const ORIGIN = 'https://raktasetu-production.up.railway.app';

function setMeta(name, content, property = false) {
  const key = property ? 'property' : 'name';
  let tag = document.head.querySelector(`meta[${key}="${name}"]`);
  if (!tag) {
    tag = document.createElement('meta');
    tag.setAttribute(key, name);
    document.head.appendChild(tag);
  }
  tag.setAttribute('content', content);
}

export default function usePageMeta({ title, description, path = '/' }) {
  useEffect(() => {
    document.title = title;
    setMeta('description', description);
    setMeta('og:title', title, true);
    setMeta('og:description', description, true);
    setMeta('og:url', `${ORIGIN}${path}`, true);
    setMeta('twitter:title', title);
    setMeta('twitter:description', description);

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = path === '/' ? `${ORIGIN}/` : `${ORIGIN}/#${path}`;
  }, [description, path, title]);
}
