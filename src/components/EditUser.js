import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { setLoginState, updateUserInfo } from "./action";

const EditUser = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = location.state;
  const signData = useSelector((state) => state.SignUp);
  console.log("si", signData);
  return (
    <Formik
      initialValues={{
        email: user.email,
        mobile: user.mobile,
      }}
      onSubmit={(values) => {
        const AlreadyUser = signData.find(
          (User) => User.email === values.email
        );

        if (AlreadyUser) {
          return alert("Email is already taken");
        } else {
          dispatch(
            updateUserInfo({
              oldEmail: user.email,
              newEmail: values.email,
              mobile: values.mobile,
            })
          );
          dispatch(
            setLoginState({ email: values.email, password: user.password })
          );
          alert("password updated successfull");
          navigate("/profile");
        }
      }}
    >
      <Form style={{ textAlign: "center" }}>
        <div>
          <label>Email: </label>
          <Field type="text" name="email" />
        </div>
        <div>
          <label htmlFor="">Mobile No : </label>
          <Field type="number" name="mobile" />
        </div>

        <button type="submit">Update</button>
      </Form>
    </Formik>
  );
};

export default EditUser;
