import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' hace que los assets se resuelvan de forma relativa,
// compatible tanto con kabatasoft.github.io/website como con dominio propio
export default defineConfig({
  base: './',
  plugins: [react()],
})
