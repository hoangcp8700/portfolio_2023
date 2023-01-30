import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Image from '.';

export default {
  title: 'Components/atoms/Image',
  component: Image,
  argTypes: {
    ratio: {
      control: {
        type: 'text',
      },
      defaultValue: 'aspect-w-1 aspect-h-1',
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => (
  <div style={{ maxWidth: 500 }}>
    <Image {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {
  src: 'https://picsum.photos/200/300',
};
