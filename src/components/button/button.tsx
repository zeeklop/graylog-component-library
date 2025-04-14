import React from 'react';
import { Button as MantineButton } from '@mantine/core';
import type { ButtonProps as MantineButtonProps } from '@mantine/core';

const VARIANT_MAP = {
  default: 'filled',
  outline: 'outline',
  transparent: 'transparent',
};

export interface ButtonProps extends MantineButtonProps {
  variant?: 'default' | 'outline' | 'transparent';
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({
  variant = 'default',
  onClick,
  children,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <MantineButton onClick={onClick} variant={VARIANT_MAP[variant]} {...props}>
      {children}
    </MantineButton>
  );
}
