import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import areas from './src/data/areas.js'
import routes from './src/data/routes.js'
import siteInfo from './src/data/siteInfo.js'

// Adds schema.org business details to index.html so Google can show the
// business (phone, area served, etc.) in local results.
function businessSchema(siteUrl) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    name: siteInfo.name,
    description: siteInfo.description,
    url: `${siteUrl}/`,
    image: `${siteUrl}/og-image.jpg`,
    logo: `${siteUrl}/apple-touch-icon.png`,
    telephone: siteInfo.phones,
    email: siteInfo.email,
    priceRange: '₹5,000+',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Hyderabad',
      addressRegion: 'Telangana',
      addressCountry: 'IN',
    },
    areaServed: areas.map((area) => ({ '@type': 'Place', name: `${area}, Hyderabad` })),
  }
  return {
    name: 'business-schema',
    transformIndexHtml() {
      return [
        {
          tag: 'script',
          attrs: { type: 'application/ld+json' },
          children: JSON.stringify(schema),
          injectTo: 'head',
        },
      ]
    },
  }
}

// Writes sitemap.xml and robots.txt into the build, using VITE_SITE_URL from .env.
function seoFiles(siteUrl) {
  return {
    name: 'seo-files',
    apply: 'build',
    generateBundle() {
      const today = new Date().toISOString().slice(0, 10)
      const urls = routes
        .map(
          ({ path }) =>
            `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`,
        )
        .join('\n')
      this.emitFile({
        type: 'asset',
        fileName: 'sitemap.xml',
        source: `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
      })
      this.emitFile({
        type: 'asset',
        fileName: 'robots.txt',
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const { VITE_SITE_URL } = loadEnv(mode, process.cwd())
  return {
    plugins: [react(), tailwindcss(), seoFiles(VITE_SITE_URL), businessSchema(VITE_SITE_URL)],
  }
})
