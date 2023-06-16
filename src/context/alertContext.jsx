import { useReducer, createContext } from "react";

import { alertInitialState, alertReducer } from "./reducers/alertReducer";

export const AlertContext = createContext();

export const AlertContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, alertInitialState);

  return <AlertContext.Provider value={{ state, dispatch }}>{children}</AlertContext.Provider>;
};
