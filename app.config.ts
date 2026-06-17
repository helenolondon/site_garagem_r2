import { createApp } from 'vinxi';
import tsconfigPaths from 'vite-tsconfig-paths';

export default createApp({
  routers: [
    {
      name: 'client',
      type: 'client', // Mudamos para 'client' para ele não injetar proxies de SPA
      handler: './src/router.tsx', // Aponta direto para o seu roteador principal
      target: 'browser',
      plugins: () => [tsconfigPaths()],
    },
  ],
});