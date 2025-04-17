import type { Preview } from '@storybook/react';

import { withGraylogTheme } from './graylog-theme-decorator';
import { lightTheme, darkTheme } from './graylog-theme';
import { docsContainer } from './graylog-docs-container';

export const decorators = [withGraylogTheme];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    darkMode: {
      dark: darkTheme,
      light: lightTheme,
      current: 'dark',
      stylePreview: true,
    },
    docs: {
      container: docsContainer,
    },
  },
};

export default preview;
