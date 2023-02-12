import { render, screen } from "@testing-library/react";
import BaseInput from "./BaseInput";

describe("BaseInput", () => {
  it("has correct input type", () => {
    const inputType = "text";

    render(<BaseInput type={inputType} label="input" />);

    expect(screen.getByLabelText(/input/i)).toHaveAttribute("type", inputType);
  });

  it("has correct label", () => {
    render(<BaseInput type="text" label="input" />);

    expect(screen.getByLabelText(/input/i)).toBeInTheDocument();
  });

  it("has correct placeholder", () => {
    render(<BaseInput type="text" placeholder="placeholder" label="input" />);

    expect(screen.getByPlaceholderText(/placeholder/i)).toBeInTheDocument();
  });
});
