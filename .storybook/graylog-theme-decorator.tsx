import '../dist/graylog-design-system.css';

import { ThemeProvider } from '../src/components';
import { Decorator } from '@storybook/react';
import type { GlobalTypes } from 'storybook/internal/types';

export const themeSwitch: GlobalTypes = {
  theme: {
    toolbar: {
      icon: 'mirror',
      dynamicTitle: true,
      items: [
        { value: 'light', title: 'Light', icon: 'sun' },
        { value: 'dark', title: 'Dark', icon: 'moon' },
      ],
      defaultValue: 'light',
    },
  },
};

export const withGraylogTheme: Decorator = (Story, context) => {
  const { theme } = context.globals;
  window.localStorage.setItem('themeMode', theme as string);

  return (
    <ThemeProvider colorScheme={theme as string}>
      <Story />
    </ThemeProvider>
  );
};
