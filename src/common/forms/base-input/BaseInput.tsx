import { useId } from "react";
import IUseInput from "../hooks/IUseInput";

const BaseInput: React.FC<BaseInputProperties> = ({
  input,
  label,
  placeholder,
  type,
}) => {
  const inputId = useId();

  return (
    <div className="field">
      <label className="label" htmlFor={inputId}>
        {label}
      </label>
      <div className="control">
        <input
          className="input"
          id={inputId}
          placeholder={placeholder}
          type={type}
          value={input.value}
          onInput={input.updateValue}
        />
      </div>
    </div>
  );
};

interface BaseInputProperties {
  input: IUseInput<string>;
  label: string;
  placeholder?: string;
  type: string;
}

export default BaseInput;
