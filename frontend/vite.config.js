import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['drop-icon.svg', 'push-handler.js'],
      manifest: {
        name: 'RaktaSetu',
        short_name: 'RaktaSetu',
        description: 'Coordinate compatible blood requests with willing donors and participating hospitals.',
        id: '/',
        start_url: '/',
        scope: '/',
        lang: 'en',
        categories: ['health', 'utilities'],
        display: 'standalone',
        background_color: '#0A0506',
        theme_color: '#7A1626',
        orientation: 'any',
        icons: [
          { src: '/drop-icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' },
          { src: '/drop-icon.svg', sizes: '192x192', type: 'image/svg+xml', purpose: 'maskable' },
          { src: '/drop-icon.svg', sizes: '512x512', type: 'image/svg+xml', purpose: 'maskable' },
        ],
      },
      workbox: {
        importScripts: ['/push-handler.js'],
        navigateFallback: '/index.html',
        globPatterns: ['**/*.{js,css,html,svg,png,ico,woff2}'],
      },
      devOptions: {
        enabled: false,
      },
    }),
  ],
  // Railway serves SPA at site root (unified with API). Local Vite still proxies /api.
  base: '/',
  server: {
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true
      },
      '/socket.io': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        ws: true
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  }
})
