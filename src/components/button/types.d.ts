import type { ButtonProps as MantineButtonProps } from '@mantine/core';

export type ButtonVariants = 'filled' | 'light' | 'subtle';
export type ButonSizesType = 'xs' | 'sm' | 'md' | 'lg';

export interface ButtonProps extends MantineButtonProps {
  primary?: boolean;
  variant?: ButtonVariants;
  size?: ButonSizesType;
  children: React.ReactNode;
  onClick: () => void;
}
