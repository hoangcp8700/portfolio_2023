import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from '.';

export default {
  title: 'Components/atoms/TextArea',
  component: TextArea,
  argTypes: {
    rows: {
      control: {
        type: 'text',
      },
      defaultValue: '4',
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    variants: {
      control: {
        type: 'select',
        options: ['', 'contained', 'rounded'],
      },
      defaultValue: '',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'textarea placeholder',
  onShowError: (value) => console.log('value', value),
};
