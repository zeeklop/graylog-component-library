import { createTheme } from '@mantine/core';
import type { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = createTheme({
  focusRing: 'auto',
  colors: {
    gray: [
      '#F6F7FC',
      '#E1E4ED',
      '#C1C7DC',
      '#6F768F',
      '#394261',
      '#252D47',
      '#232B43',
      '#1C2235',
      '#12182B',
      '#060C1F',
    ],
    blue: [
      '#D9EBFF',
      '#ADD0FF',
      '#7FB8FF',
      '#65A9FF',
      '#4396FF',
      '#1877EF',
      '#1064CD',
      '#0C50A5',
      '#083772',
      '#032551',
    ],
    green: [
      '#E1FFF4',
      '#ACFFE0',
      '#69F9C3',
      '#62F3BC',
      '#45E5A8',
      '#2ECA8F',
      '#22B07A',
      '#1A9869',
      '#128057',
      '#094F35',
    ],
    yellow: [
      '#FFF6E6',
      '#FFE4B0',
      '#FFD78A',
      '#FFC554',
      '#FFB933',
      '#FFA800',
      '#E89900',
      '#B57700',
      '#8C5C00',
      '#6B4700',
    ],
    red: [
      '#FFEDED',
      '#FFC7C7',
      '#FFACAB',
      '#FE8685',
      '#FE6E6D',
      '#FE4A49',
      '#E74342',
      '#B43534',
      '#8C2928',
      '#6B1F1F',
    ],
    cyan: [
      '#EBFAFF',
      '#C2F0FF',
      '#85E0FF',
      '#47D1FF',
      '#1FC7FF',
      '#03C2FF',
      '#00A8E0',
      '#008AB8',
      '#006B8F',
      '#003D52',
    ],
    violet: [
      '#F5F0FF',
      '#E8DDFF',
      '#D9C7FF',
      '#CEB7FF',
      '#BA9AFF',
      '#9A6BFE',
      '#8C61E7',
      '#6D4CB4',
      '#553B8C',
      '#412D6B',
    ],
    dark: [
      '#F6F7FC',
      '#E1E4ED',
      '#C1C7DC',
      '#6F768F',
      '#394261',
      '#252D47',
      '#232B43',
      '#1C2235',
      '#12182B',
      '#060C1F',
    ],
  },
  primaryColor: 'blue',
  primaryShade: { light: 5, dark: 6 },
  white: '#FFFFFF',
  black: '#12182B',
  autoContrast: true,
  fontFamily: '"Poppins", Consolas, Arial, sans-serif',
  fontFamilyMonospace: '"Roboto Mono", Consolas, monospace',
  cursorType: 'pointer',
  headings: {
    fontFamily: '"Poppins", Consolas, Arial, sans-serif',
  },
});
