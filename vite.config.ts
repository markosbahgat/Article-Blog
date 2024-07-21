import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  // resolve: {
  //   alias: {'src/': './src/'},
  // },
  plugins: [react(), tsconfigPaths(), svgr()],
});
