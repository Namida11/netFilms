import * as yup from "yup";

const rulesPass =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const  basicSchemas = yup.object().shape({
  email: yup.string().email("Please enter a valid email").required("required"),
  password: yup
    .string()
    .min(8)
    .matches(rulesPass, { message: "please create the strong password" })
    .required("required"),
});
