import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@components': resolve(__dirname, './src/components'),
      '@assets': resolve(__dirname, './src/assets'),
      '@hooks': resolve(__dirname, './src/hooks'),
      '@lib': resolve(__dirname, './src/lib')
    }
  },
  
  optimizeDeps: {
    include: ['@mui/material'],
    esbuildOptions: {
      // Increase the build timeout to 5 minutes (in milliseconds)
      loader: {
        '.js': 'jsx',
      },
    },
  },

  server: {
    host: true,
    port: 3000,
    hmr: {
      // Decrease HMR timeout to detect issues faster
      timeout: 30000,
      overlay: true,
    },
  },
  
  build: {
    sourcemap: true,
    target: 'es2020',
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks: {
          mui: ['@mui/material'],
        },
      },
    },
  },
})

