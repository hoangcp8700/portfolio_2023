/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef } from 'react';

function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const useHasChanged = (values: any[], skipInitialEvent = false): boolean => {
  const previousValue = usePrevious(values);
  if (!previousValue) {
    return !skipInitialEvent;
  }

  return previousValue.some((prev, i) => {
    let hasChanged = prev?.toString() !== values[i]?.toString();
    if (values[i]?.toString().includes('[object Object]') || prev?.toString().includes('[object Object]')) {
      hasChanged = prev !== values[i];
    }

    return hasChanged;
  });
};

export default useHasChanged;
