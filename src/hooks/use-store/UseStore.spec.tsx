import { act } from "@testing-library/react";
import { ApplicationContext } from "../../stores/ApplicationStore";
import useStore from "./UseStore";
import { renderHook } from "@testing-library/react";
import {
  ApplicationState,
  defaultApplicationState,
} from "../../stores/state/ApplicationState";
import { ReactNode, useReducer } from "react";
import applicationReducer from "../../stores/reducer/ApplicationReducer";

const StoreWrapper: React.FC<StoreWrapperProps> = ({ children }) => {
  const [state, dispatcher] = useReducer(
    applicationReducer,
    defaultApplicationState()
  );

  return (
    <ApplicationContext.Provider
      value={{
        state,
        dispatcher,
      }}
    >
      {children}
    </ApplicationContext.Provider>
  );
};

interface StoreWrapperProps {
  children: ReactNode;
}

describe("UseStore", () => {
  it("has correct state", () => {
    const { result } = renderHook(() => useStore(), { wrapper: StoreWrapper });

    act(() => {
      const [state] = result.current;

      expect(state.isLoggedIn).toStrictEqual(false);
      expect(state.customerEmail).toStrictEqual("");
    });
  });
});
