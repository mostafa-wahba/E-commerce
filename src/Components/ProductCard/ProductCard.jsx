import React, { useContext, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsFillPatchCheckFill, BsCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { ProductsContext } from "../../Context/ProductsContext";
import { CartContext } from "../../Context/CartContext";
import { WishlistContext } from "../../Context/WishlistContext";
import { AuthContext } from "../../Context/AuthContext";
export default function ProductCard({ product }) {
  const iconVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
    exit: { scale: 0, opacity: 0, transition: { duration: 0.5 } },
  };
  const { token } = useContext(AuthContext);
  const { addToCartNotify, addToWishlistNotify } = useContext(ProductsContext);
  const { addProducts } = useContext(CartContext);
  const { sendToWishlist } = useContext(WishlistContext);
  const [isAnimated, setIsAnimated] = useState(false);
  const [isWishlistCheck, setIsWishlistCheck] = useState(false);

  const handleCartAnimation = () => {
    setIsAnimated(true); // Start animation for this card
    addToCartNotify(product.id); // Pass the product ID for notification
    setTimeout(() => {
      setIsAnimated(false); // Stop animation after a short delay
    }, 1500); // Match the timeout to the duration of the animation
  };
  const handleWishlistToggle = async () => {
    const newCheckStatus = !isWishlistCheck;
    setIsWishlistCheck(newCheckStatus); // Toggle the wishlist status
    if (token) { // Check if user is logged in
      try {
        await sendToWishlist(product.id); // Send product to wishlist
        addToWishlistNotify(newCheckStatus); // Notify about the wishlist addition
      } catch (error) {
        console.error('Failed to add to wishlist:', error);
        setIsWishlistCheck(!newCheckStatus); // Revert state on failure
      }
    } else {
      // Prompt user to login or show a notification
      console.log("Please log in to add items to your wishlist.");
    }
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
            <Link to={`/product/${product.id}`} className="quick-view">
              View Product
            </Link>
          </div>
          <div className="product-content w-100 pt-3 p-2 position-relative d-flex justify-content-between align-items-start flex-column">
            <div className="d-flex justify-content-between align-items-center w-100">
              <Link to={`/product/${product.id}`} className="text-start">
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
                    onClick={() => {
                      handleCartAnimation();
                      addProducts(product);
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
          {token ? (
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
          ) : (
            ""
          )}
        </div>
      )}
    </>
  );
}
