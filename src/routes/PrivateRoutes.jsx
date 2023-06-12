import React, { useContext, useEffect } from "react";
import { AuthContext } from "../context/authContext";
import { Navigate } from "react-router-dom";
import { loadUser } from "../context/actions/authActions";
import { AlertContext } from "../context/alertContext";

export default function PrivateRoutes({ component: Component }) {
  const {
    state: { loading, user },
    dispatch: authDispatch,
  } = useContext(AuthContext);
  const { dispatch: alertDispatch } = useContext(AlertContext);
  useEffect(() => {
    loadUser(authDispatch, alertDispatch);
  }, [authDispatch, alertDispatch]);
  if (loading)
    return (
      <div className="w-full min-h-screen flex flex-row justify-center items-center">
        <span className={`text-[36px]`}>loading...</span>
      </div>
    );
  if (!loading && user === null) return <Navigate to={`/login`} replace />;
  if (!loading && user !== null) return <Component />;
}
