import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() ],
  base: './',
  build: {
    outDir:"./dist",
    minify: true,
    sourcemap: true,
    emptyOutDir:true,
  },
  server: {
    open: true, 
    host: "0.0.0.0",
    port: 8888,
    hmr:true
  }
})
