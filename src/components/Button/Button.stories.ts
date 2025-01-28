import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';
import type { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Button',
  component: Button,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'outline', 'transparent'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl']
    },
  },
  args: {
    onClick: fn(),
    disabled: false,
    loading: false,
    fullWidth: false,
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Filled: Story = {
  args: {
    variant: 'default',
    children: 'Button',
    onClick: fn(),
  } satisfies ButtonProps,
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Button',
    onClick: fn(),
  } satisfies ButtonProps,
};

export const Transparent: Story = {
  args: {
    variant: 'transparent',
    children: 'Button',
    onClick: fn(),
  } satisfies ButtonProps,
};
