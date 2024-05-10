import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import Cookies from "universal-cookie";
import { AuthContext } from "./AuthContext";
export const WishlistContext = createContext();
export default function WishlistContextProvider(props) {
  const [wishlistProductsCounter, setWishlistProductsCounter] = useState(null);
  const [addedWishlistProducts, setAddedWishlistProducts] = useState(null);
  const [loadingItems, setLoadingItems] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const { token } = useContext(AuthContext); // Get token from AuthContext

  const headers = { token };
  async function updateWishlist() {
    setIsLoading(true); // Set loading true when updating
    try {
      const response = await axios.get(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { headers }
      );
      if (response.data.status === "success") {
        setAddedWishlistProducts(response.data.data);
        setWishlistProductsCounter(response.data.count);
      }
      setIsLoading(false); // Set loading false after fetching
    } catch (error) {
      console.error("Error fetching wishlist items:", error);
      setIsLoading(false); // Ensure loading is set to false even if there is an error
    }
  }

  useEffect(() => {
    if (token) {
      // Only update the wishlist if there is a token
      updateWishlist();
    }
  }, [token]);
  async function removeProductFromWishlist(id) {
    setLoadingItems((prev) => new Set(prev).add(id)); // Add id to loading items
    try {
      const response = await axios.delete(
        `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
        { headers }
      );
      updateWishlist();
      if (response.status === 200 || response.status === 204) {
        setTimeout(() => {
          toast.error("Product has been removed from wishlist", {
            ...toastSettings,
          });
          setLoadingItems((prev) => {
            const newSet = new Set(prev);
            newSet.delete(id); // Remove id from loading items after operation
            return newSet;
          });
        }, 1000);
      }
    } catch (error) {
      console.error("Error removing product from wishlist:", error);
      toast.error("Error occurred while removing product from wishlist.", {
        ...toastSettings,
      });
      setLoadingItems((prev) => {
        const newSet = new Set(prev);
        newSet.delete(id);
        return newSet;
      });
    }
  }
  async function sendToWishlist(productId) {
    try {
      await axios.post(
        `https://ecommerce.routemisr.com/api/v1/wishlist`,
        { productId },
        { headers }
      );
      updateWishlist();
    } catch (error) {
      console.error("Error adding to wishlist:", error);
    }
  }
  const toastSettings = {
    position: "top-left",
    autoClose: 2500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    transition: Zoom,
  };
  const addToWishlistNotify = (isWishlistCheck) => {
    if (isWishlistCheck) {
      toast.info("Product has been added to wishlist successfully", {
        position: "top-left",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Zoom,
      });
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistProductsCounter,
        setWishlistProductsCounter,
        removeProductFromWishlist,
        sendToWishlist,
        addedWishlistProducts,
        setAddedWishlistProducts,
        loadingItems,
        isLoading,
        addToWishlistNotify,
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
}
