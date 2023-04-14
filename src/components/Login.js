import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect } from "react";
import { YupLoginValidation } from "../validations/LoginValidation";
import {
  redirect,
  useBeforeUnload,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addLoginDetails, setLoginState, setSignUpState } from "./action";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.Login);
  const signUpData = useSelector((state) => state.SignUp);
  console.log(loginData);
  console.log(signUpData);

  useEffect(() => {
    if (Object.keys(loginData).length !== 0) {
      navigate("/");
    }
  }, [loginData]);

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={YupLoginValidation}
      onSubmit={(values) => {
        const isvalidEmail = signUpData.find(
          (data) => data.email === values.email
        );
        if (!isvalidEmail) {
          return alert("invalid username and Password");
        }
        if (isvalidEmail.password !== values.password) {
          return alert("invalid username and Password");
        }
        dispatch(addLoginDetails(values));
        navigate("/");
      }}
    >
      <Form>
        <label htmlFor="">Email</label>
        <Field type="text" name="email" />
        <br />
        <ErrorMessage name="email" />
        <br />
        <label htmlFor="">Password</label>
        <Field type="password" name="password" />
        <br />
        <ErrorMessage name="password" /> <br />
        <br />
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
};

export default Login;
