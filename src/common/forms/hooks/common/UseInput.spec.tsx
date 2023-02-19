import { act, renderHook } from "@testing-library/react";
import ValueDefaults from "../../../value-defaults/ValueDefaults";
import useInput from "./UseInput";

describe("UseInput", () => {
  it("has correct initial values", () => {
    const initialValue = "initial";

    const { result } = renderHook(() =>
      useInput<string>(initialValue, (value) => value)
    );

    expect(result.current.value).toEqual(initialValue);
    expect(result.current.isValid).toBeFalse();
  });

  it("setValue correctly sets value", () => {
    const { result } = renderHook(() =>
      useInput<string>(ValueDefaults.string, (value) => value)
    );

    const newValue = "newValue";

    act(() => {
      result.current.setValue(newValue);
    });

    expect(result.current.value).toEqual(newValue);
  });

  it("setValid correctly sets valid", () => {
    const { result } = renderHook(() =>
      useInput<string>(ValueDefaults.string, (value) => value)
    );

    act(() => {
      result.current.setIsValid(true);
    });

    expect(result.current.isValid).toBeTrue();
  });
});
