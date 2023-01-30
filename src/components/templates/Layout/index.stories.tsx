import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Layout from '.';

export default {
  title: 'Components/templates/Layout',
  component: Layout,
  argTypes: {},
} as ComponentMeta<typeof Layout>;

const Template: ComponentStory<typeof Layout> = (args) => (
  <div style={{ minHeight: '100vh' }}>
    <Layout {...args} />
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};
