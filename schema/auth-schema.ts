import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const RegistrationSchema = Yup.object().shape({
  firstName: Yup.string().min(2, "First name must be at least 2 characters"),
  lastName: Yup.string().min(2, "Last name must be at least 2 characters"),
  phoneNumber: Yup.string()
    .min(10, "Phone number must be at least 10 characters")
    .required("Phone number is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters"),
  email: Yup.string().email("Invalid email"),
});
