import { sign } from 'crypto';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
     input: {
  main: resolve(__dirname, 'index.html'),
  horror: resolve(__dirname, 'genres/horror/index.html'),
  comedy: resolve(__dirname, 'genres/comedy/index.html'),
  watchlist: resolve(__dirname, 'genres/watchlist/index.html'), // ADD THIS

      
      },
    },
  },
});