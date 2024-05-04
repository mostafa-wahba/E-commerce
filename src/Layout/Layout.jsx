import React, { useContext, useEffect } from "react";
import "./Layout.css";
import { Outlet, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { CartContext } from "../Context/CartContext";
export default function Layout() {
  const location = useLocation();
  const { checkoutDone } = useContext(CartContext);
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
      <ToastContainer />
    </>
  );
}
