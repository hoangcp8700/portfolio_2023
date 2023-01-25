import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

type LayoutContextType = {
  isLayout: boolean;
  handleToggleLayout: (value: boolean) => void;
};

interface LayoutProviderProps {
  children: React.ReactNode;
}

// Hook to provide access to context object
export const LayoutContext = createContext<LayoutContextType>({} as LayoutContextType);

export const useLayoutContext = () => useContext(LayoutContext);

const LayoutProvider: React.FC<LayoutProviderProps> = ({ children }) => {
  const [isLayout, setIsLayout] = useState<boolean>(true);

  const handleToggleLayout = useCallback((value: boolean) => setIsLayout(value), []);

  const value = useMemo(
    () => ({
      isLayout,
      handleToggleLayout,
    }),
    [isLayout, handleToggleLayout],
  );

  return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>;
};

export default LayoutProvider;
