import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '.';
import type { ButtonProps } from '.';

const meta = {
  title: 'Button',
  component: Button,
  // parameters: { layout: 'centered' },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['filled', 'light', 'outline', 'transparent', 'white', 'subtle', 'default', 'gradient'],
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
} satisfies Meta<ButtonProps>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
    onClick: fn(),
  } satisfies ButtonProps,
};
