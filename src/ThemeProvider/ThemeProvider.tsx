import React from 'react';
import { MantineProvider } from '@mantine/core';
import { theme } from '../theme';

interface Props {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  return (
    <MantineProvider theme={theme} defaultColorScheme="auto">
      {children}
    </MantineProvider>
  );
}
