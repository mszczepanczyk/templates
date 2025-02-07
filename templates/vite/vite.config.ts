import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react({ include: /\.(mdx|js|jsx|ts|tsx)$/ })],
  // optimizeDeps: {
  //   force: true,
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //     },
  //   },
  // },
});
