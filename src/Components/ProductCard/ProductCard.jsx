import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPatchCheckFill, BsCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { ProductsContext } from "../../Context/ProductsContext";

export default function ProductCard({ product }) {
  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };

  const { addToCartNotify, handleAddToCart, addToWishlistNotify } =
    useContext(ProductsContext);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isWishlistCheck, setIsWishlistCheck] = useState(false);

  const handleCartClick = () => {
    setIsAnimated(true); // Start animation for this card
    handleAddToCart(product.id); // Pass the unique product ID
    addToCartNotify(product.id); // Pass the product ID for notification
    setTimeout(() => {
      setIsAnimated(false); // Stop animation after a short delay
    }, 1500); // Match the timeout to the duration of the animation
  };
  const handleWishlistToggle = () => {
    const newCheckStatus = !isWishlistCheck;
    setIsWishlistCheck(newCheckStatus); // Update the state

    // Delay to ensure the state update has completed before running the notification
    setTimeout(() => {
      addToWishlistNotify(newCheckStatus); // Pass the updated state to the notification
    }, 0); // You can adjust the delay as needed
  };
  return (
    <>
      {product && (
        <div
          id={product.id}
          className={`product-card d-flex flex-column justify-content-center align-items-center ${
            isAnimated ? "animate-lines" : ""
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
            <img src={product.imageCover} alt={product.title} />
            <Link to="/product:id" className="quick-view">
              View Product
            </Link>
          </div>
          <div className="product-content w-100 pt-3 p-2 position-relative d-flex justify-content-between align-items-start flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link to="/product:id" className="text-start">
                {product.title}
              </Link>
              <AnimatePresence mode="wait">
                {isAnimated ? (
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
                    id="addToCart"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    onClick={handleCartClick}
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
            id="addToWishlist"
            onClick={handleWishlistToggle}
            className={`wishlist-btn shadow ${
              isWishlistCheck
                ? "wishlist-btn-checked"
                : "wishlist-btn-unchecked"
            }`}
          >
            <FaHeart />
          </span>
        </div>
      )}
    </>
  );
}
