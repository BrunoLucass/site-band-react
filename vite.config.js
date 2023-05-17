import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/getData': 'https://ws8oq594p3.execute-api.us-east-1.amazonaws.com',
    },
  },
})
