---
to: src/containers/<%= h.toPascalCase(name) %>/index.stories.tsx
---

import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import <%= h.toPascalCase(name) %>Container from '.';

export default {
  title: 'Containers/<%= h.toPascalCase(name) %>',
  component: <%= h.toPascalCase(name) %>Container,
  argTypes: {},
} as ComponentMeta<typeof <%= h.toPascalCase(name) %>Container>;

const Template: ComponentStory<typeof <%= h.toPascalCase(name) %>Container> = (args) => <<%= h.toPascalCase(name) %>Container {...args} />;

export const Primary = Template.bind({});
Primary.args = {};