import { createApp } from 'vinxi';
import tsconfigPaths from 'vite-tsconfig-paths';

export default createApp({
  routers: [
    {
      name: 'client',
      type: 'client', // Mudamos de 'spa' para 'client' para ele não exigir o index.html na raiz
      handler: './src/routes/index.tsx', // Ponto de entrada real do seu app Lovable
      target: 'browser',
      plugins: () => [tsconfigPaths()],
    },
  ],
});