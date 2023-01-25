/* eslint-disable @typescript-eslint/no-explicit-any */
import { withProperties } from '@utils/component';
import React, { forwardRef, useEffect, useId } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormDirtyContext } from '@context/DirtyFormContext';
import useHasChanged from '@hooks/useHashChanged';

import ErrorMessage from './components/ErrorMessage';
import FieldError from './components/FieldError';
import FieldLabel from './components/FieldLabel';
import FormControl from './components/FormControl';
import FieldSubmit from './components/FieldSubmit';
import { FormProviderProps } from './types';

const FormProviderRef: React.ForwardRefRenderFunction<HTMLFormElement, FormProviderProps> = (
  { children, validateSchema, defaultValues, mode = 'onSubmit', resetAfterSave = true, onSubmit, className },
  ref,
) => {
  const formHandlers = useForm({
    mode,
    ...(validateSchema && { resolver: yupResolver(validateSchema) }),
    defaultValues,
  });
  const { reset: formReset, formState, handleSubmit: formHandleSubmit } = formHandlers;
  const { isLoading, isSubmitted } = formState;

  const formID = useId();

  // read dirty form context
  const { forms, setForms } = useFormDirtyContext();

  const dirtyChanged = useHasChanged([formHandlers.formState.isDirty]);
  const isSubmittingChanged = useHasChanged([formHandlers.formState.isSubmitting]);

  // RESET FORM
  useEffect(() => {
    if (resetAfterSave && defaultValues && isSubmitted && !isLoading) {
      formReset(defaultValues);
    }
  }, [resetAfterSave, formReset, isLoading, isSubmitted, defaultValues]);

  const onSubmitForm = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>): Promise<void> => {
      // this part is for stopping parent forms to trigger their submit
      if (event) {
        // sometimes not true, e.g. React Native
        if (typeof event.preventDefault === 'function') {
          event.preventDefault();
        }
        if (typeof event.stopPropagation === 'function') {
          // prevent any outer forms from receiving the event too
          event.stopPropagation();
        }
      }

      return formHandleSubmit(async (values) => {
        try {
          if (onSubmit) {
            await onSubmit(values, defaultValues, formState, formHandlers);
          }
        } catch (error) {
          console.error('Submit Form Error:', error);
        }
      })(event);
    },
    [defaultValues, formHandleSubmit, formHandlers, formState, onSubmit],
  );
  // update dirty form context when dirty state changes
  useEffect(() => {
    if (!dirtyChanged && !isSubmittingChanged) return;
    setForms({
      ...forms,
      [formID]: {
        dirty: formHandlers.formState.isDirty,
        isSubmitting: formHandlers.formState.isSubmitting,
        onSubmit: onSubmitForm,
        reset: formHandlers.reset,
        triggerValidation: formHandlers.trigger,
      },
    });
  }, [
    formID,
    dirtyChanged,
    isSubmittingChanged,
    forms,
    formHandlers.formState.isDirty,
    formHandlers.formState.isSubmitting,
    formHandlers.reset,
    formHandlers.trigger,
    setForms,
    onSubmitForm,
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
    <FormProvider {...formHandlers}>
      <form className={className} id={formID} ref={ref} onSubmit={onSubmitForm}>
        {children}
      </form>
    </FormProvider>
  );
};

const Form = forwardRef(FormProviderRef);

export default withProperties(Form, {
  FieldError,
  FieldLabel,
  ErrorMessage,
  FormControl,
  FieldSubmit,
});
