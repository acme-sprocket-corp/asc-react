import { render, screen } from "@testing-library/react";
import useTextInput from "../hooks/use-text-input/UseTextInput";
import TextInput from "./TextInput";

describe("TextInput", () => {
  const Wrapper: React.FC = () => {
    return <TextInput label="input" input={useTextInput()} />;
  };

  it("is correct input type", () => {
    render(<Wrapper />);

    expect(screen.getByLabelText(/input/i)).toHaveAttribute("type", "text");
  });
});
