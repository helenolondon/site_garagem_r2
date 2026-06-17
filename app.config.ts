import { createApp } from 'vinxi';
import tsconfigPaths from 'vite-tsconfig-paths';

export default createApp({
  routers: [
    {
      name: 'client',
      type: 'spa',
      handler: './index.html',
      plugins: () => [tsconfigPaths()],
    },
  ],
});