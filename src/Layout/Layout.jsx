import React from "react";
import "./Layout.css";
import {Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export default function Layout() {
  return (
    <>
    <main>
      <Outlet />
      <ToastContainer />
    </main>
    </>
  );
}
