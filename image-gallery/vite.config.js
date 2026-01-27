import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'app',
  base: '/rolling-scopes-school-JS-FE-Pre-School-2024Q2/image-gallery/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app/index.html'),
      },
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: '../public',
});
