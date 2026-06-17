import { createApp } from 'vinxi';
import tsconfigPaths from 'vite-tsconfig-paths';

export default createApp({
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
      handler: './src/routes/index.tsx', // Seu ponto de entrada
      target: 'browser',
      plugins: () => [tsconfigPaths()],
    },
  ],
});