import React from 'react';

interface AuthenticatePageProps {
  children: React.ReactNode;
}
const Authenticate: React.FC<AuthenticatePageProps> = ({ children }) => (
  <div>
    Page Authenticate
    {children}
  </div>
);

export default Authenticate;
