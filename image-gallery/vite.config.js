import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'app',
  base: '/image-gallery/',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app/index.html'),
      },
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
  },
  publicDir: '../public',
});