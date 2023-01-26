import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Typography from '.';

export default {
  title: 'Components/atoms/Typography',
  component: Typography,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      defaultValue: 'Dummy text',
    },
    className: {
      control: {
        type: 'text',
      },
      defaultValue: 'text-red-500',
    },
    type: {
      control: {
        type: 'radio',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span', 'div'],
      },
      defaultValue: 'h2',
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => <Typography {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
