import React, { useContext, useEffect, useState } from "react";
import "./Navbar.css";
import { MainContext } from "../../Context/MainContext";
import logo from "../../Assets/png/logo-no-background.png";
import { Link, NavLink,useNavigate } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import Cookies from "universal-cookie";

export default function Navbar() {
  const { userToken, setUserToken } = useContext(MainContext);
  const [searchShow, setSearchShow] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);

  const navigate = useNavigate();
  const cookies = new Cookies();
  const handleLogout = () => {
    cookies.remove("userToken", { path: "/" }); // Remove cookie
    setUserToken(null); // Reset context
    navigate("/login"); // Redirect to login page
  };
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array to ensure this effect only runs once

  useEffect(() => {
    // console.log("Scroll offset:", scrollOffset); // Log the scroll offset to the console
  }, [scrollOffset]); // This effect will run every time scrollOffset changes

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg d-flex py-3 py-lg-0 ${
          scrollOffset ? "bg-white" : "bg-transparent"
        } transition fixed-top`}
      >
        <div className="container">
          <Link className="navbar-brand me-auto" to="">
            <img src={logo} alt="" />
          </Link>
          <button
            className="navbar-toggler m-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <TiThMenuOutline />
          </button>
          <ul className="menu-icons d-flex d-lg-none justify-content-center align-items-center gap-4 ms-auto mb-0">
            <li>
              <Link to="cart">
                <FaShoppingCart />
              </Link>
            </li>
            <li>
              <Link to="wishlist">
                <FaRegHeart />
              </Link>
            </li>
            <li>
              <Link to="wishlist">
                <CgProfile />
              </Link>
            </li>
          </ul>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto ms-lg-5 mb-2 mb-lg-0">
              <li className="nav-item d-lg-block d-flex justify-content-center align-items-center">
                <NavLink
                  className="nav-link me-lg-4 poppins-medium"
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item d-lg-block d-flex justify-content-center align-items-center">
                <NavLink
                  className="nav-link me-lg-4 poppins-medium"
                  to="products"
                >
                  Shop
                </NavLink>
              </li>
              <li className="nav-item d-lg-block d-flex justify-content-center align-items-center">
                <NavLink className="nav-link me-lg-4 poppins-medium" to="blog">
                  Blog
                </NavLink>
              </li>
              <li className="nav-item d-lg-block d-flex justify-content-center align-items-center">
                <NavLink className="nav-link me-lg-4 poppins-medium" to="about">
                  About
                </NavLink>
              </li>
              <li className="nav-item d-lg-block d-flex justify-content-center align-items-center">
                <NavLink
                  className="nav-link me-lg-4 poppins-medium"
                  to="contact"
                >
                  Contact
                </NavLink>
              </li>
              {/* <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to="/">
                        Category1
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Category2
                      </Link>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/">
                        Best Seller
                      </Link>
                    </li>
                  </ul>
                </li> */}
            </ul>
          </div>
          <ul className="d-none menu-icons d-lg-flex justify-content-center align-items-center gap-4 ms-auto mb-0">
            <li className="d-flex justify-content-center align-items-center">
              {searchShow && (
                <input type="text" className="form-control w-100" />
              )}
            </li>
            <li>
              <span
                onClick={() => {
                  setSearchShow(!searchShow);
                }}
              >
                <IoSearchSharp />
              </span>
            </li>
            <li>
              <Link to="cart">
                <FaShoppingCart />
              </Link>
            </li>
            <li>
              <Link to="wishlist">
                <FaRegHeart />
              </Link>
            </li>
            <li>
              <Link to="profile">
                <CgProfile />
              </Link>
            </li>
            <li className="nav-item d-lg-block d-flex justify-content-center align-items-center ">
              {userToken ? (
                <NavLink
                  className="nav-link me-lg-4 poppins-medium login-logout"
                  to="/login"
                  onClick={handleLogout}
                >
                  Logout
                </NavLink>
              ) : (
                <NavLink
                  className="nav-link me-lg-4 poppins-medium login-logout"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
