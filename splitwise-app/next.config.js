/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Komprimiert HTTP-Antworten (gzip/brotli) direkt in Next.js
  compress: true,

  // Entfernt den "X-Powered-By: Next.js" Header (minimale Sicherheitsverbesserung)
  poweredByHeader: false,

  // Moderne Bildformate für automatische next/image Optimierung
  images: {
    formats: ['image/avif', 'image/webp'],
  },

  // Produktions-Build-Analyse (aktiviere mit ANALYZE=true npm run build)
  ...(process.env.ANALYZE === 'true' && {
    experimental: {
      bundlePagesRouterDependencies: true,
    },
  }),
}

module.exports = nextConfig
