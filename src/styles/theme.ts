import { createTheme, rem } from '@mantine/core';

export const theme = createTheme({
  black: '#282a36',
  white: '#f8f8f2',
  colors: {
    // Add your color
    deepBlue: [
      '#eef3ff',
      '#dce4f5',
      '#b9c7e2',
      '#94a8d0',
      '#748dc1',
      '#5f7cb8',
      '#5474b4',
      '#44639f',
      '#39588f',
      '#2d4b81',
    ],
  },

  defaultGradient: {
    from: 'blue',
    to: 'violet',
    deg: 45,
  },

  headings: {
    fontFamily: 'Roboto, sans-serif',
    sizes: {
      h1: { fontSize: rem(36) },
    },
  },

  primaryColor: 'deepBlue',
  primaryShade: 5,

  shadows: {
    md: '1px 1px 3px rgba(0, 0, 0, .25)',
    xl: '5px 5px 3px rgba(0, 0, 0, .25)',
  },
});
