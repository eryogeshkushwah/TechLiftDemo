import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { YupLoginValidation } from "../validations/LoginValidation";
import { redirect, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("login");

  useEffect(() => {
    if (isLogin) {
      navigate("/");
    }
  });
  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={YupLoginValidation}
      onSubmit={(values) => {
        const SignUpDetails = JSON.parse(localStorage.getItem("register"));
        const isvalidEmail = SignUpDetails.find(
          (data) => data.email === values.email
        );
        if (!isvalidEmail) {
          return alert("invalid username and Password");
        }
        if (isvalidEmail.password !== values.password) {
          return alert("invalid username and Password");
        }
        localStorage.setItem("login", JSON.stringify(values));
        return navigate("/", { state: true });
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
