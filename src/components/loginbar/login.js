// @ts-nocheck
import React from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useFormik } from "formik";
// import { UserContext } from "../app";
import axios from "axios";
function Login(props) {
  const MySwal = withReactContent(Swal);
  MySwal.fire({
    title: <p>Login</p>,
    footer: "Copyright",
    html: <LoginModal close={MySwal.close} />,
    showConfirmButton: false,
  });
}
function LoginModal(props) {
  //   const { userInfo, setUserInfo } = useContext(UserContext);
  let initialValues = { username: "", password: "" };
  const onSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:4000/api/login", values)
      .then((dbRes) => {
        console.log(dbRes.data);
        window.localStorage.setItem(
          "userInfo",
          JSON.stringify({
            username: dbRes.data.username,
            token: dbRes.data.token,
          })
        );
        console.log(window.localStorage.getItem("userInfo"));
        // console.log("user info: ", userInfo);
        // setUserInfo(dbRes);
        // console.log("user info: ", userInfo);
        resetForm();
        props.close();
      })
      .catch((err) => console.log(err));
  };
  const validate = () => {};

  const formik = useFormik({ initialValues, onSubmit, validate });
  //   formik.handleChange formik.values.username
  return (
    <form action="/api/login" method="post" onSubmit={formik.handleSubmit}>
      <div className="loginForm">
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
          <button type="submit">Login!</button>
        </div>
      </div>
    </form>
  );
}

export default Login;
