import ValueDefaults from "./ValueDefaults";

describe("ValueDefaults", () => {
  it("String returns correct value", () => {
    expect(ValueDefaults.string).toBe("");
  });

  it("Boolean returns correct value", () => {
    expect(ValueDefaults.boolean).toBeFalse();
  });

  it("Number returns correct value", () => {
    expect(ValueDefaults.number).toBe(0);
  });

  it("Array returns empty", () => {
    expect(ValueDefaults.array()).toStrictEqual([]);
  });

  it("Arrays should be unique", () => {
    const first = ValueDefaults.array<string>();

    const second = ValueDefaults.array<string>();

    expect(first).not.toBe(second);
  });
});
