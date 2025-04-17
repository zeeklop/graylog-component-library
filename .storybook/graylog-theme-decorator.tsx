import '../dist/graylog-design-system.css';

import { ThemeProvider } from '../src/components';
import { Decorator } from '@storybook/react';
import { useDarkMode } from 'storybook-dark-mode';

export const withGraylogTheme: Decorator = Story => (
  <ThemeProvider colorScheme={useDarkMode() ? 'dark' : 'light'}>
    <Story />
  </ThemeProvider>
);
