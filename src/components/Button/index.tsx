import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export interface ButtonProps extends MantineButtonProps {
  onClick: () => void,
  children: React.ReactNode,
};

export function Button({ children, ...props }: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <MantineButton {...props}>{children}</MantineButton>
  );
}
