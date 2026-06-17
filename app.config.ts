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
      handler: './index.html', // Vincula o HTML base que criamos
      target: 'browser',
      plugins: () => [tsconfigPaths()],
    },
  ],
});