import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://westdata.lol',
  trailingSlash: 'always',
  build: {
    format: 'directory'
  }
});
