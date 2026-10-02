import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages project site: https://redjadet.github.io/react-web-portfolio/
export default defineConfig({
  plugins: [react()],
  base: '/react-web-portfolio/',
})
