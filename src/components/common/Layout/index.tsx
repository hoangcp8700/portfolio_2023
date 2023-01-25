import Link from '@components/atoms/Link';
import DirtyFormContext from '@context/DirtyFormContext';
import { useLayoutContext } from '@context/LayoutProvider';
import React, { useMemo } from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [forms, setForms] = React.useState({}); // state for dirty form
  const { isLayout } = useLayoutContext();

  const valueDirtyForm = useMemo(
    () => ({
      forms,
      setForms,
    }),
    [forms, setForms],
  );
  return (
    <DirtyFormContext.Provider value={valueDirtyForm}>
      <Link href='/carts'>Cart page</Link>
      <Link href='/products'>Product page</Link>
      {isLayout ? 'layout' : 'no layout'}
      {children}
    </DirtyFormContext.Provider>
  );
};

export default Layout;
