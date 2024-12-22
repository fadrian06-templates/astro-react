// @ts-check
import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

const __dirname = new URL(".", import.meta.url).pathname;
const [, currentFolderName] = __dirname.split('/').reverse();

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: `/${currentFolderName}/`
});
