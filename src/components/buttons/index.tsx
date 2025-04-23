import React from 'react';
import type { ButtonProps } from './types.d';
import { ButtonFilled } from './filled';
import { ButtonLight } from './light';

export function Button({
  onClick,
  children,
  size = 'sm',
  action = 'default',
  variant = 'filled',
  ...props
}: ButtonProps): React.ReactElement<ButtonProps> {
  if (variant === 'light') {
    return (
      <ButtonLight onClick={onClick} size={size} action={action} {...props}>
        {children}
      </ButtonLight>
    );
  }

  return (
    <ButtonFilled onClick={onClick} size={size} action={action} {...props}>
      {children}
    </ButtonFilled>
  );
}
