import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { toast, Zoom } from "react-toastify";
export const CartContext = createContext();
export default function CartContextProvider(props) {
  const [loading, setLoading] = useState(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const shippingCost = 9.65;
  const cookies = new Cookies();
  const headers = {
    token: cookies.get("userToken"),
  };

  function sendToCart(productId) {
    return axios
      .post(
        `https://ecommerce.routemisr.com/api/v1/cart`,
        { productId: productId },
        { headers: headers }
      )
      .then((res) => res)
      .catch((err) => err);
  }
  function getLoggedUserCart() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setAddedProducts(JSON.parse(storedCart));
    }
  }, []);
  const increment = (id) => {
    setAddedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id
          ? { ...product, quantity: product.quantity + 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(updatedProducts)); // Update local storage
      return updatedProducts;
    });
  };

  const decrement = (id) => {
    setAddedProducts((prevProducts) => {
      const updatedProducts = prevProducts.map((product) =>
        product.id === id && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      );
      localStorage.setItem("cart", JSON.stringify(updatedProducts)); // Update local storage
      return updatedProducts;
    });
  };
  const removeProduct = (id) => {
    setAddedProducts((prevProducts) => {
      const updatedProducts = prevProducts.filter(
        (product) => product.id !== id
      );
      localStorage.setItem("cart", JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };
  const calculateTotal = () => {
    // Calculate the subtotal by summing the price and quantity of all items
    const subtotal = addedProducts.reduce(
      (total, product) =>
        Math.round((total + product.price * product.quantity) * 100) / 100,
      0
    );

    // Calculate the VAT at 14% on the subtotal
    const tax = Math.round(subtotal * 0.14 * 100) / 100; // Round to two decimal places

    // Calculate the final total by adding the tax and shipping to the subtotal
    const finalTotal = Math.round((subtotal + tax + shippingCost) * 100) / 100;

    return {
      subtotal, // Return the subtotal
      total: finalTotal, // Return the final total
    }; // Return the final total
  };

  const { subtotal, total } = calculateTotal(); // Destructure to get both values
  const handleQuantityChange = (id, newQuantity) => {
    setAddedProducts((prevProducts) => {
      return prevProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity: Math.max(1, newQuantity) };
        }
        return product;
      });
    });
  };
  function clearCart() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }
  const checkoutDone = () => {
    try {
      toast.success("Your Order Was Completed Successfully", {
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
    } catch (error) {
      console.error("Toast notification error:", error);
    }
  };
  return (
    <CartContext.Provider
      value={{
        addedProducts,
        setAddedProducts,
        sendToCart,
        getLoggedUserCart,
        headers,
        loading,
        setLoading,
        increment,
        decrement,
        removeProduct,
        handleQuantityChange,
        subtotal,
        total,
        shippingCost,
        clearCart,
        checkoutDone,
        isOrderCompleted,
        setIsOrderCompleted,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
