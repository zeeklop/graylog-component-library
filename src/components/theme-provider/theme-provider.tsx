import React from 'react';

import {
  MantineProvider,
  localStorageColorSchemeManager,
  useMantineColorScheme,
} from '@mantine/core';
import type { MantineColorScheme } from '@mantine/core';

import { theme } from './theme';

const ColorSchemeSetter = ({ colorScheme }: { colorScheme: string }) => {
  const { setColorScheme } = useMantineColorScheme();

  React.useEffect(
    () => setColorScheme(colorScheme as MantineColorScheme),
    [colorScheme, setColorScheme],
  );

  return null;
};

const colorSchemeManager = localStorageColorSchemeManager({ key: 'themeMode' });

export interface ThemeProviderProps {
  colorScheme?: string;
  children: React.ReactNode;
}

export function ThemeProvider({ children, colorScheme = 'light' }: ThemeProviderProps) {
  return (
    <MantineProvider
      theme={theme}
      colorSchemeManager={colorSchemeManager}
      defaultColorScheme="light"
    >
      <ColorSchemeSetter colorScheme={colorScheme} />
      {children}
    </MantineProvider>
  );
}
