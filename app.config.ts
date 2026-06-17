import { defineConfig } from '@tanstack/router-plugin/vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  vite: {
    plugins: [
      tsconfigPaths(),
    ],
  },
});