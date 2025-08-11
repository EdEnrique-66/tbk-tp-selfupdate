import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom', // Configura el entorno de pruebas para simular un navegador
    globals: true, // Permite usar funciones de Vitest (como `describe`, `it`, `expect`) sin importarlas
    setupFiles: './src/setupTests.js' 
  },
});