const { createGlobPatternsForDependencies } = require(`@nx/vue/tailwind`);
const { join } = require(`path`);
const theme = require(`../../libs/theme/src/theme`);
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(__dirname, `src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}`),
    `../../libs/ui/src/**/*!(*.stories|*.spec).{vue,ts,tsx,js,jsx}`,
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    extend: { ...theme.default },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(sm|md|lg|xl|2xl):bg-pink-700/,
    },
    {
      pattern: /(sm|md|lg|xl|2xl):text-white/,
    },
    {
      pattern: /(sm|md|lg|xl|2xl):border-gray-200/,
    },
    {
      pattern: /(sm|md|lg|xl|2xl):border-pink-700/,
    },
    {
      pattern: /border-\[1\.5px\]/,
    },
  ],
};
