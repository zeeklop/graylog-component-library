import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export type ButtonActions = 'default' | 'primary' | 'danger' | 'secondary';
export type ButtonSizes = 'xs' | 'sm' | 'md';
export type ButtonVariants = 'filled' | 'light' | 'subtle';

export interface ButtonBase extends MantineButtonProps {
  children: React.ReactNode | string;
  onClick: () => void;
  size?: ButtonSizes;
  action?: ButtonActions;
}

export interface ButtonProps extends ButtonBase {
  variant?: ButtonVariants;
}
