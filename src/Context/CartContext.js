import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import Cookies from "universal-cookie";
export const CartContext = createContext();
export default function CartContextProvider(props) {
  const [loading, setLoading] = useState(false);

  const cookies = new Cookies();
  const headers = {
    token: cookies.get("userToken"),
  };
  // useEffect(() => {
  //   if (cookies.get("userToken")) {
  //     const headers = {
  //       token: cookies.get("userToken"),
  //     };
  //   }
  // }, [cookies]);
  const [addedProducts, setAddedProducts] = useState([]);
  function sendToCart(productId) {
    return axios.post(
      `https://ecommerce.routemisr.com/api/v1/cart`,
      { productId: productId },
      { headers: headers }
    ).then((res) => res)
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
  // useEffect(() => {
  //   const storedCart = localStorage.getItem("cart");
  //   if (cookies.get("userToken")&&localStorage.getItem("cart")) {
  //     const savedCart = JSON.parse(localStorage.getItem("cart"))|| [];
  //     for (let index = 0; index < savedCart.length; index++) {
  //       const element = array[index];
        
  //     }
  //   }
  // }, []);
  return (
    <CartContext.Provider
      value={{ addedProducts, setAddedProducts, sendToCart,getLoggedUserCart, headers,loading, setLoading }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
