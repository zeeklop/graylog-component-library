import type { Meta, StoryObj } from '@storybook/react';
import { Group } from '@mantine/core';

import { Button } from '.';
import type { ButtonProps } from './types';
import { Primary, Secondary, Danger, Default, Disabled } from './filled/filled.stories';

const meta: Meta<ButtonProps> = {
  title: 'Components/Buttons/FilledButtons',
  component: Button,
};

export default meta;
type Story = StoryObj<ButtonProps>;

export const FilledButtons: Story = {
  render: () => (
    <Group>
      <Button {...(Primary.args as ButtonProps)}>Primary</Button>
      <Button {...(Secondary.args as ButtonProps)}>Secondary</Button>
      <Button {...(Danger.args as ButtonProps)}>Danger</Button>
      <Button {...(Default.args as ButtonProps)}>Default</Button>
      <Button {...(Disabled.args as ButtonProps)}>Disabled</Button>
    </Group>
  ),
};

export const LightButtons: Story = {
  render: () => (
    <Group>
      <Button variant="light" {...(Primary.args as ButtonProps)}>
        Primary
      </Button>
      <Button variant="light" {...(Secondary.args as ButtonProps)}>
        Secondary
      </Button>
      <Button variant="light" {...(Danger.args as ButtonProps)}>
        Danger
      </Button>
      <Button variant="light" {...(Default.args as ButtonProps)}>
        Default
      </Button>
      <Button variant="light" {...(Disabled.args as ButtonProps)}>
        Disabled
      </Button>
    </Group>
  ),
};

export const ButtonSizes: Story = {
  render: () => (
    <>
      <Group align="flex-end">
        <Button size="md" action="primary" {...(Primary.args as ButtonProps)}>
          Medium
        </Button>
        <Button size="sm" action="primary" {...(Primary.args as ButtonProps)}>
          Small
        </Button>
        <Button size="xs" action="primary" {...(Primary.args as ButtonProps)}>
          Extra Small
        </Button>
      </Group>
      <br />
      <Group align="flex-start">
        <Button variant="light" size="md" action="primary" {...(Primary.args as ButtonProps)}>
          Medium
        </Button>
        <Button variant="light" size="sm" {...(Primary.args as ButtonProps)}>
          Small
        </Button>
        <Button variant="light" size="xs" {...(Primary.args as ButtonProps)}>
          Extra Small
        </Button>
      </Group>
    </>
  ),
};
