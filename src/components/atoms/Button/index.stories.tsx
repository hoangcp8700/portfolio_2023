import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from '.';

export default {
  title: 'Components/atoms/Button',
  component: Button,
  argTypes: {
    loading: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    variants: {
      control: {
        type: 'select',
        options: ['default', 'primary', 'secondary', 'outlined', 'contained', 'dot'],
      },
      defaultValue: 'outlined',
    },
    size: {
      control: {
        type: 'select',
        options: ['default', 'md', 'lg'],
      },
      defaultValue: 'default',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>button</Button>;

export const Primary = Template.bind({});
Primary.args = {};
