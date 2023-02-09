import applicationReducer from "./ApplicationReducer";
import { defaultApplicationState } from "../state/ApplicationState";

describe("ApplicationReducer", () => {
  it("default returns current state", () => {
    const defaultState = defaultApplicationState();

    const result = applicationReducer(defaultState, { action: 10 });

    expect(result).toBe(defaultState);
  });
});
