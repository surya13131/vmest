import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Adding 'as any' bypasses the type mismatch in the plugins array
  plugins: [react(), tailwindcss() as any],
})