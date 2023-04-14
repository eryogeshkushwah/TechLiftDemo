import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updatePassword } from "./action";

const UpdatePassword = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = location.state;
  const sign = useSelector((state) => state.SignUp);
  console.log("si", sign);
  return (
    <Formik
      initialValues={{
        password: "",
      }}
      onSubmit={(values) => {
        dispatch(
          updatePassword({ password: values.password, email: user.email })
        );
        alert("password updated successfull");
        navigate("/profile");
      }}
    >
      <Form>
        {/* <label>Old Password</label>
        <Field type="password" name="oldpassword" /> */}

        <label>New Password : </label>
        <Field type="password" name="password" />

        <button type="submit">Update</button>
      </Form>
    </Formik>
  );
};

export default UpdatePassword;

// export const matchPassword = async ({ request }) => {
//   const data = await request.formData();

//   const submission = {
//     oldPassword: data.get("oldpassword"),
//     newPassword: data.get("newPassword"),
//   };

//   console.log("req", request);
// };
