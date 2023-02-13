import { useId } from "react";
import IUseInput from "../hooks/common/IUseInput";

const BaseInput: React.FC<BaseInputProperties> = ({
  input,
  label,
  placeholder,
  required,
  type,
}) => {
  const inputId = useId();

  const handleUpdateInput = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    const target = event.target as HTMLInputElement;

    input.setValue(target.value);
    input.setValid(target.validity.valid);
  };

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
          required={required}
          type={type}
          value={input.value}
          onInput={handleUpdateInput}
        />
      </div>
    </div>
  );
};

interface BaseInputProperties {
  input: IUseInput<string>;
  label: string;
  placeholder?: string;
  required?: boolean;
  type: string;
}

export default BaseInput;
