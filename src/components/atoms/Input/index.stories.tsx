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
    // size: {
    //   control: {
    //     type: 'select',
    //     options: ['default', 'md', 'lg'],
    //   },
    //   defaultValue: 'default',
    // },
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
};
