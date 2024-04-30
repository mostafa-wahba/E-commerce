import axios from "axios";
import { createContext, useEffect, useState } from "react";
import Cookies from "universal-cookie";
export const CartContext = createContext();
export default function CartContextProvider(props) {
  const [loading, setLoading] = useState(false);

  const cookies = new Cookies();
  const headers = {
    token: cookies.get("userToken"),
  };
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
  return (
    <CartContext.Provider
      value={{ addedProducts, setAddedProducts, sendToCart,getLoggedUserCart, headers,loading, setLoading }}
    >
      {props.children}
    </CartContext.Provider>
  );
}
