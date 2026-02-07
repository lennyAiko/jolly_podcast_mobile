import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(11, "Phone number must be at least 11 characters")
    .required("Phone number is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export const OtpSchema = Yup.object().shape({
  otp: Yup.string()
    .min(6, "OTP must be at least 6 characters")
    .required("OTP is required"),
});

export const PhoneSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .min(11, "Phone number must be at least 11 characters")
    .required("Phone number is required"),
});

export const ProfileSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name must be at least 2 characters")
    .required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Password must be at least 6 characters"),
});
