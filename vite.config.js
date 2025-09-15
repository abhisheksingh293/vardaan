import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  
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
    // Increase the build timeout to 5 minutes (in milliseconds)
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

