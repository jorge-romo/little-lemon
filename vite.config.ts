import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

/**
 * @see https://vite.dev/config/
 */
export default defineConfig({
  plugins: [svgr(), react()],
  // base: "https://leonardojacomussi.github.io/little-lemon"
});
