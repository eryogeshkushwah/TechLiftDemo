import React, { useEffect, useState } from "react";
import Login from "./Login";
import { useSelector } from "react-redux";

export default function RequireAuthentication(WrappedComponent) {
  return function () {
    const user = useSelector((state) => state.Login);
    if (Object.keys(user).length !== 0) {
      return <WrappedComponent />;
    }
    return <Login />;
  };
}
