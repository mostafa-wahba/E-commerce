import { createContext, useContext, useEffect, useState} from "react";
import axios from "axios";
import { toast, Zoom } from "react-toastify";
import { CartContext } from "./CartContext";
import Cookies from "universal-cookie";
export const WishlistContext = createContext();
export default function WishlistContextProvider(props) {
    const [loginPopup, setLoginPopup] = useState(false);
  const [addedWishlistProducts, setAddedWishlistProducts] = useState([]);
  let [headers, setHeaders] = useState({});
  const cookies = new Cookies();

  useEffect(() => {
    const userToken = cookies.get("userToken"); // Retrieve the userToken from cookies
    if (userToken) {
      setHeaders({
        ...headers,
        token: userToken
      });
    }
  }, []);
  function getProductsFromWishlist() {
    return axios
      .get(`https://ecommerce.routemisr.com/api/v1/wishlist`, {
        headers: headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }
  
  async function removeProductFromWishlist(id) {
    try {
      const response = await axios.delete(`https://ecommerce.routemisr.com/api/v1/wishlist/${id}`, {
        headers: headers,
      });
      if (response.status === 200 || response.status === 204) {
        setAddedWishlistProducts((currentProducts) =>
          currentProducts.filter((product) => product.id !== id)
        );
        toast.warning("Product removed from wishlist", {
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
      } else {
        toast.error("Failed to remove product from wishlist.", {
          transition: Zoom,
        });
      }
    } catch (err) {
      console.error("Error removing product from wishlist:", err);
      toast.error("Error occurred while removing product from wishlist.", {
        transition: Zoom,
      });
    }
  }


  return (
    <WishlistContext.Provider
      value={{
        loginPopup, setLoginPopup,addedWishlistProducts, setAddedWishlistProducts,getProductsFromWishlist,removeProductFromWishlist
      }}
    >
      {props.children}
    </WishlistContext.Provider>
  );
}
