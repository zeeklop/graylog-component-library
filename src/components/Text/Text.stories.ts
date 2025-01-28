import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';
import type { TextProps } from '.';

const meta: Meta<TextProps> = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
    },
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<TextProps>;

export const Paragraph: Story = {
  args: {
    variant: 'p',
    children: 'This is text to test this component',
  } satisfies TextProps,
};
