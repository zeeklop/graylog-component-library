import '@mantine/core/styles.css';

import { ThemeProvider } from '../src/components';
import { Decorator } from '@storybook/react';

export const withGraylogTheme: Decorator = Story => (
  <ThemeProvider>
    <Story />
  </ThemeProvider>
);
