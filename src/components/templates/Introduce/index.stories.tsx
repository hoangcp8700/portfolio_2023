import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Introduce from '.';

export default {
  title: 'Components/templates/Introduce',
  component: Introduce,
  argTypes: {},
} as ComponentMeta<typeof Introduce>;

const Template: ComponentStory<typeof Introduce> = (args) => <Introduce {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
