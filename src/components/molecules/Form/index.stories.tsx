import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import VALIDATE_SCHEMA from '@utils/schemas';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

import Form from '.';

export default {
  title: 'Components/molecules/Form',
  component: Form,
  argTypes: {},
} as ComponentMeta<typeof Form>;

const Template: ComponentStory<typeof Form> = ({ onSubmit }) => {
  const methods = useForm({
    resolver: yupResolver(VALIDATE_SCHEMA.AUTH.TEST_SCHEMA),
    defaultValues: { first_name: '', last_name: '' },
  });

  return (
    <Form methods={methods} onSubmit={onSubmit}>
      <Form.FormControl
        name='first_name'
        render={({ field }) => (
          <>
            <Form.FieldLabel name='first_name' label='First Name' />
            <input {...field} />
          </>
        )}
      />
      <Form.FormControl
        name='last_name'
        render={({ field }) => (
          <>
            <Form.FieldLabel name='first_name' label='Last Name' required />
            <input {...field} />
          </>
        )}
      />
      <Form.FieldSubmit variants='primary'>submit</Form.FieldSubmit>
    </Form>
  );
};
export const FormDefault = Template.bind({});
FormDefault.args = {
  onSubmit: async (values, defaultValues, formState, formHandlers) => {
    console.log('submit form', values, defaultValues, formState, formHandlers);
  },
};
