import { useId } from "react";

const BaseInput: React.FC<BaseInputProperties> = ({
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
        />
      </div>
    </div>
  );
};

interface BaseInputProperties {
  label: string;
  placeholder?: string;
  type: string;
}

export default BaseInput;
