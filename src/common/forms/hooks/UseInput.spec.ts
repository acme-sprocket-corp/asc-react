import { renderHook } from "@testing-library/react";
import useInput from "./UseInput";

describe("UseInput", () => {
  it("has correct initial value", () => {
    const initialValue = "initial";

    const { result } = renderHook(() =>
      useInput<string>(initialValue, (value) => value)
    );

    expect(result.current.value).toEqual(initialValue);
  });

  it("updateValue correctly sets value", () => {
    const { result } = renderHook(() =>
      useInput<string>("initial", (value) => value)
    );

    expect(result.current.value).toBe("initial");
  });
});
