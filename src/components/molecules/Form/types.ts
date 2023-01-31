import { FieldValues, FormState, UseFormReturn } from 'react-hook-form';

import { FormControlProps } from './components/FormControl';
import { FieldErrorProps } from './components/FieldError';
import { FieldLabelProps } from './components/FieldLabel';
import { ErrorMessageProps } from './components/ErrorMessage';
import { FieldSubmitProps } from './components/FieldSubmit';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface FormProps<Value extends FieldValues = any> {
  children?: React.ReactNode;
  className?: string;
  methods: UseFormReturn<Value>;
  resetAfterSave?: boolean;
  onSubmit?: (
    values: Value,
    defaultValues?: Value,
    formState?: FormState<Value>,
    formHandlers?: UseFormReturn<Value>,
  ) => void | Promise<void>;
}

export interface FormProviderProps extends FormProps {
  FormControl?: React.FC<FormControlProps>;
  FieldError?: React.FC<FieldErrorProps>;
  FieldLabel?: React.FC<FieldLabelProps>;
  ErrorMessage?: React.FC<ErrorMessageProps>;
  FieldSubmit?: React.FC<FieldSubmitProps>;
}
