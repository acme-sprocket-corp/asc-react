import { useState } from "react";
import ValueDefaults from "../../../value-defaults/ValueDefaults";
import IUseInput from "./IUseInput";

export default function useInput<T>(
  initialValue: T,
  mappingFunc: (value: string) => T
): IUseInput<T> {
  const [value, updateValue] = useState<T>(initialValue);
  const [valid, setValid] = useState<boolean>(ValueDefaults.Boolean);

  const setValue = (value: string): void => {
    updateValue(mappingFunc(value));
  };

  return {
    value,
    setValue,
    valid,
    setValid,
  };
}