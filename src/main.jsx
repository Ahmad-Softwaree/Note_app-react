import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../index.css";
import { AuthContextProvider } from "./context/authContext.jsx";
import { AlertContextProvider } from "./context/alertContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <AlertContextProvider>
        <App />
      </AlertContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
