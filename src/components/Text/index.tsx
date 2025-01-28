import React from 'react';
import { Text as MantineText } from '@mantine/core';
import type { TextProps as MantineTextProps } from '@mantine/core';

export interface TextProps extends MantineTextProps {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';
  children: React.ReactNode;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

export function Text({ variant, size = 'sm', children, ...props }: TextProps): React.ReactElement<TextProps> {
  return <MantineText component={variant} size={size} {...props}>{children}</MantineText>;
}
