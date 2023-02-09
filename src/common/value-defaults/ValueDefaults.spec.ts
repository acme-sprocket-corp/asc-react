import ValueDefaults from "./ValueDefaults";

describe("ValueDefaults", () => {
  it("String returns correct value", () => {
    expect(ValueDefaults.String).toStrictEqual("");
  });

  it("Boolean returns correct value", () => {
    expect(ValueDefaults.Boolean).toStrictEqual(false);
  });

  it("Number returns correct value", () => {
    expect(ValueDefaults.Number).toStrictEqual(0);
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
