import * as Yup from "yup";

export const YupLoginValidation = Yup.object({
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
});
