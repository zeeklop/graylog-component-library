import { create } from '@storybook/theming';
// import { theme } from '../src/ThemeProvider';

export default create({
  base: 'dark',
  brandTitle: 'Graylog Design System',
  brandUrl: 'https://graylog.org',
  brandTarget: '_self',

  // fontBase: theme.fontFamily,
  // fontCode: theme.fontFamilyMonospace,
  //
  // colorPrimary: theme.colors?.blue ? theme.colors.blue[5] : undefined,
  // colorSecondary: theme.colors?.gray ? theme.colors.gray[5] : undefined,
  // appBg: theme.colors?.gray ? theme.colors.gray[8] : undefined,
});
