import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify/edge-functions';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: netlify()
});
