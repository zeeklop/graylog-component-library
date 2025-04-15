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
  size?: 'xs' | 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick: () => void;
}

export function Button({
  variant = 'default',
  size = 'md',
  onClick,
  children,
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  return (
    <MantineButton onClick={onClick} size={size} variant={VARIANT_MAP[variant]} {...props}>
      {children}
    </MantineButton>
  );
}
