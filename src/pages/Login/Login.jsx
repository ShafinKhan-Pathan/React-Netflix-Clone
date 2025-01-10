import React, { useState } from "react";
import "./Login.css";
import login_logo from "../../assets/logo.png";
import login_background from "../../assets/login_backgroundImage.jpg";
const Login = () => {
  const [signState, setSignState] = useState("Sign In");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="login">
      <div class="bgimage"></div>
      <img src={login_logo} alt="login_bgImage" />
      <div className="login_box">
        <div className="login_form">
          <h1>{signState}</h1>
          <form className="login__form--fields">
            {signState === "Sign Up" ? (
              <input
                type="text"
                placeholder="Your FullName"
                className="input_design"
              />
            ) : (
              <></>
            )}

            <input
              type="text"
              placeholder="Email or mobile number"
              className="input_design"
            />
            <div className="password_container">
            <input
              type={passwordVisible ? "text" : "password"}
              id="password"
              placeholder="Password"
              className="input_design"
            />
            <button
              type="button"
              id="togglePassword"
              class="toggle_password"
              onClick={togglePasswordVisibility}
            >
              {passwordVisible ? "👁️‍🗨️" : "👁️"}
            </button>
            </div>
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            {signState === "Sign Up" ? (
              <button className="form_btn">Sign Up</button>
            ) : (
              <button className="form_btn">Sign In</button>
            )}
          </form>
          <h3>OR</h3>
          {signState === "Sign In" ? (
            <p className="form_p">
              New to Netflix?
              <span
                className="span__modifier"
                onClick={() => {
                  setSignState("Sign Up");
                }}
              >
                Sign Up now.
              </span>
            </p>
          ) : (
            <p className="form_p">
              Already Have an Account?
              <span
                className="span__modifier"
                onClick={() => {
                  setSignState("Sign In");
                }}
              >
                Sign In now.
              </span>
            </p>
          )}

          <p className="para_notice">
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
