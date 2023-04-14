import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setLoginState, setSignUpState } from "./action";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.Login);

  const handleLogout = () => {
    localStorage.removeItem("login");
    dispatch(setLoginState({}));
    return navigate("/login");
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>

        {Object.keys(loginData).length !== 0 ? (
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        ) : (
          <li>
            <Link to="/register">Register</Link>
          </li>
        )}

        <li>
          {" "}
          <Link to="/profile">Profile</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
