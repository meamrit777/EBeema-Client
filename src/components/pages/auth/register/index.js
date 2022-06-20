import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";
import { Radio, Space } from "antd";
import axios from "axios";

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => {
    setShowPassword(!showPassword);
  };
  const [show, setShow] = useState(false);

  const [phone, setPhone] = useState();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(false);

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("/auth/register", {
        phone,
        email,
        password,
        name,
      });
      res.data && window.location.replace("/login");
      console.log(res.data);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="reg-main">
      <div className="agent reg-submain">
        <div className="reg-img">
          <Link to="/">
            <img src="./image/logo.png" alt="" className="logo" />
          </Link>
        </div>
        <div className="reg-form">
          <div className="reg-agent-client">
            <Space>
              <Radio.Button className="client" onClick={() => setShow(false)}>
                Im Client
              </Radio.Button>
              <Radio.Button className="client" onClick={() => setShow(true)}>
                Im Agent
              </Radio.Button>
            </Space>
          </div>
          {/* className={`navbar ${show && "nav__blue"}`} */}

          <form onSubmit={handleRegisterSubmit}>
            <div className="register">
              <label className="reg-title">Phone Number*</label>
              <input
                type="text"
                required
                placeholder="Enter Phone Number"
                className="reg-placeholder placeholder"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
              />
            </div>
            <div className="register">
              <label className="reg-title">Name*</label>
              <input
                type="text"
                required
                placeholder="Enter your Name"
                className="reg-placeholder"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="register">
              <label className="reg-title">Password*</label>
              <div className="reg-input-password">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder="Enter Password"
                  className="reg-placeholder"
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
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
            <div className="register">
              <label className="reg-title">Email*</label>
              <input
                type="email"
                required
                placeholder="Enter Email"
                className="reg-placeholder placeholder"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            {show && (
              <div className="reg-comp-liscno">
                <div className="company">
                  <div className="reg-value">
                    <strong>Company*</strong>
                  </div>
                  <select className="reg-comp-select">
                    <option>Select Company</option>
                    <option value="ALIC">
                      ALIC Asian Life Insurance Company
                    </option>
                    <option value="HGI">Himalayan General Insurance</option>
                    <option value="LGI">Lumbini General Insurance</option>
                    <option value="LIC">LIC Life Insurance Corporation</option>
                    <option value="ML">ML Metlife</option>
                    <option value="NBI">NB Insurance</option>
                    <option value="NLIC">
                      NLIC Nepal Life Insurance Company
                    </option>
                    <option value="PL">Premier Insurance</option>
                    <option value="SL">Shikhar Insurance</option>
                    <option value="UL">United Insurance</option>
                    <option value="PRIME">Prime Insurance</option>
                    <option value="NLICL">
                      National Life Insurance Company Limited
                    </option>
                    <option value="13">Siddhartha Insurance</option>
                    <option value="14">IME General Insurance</option>
                    <option value="15">
                      General Insurance Company Pvt Ltd
                    </option>
                    <option value="16">Neco Insurance Ltd</option>
                  </select>
                </div>
                <div className="liscence">
                  <div className="reg-value">
                    <strong>Liscence Number*</strong>
                  </div>
                  <div className="reg-liscence">
                    <input
                      className="liscence_box"
                      type="text"
                      name="liscence_number[]"
                      min="0"
                      placeholder="Enter company liscence number"
                    />
                  </div>
                </div>
              </div>
            )}
            <div className="reg-btn">
              <button className="reg-btn1" type="submit">
                Register
              </button>
            </div>
          </form>
          <div className="reg-msg">
            <p>
              Already have an account
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "#558eff",
                  paddingLeft: 3,
                }}
              >
                {"Log In"}
              </Link>
            </p>
          </div>
          <div className="reg-backtohome">
            <Link to="/">
              <button className="backToHome">Back to home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
