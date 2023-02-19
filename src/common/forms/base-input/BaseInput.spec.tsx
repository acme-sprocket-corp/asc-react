import { render, screen } from "@testing-library/react";
import BaseInput from "./BaseInput";
import userEvent from "@testing-library/user-event";
import useTextInput from "../hooks/use-text-input/UseTextInput";
import ValueDefaults from "../../value-defaults/ValueDefaults";

const BaseInputWrapper: React.FC<WrapperProperties> = ({
  initialValue = ValueDefaults.string,
  label,
  placeholder,
  required,
  type,
}) => {
  const input = useTextInput(initialValue);

  return (
    <BaseInput
      input={input}
      label={label}
      placeholder={placeholder}
      required={required}
      type={type}
    />
  );
};

interface WrapperProperties {
  initialValue?: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  type: string;
}

describe("BaseInput", () => {
  it("has correct input type", () => {
    const inputType = "text";

    render(<BaseInputWrapper type={inputType} label="input" />);

    expect(screen.getByLabelText(/input/i)).toHaveAttribute("type", inputType);
  });

  it("has correct label", () => {
    render(<BaseInputWrapper type="text" label="input" />);

    expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
  });

  it("has correct placeholder", () => {
    const placeholder = "placeholder";

    render(
      <BaseInputWrapper type="text" placeholder={placeholder} label="input" />
    );

    expect(screen.getByPlaceholderText(placeholder)).toHaveAttribute(
      placeholder,
      placeholder
    );
  });

  it("has correct initial value", () => {
    const initial = "initial";

    render(
      <BaseInputWrapper
        type="text"
        label="input"
        placeholder="placeholder"
        initialValue={initial}
      />
    );

    expect(screen.getByPlaceholderText(/placeholder/i)).toHaveValue(initial);
  });

  it("updates value correctly", async () => {
    render(
      <BaseInputWrapper type="text" label="input" placeholder="placeholder" />
    );

    const user = userEvent.setup();

    const newValue = "myNewValue";

    await user.click(screen.getByPlaceholderText(/placeholder/i));

    await user.keyboard(newValue);

    expect(screen.getByPlaceholderText(/placeholder/i)).toHaveValue(newValue);
  });

  it("has correct required", () => {
    render(
      <BaseInputWrapper
        type="text"
        label="input"
        placeholder="placeholder"
        required
      />
    );

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeRequired();
  });
});
