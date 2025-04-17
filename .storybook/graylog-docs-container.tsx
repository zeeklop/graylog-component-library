import React from 'react';

import { addons } from '@storybook/preview-api';
import { DocsContainer } from '@storybook/addon-docs';
import type { DocsContainerProps } from '@storybook/addon-docs';
import { DARK_MODE_EVENT_NAME, UPDATE_DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

import { lightTheme, darkTheme } from './graylog-theme';
import { ThemeProvider } from '../src/components';

const channel = addons.getChannel();

export function docsContainer(props: DocsContainerProps) {
  const [isDark, setDark] = React.useState();

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, setDark);
    return () => channel.removeListener(DARK_MODE_EVENT_NAME, setDark);
  }, []);

  return (
    <ThemeProvider colorScheme={isDark ? 'dark' : 'light'}>
      <DocsContainer {...props} theme={isDark ? darkTheme : lightTheme} />
    </ThemeProvider>
  );
}
