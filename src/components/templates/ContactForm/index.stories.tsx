import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ContactForm from '.';

export default {
  title: 'Components/templates/ContactForm',
  component: ContactForm,
  argTypes: {},
} as ComponentMeta<typeof ContactForm>;

const Template: ComponentStory<typeof ContactForm> = (args) => <ContactForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
