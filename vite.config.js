import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react()
  ],
  base: "https://paranoiidandroid.github.io/prueba-react-tailwind/",
  resolve: {
    alias: {
      '@': path.resolve('src'), // Cambiado __dirname a la ruta relativa
    },
  },
})
