import ValueDefaults from "./ValueDefaults";

describe("ValueDefaults", () => {
  it("String returns correct value", () => {
    expect(ValueDefaults.String).toBe("");
  });

  it("Boolean returns correct value", () => {
    expect(ValueDefaults.Boolean).toBeFalse();
  });

  it("Number returns correct value", () => {
    expect(ValueDefaults.Number).toBe(0);
  });

  it("Array returns empty", () => {
    expect(ValueDefaults.Array()).toStrictEqual([]);
  });

  it("Arrays should be unique", () => {
    const first = ValueDefaults.Array<string>();

    const second = ValueDefaults.Array<string>();

    expect(first).not.toBe(second);
  });
});
