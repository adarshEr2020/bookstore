import React, { useState } from "react";
import "./Main.css";
import Login from "./Login";
import Signup from "./Signup";
import shoppingImage from "../../assets/onlineBookShopping.png";
function Main() {
  const [toggleoginSignup, setClickLoginSignup] = useState(true);
  const [active, setActive] = useState(true);

  const handleClickLoginSignup = () => {
    setClickLoginSignup(!toggleoginSignup);
    setActive(!active);
    console.log("isSignup", toggleoginSignup);
  };
  return (
    <div className="mainContainer">
      <div className="mainWrapper">
        <div className="imageContainer">
          <div className="mainImage">
            <img
              className="mainImageCircle"
              src={shoppingImage}
              alt="shoppingbook.png"
              width="245px"
              height="245px"
            />
          </div>
          <div className="mainText">ONLINE BOOK SHOPPING</div>
        </div>
        <div className="loginSignupContainer">
          <div className="loginSignup">
            <div className="loginSignUpText">
              <div>
                <span
                  className="loginsignuptxt"
                  onClick={() => handleClickLoginSignup()}
                >
                  LOGIN
                </span>
                {active ? <div className="underline"></div> : <></>}
              </div>
              <div>
                <span
                  className="loginsignuptxt"
                  onClick={() => handleClickLoginSignup()}
                >
                  SIGNUP
                </span>
                {active ? <></> : <div className="underline"></div>}
              </div>
            </div>
            <div className="actualLoginSignup">
              {toggleoginSignup ? <Login /> : <Signup />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
