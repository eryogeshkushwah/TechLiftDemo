import * as Yup from "yup";

export const YupSignValidation = Yup.object({
  name: Yup.string()
    .min(2, "Firstname should be 2 character long ")
    .required("* Please enter your First Name"),
  mobile: Yup.number()
    .max(12, "mobile number not over 12 number long")
    .required("* Please enter mobile number"),

  email: Yup.string()
    .email("Invalid email")
    .required("* Please enter you Email"),

  password: Yup.string()
    .min(8, " password length must be greater than or equal to 8")
    .matches(/\d+/, "password must contain one or more numeric values")
    .matches(/[a-z]+/, "password must contain one or more lowercase characters")
    .matches(/[A-Z]+/, "password must contain one or more uppercase characters")
    .matches(
      /[!@#$%^&*()-+]+/,
      "password must contain one or more special characters"
    )
    .required("* please enter your password"),
  confirmPassword: Yup.string()
    .required("* Please confirm your password")
    .oneOf([Yup.ref("password")], "Password do not match"),

  term: Yup.string().required("* Please Accept terms and condition"),
});
