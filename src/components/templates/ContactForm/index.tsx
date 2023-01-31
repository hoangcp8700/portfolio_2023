import Form from '@components/molecules/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import VALIDATE_SCHEMA from '@utils/schemas';
import React from 'react';
import { useForm } from 'react-hook-form';

interface ContactFormProps {
  name: string;
  email: string;
  content: string;
}

const ContactForm: React.FC<ContactFormProps> = () => {
  const methods = useForm<ContactFormProps>({
    resolver: yupResolver(VALIDATE_SCHEMA.CONTACT),
    defaultValues: { name: '', email: '', content: '' },
  });
  //  onSubmit: async (values, defaultValues, formState, formHandlers) => {
  //     console.log('submit form', values, defaultValues, formState, formHandlers);
  //   },
  return (
    <div>
      <Form methods={methods} onSubmit={(value) => console.log('form', value)}>
        <Form.InputForm name='name' label='Full Name' required />
        <Form.InputForm name='email' label='Email' required />
        <Form.FieldSubmit variants='primary'>Submit</Form.FieldSubmit>
      </Form>
    </div>
  );
};

export default ContactForm;
