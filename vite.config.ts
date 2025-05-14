import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        telegram: resolve(__dirname, 'telegram/index.html'),
        vk: resolve(__dirname, 'vk/index.html')
      }
    },
    sourcemap: true,
    target: 'esnext',
    minify: 'esbuild'
  },
  server: {
    port: 5173,
    host: true,
    strictPort: true
  },
  preview: {
    port: 4173,
    host: true,
    strictPort: true
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
  }
});