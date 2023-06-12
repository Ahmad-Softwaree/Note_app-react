import React, { Fragment } from "react";
import Alert from "./layout/Alert";
import { Outlet } from "react-router-dom";

export default function Universe() {
  return (
    <Fragment>
      <Alert />
      <Outlet />
    </Fragment>
  );
}
