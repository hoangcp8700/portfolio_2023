import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VALIDATE_SCHEMA from '@utils/schemas';

import Form from '.';

export default {
  title: 'Components/molecules/Form',
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = (args) => (
  <Form {...args}>
    <Form.FormControl
      name='first_name'
      className='hidden'
      render={({ field }) => (
        <>
          <Form.FieldLabel name='first_name' label='First Name' />
          <input {...field} />
        </>
      )}
    />
    <Form.FormControl
      name='last_name'
      className='hidden'
      render={({ field }) => (
        <>
          <Form.FieldLabel name='first_name' label='Last Name' required />
          <input {...field} />
        </>
      )}
    />
    <Form.FieldSubmit>submit form</Form.FieldSubmit>
  </Form>
);

export const FormDefault = Template.bind({});
FormDefault.args = {
  validateSchema: VALIDATE_SCHEMA.AUTH.TEST_SCHEMA,
  defaultValues: { first_name: '', last_name: '' },
  onSubmit: async (values, defaultValues, formState, formHandlers) => {
    console.log('submit form', values, defaultValues, formState, formHandlers);
  },
};
