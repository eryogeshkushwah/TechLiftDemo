import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const loginDetails = localStorage.getItem("login");
  const handleLogout = () => {
    localStorage.removeItem("login");
    navigate("/login");
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
        {!loginDetails ? (
          <li>
            <Link to="/register">Register</Link>
          </li>
        ) : null}

        {loginDetails ? (
          <li>
            <Link onClick={handleLogout}>Logout</Link>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
