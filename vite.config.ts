import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    tailwindcss(),
    // TanStack Start replaces the standalone router plugin: it still generates
    // the route tree, but it also renders each route to real HTML at build
    // time. Crawlers never run JS, so the `head` tags have to already be in
    // the document they download.
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      sitemap: {
        enabled: true,
        host: 'https://klaw.build',
      },
    }),
    viteReact(),
  ],
})

export default config
