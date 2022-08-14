import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useFormik } from "formik";
// import * as Yup from "yup";
import axios from "axios";
function Register() {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: <p>Register</p>,
    footer: "Copyright",
    html: <RegisterModal />,
    showConfirmButton: false,
  });
}
function RegisterModal() {
  const [confirmPass, setConfirmPass] = React.useState("");
  let initialValues = { username: "", password: "" };
  //   const SignupSchema = Yup.object().shape({
  //     username: Yup.string()
  //       .min(2, "Too Short!")
  //       .max(50, "Too Long!")
  //       .required("Required"),
  //     password: Yup.string()
  //       .min(2, "Too Short!")
  //       .max(50, "Too Long!")
  //       .required("Required"),
  //   });
  const onSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:4000/api/register", values)
      .then((dbres) => {
        resetForm();
        setConfirmPass("");
      })
      .catch((err) => console.log(err));
  };
  //   const validationSchema = { SignupSchema };
  const formik = useFormik({ initialValues, onSubmit });
  //   formik.handleChange formik.values.username
  return (
    <form action="/api/register" method="post" onSubmit={formik.handleSubmit}>
      <div className="registerForm">
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.username}
            type="text"
            name="username"
            id="username"
            placeholder="username.."
          />
        </div>
        <div>
          <input
            onChange={formik.handleChange}
            value={formik.values.password}
            type="password"
            name="password"
            id="password"
            placeholder="password.."
          />
        </div>
        <div>
          <input
            value={confirmPass}
            onChange={(e) => setConfirmPass(e.target.value)}
            type="password"
            name="passConfirm"
            id="passConfirm"
            placeholder="confirm password.."
          />
        </div>
        {formik.values.password === confirmPass && confirmPass.length > 0 ? (
          <div>
            <button type="submit">Create!</button>
          </div>
        ) : (
          <div>Please confirm password</div>
        )}
      </div>
    </form>
  );
}
export default Register;
