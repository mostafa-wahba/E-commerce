import React, { useState } from "react";
import { BsArrowUpSquare } from "react-icons/bs";
import { BsArrowDownSquare } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { SlSocialPintarest } from "react-icons/sl";
import { BsInstagram } from "react-icons/bs";
import "./SingleProduct.css";
import img from "../../Assets/g-01.jpg";
import img1 from "../../Assets/g-04.jpg";
import img2 from "../../Assets/g-03.jpg";
import img3 from "../../Assets/p-11.jpg";
export default function SingleProduct() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
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
  return (
    <>
      <div className="container single-product-container d-flex  flex-column justify-content-between align-items-center gap-5">
        <div className="product-and-product-details d-flex justify-content-center gap-5">
          <div
            id="carouselExampleIndicators"
            className="carousel slide w-100"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              >
                <img src={img} className="d-block w-100" alt="..." />
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              >
                <img src={img1} className="d-block w-100" alt="..." />
              </button>
              <button
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              >
                <img src={img2} className="d-block w-100" alt="..." />
              </button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active w-100">
                <img src={img} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item w-100">
                <img src={img1} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item w-100">
                <img src={img2} className="d-block w-100" alt="..." />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
          <div className="product-details  pt-3">
            <h5>Ribbed Bodycon Dress</h5>
            <div className="price d-flex justify-content-between">
              <p>$30.00</p>
              <p className=" text-info">In Stock</p>
            </div>
            <hr />
            <p>
              Go sporty this summer with this vintage navy and white striped
              v-neck t-shirt from the Nike. Perfect for pairing with denim and
              white kicks for a stylish sporty vibe.
            </p>
            <div className="count-cart d-flex justify-content-around">
              <div className="product-count border border-1 d-flex justify-content-between align-items-center gap-5">
                <span>{count}</span>
                <div className="counter-btn-container d-flex justify-content-center align-items-center flex-column ">
                  <button
                  className=" border-0"
                  onClick={increment}
                  style={{
                    background: "none",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <BsArrowUpSquare
                      style={{
                        color: "#0dcaf0",
                      }}
                    />
                  </div>
                </button>
                <button
                  className=" border-0"
                  onClick={decrement}
                  style={{
                    background: "none",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "#ffffff",
                    }}
                  >
                    <BsArrowDownSquare
                      style={{
                        color: "#0dcaf0",
                      }}
                    />
                  </div>
                </button>
                </div>
                
              </div>
              <button className="btn bg-info p-2 text-white">
                Add to cart
              </button>
              <div
                style={{
                  backgroundColor: "#ffffff,",
                  width: "50px",
                }}
              >
                <BsHeartFill
                  style={{
                    color: "#009dff",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>
            <div className="product-country mt-5">
              <p>
                SKU: <span>P-01</span>
              </p>
              <p>
                Categories: <span>Accessories, Clothing</span>
              </p>
              <p>
                Tags: <span>Accessories, T-shirt</span>
              </p>
            </div>
            <div className="social-icons d-flex justify-content-center gap-4">
              <BiLogoFacebook />
              <AiOutlineTwitter />
              <SlSocialPintarest />
              <BsInstagram />
            </div>
          </div>
        </div>
        <div className="related-products">
          <h4 className=" text-center">Related Product (s)</h4>
          
        </div>
      </div>
    </>
  );
}
