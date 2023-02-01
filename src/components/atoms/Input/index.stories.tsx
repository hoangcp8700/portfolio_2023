import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Input from '.';

export default {
  title: 'Components/atoms/Input',
  component: Input,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    error: {
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
    sizes: {
      control: {
        type: 'select',
        options: ['md', 'lg'],
      },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ padding: 10 }}>
    <Input {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'input placeholder',
  onShowError: (value) => console.log('value', value),
};
