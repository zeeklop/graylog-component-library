import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps } from './types.d';

export function Button({
  primary = false,
  variant = 'filled',
  size = 'sm',
  onClick,
  children,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <MantineButton
      onClick={onClick}
      size={size}
      variant={variant}
      color={primary ? 'blue' : 'gray'}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
