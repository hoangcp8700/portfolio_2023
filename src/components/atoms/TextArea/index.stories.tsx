import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextArea from '.';

export default {
  title: 'Components/atoms/TextArea',
  component: TextArea,
  argTypes: {
    label: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    labelClass: {
      control: {
        type: 'text',
      },
      defaultValue: 'Label',
    },
    rows: {
      control: {
        type: 'text',
      },
      defaultValue: '4',
    },
    disabled: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
      defaultValue: false,
    },
    required: {
      control: {
        type: 'boolean',
        options: [false, true],
      },
      defaultValue: false,
    },
    placeholder: {
      control: {
        type: 'text',
      },
      defaultValue: 'Dummy text',
    },
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
