// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // КРИТИЧЕСКИ ВАЖНЫЕ НАСТРОЙКИ ДЛЯ GITHUB PAGES
  site: 'https://tema4647.github.io',
  base: '/backup',
  
  // ВАШИ ТЕКУЩИЕ НАСТРОЙКИ
  output: "static",
  vite: {
    build: {
      minify: false,
      sourcemap: false,
      assetsInlineLimit: 0,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          assetFileNames: "styles/style.css",
          entryFileNames: "scripts/script.js",
        },
      },
    },
  },
});
