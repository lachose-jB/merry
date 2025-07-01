import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { createHtmlPlugin } from 'vite-plugin-html'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createHtmlPlugin({
      inject: {
        tags: [
          {
            tag: 'meta',
            attrs: {
              'http-equiv': 'Content-Security-Policy',
              content: "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; object-src 'none';"
            },
            injectTo: 'head'
          },
          {
            tag: 'meta',
            attrs: {
              'http-equiv': 'X-Content-Type-Options',
              content: 'nosniff'
            },
            injectTo: 'head'
          },
          {
            tag: 'meta',
            attrs: {
              'http-equiv': 'X-Frame-Options',
              content: 'DENY'
            },
            injectTo: 'head'
          }
        ]
      }
    })
  ]
})
