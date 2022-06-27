import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { userLogin } from "../../services/services";
import "./Login.css";
function Login() {
  const history = useHistory();
  const [loginObj, setLoginObj] = useState({
    email: "",
    password: "",
  });

  const handleOnchange = (e) => {
    setLoginObj({
      ...loginObj,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    userLogin(loginObj)
      .then((response) => {
        console.log("login respponse", response.data);
        history.push("/home");
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  return (
    <form className="loginContainer" onSubmit={onSubmitLogin}>
      <input
        className="inputClass"
        type="text"
        placeholder="Email"
        name="email"
        value={loginObj.email}
        onChange={(e) => handleOnchange(e)}
      />
      <input
        className="inputClass"
        type="text"
        placeholder="Password"
        name="password"
        value={loginObj.password}
        onChange={(e) => handleOnchange(e)}
      />
      <button className="loginBtn" type="submit">
        Login
      </button>
      <div className="ORBtn">OR</div>
      <div className="socialIcnTxt">
        <div className="socialTxt ftxt">Facebook</div>
        <div className="socialTxt gtxt">Google</div>
      </div>
    </form>
  );
}

export default Login;
