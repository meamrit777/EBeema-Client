import React, { useContext } from "react";
import "./Login.css";
import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { Context } from "../../../../context/auth/Context";
import axios from "axios";

function Login() {
  const phoneRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const phoneEntered = phoneRef.current.value;
    const passEntered = passwordRef.current.value;
    if (phoneEntered && passEntered) {
      setError(false);
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          phone: phoneEntered,
          password: passEntered,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        console.log("logIn success uhuu");
      } catch (error) {
        dispatch({ type: "LOGIN_FAILURE" });
        console.log("phone or password incorrect", error);
      }
    } else {
      console.log("fill form correctly");
      setError(true);
    }
  };

  console.log("user", user);
  return (
    <div className="log-main">
      <div className="log-submain">
        <div className="log-img">
          <Link to="/">
            <img src="./image/logo.png" alt="logo image" className="logo" />
          </Link>
        </div>
        <div className="log-form">
          <form onSubmit={handleSubmit}>
            <div className="login">
              <label className="log-title">Phone Number</label>
              <input
                type="text"
                required
                placeholder="Enter Phone Number"
                className="log-placeholder"
                ref={phoneRef}
              />
            </div>
            <div className="login">
              <label className="log-title">Password</label>
              <div className="input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter Password"
                  className="log-placeholder"
                  ref={passwordRef}
                />
                <a className="toggle-icon" onClick={togglePassword}>
                  {showPassword ? (
                    <FiEye className="togglecolor" />
                  ) : (
                    <FiEyeOff className="togglecolor" />
                  )}
                </a>
              </div>
            </div>
            <div className="log-remme-fgtpwd">
              <div className="magic-checkbox">
                <input
                  id="demo-form-checkbox"
                  type="checkbox"
                  name="remember"
                  style={{ marginRight: "5px" }}
                />
                <label htmlFor="demo-form-checkbox" className="text-sm">
                  Remember Me
                </label>
              </div>
              <a className="forgot-paswd" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="login-signin">
              <button className="signin-button" type="submit">
                Sign In
              </button>
            </div>
          </form>
          <div className="login-register">
            <p>
              Need an account
              <Link
                to="/Register"
                style={{
                  textDecoration: "none",
                  color: "#558eff",
                  paddingLeft: 3,
                }}
              >
                Register
              </Link>
            </p>
          </div>
          <div className="log-backtohome">
            <Link to="/">
              <button className="backToHome">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
