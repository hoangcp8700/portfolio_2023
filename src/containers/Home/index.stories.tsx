import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Home from '.';

export default {
  title: 'Containers/Home',
  component: Home,
  argTypes: {},
} as ComponentMeta<typeof Home>;

const Template: ComponentStory<typeof Home> = (args) => <Home {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
