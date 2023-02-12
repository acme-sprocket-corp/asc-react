import { useState } from "react";
import IUseInput from "./IUseInput";

export default function useInput<T>(initialValue: T): IUseInput<T> {
  const [value, setValue] = useState<T>(initialValue);

  return {
    value,
  };
}
