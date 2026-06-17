import { createApp } from 'vinxi'; // Corrigido aqui
import tsconfigPaths from 'vite-tsconfig-paths';

export default createApp({ // Corrigido aqui
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
      handler: './index.html',
      target: 'browser',
      plugins: () => [tsconfigPaths()],
    },
  ],
});