import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Casting to any prevents the 'No overload matches this call' error
  plugins: [react(), tailwindcss() as any],
})