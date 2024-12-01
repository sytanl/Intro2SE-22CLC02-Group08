import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  server: {
      host: true, 
      port: 5173,
      cors: true,
  },
  plugins: [react()],
});

