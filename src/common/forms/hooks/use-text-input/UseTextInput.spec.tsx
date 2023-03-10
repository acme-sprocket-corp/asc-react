import { act, renderHook } from "@testing-library/react";
import ValueDefaults from "../../../value-defaults/ValueDefaults";
import useTextInput from "./UseTextInput";

describe("UseTextInput", () => {
  it("has correct default values", () => {
    const { result } = renderHook(() => useTextInput());

    expect(result.current.value).toEqual(ValueDefaults.string);
    expect(result.current.isValid).toBeFalse();
  });

  it("has correct value when passed", () => {
    const initialValue = "initial";

    const { result } = renderHook(() => useTextInput(initialValue));

    expect(result.current.value).toEqual(initialValue);
  });

  it("set values updates properly", () => {
    const newValue = "newValue";

    const { result } = renderHook(() => useTextInput());

    act(() => {
      result.current.setValue(newValue);
      result.current.setIsValid(true);
    });

    expect(result.current.value).toEqual(newValue);
    expect(result.current.isValid).toBeTrue();
  });
});
