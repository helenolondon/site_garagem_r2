import { defineConfig } from 'vinxi';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
      base: '/',
    },
    {
      name: 'client',
      type: 'spa',
      handler: './src/routes/index.tsx', // Ponto de entrada das suas rotas
      target: 'browser',
      plugins: () => [tsconfigPaths()],
    },
  ],
});