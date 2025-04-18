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

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const DefaultPrimary: Story = {
  args: {
    primary: true,
    children: 'Button',
  },
};

export const Light: Story = {
  args: {
    variant: 'light',
    children: 'Button',
  },
};

export const LightPrimary: Story = {
  args: {
    primary: true,
    variant: 'light',
    children: 'Button',
  },
};

export const Subtle: Story = {
  args: {
    variant: 'subtle',
    children: 'Button',
  },
};

export const SubtlePrimary: Story = {
  args: {
    primary: true,
    variant: 'subtle',
    children: 'Button',
  },
};
