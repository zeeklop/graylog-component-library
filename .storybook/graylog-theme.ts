import { create } from '@storybook/theming';
import { theme } from '../src/components';

export default create({
  base: 'dark',
  brandTitle: 'Graylog Design System',
  brandUrl: 'https://graylog.org/',
  brandTarget: '_self',
  brandImage: '../src/assets/graylog-logo.png',

  fontBase: 'Poppins, sans-serif',
  fontCode: 'Roboto Mono, monospace',

  // colorPrimary: theme.colors?.blue ? theme.colors.blue[5] : '#1877EF',
  // colorSecondary: theme.colors?.red ? theme.colors.red[5] : '#FE4A49',

  // appBg: theme.colors?.gray ? theme.colors.gray[0] : '#F6F7FC',
  // appContentBg: '#ffffff',
  // appPreviewBg: theme.colors?.gray ? theme.colors.gray[0] : '#F6F7FC',
  // appBorderColor: theme.colors?.blue ? theme.colors.blue[5] : '#1877EF',
  // appBorderRadius: 4,
  //
  // textColor: theme.colors?.blue ? theme.colors.blue[5] : '#1877EF',
  // textInverseColor: '#252d4799',
  //
  // barTextColor: theme.colors?.gray ? theme.colors.gray[0] : '#F6F7FC',
  // barSelectedColor: theme.colors?.blue ? theme.colors.blue[5] : '#1877EF',
  // barHoverColor: theme.colors?.blue ? theme.colors.blue[3] : '#65A9FF',
  // barBg: theme.colors?.gray ? theme.colors.gray[0] : '#F6F7FC',
  //
  // inputBg: theme.colors?.gray ? theme.colors.gray[0] : '#F6F7FC',
  // inputBorder: theme.colors?.gray ? theme.colors.gray[8] : '#12182B',
  // inputTextColor: theme.colors?.blue ? theme.colors.blue[5] : '#1877EF',
  // inputBorderRadius: 2,
});
