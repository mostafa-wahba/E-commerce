import React, { useContext, useState } from "react";
import "./Cart.css";
import img1 from "../../Assets/item-cart-04.jpg";
import img2 from "../../Assets/item-cart-05.jpg";
import { Link, useNavigate } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { AuthenticationContext } from "../../Context/AuthenticationContext";
import { MdOutlineArrowRightAlt } from "react-icons/md";

export default function Cart() {
  const { userToken, setUserToken } = useContext(AuthenticationContext);
  const shippingCost = 9.65;
  const [count, setCount] = useState(1);
  const [loginMassg, setLoginMassg] = useState("");
  const increment = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrement = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Product A",
      price: 29.99,
      quantity: 2,
      src: img1,
    },
    {
      id: 2,
      name: "Product B",
      price: 19.99,
      quantity: 1,
      src: img2,
    },
  ]);
  const removeItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };
  const calculateTotal = () => {
    // Calculate the subtotal by summing the price and quantity of all items
    const subtotal = items.reduce(
      (total, item) =>
        Math.round((total + item.price * item.quantity) * 100) / 100,
      0
    );

    // Calculate the VAT at 14% on the subtotal
    const tax = Math.round(subtotal * 0.14 * 100) / 100; // Round to two decimal places

    // Shipping cost is 9.65

    // Calculate the final total by adding the tax and shipping to the subtotal
    const finalTotal = Math.round((subtotal + tax + shippingCost) * 100) / 100;

    return {
      subtotal, // Return the subtotal
      total: finalTotal, // Return the final total
    }; // Return the final total
  };
  const { subtotal, total } = calculateTotal(); // Destructure to get both values
  const navigate = useNavigate();
  const loginChecking = () => {
    if (userToken) {
      navigate("/checkout");
    } else {
      setLoginMassg("Please Signin First");
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
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="product-row row g-3 p-5 border-bottom w-100"
                  >
                    <div className="col-md-5 d-flex justify-content-start align-items-center">
                      <div className="d-flex justify-content-center align-items-center">
                        <div
                          className="product-image me-4"
                          onClick={() => removeItem(item.id)}
                        >
                          <div className="product-image-overlay">
                            <FaXmark />
                          </div>
                          <img src={item.src} alt="product" />
                        </div>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center">
                      <span className="fs-6 text-secondary d-flex gap-2">
                        <span className="d-block d-md-none">Piece: </span>${" "}
                        {item.price}
                      </span>
                    </div>
                    <div className="col-md-3 d-flex justify-content-start align-items-center p-0">
                      <div className="w-100 row border border-light-subtle quantity-btns rounded-2 overflow-hidden">
                        <button
                          className="d-flex justify-content-center align-items-center col-4 transition"
                          onClick={() => decrement(item.id)}
                        >
                          -
                        </button>
                        <div className="d-flex justify-content-center align-items-center col-4 p-0">
                          <input
                            type="number"
                            className="amount-input w-100 h-100 d-flex justify-content-center align-items-center bg-body-tertiary text-center"
                            value={item.quantity}
                          />
                        </div>
                        <button
                          className="d-flex justify-content-center align-items-center col-4 transition"
                          onClick={() => increment(item.id)}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center">
                      <span className="fs-6 text-secondary-emphasis d-flex gap-2">
                        <span className="d-block d-md-none">
                          Total Pieces:{" "}
                        </span>
                        $ {Math.round(item.price * item.quantity * 100) / 100}
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
                    onClick={loginChecking}
                    className="rounded-pill text-uppercase w-100 border-0"
                  >
                    Proceed to Checkout
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
