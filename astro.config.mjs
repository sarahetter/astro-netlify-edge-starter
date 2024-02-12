import { defineConfig } from 'astro/config';
import netlify from "@astrojs/netlify/functions";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: netlify({
    edgeMiddleware: true
  }),
  output: 'server'
});
