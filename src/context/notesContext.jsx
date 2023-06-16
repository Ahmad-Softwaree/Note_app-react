import { createContext, useReducer } from "react";
import { notesInitialState, notesReducer } from "./reducers/notesReducer";

export const NotesContext = createContext();

export const NotesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(notesReducer, notesInitialState);

  return <NotesContext.Provider value={{ state, dispatch }}>{children}</NotesContext.Provider>;
};
