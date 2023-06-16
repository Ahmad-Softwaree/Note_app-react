import React, { useContext, useEffect, useRef, useState } from "react";
import { logout, updateUser } from "../context/actions/authActions";
import { AuthContext } from "../context/authContext";
import { AlertContext } from "../context/alertContext";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const {
    state: {
      loading,
      user: { name, email, password, id, image },
    },
    dispatch: authDispatch,
  } = useContext(AuthContext);

  const { dispatch: alertDispatch } = useContext(AlertContext);
  const navigate = useNavigate();
  const [input, setInput] = useState(name);
  const [file, setFile] = useState(null);
  const [imageChanged, setImageChanged] = useState(false);
  const fileRef = useRef(null);
  const { VITE_SUPABASE_USER_BUCKET } = import.meta.env;

  return (
    <section className={`w-full min-h-screen p-2 flex flex-col justify-left items-center gap-3 py-10`}>
      <h1 className={`text-[30px]`}>Profile</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          updateUser(authDispatch, alertDispatch, input, file, imageChanged, image);
        }}
        className="flex flex-col justify-left items-center gap-3 w-full max-w-[400px]"
      >
        <input
          ref={fileRef}
          onChange={(e) => {
            setFile(e.target.files[0]);
            setImageChanged(true);
          }}
          type="file"
          name="image"
          id="image"
          className={`hidden`}
        />
        <label className={`relative cursor-pointer rounded-full w-[100px] h-[100px] border-2 border-blue border-solid`} htmlFor="image">
          {file && (
            <span
              onClick={(e) => {
                e.preventDefault();
                setFile(null);
                setImageChanged(false);
                fileRef.current.value = null;
              }}
              className="absolute top-1 left-1 p-1 rounded-full text-[12px] cursor-pointer bg-red-500 text-white px-2"
            >
              <i className="fa-solid fa-x"></i>
            </span>
          )}
          {!file && (
            <img className="rounded-full w-full h-full object-cover" src={`${VITE_SUPABASE_USER_BUCKET}/${image}`} alt="userImage" />
          )}
          {file && <img className="rounded-full w-full h-full object-cover" src={URL.createObjectURL(file)} alt="userImage" />}
        </label>
        <div className="flex flex-col justify-left items-start gap-2 w-full">
          <span>Name:</span>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={`w-full border border-solid border-black rounded-lg bg-transparent p-2`}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div className="flex flex-col justify-left items-start gap-2 w-full">
          <span>
            Email: <small className="text-red-500">* not editable</small>
          </span>
          <input
            className={`w-full border border-solid border-black rounded-lg bg-transparent p-2 opacity-60 cursor-not-allowed`}
            disabled
            value={email}
            type="email"
            name="email"
            id="email"
          />
        </div>{" "}
        <div className="flex flex-row justify-center w-full items-center gap-3">
          <button
            disabled={input === ""}
            className={`bg-blue text-white p-2 px-4 rounded-lg cursor-pointer disabled:bg-black disabled:opacity-60`}
          >
            Update
          </button>
          <button
            onClick={() => logout(authDispatch, alertDispatch, navigate)}
            className={`bg-red-500 text-white p-2 px-4 rounded-lg cursor-pointer`}
          >
            Logout
          </button>
        </div>
      </form>
    </section>
  );
}
