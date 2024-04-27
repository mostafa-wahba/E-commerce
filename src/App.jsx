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
import Shop from "./Components/Shop/Shop";
import Test from "./Components/Test/Test";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import NotFound from "./Components/NotFound/NotFound";
import Checkout from "./Components/Checkout/Checkout";
import UpBtn from "./Components/UpBtn/UpBtn";
import Blog from "./Components/Blog/Blog";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/products" element={<Shop />}></Route>
        <Route path="/login" element={<ProtectedRoute><Login /></ProtectedRoute>}></Route>
        <Route path="/register" element={<ProtectedRoute><Register /></ProtectedRoute>}></Route>
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/test" element={<Test />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} /> {/* This handles undefined routes */}

      </Routes>
      <UpBtn/>
      <Footer />
    </>
  );
};

export default App;
