import React, { useContext } from "react";
import { logout } from "../context/actions/authActions";
import { AuthContext } from "../context/authContext";
import { AlertContext } from "../context/alertContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const { state: authState, dispatch: authDispatch } = useContext(AuthContext);
  const { state: alertState, dispatch: alertDispatch } = useContext(AlertContext);
  const navigate = useNavigate();
  return (
    <section className={`w-full min-h-screen p-2 flex flex-col justify-left items-center gap-3 py-10`}>
      <h1 className={`text-[30px]`}>Profile</h1>
      <button
        onClick={() => logout(authDispatch, alertDispatch, navigate)}
        className={`bg-red-500 text-white p-2 px-4 rounded-lg cursor-pointer`}
      >
        Logout
      </button>
    </section>
  );
}
