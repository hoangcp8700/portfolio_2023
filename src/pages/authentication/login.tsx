import LoginContainer from '@containers/Authenticate/Login';
import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import Authenticate from '.';

const Login: React.FC = () => {
  const [, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    // when redirect page have authenticate and not login
    // => return state next => login success => redirect page before
    if (location.state?.from) {
      setSearchParams({ next: location.state?.from });
    }
  }, [location.state?.from, setSearchParams]);

  return (
    <Authenticate>
      <LoginContainer />
    </Authenticate>
  );
};
export default Login;
