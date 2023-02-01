import TextArea from '@components/atoms/TextArea';
import Typography from '@components/atoms/Typography';
import Container from '@components/common/Container';
import Form from '@components/molecules/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import VALIDATE_SCHEMA from '@utils/schemas';
import React from 'react';
import { useForm } from 'react-hook-form';

import Social from './Social';

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
  return (
    <div className='t-contactForm'>
      <Container>
        <Typography className='sm:text-7xl md:text-8xl text-3xl font-austin italic text-center text-gray-800 duration-300'>
          hoang.pc219@gmail.com
        </Typography>
        <Form methods={methods} onSubmit={(value) => console.log('form', value)}>
          <div className='flex gap-4'>
            <Form.InputForm name='name' placeholder='Your full name' />
            <Form.InputForm name='email' placeholder='Your email' />
          </div>
          <Form.FormControl
            name='content'
            render={({ field }) => <TextArea {...field} placeholder='How may i help you?' />}
          />
          <div className='flex justify-between items-center mt-2'>
            <Social />
            <Form.FieldSubmit variants='primary' radius='full'>
              Submit
            </Form.FieldSubmit>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ContactForm;
