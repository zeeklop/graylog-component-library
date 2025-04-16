import { create } from '@storybook/theming';

export default create({
  base: 'light',
  brandTitle: 'Graylog Design System',
  brandUrl: 'https://graylog.org/',
  brandTarget: '_self',
  brandImage: '../src/assets/graylog-logo.png',

  fontBase: 'Poppins, sans-serif',
  fontCode: '"Roboto Mono", monospace',

  colorPrimary: '#03C2FF',
  colorSecondary: '#9A6BFE',

  appBg: '#F6F7FC',
  appContentBg: '#FFFFFF',
  appPreviewBg: '#F6F7FC',
  appBorderColor: '#E1E4ED',
  appBorderRadius: 4,

  textColor: '#252D47',
  textInverseColor: '#252D478A',

  barTextColor: '#252D47',
  barSelectedColor: '#03C2FF',
  barHoverColor: '#03C2FF',
  barBg: '#F6F7FC',

  inputBg: '#F6F7FC',
  inputBorder: '#12182B',
  inputTextColor: '#252D47',
  inputBorderRadius: 2,
});
