import { DefaultValues, FieldValues, FormState, Mode, UseFormReturn } from 'react-hook-form';
import * as yup from 'yup';

import { FormControlProps } from './components/FormControl';
import { FieldErrorProps } from './components/FieldError';
import { FieldLabelProps } from './components/FieldLabel';
import { ErrorMessageProps } from './components/ErrorMessage';
import { FieldSubmitProps } from './components/FieldSubmit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormProps<Value extends FieldValues = any> {
  children: React.ReactNode;
  className?: string;
  mode?: Mode;
  validateSchema?: yup.AnyObjectSchema;
  defaultValues?: DefaultValues<Value>;
  resetAfterSave?: boolean;
  onSubmit?: (
    values: Value,
    defaultValues?: Value,
    formState?: FormState<Value>,
    formHandlers?: UseFormReturn<Value>,
  ) => Promise<void>;
}

export interface FormProviderProps extends FormProps {
  FormControl: React.FC<FormControlProps>;
  FieldError: React.FC<FieldErrorProps>;
  FieldLabel: React.FC<FieldLabelProps>;
  ErrorMessage: React.FC<ErrorMessageProps>;
  FieldSubmit: React.FC<FieldSubmitProps>;
}
