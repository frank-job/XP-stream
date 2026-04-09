import { sign } from 'crypto';
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        action: resolve(__dirname, 'genres/action/index.html'),
        horror: resolve(__dirname, 'genres/horror/index.html'),
        comedy: resolve(__dirname, 'genres/comedy/index.html'),
        
      
      },
    },
  },
});