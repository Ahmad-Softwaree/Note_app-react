import React, { useContext, useEffect } from "react";
import { googleSuccess } from "../context/actions/passportActions";
import { AuthContext } from "../context/authContext";
import { AlertContext } from "../context/alertContext";

export default function GoogleSuccess() {
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);
  const { dispatch: alertDispatch } = useContext(AlertContext);

  useEffect(() => {
    googleSuccess(authDispatch, alertDispatch);
  }, []);
  return <div>GoogleSuccess</div>;
}
