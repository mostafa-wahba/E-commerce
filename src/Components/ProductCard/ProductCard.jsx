import React, { useContext, useEffect, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPatchCheckFill, BsCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { ToastContainer, toast, Zoom } from "react-toastify";
import { ProductsContext } from "../../Context/ProductsContext";

export default function ProductCard({product}) {
  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };
  const [addToCart, setAddToCart] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [showCheck, setShowCheck] = useState(false);

  useEffect(() => {
    if (addToCart) {
      setAnimate(true); // Start animation

      // Set a timeout to end the animation class after the animation completes
      const timer = setTimeout(() => {
        setAnimate(false); // End animation
        setAddToCart(false); // Reset addToCart state after animation completes
      }, 1500); // Duration matching the CSS animation time

      return () => clearTimeout(timer); // Cleanup timeout on component unmount or state change
    }
  }, [addToCart]);

  const handleAddToCart = () => {
    setAddToCart(true); // Set addToCart to trigger the useEffect
    setShowCheck(true);
    setTimeout(() => {
      setShowCheck(false);
    }, 1500); // Display check mark for 1 second
  };
  const addToCartNotify = () => {
    try {
      toast.success("Product has been added to cart successfully", {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    } catch (error) {
      console.error("Toast notification error:", error);
    }
  };
  const addToWishlistNotify = () => {
    toast.info("Product has been added to wishlist successfully", {
      position: "top-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Zoom,
    });
  };

  return (
    <>
      {product && (
        <div
          id={product.id}
          className={`product-card d-flex flex-column justify-content-center align-items-center ${
            animate ? "animate-lines" : ""
          }`}
        >
          <svg className="lines-effect" width="100%" height="100%">
            <line className="top" x1="0" y1="0" x2="100%" y2="0"></line>
            <line className="left" x1="0" y1="0" x2="0" y2="100%"></line>
            <line
              className="bottom"
              x1="0"
              y1="100%"
              x2="100%"
              y2="100%"
            ></line>
            <line className="right" x1="100%" y1="0" x2="100%" y2="100%"></line>
          </svg>
          <div className="product-img position-relative">
            <img src={product.imageCover} alt={product.title}/>
            <Link to="/product:id" className="quick-view">
              View Product
            </Link>
          </div>
          <div className="product-content w-100 pt-3 p-2 position-relative d-flex justify-content-between align-items-start flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link to="/product:id" className="text-start">{product.title}</Link>
              <AnimatePresence mode="wait">
                {showCheck ? (
                  <motion.div
                    key="check"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="check-icon"
                  >
                    <BsFillPatchCheckFill />
                  </motion.div>
                ) : (
                  <motion.div
                    key="cart"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onClick={() => {
                      handleAddToCart();
                      addToCartNotify();
                    }}
                    className="cart-icon"
                  >
                    <BsCartPlusFill />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <span>$ {product.price}</span>
          </div>
          <span
            onClick={() => {
              addToWishlistNotify();
            }}
            className="wishlist-btn shadow"
          >
            <FaHeart />
          </span>
          <ToastContainer />
        </div>
      )}
    </>
  );
}
