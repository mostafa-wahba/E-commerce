import React, { useState } from "react";
import "./Cart.css";

import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";
import img1 from "../../Assets/about-02.jpg.webp";
export default function Cart() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Product A",
      price: 29.99,
      quantity: 2,
      src: img1,
    },
    { id: 2, name: "Product B", price: 19.99, quantity: 1, src: img1 },
  ]);
  // const calculateTotal = () => {
  //   return items.reduce((total, item) => total + item.price * item.quantity, 0);
  // };
  return (
    <>
      <div className="container cart-container">
        <div className="row d-flex justify-content-between mb-4">
          <div className="col-md-6 border border-1">
            <div className="">
              <div className="product-title d-flex justify-content-around align-items-center p-1 border-bottom">
                <p>PRODUCT</p>
                <p>PRICE</p>
                <p>QUANTITY</p>
                <p>TOTAL</p>
              </div>
              {/* {items.map((item) => (
                <div key={item.id} className="product-details d-flex justify-content-around align-items-center p-1 border-bottom">
                  <div className="product-image">
                  <img
                    style={{
                      width: "50px",
                      height: "50px",
                    }}
                    src={item.src}
                    alt=""
                  />
                  </div>
                  <div className="product-price">

                  <p>{item.price}</p>
                  </div>
                  <div className="product-quntity">

                  <div className="count-cart d-flex justify-content-start align-items-start gap-4">
                    <div className="product-count d-flex justify-content-between align-items-center gap-4 h-100">
                      <span className="ms-4">{count}</span>

                      <div className="counter-btn-container d-flex justify-content-center align-items-center flex-column">
                        <button className="bg-transparent " onClick={increment}>
                          <IoIosArrowRoundUp />
                        </button>
                        <button className="bg-transparent" onClick={decrement}>
                          <IoIosArrowRoundDown />
                        </button>
                      </div>
                    </div>
                  </div>
                  </div>
                  <div className="product-total-price overflow-hidden">

                  <p>{item.price * count}</p>
                  </div>

                </div>
              ))} */}
            </div>
          </div>
          <div className="col-md-5 border border-1">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              aut architecto, nihil, doloremque quis quod eius soluta quisquam
              sequi voluptas corporis eaque deserunt cum beatae est blanditiis.
              Quo, quos inventore.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              aut architecto, nihil, doloremque quis quod eius soluta quisquam
              sequi voluptas corporis eaque deserunt cum beatae est blanditiis.
              Quo, quos inventore.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              aut architecto, nihil, doloremque quis quod eius soluta quisquam
              sequi voluptas corporis eaque deserunt cum beatae est blanditiis.
              Quo, quos inventore.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error
              aut architecto, nihil, doloremque quis quod eius soluta quisquam
              sequi voluptas corporis eaque deserunt cum beatae est blanditiis.
              Quo, quos inventore.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
