import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {
  return {
    base: './',
    plugins: [], 
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
