import React, { useContext, useEffect } from "react";
import "./Layout.css";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";
export default function Layout() {
  const location = useLocation();
  const { checkoutDone } = useContext(CartContext);
  const { loginPopup, setLoginPopup } = useContext(WishlistContext);
  useEffect(() => {
    if (location.pathname === "/allorders") {
      location.pathname("/");
      checkoutDone();
      console.log("ok");
    }
  }, [location]);

  return (
    <>
      <main>
        <Outlet />
      </main>
      {/* {loginPopup&&
      <div className="shadow h-50 w-50 mx-auto position-absolute top-50 end-50">
        <h2>Login First</h2>
      </div>
      } */}
      <ToastContainer />
    </>
  );
}
