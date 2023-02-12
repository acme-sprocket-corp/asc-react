import { useState } from "react";
import IUseInput from "./IUseInput";

export default function useInput<T>(
  initialValue: T,
  mappingFunc: (value: string) => T
): IUseInput<T> {
  const [value, setValue] = useState<T>(initialValue);

  const updateValue = (event: React.FormEvent<HTMLInputElement>): void => {
    const element = event.target as HTMLInputElement;

    setValue(mappingFunc(element.value));
  };

  return {
    value,
    updateValue,
  };
}
