import { withGraylogTheme } from './graylog-theme-decorator';
import type { Preview } from '@storybook/react';

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
