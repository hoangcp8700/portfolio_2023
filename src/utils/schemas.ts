import * as yup from 'yup';

export const phoneRegExp = /^(\+\d{1,3}[- ]?)?\d{10}$/;

const VALIDATE_SCHEMA = {
  AUTH: {
    TEST_SCHEMA: yup.object().shape({
      first_name: yup.string().required('first name error !'),
      last_name: yup.string().required('last name error!'),
    }),
  },
  CONTACT: yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required(),
    content: yup.string(),
  }),
};

export default VALIDATE_SCHEMA;
