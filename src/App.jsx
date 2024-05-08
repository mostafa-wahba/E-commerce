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
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import NotFound from "./Components/NotFound/NotFound";
import Checkout from "./Components/Checkout/Checkout";
import UpBtn from "./Components/UpBtn/UpBtn";
import Layout from "./Layout/Layout";
import Blog from "./Components/Blog/Blog";
import ScrollToTop from "./Components/ScrollToTop/ScrollToTop";
import UserRoute from "./Components/UserRoute/UserRoute";
import Wishlist from "./Components/Wishlist/Wishlist";

const App = () => {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/products" element={<Shop />}></Route>
          <Route
            path="/login"
            element={
              <ProtectedRoute>
                <Login />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/register"
            element={
              <ProtectedRoute>
                <Register />
              </ProtectedRoute>
            }
          ></Route>
          <Route path="/product/:id" element={<SingleProduct />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/wishlist"
            element={
              // <UserRoute>
                <Wishlist />
              // </UserRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/checkout"
            element={
              <UserRoute>
                <Checkout />
              </UserRoute>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
      <UpBtn />
      <Footer />
    </>
  );
};

export default App;
