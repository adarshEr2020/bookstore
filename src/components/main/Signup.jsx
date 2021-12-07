import React, { useState } from "react";
import "./Signup.css";
import { userSignup } from "../../services/services";
export default function Signup() {
  const [signupObj, setSignupObj] = useState({
    fullName: "",
    email: "",
    password: "",
    phone: "",
  });
  const handleOnchange = (e) => {
    setSignupObj({
      ...signupObj,
      [e.target.name]: e.target.value,
    });
    console.log(signupObj);
  };

  const onSubmitSignup=()=>{
    userSignup(signupObj).then((response)=>{
        console.log(response);
      }).catch((err)=>{
        console.warn(err);
      })
  }
  return (
    <div className="signUpContainer">
        <input
          className="inputClass"
          type="text"
          placeholder="Full Name"
          name="fullName"
          value={signupObj.fullName}
          onChange={(e) => handleOnchange(e)}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Email"
          name="email"
          value={signupObj.email}
          onChange={(e) => handleOnchange(e)}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Password"
          name="password"
          value={signupObj.password}
          onChange={(e) => handleOnchange(e)}
        />
        <input
          className="inputClass"
          type="text"
          placeholder="Mobile Number"
          name="phone"
          value={signupObj.phone}
          onChange={(e) => handleOnchange(e)}
        />
        <button className="signUpBtn" onClick={onSubmitSignup}>Signup</button>
    </div>
  );
}
