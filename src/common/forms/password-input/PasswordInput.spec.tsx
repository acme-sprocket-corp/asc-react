import { render, screen } from "@testing-library/react";
import useTextInput from "../hooks/use-text-input/UseTextInput";
import PasswordInput from "./PasswordInput";

describe("TextInput", () => {
  const Wrapper: React.FC = () => {
    return <PasswordInput input={useTextInput()} />;
  };

  it("is correct input type", () => {
    render(<Wrapper />);

    const element = screen.getByLabelText(/password/i);

    expect(element).toHaveAttribute("type", "password");
    expect(element).toHaveAttribute("placeholder", "Password");
  });
});
