import { withGraylogTheme, themeSwitch } from './graylog-theme-decorator';
import type { Preview } from '@storybook/react';
import type { GlobalTypes } from 'storybook/internal/types';

export const globalTypes: GlobalTypes = {
  ...themeSwitch,
};

export const decorators = [withGraylogTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
