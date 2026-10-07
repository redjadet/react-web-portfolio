import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages user site: https://redjadet.github.io/
export default defineConfig({
  plugins: [react()],
  base: '/',
})
