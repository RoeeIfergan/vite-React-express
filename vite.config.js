import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    manifest: true,
    outDir: 'build',
    rollupOptions: {
      input: './src/main.jsx',
      }
    },
  server: {
    port: 4000,
  }
})
