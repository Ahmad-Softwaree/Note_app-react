import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { AlertContextProvider } from "./context/alertContext.jsx";
import { NotesContextProvider } from "./context/notesContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AlertContextProvider>
        <NotesContextProvider>
          <App />
        </NotesContextProvider>
      </AlertContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
