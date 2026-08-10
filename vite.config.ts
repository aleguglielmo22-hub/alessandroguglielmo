import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// `base` deve corrispondere al nome del repository GitHub Pages.
// Sito su dominio proprio (o repo <user>.github.io)? Imposta base: '/'.
export default defineConfig({
  base: '/alessandroguglielmo/',
  plugins: [react(), tailwindcss()],
})
