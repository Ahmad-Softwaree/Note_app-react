import React, { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import { login } from "../context/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { AlertContext } from "../context/alertContext";
import { getGoogleAuth } from "../context/actions/passportActions";

export default function Login() {
  const {
    state: { loginLoading },
    dispatch: authDispatch,
  } = useContext(AuthContext);
  const { dispatch: alertDispatch } = useContext(AlertContext);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputs;
  const navigate = useNavigate();

  const onChange = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = () => login(authDispatch, alertDispatch, inputs, navigate);

  return (
    <section className={`w-full flex flex-col justify-center items-center gap-3 min-h-screen bg-white px-5`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex flex-col w-full justify-left items-center gap-4 max-w-[400px] bg-gray p-5 rounded-lg"
      >
        <h2 className={` text-[24px] text-center`}>Sing In</h2>
        <p className={`opacity-70 text-[14px] text-center`}>Welcome back, log in to your own account and start taking your notes!</p>

        <div className="flex flex-col justify-left items-start gap-2 w-full">
          <span className="opacity-80 text-[13px]">Email</span>
          <input
            onChange={onChange}
            placeholder="Enter your email.."
            className="w-full p-2 rounded-lg"
            type="email"
            value={email}
            name="email"
            id="email"
          />
        </div>
        <div className="flex flex-col justify-left items-start gap-2 w-full">
          <span className="opacity-80 text-[13px]">Password</span>
          <input
            onChange={onChange}
            placeholder="Enter your password.."
            className="w-full p-2 rounded-lg"
            type={show ? "text" : "password"}
            name="password"
            value={password}
            id="password"
          />
        </div>

        <div className="w-full flex flex-row justify-left items-center gap-2">
          <input onChange={(e) => setShow(!show)} type="checkbox" name="eye" id="eye" />
          <span className="text-[12px] opacity-80">Show password</span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue text-white cursor-pointer p-2 opacity-90 hover:opacity-100 duration-200 transition-all"
        >
          {loginLoading ? <Spinner className={`h-[30px] w-[30px]`} /> : "Sign In"}
        </button>

        <button
          onClick={() => getGoogleAuth(authDispatch, alertDispatch)}
          type="button"
          className={`flex flex-row justify-center items-center gap-2`}
        >
          <span>
            <i className="fa-brands fa-google"></i>
          </span>
          <span>Sign In With Google</span>
        </button>
      </form>

      <span className="font-light text-[12px] opacity-90">
        Don't have an account?{" "}
        <Link className={`text-blue font-bold`} to={`/register`}>
          Sing Up
        </Link>
      </span>
    </section>
  );
}
