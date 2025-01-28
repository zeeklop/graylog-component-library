import React, { useEffect } from 'react';
import '@mantine/core/styles.css';
import { useMantineColorScheme } from '@mantine/core';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import type { Preview } from '@storybook/react';

import '../assets/fonts/Poppins/Poppins.css';
import '../assets/fonts/Roboto_Mono/Roboto.css';

import { ThemeProvider } from '../src/ThemeProvider';

const channel = addons.getChannel();

export const parameters = {
  layout: 'fullscreen',
  options: {
    showPanel: false,
  },
};

function ColorSchemeWrapper({ children }: { children: React.ReactNode }) {
  const { setColorScheme } = useMantineColorScheme();
  const handleColorScheme = (value: boolean) => setColorScheme(value ? 'dark': 'light');

  useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, handleColorScheme);
    return () => channel.off(DARK_MODE_EVENT_NAME, handleColorScheme);
  }, [channel]);

  return <>{children}</>;
}

export const decorators = [
  (renderStory: any) => <ThemeProvider><ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper></ThemeProvider>,
];

const preview: Preview = {};

export default preview;
