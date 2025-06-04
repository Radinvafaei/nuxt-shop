import type { ThemeConfig } from 'tailwindcss/types/config';

const theme: Partial<ThemeConfig> = {
  colors: {
    pink: {
      700: `#E20054`,
      400: `#F180A9`,
      100: `#FCE5EE`,
    },
    gray: {
      0: `#FFFFFF`,
      50: `#F5F7FA`,
      100: `#F8F9FC`,
      200: `#E9EDF5`,
      250: `#B2C2D6`,
      300: `#D1DBE8`,
      500: `#647E9A`,
      700: `#445A74`,
      800: `#344456`,
    },
    blue: {
      200: `#99D1FF`,
      900: `#0A2A51`,
      800: `#141928`,
      700: `#253343`,
      600: `#30445B`,
      400: `#57728E`,
      300: `#6783A0`,
    },
    green: {
      50: `#E6F9F4`,
    },
  },
};

export default theme;
