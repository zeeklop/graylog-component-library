import type { Meta, StoryObj } from '@storybook/react';

import { ButtonLight } from '.';
import type { ButtonBase } from '../types.d';

const meta: Meta<ButtonBase> = {
  title: 'Components/Buttons/Light',
  component: ButtonLight,
  tags: ['autodocs'],
  args: {
    action: 'default',
    size: 'sm',
    children: 'Button',
  },
  parameters: {
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h3',
        title: 'Actions',
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonBase>;

export const Default: Story = {};

export const Disable: Story = {
  args: {
    disabled: true,
  },
};

export const Primary: Story = {
  args: {
    action: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    action: 'secondary',
  },
};

export const Danger: Story = {
  args: {
    action: 'danger',
  },
};
