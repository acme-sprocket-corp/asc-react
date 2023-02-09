import IAction from "../actions/IAction";
import { ApplicationState } from "../state/ApplicationState";

export default function applicationReducer(
  state: ApplicationState,
  action: IAction
): ApplicationState {
  switch (action.action) {
    default:
      return state;
  }
}
