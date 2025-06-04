import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import { defineNuxtConfig } from 'nuxt/config';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  workspaceDir: `../../`,
  srcDir: `src`,
  devtools: { enabled: true },
  css: [`../../libs/theme/src/global.css`],
  modules: [`@nuxt/image-edge`],
  plugins: [`./src/plugins/vue-query.ts`],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  devServer: {
    host: `localhost`,
    port: 4200,
  },
  typescript: {
    typeCheck: true,
    tsConfig: {
      extends: `./tsconfig.app.json`,
    },
  },
  imports: {
    autoImport: true,
  },
  vite: {
    plugins: [nxViteTsPaths()],
  },
});
