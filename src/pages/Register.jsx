import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/authContext";
import { register } from "../context/actions/authActions";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { AlertContext } from "../context/alertContext";
import { checkSamePassword } from "../utils/functions";

export default function Register() {
  const {
    state: { registerLoading },
    dispatch: authDispatch,
  } = useContext(AuthContext);
  const { dispatch: alertDispatch } = useContext(AlertContext);
  const [show, setShow] = useState(false);
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = inputs;
  const navigate = useNavigate();
  const [same, setSame] = useState(true);

  const onChange = (e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const submit = () => register(authDispatch, alertDispatch, inputs, navigate);

  useEffect(() => {
    setSame(checkSamePassword(password, password2));
  }, [password, password2]);

  return (
    <section className={`w-full flex flex-col justify-center items-center gap-3 min-h-screen bg-white px-5`}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
        className="flex flex-col w-full justify-left items-center gap-4 max-w-[400px] bg-gray p-5 rounded-lg"
      >
        <h2 className={` text-[24px] text-center`}>Sing Up</h2>
        <p className={`opacity-70 text-[14px] text-center`}>Welcome, Create your own account and start taking your notes!</p>
        <div className="flex flex-col justify-left items-start gap-2 w-full">
          <span className="opacity-80 text-[13px]">Name</span>
          <input
            onChange={onChange}
            placeholder="Enter your name.."
            className="w-full p-2 rounded-lg"
            type="text"
            name="name"
            id="name"
            value={name}
          />
        </div>
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
        <div className="flex flex-col justify-left items-start gap-2 w-full">
          <span className="opacity-80 text-[13px]">Confirm password</span>
          <input
            onChange={onChange}
            placeholder="Confirm your password.."
            className="w-full p-2 rounded-lg"
            type={show ? "text" : "password"}
            name="password2"
            id="password2"
            value={password2}
          />
        </div>
        {!same && password !== "" && password2 !== "" && (
          <span className="text-red-500 text-[12px] w-full text-left">passwords are not the same !</span>
        )}
        <div className="w-full flex flex-row justify-left items-center gap-2">
          <input onChange={(e) => setShow(!show)} type="checkbox" name="eye" id="eye" />
          <span className="text-[12px] opacity-80">Show password</span>
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-blue text-white cursor-pointer p-2 opacity-90 hover:opacity-100 duration-200 transition-all"
        >
          {registerLoading ? <Spinner className={`h-[30px] w-[30px]`} /> : "Sign Up"}
        </button>
      </form>
      <span className="font-light text-[12px] opacity-90">
        Have an account?{" "}
        <Link className={`text-blue font-bold`} to={`/login`}>
          Sing In
        </Link>
      </span>
    </section>
  );
}
