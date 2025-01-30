import React from 'react';
import { Text as MantineText } from '@mantine/core';
import type { TextFactory as MantineTextProps, ElementProps, PolymorphicComponentProps } from '@mantine/core';

export type TextProps = PolymorphicComponentProps<any, ElementProps<any, keyof MantineTextProps>> & {
  children: React.ReactNode;
};

export function Text({children, ...props }: TextProps): React.ReactElement<TextProps> {
  return <MantineText {...props}>{children}</MantineText>;
}
