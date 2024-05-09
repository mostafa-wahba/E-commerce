import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo-no-background.png";
import { Link, NavLink } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegHeart, FaShoppingCart } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { TiThMenuOutline } from "react-icons/ti";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { AuthContext } from "../../Context/AuthContext";

export default function Navbar() {
  const [searchShow, setSearchShow] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const { addedProducts } = useContext(CartContext);
  const { wishlistProductsCounter } = useContext(WishlistContext);
  const { logout, token } = useContext(AuthContext);
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg d-flex py-3  ${
          scrollOffset || showDropDown
            ? "bg-white py-lg-0 nav-shadow"
            : "bg-transparent py-lg-1"
        } transition fixed-top`}
      >
        <div className="container">
          <Link className="navbar-brand me-auto" to="/">
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
            <TiThMenuOutline
              onClick={() => {
                setShowDropDown(!showDropDown);
              }}
            />
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
              <Link to="cart" className="position-relative cart-icon">
                {addedProducts?.length > 0 && (
                  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                    {addedProducts?.length}
                  </span>
                )}
                <FaShoppingCart />
              </Link>
            </li>
            {token && (
              <>
                <li>
                  <Link to="wishlist" className="position-relative cart-icon">
                    {wishlistProductsCounter > 0 && (
                      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill ">
                        {wishlistProductsCounter}
                      </span>
                    )}
                    <FaRegHeart />
                  </Link>
                </li>
                <li>
                  <Link to="profile">
                    <CgProfile />
                  </Link>
                </li>
              </>
            )}
            <li className="nav-item d-lg-block d-flex justify-content-center align-items-center ">
              {token ? (
                <NavLink
                  className="nav-link me-lg-4 poppins-medium login-logout"
                  to="/login"
                  onClick={logout}
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
