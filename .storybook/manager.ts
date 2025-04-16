import { addons } from '@storybook/manager-api';
import graylogTheme from './graylog-theme';

addons.setConfig({
  theme: graylogTheme,
});
