import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useFormik } from "formik";
function Register() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: <p>Welcome</p>,
    footer: "Copyright",
    html: <RegisterModal />,
    showConfirmButton: false,
  });
}
function RegisterModal() {
  let initialValues = { username: "", password: "" };
  const onSubmit = () => {};
  const validate = () => {};
  const formik = useFormik({ initialValues, onSubmit, validate });
  //   formik.handleChange formik.values.username
  return <div>Register</div>;
}
export default Register;
