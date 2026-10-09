import type { APIRoute } from 'astro';
import { ARTICLES } from '../data/articles';

export const GET: APIRoute = () => {
  const baseUrl = 'https://westdata.lol';
  const lastMod = new Date().toISOString().split('T')[0];

  const staticPages = [
    '',
    '/plans/',
    '/start/',
    '/clients/',
    '/insights/',
    '/faq/'
  ];

  const articlePages = ARTICLES.map(a => `/insights/${a.slug}/`);

  const allUrls = [...staticPages, ...articlePages];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    url => `  <url>
    <loc>${baseUrl}${url.startsWith('/') ? url : '/' + url}</loc>
    <lastmod>${lastMod}</lastmod>
    <changefreq>daily</changefreq>
    <priority>${url === '' ? '1.0' : url.includes('/insights/') ? '0.8' : '0.9'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8'
    }
  });
};
