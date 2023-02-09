import { render, screen } from "@testing-library/react";
import React from "react";
import { ApplicationContext } from "../../stores/ApplicationStore";
import applicationReducer from "../../stores/reducer/ApplicationReducer";
import { defaultApplicationState } from "../../stores/state/ApplicationState";
import useCreateStore from "../use-create-store/UseCreateStore";
import useStore from "./UseStore";

const TestComponent: React.FC = () => {
  const [store] = useStore();

  return (
    <>
      <p>LoggedIn: {store.isLoggedIn ? "in" : "out"}</p>
      <p>Email: {store.customerEmail === "" ? "no email" : "email"}</p>
    </>
  );
};

const Wrapper: React.FC = () => {
  const useStore = useCreateStore(
    defaultApplicationState(),
    applicationReducer
  );

  return (
    <ApplicationContext.Provider value={useStore}>
      <TestComponent />
    </ApplicationContext.Provider>
  );
};

describe("UseStore", () => {
  it("has correct state", () => {
    render(<Wrapper />);

    expect(screen.getByText(/out/i)).toBeInTheDocument();
    expect(screen.getByText(/no email/i)).toBeInTheDocument();
  });
});
