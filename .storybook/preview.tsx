import React, { useEffect } from 'react';
import { addons } from '@storybook/preview-api';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';
import { useMantineColorScheme } from '@mantine/core';
import { withMantineThemes } from 'storybook-addon-mantine';
import type { Preview } from '@storybook/react';

import '../assets/fonts/Poppins/Poppins.css';
import '../assets/fonts/Roboto_Mono/Roboto.css';

import '../lib/graylog-components-library.css';
import { theme } from '../src/ThemeProvider';

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
  (renderStory: any) => (
    <ColorSchemeWrapper>{renderStory()}</ColorSchemeWrapper>
  ),
  withMantineThemes({
    themes: [
      { id: 'brand-theme', name: 'Brand Theme', ...theme },
    ],
  }),
];

const preview: Preview = {
  decorators: [ ...decorators ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
