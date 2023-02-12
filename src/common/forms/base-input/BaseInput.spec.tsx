import { render, screen } from "@testing-library/react";
import useInput from "../hooks/UseInput";
import BaseInput from "./BaseInput";
import userEvent from "@testing-library/user-event";

const BaseInputWrapper: React.FC<WrapperProperties> = ({
  initialValue = "",
  label,
  placeholder,
  type,
}) => {
  const input = useInput(initialValue, (value) => value);

  return (
    <BaseInput
      input={input}
      label={label}
      placeholder={placeholder}
      type={type}
    />
  );
};

interface WrapperProperties {
  initialValue?: string;
  label: string;
  placeholder?: string;
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
    render(
      <BaseInputWrapper type="text" placeholder="placeholder" label="input" />
    );

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
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
});
