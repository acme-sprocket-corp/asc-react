import { useState } from "react";
import ValueDefaults from "../../../value-defaults/ValueDefaults";
import IUseInput from "./IUseInput";

export default function useInput<T>(
  initialValue: T,
  mappingFunction: (value: string) => T
): IUseInput<T> {
  const [value, updateValue] = useState<T>(initialValue);
  const [isValid, setIsValid] = useState<boolean>(ValueDefaults.boolean);

  const setValue = (value: string): void => {
    updateValue(mappingFunction(value));
  };

  return {
    value,
    setValue,
    isValid,
    setIsValid,
  };
}
