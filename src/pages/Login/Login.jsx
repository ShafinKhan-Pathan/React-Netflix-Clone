import React from "react";
import "./Login.css";
import login_logo from "../../assets/logo.png";
import login_background from "../../assets/login_backgroundImage.jpg";
const Login = () => {
  return (
    <div className="login">
      <div class="bgimage"></div>
      <img src={login_logo} alt="login_bgImage" />
      <div className="login_box">
        <div className="login_form">
        <h1>Sign In</h1>
          <form className="login__form--fields">
            <input type="text" placeholder="Email or mobile number" className="input_design"/>
            <input type="password" placeholder="Password" className="input_design"/>
          </form>
          <button className="form_btn">Sign In</button>
          <h3>OR</h3>
          <button className="form_btn-light">Use Sign-In Code</button>
          <p className="form_p">
            New to Netflix?<a href=""><span className="span__modifier">Sign Up now.</span></a>
          </p>
          <p className="para_notice">This page is protected by Google reCAPTCHA to ensure you're not a bot. </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
