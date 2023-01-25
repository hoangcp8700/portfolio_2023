import ForgotPasswordContainer from '@containers/Authenticate/ForgotPassword';
import React from 'react';

import Authenticate from '.';

const ForgotPassword: React.FC = () => (
  <Authenticate>
    <ForgotPasswordContainer />
  </Authenticate>
);
export default ForgotPassword;
