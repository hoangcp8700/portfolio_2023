import ResetPasswordContainer from '@containers/Authenticate/ResetPassword';
import React from 'react';

import Authenticate from '.';

const ResetPassword: React.FC = () => (
  <Authenticate>
    <ResetPasswordContainer />
  </Authenticate>
);
export default ResetPassword;
