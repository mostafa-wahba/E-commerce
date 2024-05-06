import React, { useEffect, useState } from "react";
import "./Checkout.css";
import { IoLocationOutline } from "react-icons/io5";
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
export default function Checkout() {
  const {
    getLoggedUserCart,
    subtotal,
    total,
    shippingCost,
    headers,
    loading,
    setLoading,
    clearCart,
    checkoutDone,
  } = useContext(CartContext);
  const [checkoutProducts, setCheckoutProducts] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("Cash");
  const [cartId, setCartId] = useState(null);
  const [checkoutDetails, setCheckoutDetails] = useState(null);
  async function handleSubmit(values, { setSubmitting }) {
    try {
    let response = await checkoutPayment(cartId, values);
    if (response?.data?.status === "success") {
      if (paymentMethod==="Online") {
        window.location.href = response.data.session.url;
        clearCart();
        localStorage.removeItem("cart")
      }
      else{
        clearCart();
        localStorage.removeItem("cart");
        navigate("/");
        checkoutDone()
      }
    }
  }catch (error) {
      console.error("Checkout failed:", error);
    } finally {
      setLoading(false); // Set loading to false once submission is complete
      setSubmitting(false);
    }
  }
  let validation = Yup.object({
    details: Yup.string()
      .required("Please Enter The Location Details")
      .min(7, "Please write a valid Location"),
    phone: Yup.string()
      .required("Please Enter Your Phone Number")
      .matches(/^01[012][0-9]{8}$/, "Phone number must be a valid number"),
    city: Yup.string().required("Please Enter The Name of The City"),
  });
  let formik = useFormik({
    initialValues: {
      details: "",
      phone: "",
      city: "",
    },
    onSubmit: handleSubmit,
    validationSchema: validation,
  });
  const cookies = new Cookies();
  const userToken = cookies.get("userToken");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCart = async () => {
      try {
      const response = await getLoggedUserCart();
      if (response?.data?.status === "success") {
        setCheckoutDetails(response.data.data);
        setCheckoutProducts(response.data.data.products);
        setCartId(response.data.data._id);
      } else {
        // Handle error or empty cart scenario
        console.error("Failed to fetch cart:", response);
        setCheckoutProducts([]);
      }} catch (error) {
        console.error("Error fetching cart:", error);
      } finally {
        setLoading(false); // Set loading to false once fetch is complete
      }
    };
    fetchCart();
  }, [getLoggedUserCart, setLoading]);
  const checkoutPayment = (cartId, shippingAddress) => {
    setLoading(true);
    if (!userToken) {
      setLoading(false);
      navigate("/");
    } else {
      if (paymentMethod==="Cash") {
        return axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/${cartId}`,
          { shippingAddress: shippingAddress },
          { headers: headers }
        )
        .then((response) => {
          setLoading(false);
          return response;
        })
        .catch((error) => {
          setLoading(false);
          return error;
        });
      }
      else{
        return axios
        .post(
          `https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}?url=http://localhost:3000`,
          { shippingAddress: shippingAddress },
          { headers: headers }
        )
        .then((response) => {
          setLoading(false);
          return response;
        })
        .catch((error) => {
          setLoading(false);
          return error;
        });
      }
    }
  };
  return (
    <>
      <div id="checkout">
        <div className="container d-flex justify-content-center">
          <form
            onSubmit={formik.handleSubmit}
            className="row align-items-start justify-content-center gap-1 w-100 m-0"
          >
            <div className="shipment-details col-12 col-lg-7 me-auto mb-5 d-flex justify-content-center align-items-center flex-column gap-5">
              <div className="address-details w-100">
                <h3 className="mb-4 fw-bold">Shipping Address</h3>
                <div className="row g-1 w-100 justify-content-start border rounded-2 p-4 m-0">
                  <div className="col-1">
                    <span className="d-flex justify-content-start align-items-center w-100 h-100">
                      <IoLocationOutline className="fs-1" />
                    </span>
                  </div>
                  <div className="col-11">
                    <div className="d-flex justify-content-center align-items-start flex-column w-100 gap-2">
                      <label htmlFor="details">Location: </label>
                      <input
                        type="text"
                        id="details"
                        className="details-input form-control w-100"
                        placeholder="3B Oraby Street, Embaba"
                        value={formik.values.details}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.details && formik.touched.details ? (
                        <div className="alert alert-danger m-0 p-2 w-100">
                          {formik.errors.details}
                        </div>
                      ) : null}
                      <label htmlFor="city">City: </label>
                      <input
                        type="text"
                        id="city"
                        className="city-input form-control w-100"
                        placeholder="Cairo"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.city && formik.touched.city ? (
                        <div className=" alert alert-danger m-0 p-2 w-100">
                          {formik.errors.city}
                        </div>
                      ) : null}
                      <label htmlFor="phone">Phone:</label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        className="phone-input form-control w-100"
                        placeholder="01*********"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                      {formik.errors.phone && formik.touched.phone ? (
                        <div className=" alert alert-danger m-0 p-2 w-100">
                          {formik.errors.phone}
                        </div>
                      ) : null}
                      <span className="payment-methods">Payment Methods: </span>
                      <div className="w-100 d-flex justify-content-start align-items-center gap-3">
                        <div className="payment-methods1 d-flex justify-content-start align-items-center gap-1">
                          <input
                            type="radio"
                            id="payment-options1"
                            name="payment-options"
                            className="form-check-input"
                            value="Cash"
                            checked={paymentMethod === "Cash"} // Checks if 'Cash' is the selected payment method
                            onChange={() => setPaymentMethod("Cash")}
                          />
                          <label htmlFor="payment-options1">Cash</label>
                        </div>
                        <div className="payment-methods2 d-flex justify-content-start align-items-center gap-1">
                          <input
                            type="radio"
                            id="payment-options2"
                            name="payment-options"
                            className="form-check-input"
                            value="Online"
                            checked={paymentMethod === "Online"} // Checks if 'Online' is the selected payment method
                            onChange={() => setPaymentMethod("Online")}
                          />
                          <label htmlFor="payment-options2">Online</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="orders w-100">
                <h3 className="mb-4 fw-bold">Your Order</h3>
                {checkoutProducts !== null ? (
                  <>
                    {checkoutProducts.map((item, index) => (
                      <div
                        key={item._id}
                        className="row g-3 w-100 justify-content-start border rounded-2 pb-3 px-5 m-0 mb-2"
                      >
                        <div className="col-12">
                          <h5>Shipment Number #{index + 1}</h5>
                        </div>
                        <div className="col-2">
                          <div className="product-image position-relative">
                            <span className="product-quantity rounded-pill py-1 px-2 px-md-3 position-absolute ">
                              <span>X</span>
                              {item.count}
                            </span>
                            <img
                              src={item.product.imageCover}
                              alt="product"
                              className="object-fit-cover h-100"
                            />
                          </div>
                        </div>
                        <div className="col-10">
                          <div className="product-details d-flex flex-column gap-1">
                            <p className="product-name fw-bold">
                              {item.product.title}
                            </p>
                            <p className="product-desc">
                              {item.product.brand.name}
                            </p>
                            <span className="product-price">
                              $ {item.price}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : (
                  <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                )}
              </div>
            </div>
            <div className="order-summery d-flex flex-column justify-content-center align-items-center col-sm-10 col-lg-4 ms-lg-auto mb-5 p-0 gap-3">
              <div className="address-details w-100">
                <h3 className="mb-4 fw-bold">Order Summery</h3>
                <div className="d-flex w-100 justify-content-start border rounded-2 p-4 flex-column">
                  <p className="fs-5 fw-medium">Order details</p>
                  <div className="d-flex justify-content-between">
                    <p className="text-light-emphasis">Subtotal</p>
                    <span className="text-light-emphasis">$ {subtotal}</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-light-emphasis">Shipping Fees</p>
                    <span
                      className={`${
                        total > 500 ? "text-success" : "text-warning"
                      } fw-medium`}
                    >
                      {total > 500 ? "Free" : "+ $" + shippingCost}
                    </span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="fw-medium">
                      Total{" "}
                      <span className="fw-normal text-light-emphasis">
                        Includes Tax
                      </span>
                    </p>
                    <span className="fw-medium">$ {total}</span>
                  </div>
                </div>
              </div>
              <div className="placeOrder-btn w-100">
                <button
                  type="submit"
                  className="rounded-pill text-uppercase w-100 border-0"
                >
                  {loading ? (
                    <div className="spinner-border" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                  ) : (
                    "Place Order"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
