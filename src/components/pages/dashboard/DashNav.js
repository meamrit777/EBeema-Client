import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaSignOutAlt } from "react-icons/fa";
import { Tooltip } from "antd";
import { Context } from "../../../context/auth/Context";

const DashNav = () => {
  const [click, setClick] = useState(false);
  const { user, dispatch } = useContext(Context);

  const handelClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 90) {
        setShow(true);
      } else setShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    <nav className={`navbar ${show && "nav__blue"}`}>
      <div className="container">
        <div className="nav-wrapper">
          <Link to="/">
            <img className="header-logo" src="./image/logo.png" alt="" />
          </Link>
          <div className="three-bar" onClick={handelClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li
              className="nav-item"
            >
              <Link to="#" className="nav-links" onClick={closeMobileMenu}>
                Insurance Plans <IoIosArrowDown className="ioios" size="1rem" />
              </Link>

            </li>
            <li className="nav-item">
              <Link
                to="/aboutUs"
                className="nav-links acb"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/contact"
                className="nav-links acb"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/blog"
                className="nav-links acb"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>
              <div class="vericle-line"></div>
            </li>
            <li className="nav-item">
              {user ? (
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <a>
                    <Link to="/dashboard" className="nav-links">
                      Dashboard
                    </Link>
                  </a>
                  <Tooltip placement="top" title="Log out" color={"cyan"}>
                    <a
                      onClick={handleLogout}
                      style={{ display: "flex", alignItems: "center" }}
                    >
                      <FaSignOutAlt size={25} />
                    </a>
                  </Tooltip>
                </div>
              ) : (
                <div>
                  <Link
                    to="/login"
                    className="nav-links-mobile auth-log"
                    onClick={closeMobileMenu}
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="nav-links-mobile auth-reg"
                    onClick={closeMobileMenu}
                  >
                    Register
                  </Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
export default DashNav;
