/* eslint-disable @typescript-eslint/no-explicit-any */
import { withProperties } from '@utils/component';
import React, { forwardRef, useEffect, useId } from 'react';
import { FormProvider } from 'react-hook-form';
import { useFormDirtyContext } from '@context/DirtyFormContext';
import useHasChanged from '@hooks/useHashChanged';
import Input, { InputProps } from '@components/atoms/Input';
import clsx from 'clsx';

import ErrorMessage from './components/ErrorMessage';
import FieldError from './components/FieldError';
import FieldLabel from './components/FieldLabel';
import FormControl from './components/FormControl';
import FieldSubmit from './components/FieldSubmit';
import { FormProviderProps } from './types';

const FormProviderRef: React.ForwardRefRenderFunction<HTMLFormElement, FormProviderProps> = (
  { children, methods, resetAfterSave = true, onSubmit, className },
  ref,
) => {
  const { reset: formReset, formState, handleSubmit: formHandleSubmit } = methods;
  const { isLoading, isSubmitted } = formState;

  const formID = useId();

  // read dirty form context
  const { forms, setForms } = useFormDirtyContext();

  const dirtyChanged = useHasChanged([methods.formState.isDirty]);
  const isSubmittingChanged = useHasChanged([methods.formState.isSubmitting]);

  // RESET FORM
  useEffect(() => {
    if (resetAfterSave && formState.defaultValues && isSubmitted && !isLoading) {
      formReset(formState.defaultValues);
    }
  }, [resetAfterSave, formReset, isLoading, isSubmitted, formState.defaultValues]);

  const onSubmitForm = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      if (typeof event.stopPropagation === 'function') {
        // prevent any outer forms from receiving the event too
        event.stopPropagation();
      }

      return formHandleSubmit(async (values) => {
        try {
          if (onSubmit) {
            await onSubmit(values, formState.defaultValues, formState, methods);
          }
        } catch (error) {
          console.error('Submit Form Error:', error);
        }
      })(event);
    },
    [formHandleSubmit, onSubmit, formState, methods],
  );
  // update dirty form context when dirty state changes
  useEffect(() => {
    if (!dirtyChanged && !isSubmittingChanged) return;
    setForms({
      ...forms,
      [formID]: {
        dirty: methods.formState.isDirty,
        isSubmitting: methods.formState.isSubmitting,
        onSubmit: onSubmitForm,
        reset: methods.reset,
        triggerValidation: methods.trigger,
      },
    });
  }, [
    formID,
    dirtyChanged,
    isSubmittingChanged,
    forms,
    setForms,
    onSubmitForm,
    methods.formState.isDirty,
    methods.formState.isSubmitting,
    methods.reset,
    methods.trigger,
  ]);

  useEffect(
    () =>
      // form unmount
      (): void => {
        const newState = { ...forms };
        delete newState[formID];
        setForms(newState);
      },
    [formID, forms, setForms],
  );

  return (
    <FormProvider {...methods}>
      <form className={className} id={formID} ref={ref} onSubmit={onSubmitForm}>
        {children}
      </form>
    </FormProvider>
  );
};

const Form = forwardRef(FormProviderRef);

export const InputForm: React.FC<InputFormProps> = ({ label, className, name, required, inputProps }): JSX.Element => (
  <FormControl
    name={name}
    className={clsx('mb-2', className)}
    render={({ field }) => (
      <>
        <FieldLabel name={name} label={label} required={required} />
        <Input {...field} {...inputProps} id={name} />
      </>
    )}
  />
);

export default withProperties(Form, {
  FieldError,
  FieldLabel,
  ErrorMessage,
  FormControl,
  FieldSubmit,
  InputForm,
});

export interface InputFormProps {
  label?: string;
  name: string;
  required?: boolean;
  className?: string;
  inputProps?: InputProps;
}
