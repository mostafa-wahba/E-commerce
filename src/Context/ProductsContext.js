import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast, Zoom } from "react-toastify";
export const ProductsContext = createContext();
export default function ProductsContextProvider(props) {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [womenProducts, setWomenProducts] = useState([]);
  const [menProducts, setMenProducts] = useState([]);
  const [electronicsProducts, setElectronicsProducts] = useState([]);
  const [error, setError] = useState("");
  let { id } = useParams();
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/products"
        );
        setProducts(data.data);
        // setIsLoading(false); // Set loading to false once data is fetched
        filterProducts(data.data); // Fetch data when the component is mounted
      } catch (error) {
        setError("Failed to fetch products"); // Set error if fetching fails
        // setIsLoading(false); // Still set loading to false even in case of error
      }
    };
    fetchProducts();
  }, []);
  const filterProducts = (products) => {
    setWomenProducts(
      products?.filter((product) => product.category.slug === "women's-fashion")
    );
    setMenProducts(
      products?.filter((product) => product.category.slug === "men's-fashion")
    );
    setElectronicsProducts(
      products?.filter((product) => product.category.slug === "electronics")
    );
  };
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get(
          "https://ecommerce.routemisr.com/api/v1/categories"
        );
        setCategories(data.data);
        // setIsLoading(false); // Set loading to false once data is fetched
      } catch (error) {
        setError("Failed to fetch products"); // Set error if fetching fails
        // setIsLoading(false); // Still set loading to false even in case of error
      }
    };
    fetchCategories(); // Fetch data when the component is mounted
  }, []);
  // useEffect(() => {
  //   const fetchCategory = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `https://ecommerce.routemisr.com/api/v1/categories/${id}`
  //       );
  //       setCategory(data.data);
  //       setIsLoading(false); // Set loading to false once data is fetched
  //     } catch (error) {
  //       setError("Failed to fetch products"); // Set error if fetching fails
  //       setIsLoading(false); // Still set loading to false even in case of error
  //     }
  //   };
  //   fetchCategory(); // Fetch data when the component is mounted
  // }, []);
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = () => {
    setAddToCart(true); // Set addToCart to trigger the useEffect
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
  const addToWishlistNotify = (isWishlistCheck) => {
    if (isWishlistCheck){
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
    }
    else{
    toast.error("Product has been removed from wishlist", {
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
  }

  };

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
        categories,
        setCategories,
        error,
        setError,
        isLoading,
        setIsLoading,
        category,
        setCategory,
        womenProducts,
        menProducts,
        electronicsProducts,
        addToCart,
        setAddToCart,
        addToCartNotify,
        handleAddToCart,
        addToWishlistNotify,
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  );
}