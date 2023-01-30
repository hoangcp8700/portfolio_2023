import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HeroBanner from '.';

export default {
  title: 'Components/templates/HeroBanner',
  component: HeroBanner,
  argTypes: {},
} as ComponentMeta<typeof HeroBanner>;

const Template: ComponentStory<typeof HeroBanner> = (args) => <HeroBanner {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  title: 'Hoang',
  title2: 'Cong Phan',
  description: 'desc Hoang Cong phan',
};
