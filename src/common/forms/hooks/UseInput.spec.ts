import { renderHook } from "@testing-library/react";
import useInput from "./UseInput";

describe("UseInput", () => {
  it("has correct initial value", () => {
    const initialValue = "initial";

    const { result } = renderHook(() => useInput<string>(initialValue));

    expect(result.current.value).toEqual(initialValue);
  });
});
