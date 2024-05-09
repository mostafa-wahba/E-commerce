import React, { useContext, useEffect, useState } from "react";
import { FaStar, FaRegStar } from "react-icons/fa";
import {
  FaRegStarHalfStroke,
  FaAngleRight,
  FaAngleLeft,
} from "react-icons/fa6";
import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import { BsHeartFill, BsInstagram } from "react-icons/bs";
import { BiLogoFacebook } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { SlSocialPintarest } from "react-icons/sl";
import "./SingleProduct.css";
import img from "../../Assets/g-01.jpg";
import { MdStarRate } from "react-icons/md";
import { CiStar } from "react-icons/ci";
import RelatedProductSlider from "../RelatedProductSlider/RelatedProductSlider";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../Context/CartContext";
import { ProductsContext } from "../../Context/ProductsContext";
import Loading from "../Loading/Loading";
import { WishlistContext } from "../../Context/WishlistContext";
import { AuthContext } from "../../Context/AuthContext";

export default function SingleProduct() {
  const { token } = useContext(AuthContext);
  const { addProducts } = useContext(CartContext);
  const { addToCartNotify,addToWishlistNotify } = useContext(ProductsContext);
  const { sendToWishlist} = useContext(WishlistContext);
  const [count, setCount] = useState(1);
  let { id } = useParams();
  const [product, setProduct] = useState([]);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isWishlistCheck, setIsWishlistCheck] = useState(false);

  function increment() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrement() {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1));
  }

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      try {
        let response = await axios.get(
          `https://ecommerce.routemisr.com/api/v1/products/${id}`
        );
        setProduct(response.data.data);
        setImages(response.data.data.images);
      } catch (error) {
        console.error("Failed to fetch product data:", error);
      }
      setLoading(false);
    };

    getProduct();
  }, [id]);
  function addProductToCart(id, product) {
    addToCartNotify(id); // Pass the product ID for notification
    for (let i = 0; i < count; i++) {
      addProducts(product);
    }
  }
  const handleWishlistToggle = async () => {
    const newCheckStatus = !isWishlistCheck;
    setIsWishlistCheck(newCheckStatus); // Toggle the wishlist status
    if (token) { // Check if user is logged in
      try {
        await sendToWishlist(product.id); // Send product to wishlist
        addToWishlistNotify(newCheckStatus); // Notify about the wishlist addition
      } catch (error) {
        console.error('Failed to add to wishlist:', error);
        setIsWishlistCheck(!newCheckStatus); // Revert state on failure
      }
    } else {
      // Prompt user to login or show a notification
      console.log("Please log in to add items to your wishlist.");
    }
  };
  if (loading) {
    return <Loading />; // Here you can customize your loading indicator
  }
  return (
    <>
      <div id="single-product">
        <div className="container single-product-container d-flex flex-column justify-content-between align-items-center gap-5">
          <div className="product-and-product-details d-flex justify-content-center gap-5">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                {images.map((image, index) => (
                  <button
                    key={index}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : undefined}
                    aria-label={`Slide ${index + 1}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`Product ${index + 1}`}
                    />
                  </button>
                ))}
              </div>
              <div className="carousel-inner">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                  >
                    <img
                      src={image}
                      className="d-block w-100"
                      alt={`Product ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <GoChevronLeft />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <GoChevronRight />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <div className="product-details pt-3">
              <h4>{product.title}</h4>
              <div className="price d-flex justify-content-between">
                <div className="text d-flex gap-4">
                  <p className="price-text text-decoration-line-through ">
                    $ {product.price * 3}
                  </p>
                  <p className="price-text text-black">$ {product.price}</p>
                </div>
              </div>
              <hr />
              <p className="mb-3 description-text">{product.description}</p>
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
                <button
                  onClick={() => {
                    addProductToCart(product.id, product);
                  }}
                  className="add-cart-btn text-white transition py-2 px-4 h-100"
                >
                  Add to cart
                </button>
                <div
                onClick={handleWishlistToggle}
                className={`${isWishlistCheck?"heart-icon-checked":"heart-icon"} p-3 h-100 d-flex justify-content-center align-items-center`}>
                  <BsHeartFill />
                </div>
              </div>

              <div className="product-country mt-5 d-flex flex-column gap-2">
                <p>
                  Brand: <span>{product?.brand?.name}</span>
                </p>
                <p>
                  Categories: <span>{product?.category?.name}</span>
                </p>
                {product?.subcategory ? (
                  <p>
                    Tags: <span>{product?.subcategory[0]?.name}</span>
                  </p>
                ) : (
                  ""
                )}
                <p className="d-flex gap-1">
                  Rating:{" "}
                  <span className="text-primary d-flex justify-content-start align-items-center gap-1">
                    {product?.ratingsAverage}{" "}
                    {product?.ratingsAverage > 4.4 ? (
                      <FaStar className="mb-1" />
                    ) : product?.ratingsAverage > 1.4 ? (
                      <FaRegStarHalfStroke className="mb-1" />
                    ) : (
                      <FaRegStar className="mb-1" />
                    )}
                  </span>
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
          <div className="description-and-ratting w-100 row border py-4">
            <ul
              className="nav nav-pills mb-3 d-flex justify-content-center align-items-center"
              id="pills-tab"
              role="tablist"
            >
              <li className="nav-item text-dark" role="presentation">
                <button
                  className="nav-link active"
                  id="pills-info-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-info"
                  type="button"
                  role="tab"
                  aria-controls="pills-info"
                  aria-selected="true"
                >
                  Addational Information
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="pills-reviews-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-reviews"
                  type="button"
                  role="tab"
                  aria-controls="pills-reviews"
                  aria-selected="false"
                >
                  Reviwes ({product?.reviews?.length})
                </button>
              </li>
            </ul>
            <div
              className="tab-content review-details w-75 mx-auto my-4"
              id="pills-tabContent"
            >
              <div
                className="tab-pane fade show active"
                id="pills-info"
                role="tabpanel"
                aria-labelledby="pills-info-tab"
                tabIndex="0"
              >
                <div className="single-product-info d-flex justify-content-center align-items-center ">
                  <div className="d-flex flex-column gap-3">
                    <div className="d-flex justify-content-between gap-5">
                      <span>Weight</span>
                      <span>79.2Kg</span>
                    </div>
                    <div className="d-flex justify-content-between gap-5">
                      <span>Dimensions</span>
                      <span>110 x 33 x 100 cm</span>
                    </div>
                    <div className="d-flex justify-content-between gap-5">
                      <span>Materials</span>
                      <span>60% cotton</span>
                    </div>
                    <div className="d-flex justify-content-between gap-5">
                      <span>Color</span>
                      <span>Black, Blue, Grey</span>
                    </div>
                    <div className="d-flex justify-content-between gap-5">
                      <span>Size</span>
                      <span>XL, L, M, S</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="pills-reviews"
                role="tabpanel"
                aria-labelledby="pills-reviews-tab"
                tabIndex="0"
              >
                <div className="reviews d-flex justify-content-center align-items-center flex-column ">
                  {product?.reviews > 0 ? (
                    product?.reviews?.map((review, index) => (
                      <div key={index} className="user-review d-flex ">
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
                            Quod autem in homine praestantissimum atque optimum
                            est, id deseruit. Apud ceteros autem philosophos
                          </p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <h6 className="text-muted poppins-bold">
                      There is no reviews for this product
                    </h6>
                  )}

                  {/* <form
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
                  </form> */}
                </div>
              </div>
            </div>
          </div>
          <RelatedProductSlider />
        </div>
      </div>
    </>
  );
}
