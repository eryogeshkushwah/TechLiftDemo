import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLoginState, setSignUpState } from "./action";

const Profile = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.Login);
  const signUpData = useSelector((state) => state.SignUp);
  console.log("login", loginData);
  console.log("sign", signUpData);
  let user = "";

  if (Object.keys(loginData).length !== 0 && signUpData.length !== 0) {
    user = signUpData.find((data) => loginData.email === data.email);
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Profile</h1>
      <div>
        <Link
          to="/updateUserInfo"
          state={user}
          style={{ paddingRight: "10px" }}
        >
          Edit
        </Link>
        <Link to="/updatePassword" state={user}>
          Edit Password
        </Link>
      </div>

      <div style={{ marginTop: "10px" }}>
        <div>Name: {user?.name}</div>
        <div>Mobile No :{user?.mobile}</div>
        <div> Email: {user?.email}</div>
      </div>
    </div>
  );
};

export default Profile;
