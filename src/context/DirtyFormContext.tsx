/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext } from 'react';
import { UseFormReset, UseFormTrigger } from 'react-hook-form';

interface DirtyFormContextType {
  dirty: boolean;
  isSubmitting: boolean;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
  reset: UseFormReset<any>;
  triggerValidation?: UseFormTrigger<any>;
}

interface DirtyFormState {
  forms: Record<string, DirtyFormContextType>;
  setForms: React.Dispatch<React.SetStateAction<Record<string, DirtyFormContextType>>>;
}

// export const DirtyFormContext = createContext<DirtyFormState>({} as unknown as DirtyFormState);

const DirtyFormContext = createContext<DirtyFormState>({
  forms: {},
  setForms: () => {},
});
export const useFormDirtyContext = () => useContext(DirtyFormContext);

export default DirtyFormContext;

// eg:
