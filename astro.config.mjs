import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  // Replace with the actual paid domain once bought (e.g., 'https://yccacademy.in')
  site: 'https://yccacademy.in',
  base: '/',
  output: 'static', // Forces pure static generation
  integrations: [tailwind()],
});