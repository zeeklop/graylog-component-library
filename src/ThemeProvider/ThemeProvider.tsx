import React from 'react';
import { MantineProvider, localStorageColorSchemeManager } from '@mantine/core';

import { theme } from './theme';

const colorSchemeManager = localStorageColorSchemeManager({ key: 'themeMode' });

interface Props {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <MantineProvider theme={theme} colorSchemeManager={colorSchemeManager} defaultColorScheme="light">
      {children}
    </MantineProvider>
  );
}
