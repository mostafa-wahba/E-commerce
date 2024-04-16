import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import About from "./Components/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import SingleProduct from "./Components/SingleProduct/SingleProduct";
import Contact from "./Components/Contact/Contact";
import Cart from "./Components/Cart/Cart";
import { IoMdArrowDropup } from "react-icons/io";
import Shop from "./Components/Shop/Shop";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
      <span className="up-btn">
        <IoMdArrowDropup/>
      </span>
      <Footer />
    </>
  );
};

export default App;
