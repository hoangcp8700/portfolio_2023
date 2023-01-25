import RegisterContainer from '@containers/Authenticate/Register';
import React from 'react';

import Authenticate from '.';

const Register: React.FC = () => (
  <Authenticate>
    <RegisterContainer />
  </Authenticate>
);
export default Register;
