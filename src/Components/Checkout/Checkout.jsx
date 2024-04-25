import React, { useState } from "react";
import "./Checkout.css";
import { IoLocationOutline } from "react-icons/io5";
import img1 from "../../Assets/item-cart-04.jpg";
import img2 from "../../Assets/item-cart-05.jpg";
import img3 from "../../Assets/o189896b.png";
import img4 from "../../Assets/o187188b.png";
export default function Checkout() {
    const [items, setItems] = useState([
        {
          id: 1,
          name: "Fresh Strawberries",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero ut officia, magni perferendis dolorum",
          price: 29.99,
          quantity: 7,
          src: img1,
        },
        {
          id: 2,
          name: "Lightweight Jacket",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero ut officia, magni perferendis dolorum dolor sit amet consectetur adipisicing elit.",
          price: 19.99,
          quantity: 4,
          src: img2,
        },
        {
          id: 3,
          name: "human for sale",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero ut officia, magni perferendis dolorum",
          price: 2.78,
          quantity: 1,
          src: img3,
        },
        {
          id: 4,
          name: "black bag",
          description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vero ut officia, magni perferendis dolorum dolor sit amet consectetur adipisicing elit.",
          price: 11.99,
          quantity: 10,
          src: img4,
        },
      ]);
  return (
    <>
      <main id="checkout">
        <div className="container d-flex justify-content-center">
          <div className="row align-items-start justify-content-center gap-1 w-100 m-0">
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
                    <form className="d-flex justify-content-center align-items-start flex-column w-100 gap-2">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        id="name"
                        className="address-input form-control w-100"
                        placeholder="Mostafa Amgad Wahba"
                      />
                      <label htmlFor="phone">Phone: </label>
                      <input
                        type="number"
                        name="phone"
                        className="address-input form-control w-100"
                        placeholder="01*********"
                      />
                      <label htmlFor="address">Location: </label>
                      <input
                        type="text"
                        id="address"
                        className="address-input form-control w-100"
                        placeholder="3B Oraby Street Embaba, Cairo"
                      />
                    </form>
                  </div>
                </div>
              </div>
              <div className="orders w-100">
                <h3 className="mb-4 fw-bold">Your Order</h3>
                {items.map((item,index) => (
                <div className="row g-3 w-100 justify-content-start border rounded-2 pb-3 px-5 m-0 mb-2">
                  <div className="col-12">
                    <h5>Shipment Number #{index+1}</h5>
                  </div>
                  <div className="col-2">
                    <div className="product-image position-relative">
                      <span className="product-quantity rounded-pill py-1 px-2 px-md-3 position-absolute ">
                        <span>X</span>{item.quantity}
                      </span>
                      <img
                        src={item.src}
                        alt="product"
                        className="object-fit-cover h-100"
                      />
                    </div>
                  </div>
                  <div className="col-10">
                    <div className="product-details d-flex flex-column gap-1">
                      <p className="product-name fw-bold">{item.name}</p>
                      <p className="product-desc">
                      {item.description}
                      </p>
                      <span className="product-price">$ {item.price}</span>
                    </div>
                  </div>
                </div>
                 ))}
              </div>
            </div>
            <div className="order-summery d-flex justify-content-center align-items-center col-sm-10 col-lg-4 ms-lg-auto mb-5 p-0">
              <div className="address-details w-100">
                <h3 className="mb-4 fw-bold">Order Summery</h3>
                <div className="d-flex w-100 justify-content-start border rounded-2 p-4 flex-column">
                  <p className="fs-5 fw-medium">Order details</p>
                  <div className="d-flex justify-content-between">
                    <p className="text-light-emphasis">Subtotal</p>
                    <span className="text-light-emphasis">$ 3246.00</span>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-light-emphasis">Shipping Fees</p>
                    <span className="text-success fw-medium">Free</span>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p className="fw-medium">
                      Total <p className="fw-normal text-light-emphasis">Includes Tax</p>
                    </p>
                    <span className="fw-medium">$ 3246.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
