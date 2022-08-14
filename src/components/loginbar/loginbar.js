import React from "react";
import "./loginbar.css";
import Login from "./login";
import Register from "./register";
function LoginBar(props) {
  return (
    <div id="loginbar">
      <ul>
        <li>
          <button onClick={Login}>Login</button>
        </li>
        <li>
          <button onClick={Register}>Register</button>
        </li>
      </ul>
    </div>
  );
}

export default LoginBar;
