import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '.';
import type { ButtonProps } from '.';

const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    docs: {
      toc: {
        contentsSelector: '.sbdocs-content',
        headingSelector: 'h3',
        ignoreSelector: '#primary',
        title: 'Variants',
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const Primary: Story = {
  name: 'Default',
  args: {
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
