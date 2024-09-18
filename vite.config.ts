import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Permite el acceso desde la red local
    port: 3000,       // Puedes cambiar este puerto si lo necesitas
    strictPort: true, // Si el puerto 3000 está ocupado, no intentará otro
  },
});