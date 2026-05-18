// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://chirag28121994.github.io',
  base: '/ycc-academy-website',
  vite: {
    plugins: [tailwindcss()]
  }
});