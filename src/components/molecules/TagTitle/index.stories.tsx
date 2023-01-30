import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import TagTitle from '.';

export default {
  title: 'Components/molecules/TagTitle',
  component: TagTitle,
  argTypes: {},
} as ComponentMeta<typeof TagTitle>;

const Template: ComponentStory<typeof TagTitle> = (args) => <TagTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: 'Introduce',
  href: '#introduce',
};
