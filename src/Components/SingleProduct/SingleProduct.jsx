import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";
import { IoIosArrowRoundDown } from "react-icons/io";
import { IoIosArrowRoundUp } from "react-icons/io";

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
      <main>
        <div className="container single-product-container d-flex  flex-column justify-content-between align-items-center gap-5">
          <div className="product-and-product-details d-flex justify-content-center align-items-center gap-5">
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
            <div className="product-details w-100">
              <h5>Ribbed Bodycon Dress</h5>
              <div className="price d-flex justify-content-between">
                <p>$30.00</p>
                <p className=" text-info curser-pointer">In Stock</p>
              </div>
              <hr />
              <p className="mb-3">
                Go sporty this summer with this vintage navy and white striped
                v-neck t-shirt from the Nike. Perfect for pairing with denim and
                white kicks for a stylish sporty vibe.
              </p>
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
                <button className="add-cart-btn text-white transition py-2 px-4 h-100">
                  Add to cart
                </button>
                <div className="heart-icon p-3 h-100">
                  <FaRegHeart />
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
          <section className="related-products">
            <h4 className=" text-center">Related Product (s)</h4>
            <div className="products-card d-flex justify-content-between gap-5">
              <div
                className=" position-relative card"
                style={{ width: "18rem;" }}
              >
                <img src={img3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              {/* <div className="  bg-black position-absolute w-100 h-100 overlaye"></div> */}
              <div class="card" style={{ width: "18rem;" }}>
                <img src={img3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
              <div class="card" style={{ width: "18rem;" }}>
                <img src={img3} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
