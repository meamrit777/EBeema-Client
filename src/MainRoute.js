import React, { useContext } from "react";
// import Navbar from "./components/navbar";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Login from "./components/pages/auth/login";
// import SocialFollow from "./components/SocialFollow";
import Register from "./components/pages/auth/register";
import Blog from "./components/pages/blog";
import AboutUs from "./components/pages/about";
// import Footer from "./components/footer";
import Contact from "./components/pages/contact";
import TermCondition from "./components/pages/policy/TermCondition";
import PrivacyPolicy from "./components/pages/policy/PrivacyPolicy";
import Home from "./components/pages/home";
import Calculator from "./components/pages/calculator";
import { BackTop } from "antd";
// import Phone from "./components/navbar/sideNav/Phone";
import Result from "./components/pages/calculator/result";
// import Result from "./components/pages/calculator/filter";
import "antd/dist/antd.css";
import Confirm from "./components/pages/calculator/result/confirmation";
import Dashboard from "./components/pages/dashboard";
import { Context } from "./context/auth/Context";

function MainRoute() {
  const { user } = useContext(Context);
  // console.log("mainRoute", user);
  const currentUser = user;

  return (
    <>
      {/* <SocialFollow /> */}
      {/* <Navbar /> */}
      {/* <Phone /> */}
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={currentUser ? <Dashboard /> : <Register />}
        />
        <Route
          path="/login"
          element={currentUser ? <Dashboard /> : <Login />}
        />
        <Route
          path="/register"
          element={currentUser ? <Dashboard /> : <Register />}
        />
        <Route path="/blog" element={<Blog />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/term-condition" element={<TermCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/calculator/result" element={<Result />} />
        <Route path="/confirm" element={<Confirm />} />
      </Routes>
      {/* <Footer /> */}
      <BackTop />
    </>
  );
}
export default MainRoute;
