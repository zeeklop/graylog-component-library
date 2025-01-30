import type { Meta, StoryObj } from '@storybook/react';

import { Text } from '.';
import type { TextProps } from '.';

const meta: Meta<TextProps> = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Set the text size using one of the values default to `md`',
    },
    component: {
      description: 'Define what html element should be rendered',
    },
    ta: {
      control: { type: 'radio' },
      options: ['left', 'center', 'right'],
      description: 'Set text alignment',
    },
    fw: {
      control: { type: 'radio' },
      options: ['lighter', 'normal', 'bold'],
      description: 'Set font weight directly on the component',
    },
    href: {
      description: 'When component is a link `a` href can be set with a URL value'
    }
  },
  excludeStories: /.*Data$/,
  args: {
    ...Text,
    children: 'This is text to test this component',
  },
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: {
    size: 'md',
  },
};

export const Link: Story = {
  args: {
    size: 'md',
    component: 'a',
    href: "#",
    document: '_blank',
    td: 'underline',
    c: 'blue',
  },
};

export const Span: Story = {
  args: {
    component: 'span',
    size: 'md',
  },
};
