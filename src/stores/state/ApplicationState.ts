import ValueDefaults from "../../common/value-defaults/ValueDefaults";

export interface ApplicationState {
  isLoggedIn: boolean;
  customerEmail: string;
}

export function defaultApplicationState(): ApplicationState {
  return {
    isLoggedIn: ValueDefaults.Boolean,
    customerEmail: ValueDefaults.String,
  };
}
