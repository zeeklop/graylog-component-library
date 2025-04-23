import React from 'react';

import { Button as MantineButton } from '@mantine/core';
import type { ButtonBase } from '../types.d';
import classes from './filled.module.css';

export function ButtonFilled({
  onClick,
  children,
  size = 'sm',
  action = 'default',
  ...props
}: ButtonBase): React.ReactElement<ButtonBase> {
  return (
    <MantineButton
      onClick={onClick}
      size={size}
      variant="filled"
      data-action={action}
      classNames={classes}
      {...props}
    >
      {children}
    </MantineButton>
  );
}
