import { defaultApplicationState } from "./ApplicationState";

describe("ApplicationState", () => {
  it("on initialization, should have correct properties", () => {
    const state = defaultApplicationState();

    expect(state.isLoggedIn).toStrictEqual(false);
    expect(state.customerEmail).toStrictEqual("");
  });
});
