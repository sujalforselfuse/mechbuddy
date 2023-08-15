import * as Yup from "yup";

export const validate = Yup.object({
  name: Yup.string().min(2).max(25).required("Please enter your name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile:Yup.number().min(10).max(10).required("Please enter valid mobile number"),
  city:Yup.string().min(2).required("Please enter valid city name"),
  message:Yup.string().min(20).required("Please enter message of size more than 20"),
  
});