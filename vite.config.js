import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages serves this project below the repository name.
  base: '/wios-website-redesign/',
  plugins: [react()],
  build: {
    target: 'es2020',
    sourcemap: false,
  },
});
