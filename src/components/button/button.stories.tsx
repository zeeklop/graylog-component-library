import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import type { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  name: 'Default',
  args: {
    variant: 'default',
    children: 'Button',
  },
};

export const Outline: Story = {
  name: 'Outline',
  args: {
    variant: 'outline',
    children: 'Button',
  },
};

export const Transparent: Story = {
  name: 'Transparent',
  args: {
    variant: 'transparent',
    children: 'Button',
  },
};
