import React from 'react';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';

import { theme } from './theme';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'themeMode' });

export interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      {children}
    </MantineProvider>
  );
}
