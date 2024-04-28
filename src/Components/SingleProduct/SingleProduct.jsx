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
import { MdStarRate } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import RelatedProductSlider from "../RelatedProductSlider/RelatedProductSlider";
export default function SingleProduct() {
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
  return (
    <>
      <div id="single-product">
        <div className="container single-product-container d-flex  flex-column justify-content-between align-items-center gap-5">
          <div className="product-and-product-details d-flex justify-content-center gap-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide w-100 spooduct-container"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide-to="0"
                  className="active"
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
            <div className="product-details pt-3 w-100">
              <h4>Lightweight Jacket</h4>
              <div className="price d-flex justify-content-between">
                <p className="price-text">$30.00</p>
                <p className="curser-pointer">In Stock</p>
              </div>
              <hr />
              <p className="mb-3 description-text">
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
                  <BsHeartFill />
                </div>
              </div>

              <div className="product-country mt-5 d-flex flex-column gap-2">
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
          <div className="description-and-ratting w-100 row border p-2 ">
            <ul
              className="nav nav-pills mb-3 d-flex justify-content-center align-items-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item text-dark" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-home-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-home"
                  type="button"
                  role="tab"
                  aria-controls="pills-home"
                  aria-selected="true"
                >
                  Description
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-profile-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-profile"
                  type="button"
                  role="tab"
                  aria-controls="pills-profile"
                  aria-selected="false"
                >
                  Addational Information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-contact-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-contact"
                  type="button"
                  role="tab"
                  aria-controls="pills-contact"
                  aria-selected="false"
                >
                  Reviwes (1)
                </button>
              </li>
            </ul>
            <div className="tab-content review-details" id="pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="pills-home"
                role="tabpanel"
                aria-labelledby="pills-home-tab"
                tabIndex="0"
              >
                <p className="text-muted">
                  Aenean sit amet gravida nisi. Nam fermentum est felis, quis
                  feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque
                  luctus dui at ante aliquet, in hendrerit lectus interdum.
                  Morbi elementum sapien rhoncus pretium maximus. Nulla lectus
                  enim, cursus et elementum sed, sodales vitae eros. Ut ex quam,
                  porta consequat interdum in, faucibus eu velit. Quisque
                  rhoncus ex ac libero varius molestie. Aenean tempor sit amet
                  orci nec iaculis. Cras sit amet nulla libero. Curabitur
                  dignissim, nunc nec laoreet consequat, purus nunc porta lacus,
                  vel efficitur tellus augue in ipsum. Cras in arcu sed metus
                  rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                </p>
              </div>
              <div
                className="tab-pane fade"
                id="pills-profile"
                role="tabpanel"
                aria-labelledby="pills-profile-tab"
                tabIndex="0"
              >
                <div className="single-product-info d-flex justify-content-center align-items-center ">
                  <div className="d-flex flex-column gap-3">
                  <div className="each-info d-flex justify-content-around gap-5">
                    <span>Weight</span>
                    <span>79.2Kg</span>
                  </div>
                  <div className="each-info d-flex justify-content-around gap-5">
                    <span>Dimensions</span>
                    <span>110 x 33 x 100 cm</span>
                  </div>
                  <div className="each-info d-flex justify-content-around gap-5">
                    <span>Materials</span>
                    <span>60% cotton</span>
                  </div>
                  <div className="each-info d-flex justify-content-around gap-5">
                    <span>Color</span>
                    <span>Black, Blue, Grey</span>
                  </div>
                  <div className="each-info d-flex justify-content-around gap-5">
                    <span>Size</span>
                    <span>XL, L, M, S</span>
                  </div>
                  </div>
                </div>
                {/* <div className="row ">
                  <div className="col-6 col-md-12 d-flex justify-content-center">
                    <div className="items-details w-50 d-flex justify-content-center flex-column ">
                      <div className="each-item d-flex justify-content-between gap-2 text-muted ">
                        <span>Weight</span>
                        <span>79.2Kg</span>
                      </div>
                      <div className="each-item d-flex justify-content-between gap-2 text-muted">
                        <span>Dimensions</span>
                        <span>110 x 33 x 100 cm</span>
                      </div>
                      <div className="each-item d-flex justify-content-between gap-2 text-muted">
                        <span>Materials</span>
                        <span>60% cotton</span>
                      </div>
                      <div className="each-item d-flex justify-content-between gap-2 text-muted">
                        <span>Color</span>
                        <span>Black, Blue, Grey</span>
                      </div>
                      <div className="each-item d-flex justify-content-between gap-2 text-muted">
                        <span>Size</span>
                        <span>XL, L, M, S</span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div
                className="tab-pane fade"
                id="pills-contact"
                role="tabpanel"
                aria-labelledby="pills-contact-tab"
                tabIndex="0"
              >
                <div className="reviews d-flex justify-content-center align-items-center flex-column ">
                  <div className="user-review d-flex ">
                    <div className="user-image me-3">
                      <img src={img} alt="" />
                    </div>
                    <div className="user-name ">
                      <div className="name-and-rating d-flex justify-content-between align-items-center gap-5">
                        <h6 className="">Ariana Grande</h6>
                        <div className="rating">
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <MdStarRate />
                          <CiStar />
                        </div>
                      </div>
                      <p className="text-muted">
                        Quod autem in homine praestantissimum atque optimum est,
                        id deseruit. Apud ceteros autem philosophos
                      </p>
                    </div>
                  </div>
                  <form
                    action=""
                    className=" mt-5 d-flex flex-column gap-5 w-100"
                  >
                    <h6>Add a review</h6>
                    <p className=" text-muted mb-4">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                    <div className="your-rating d-flex justify-content-between ">
                      <span>Your Rating</span>
                      <span>
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                        <CiStar />
                      </span>
                    </div>
                    <div className="textarea">
                      <textarea
                        name=""
                        id=""
                        cols="30"
                        rows="10"
                        placeholder="Your Review"
                        className=" p-2 border-0"
                      ></textarea>
                    </div>
                    <div className="name-and-email d-flex justify-content-between gap-4">
                      <input
                        type="text"
                        name=""
                        id=""
                        placeholder="Name"
                        className=" ps-5 border-1 "
                      />
                      <input
                        type="email"
                        name=""
                        id=""
                        placeholder="Email"
                        className=" ps-5 border-1 "
                      />
                    </div>

                    <input
                      type="submit"
                      value="Submit"
                      className="btn btn-dark"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
          <RelatedProductSlider/>
        </div>
      </div>
    </>
  );
}
