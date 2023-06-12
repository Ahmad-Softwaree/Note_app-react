import React, { Fragment, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
export default function Header() {
  const {
    state: { isAuthenticated, user },
    dispatch,
  } = useContext(AuthContext);
  const notAuthorizedRoutes = (
    <Fragment>
      <NavLink
        className={`p-2 px-4 rounded-lg bg-white text-black hover:bg-black hover:text-white transition-all duration-200`}
        to={`/login`}
      >
        Login
      </NavLink>

      <NavLink
        className={`p-2 px-4 rounded-lg bg-white text-black hover:bg-black hover:text-white transition-all duration-200`}
        to={`/register`}
      >
        Register
      </NavLink>
    </Fragment>
  );

  const authorizedRoutes = (
    <Fragment>
      <NavLink className={`p-2 px-4 rounded-lg bg-white text-black hover:bg-black hover:text-white transition-all duration-200`} to={`/`}>
        Home
      </NavLink>
      <NavLink
        className={`p-2 px-4 rounded-lg bg-white text-black hover:bg-black hover:text-white transition-all duration-200`}
        to={`/profile`}
      >
        Profile
      </NavLink>
    </Fragment>
  );
  return (
    <header className={`w-full h-fit bg-blue flex flex-row justify-between p-5 items-center `}>
      <div className={`flex flex-row justify-left items-center gap-3 text-white text-[24px]`}>
        <span>
          <i className="fa-solid fa-note-sticky"></i>
        </span>
        <h1>Note App</h1>
      </div>

      <ul className="flex flex-row justify-right items-center gap-5">
        {user !== null && authorizedRoutes}
        {user === null && notAuthorizedRoutes}
      </ul>
    </header>
  );
}
