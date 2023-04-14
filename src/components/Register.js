import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useCallback, useEffect } from "react";
import { YupSignValidation } from "../validations/SingupValidation";
import { useBeforeUnload, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addSignUpDetails, setSignUpState } from "./action";
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signUpdata = useSelector((state) => state.SignUp);
  const loginData = useSelector((state) => state.Login);

  console.log(loginData);
  useEffect(() => {
    if (Object.keys(loginData).length !== 0) {
      navigate("/");
    }
  }, [loginData]);

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          mobile: "",
          email: "",
          password: "",
          confirmPassword: "",
          term: "",
        }}
        validationSchema={YupSignValidation}
        onSubmit={(values) => {
          if (signUpdata.length !== 0) {
            const AlreadyUser = signUpdata.find(
              (user) => user.email === values.email
            );
            if (AlreadyUser) {
              return alert("You are already Registered");
            }
          }
          dispatch(addSignUpDetails(values));
          navigate("/login");
        }}
      >
        <Form>
          <div>
            <label htmlFor="">Name</label>
            <Field type="text" name="name" />
            <br />
            <ErrorMessage name="name" />
            <br />
          </div>
          <div>
            <label htmlFor="">Mobile No. </label>
            <Field type="number" name="mobile" />
            <br />
            <ErrorMessage name="mobile" />
            <br />
          </div>
          <div>
            <label htmlFor="">Email</label>
            <Field type="text" name="email" />
            <br />
            <ErrorMessage name="email" />
            <br />
          </div>

          <div>
            <label htmlFor="">Password</label>
            <Field type="password" name="password" />
            <br />
            <ErrorMessage name="password" /> <br />
            <br />
          </div>

          <div>
            <label htmlFor="">Confirm Password</label>
            <Field type="password" name="confirmPassword" />
            <br />
            <ErrorMessage name="confirmPassword" /> <br />
            <br />
          </div>

          <div>
            <Field type="checkbox" name="term" />
            <label htmlFor="">Accept Terms and Condition</label>
            <ErrorMessage name="term" />
          </div>

          <button type="submit">SignUp</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Register;
