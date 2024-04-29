import React, { useContext, useEffect, useState } from "react";
import "./Cart.css";
import { Link, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Cookies from "universal-cookie";
import { CartContext } from "../../Context/CartContext";
import axios from "axios";

export default function Cart() {
  function clearCart() {
    return axios
      .delete(`https://ecommerce.routemisr.com/api/v1/cart`, {
        headers: headers,
      })
      .then((res) => res)
      .catch((err) => err);
  }
  const shippingCost = 9.65;
  const cookies = new Cookies();
  const userToken = cookies.get("userToken");
  const {
    addedProducts,
    setAddedProducts,
    sendToCart,
    headers,
    loading,
    setLoading,
  } = useContext(CartContext);
  const [loginMassg, setLoginMassg] = useState("");
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setAddedProducts(JSON.parse(storedCart));
    }
  }, [setAddedProducts]);
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
  const navigate = useNavigate();
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
  const handleAddToCart = async () => {
    if (!userToken) {
      setLoginMassg("Please Sign in First");
      return; // Stop the function if no user token
    }

    setLoading(true); // Start loading before the API calls
    try {
      await clearCart(); // Ensure the cart is cleared before adding new items

      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      // Sending requests with delay
      for (const product of cartItems) {
        for (let i = 0; i < product.quantity; i++) {
          await sendToCart(product.id); // Await each request individually
          await new Promise((r) => setTimeout(r, 200)); // Delay of 200ms between requests
        }
      }

      navigate("/checkout"); // Navigate only after all operations succeed
    } catch (error) {
      console.error("Failed to add products to cart:", error);
    } finally {
      setLoading(false); // Ensure loading is turned off after operations complete
    }
  };

  return (
    <>
      <div id="cart">
        <div className="container d-flex justify-content-center">
          <div className="row align-items-start w-100 m-0">
            <div className="products-list col-lg-10 col-xl-7 me-auto mb-5 d-flex justify-content-center align-items-center p-0">
              <div className="d-flex justify-content-center align-items-center flex-column w-100 border">
                <div className="titles-row row g-3 px-5 py-3 border-bottom w-100 d-none d-lg-flex">
                  <div className="col-md-5 d-flex justify-content-start align-items-center">
                    <p>PRODUCT</p>
                  </div>
                  <div className="col-md-2  d-flex justify-content-start align-items-center">
                    <p>PRICE</p>
                  </div>
                  <div className="col-md-3 d-flex justify-content-start align-items-center">
                    <p>QUANTITY</p>
                  </div>
                  <div className="col-md-2 d-flex justify-content-start align-items-center">
                    <p>TOTAL</p>
                  </div>
                </div>
                {addedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="product-row row g-3 p-4 px-5 border-bottom w-100"
                  >
                    <div className="col-md-5 d-flex justify-content-start align-items-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className="product-image me-4 w-25"
                          onClick={() => removeProduct(product.id)}
                        >
                          <div className="product-image-overlay">
                            <FaXmark />
                          </div>
                          <img src={product.imageCover} alt="product" />
                        </div>
                        <p className="w-75">{product.title}</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center">
                      <span className="fs-6 text-secondary d-flex gap-2">
                        <span className="d-block d-md-none">Price: </span>${" "}
                        {product.price}
                      </span>
                    </div>
                    <div className="col-md-3 d-flex justify-content-start align-items-center p-0">
                      <div className="w-100 row border border-light-subtle quantity-btns rounded-2 overflow-hidden">
                        <button
                          className="d-flex justify-content-center align-items-center col-4 transition"
                          onClick={() => decrement(product.id)}
                        >
                          -
                        </button>
                        <div className="d-flex justify-content-center align-items-center col-4 p-0">
                          <input
                            type="number"
                            className="amount-input w-100 h-100 d-flex justify-content-center align-items-center bg-body-tertiary text-center"
                            value={product.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                product.id,
                                parseInt(e.target.value)
                              )
                            }
                          />
                        </div>
                        <button
                          className="d-flex justify-content-center align-items-center col-4 transition"
                          onClick={() => increment(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center">
                      <span className="fs-6 text-secondary-emphasis d-flex gap-2">
                        <span className="d-block d-md-none">Total Price: </span>
                        ${" "}
                        {Math.round(product.price * product.quantity * 100) /
                          100}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="shipping-details d-flex justify-content-center align-items-center col-sm-10 col-lg-7 col-xl-5 ms-auto mb-5 p-0">
              <form className="d-flex justify-content-center align-items-start flex-column gap-4 w-75 p-5 border">
                <h4 className="title">CART TOTALS</h4>
                <div className="d-flex border-bottom border-light-subtle pb-3 w-100 gap-4">
                  <p className="subtitle w-25">Subtotal:</p>
                  <span className="amount">${subtotal}</span>
                </div>
                <div className="d-flex border-bottom border-light-subtle pb-3 w-100 flex-column">
                  <div className="d-flex justify-content-start align-items-center w-100 gap-4 mb-2">
                    <p className="subtitle w-25">Shipping:</p>
                    <span className="amount">
                      ${total > 100 ? 0 : shippingCost}
                    </span>
                  </div>
                  <p className="text">
                    Free Shipping for orders more than 100$
                  </p>
                </div>
                <div className="d-flex mb-2 w-100 flex-column">
                  <div className="d-flex mb-2 w-100 gap-4">
                    <p className="subtitle w-25 fs-5">Total:</p>
                    <span className="amount">${total}</span>
                  </div>
                  <p className="text">
                    There is a 14% value added tax on the total value of
                    purchases
                  </p>
                </div>
                {loginMassg && (
                  <>
                    <div className="login-massage d-flex justify-content-center align-items-start flex-column">
                      <p className="text-danger">{loginMassg}</p>
                      <Link
                        to={"/Login"}
                        className="d-flex justify-content-center align-items-center  "
                      >
                        Login{" "}
                        <span>
                          <MdOutlineArrowRightAlt />
                        </span>
                      </Link>
                    </div>
                  </>
                )}
                <div className="form-btn d-flex justify-content-center-align-items-center w-100">
                  <button
                    onClick={handleAddToCart}
                    className="rounded-pill text-uppercase w-100 border-0"
                  >
                    {loading ? (
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      "Proceed to Checkout"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
