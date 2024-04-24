import React, { useEffect, useState } from "react";
import "./Home.css";
import img from "../../Assets/slide-01.jpg";
import img1 from "../../Assets/slide-02.jpg";
import img2 from "../../Assets/banner-02.jpg";
import img3 from "../../Assets/slide-03.jpg";
import img4 from "../../Assets/banner-01.jpg";
import img5 from "../../Assets/banner-03.jpg";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

import { motion } from "framer-motion";
import Shop from "../Shop/Shop";

export default function Home() {
  const productCards = [1, 2, 3, 4, 5, 6]; // An array to represent each ProductCard
  const [currentSlide, setCurrentSlide] = useState(0);
  const [btnState, setBtnState] = useState(false);
  const totalSlides = 3; // Update based on the number of slides
  const navigate = useNavigate();
  const handleSlideChange = (newIndex) => {
    if (newIndex >= totalSlides) {
      setCurrentSlide(0); // Wrap around to the first slide
    } else if (newIndex < 0) {
      setCurrentSlide(totalSlides - 1); // Wrap around to the last slide
    } else {
      setCurrentSlide(newIndex);
    }
  };
  const handleButtonsClicks = () => {
    setBtnState(true); // Disable the buttons
    setTimeout(() => {
      setBtnState(false); // Enable the buttons after 3 seconds
    }, 1000);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      // Calculate the new index and pass it to handleSlideChange
      handleSlideChange((currentSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, totalSlides]); // Added totalSlides to the dependency array

  return (
    <>
      <main id="home">
        <section
          id="carouselExampleFade"
          className="carousel slide carousel-fade vh-100"
        >
          <div className="carousel-inner">
            <div
              className={`carousel-item ${currentSlide === 0 ? "active" : ""}`}
            >
              <img src={img} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-2">
                <div className="carousel-item-text position-absolute">
                  <motion.p
                    key={`motion-p1-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ x: [-300, 0], opacity: 1 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                  >
                    Men's New Collection
                  </motion.p>
                  <motion.h1
                    key={`motion-h1-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ x: [300, 0], opacity: 1 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                  >
                    Hello OOFA
                  </motion.h1>
                  <motion.button
                    key={`motion-button1-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                    onClick={()=>{navigate("/products")}}

                  >
                    Explore More
                  </motion.button>
                </div>
              </div>
            </div>
            <div
              className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}
            >
              <img src={img1} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-2">
                <div className="carousel-item-text position-absolute">
                  <motion.p
                    key={`motion-p3-${currentSlide}`}
                    initial={{ x: 300, opacity: 0, rotateY: 180 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                  >
                    Winter New Collection
                  </motion.p>
                  <motion.h1
                    key={`motion-h3-${currentSlide}`}
                    initial={{ x: -300, opacity: 0, rotateY: 180 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                    
                  >
                    Hello RADWAAAA
                  </motion.h1>
                  <motion.button
                    key={`motion-button3-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                    onClick={()=>{navigate("/products")}}
                  >
                    Explore More
                  </motion.button>
                </div>
              </div>
            </div>
            <div
              className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}
            >
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-2">
                <div className="carousel-item-text position-absolute">
                  <motion.p
                    key={`motion-p4-${currentSlide}`}
                    initial={{ opacity: 0, rotateX: 360 }}
                    animate={{ opacity: 1, rotateX: 0 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                  >
                    There is No Collection
                  </motion.p>
                  <motion.h1
                    key={`motion-h4-${currentSlide}`}
                    initial={{ opacity: 0, scale: 0.75 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                    }}
                  >
                    Hello THOOOOOMAIAAAAAAA
                  </motion.h1>
                  <motion.button
                    key={`motion-button4-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, rotate: [0, 180, 270, 360] }}
                    transition={{
                      type: "Tween",
                      ease: "linear",
                      duration: 0.6,
                      scale: { duration: 0.1 },
                    }}
                    whileTap={{ scale: 0.1 }}
                    onClick={()=>{navigate("/products")}}
                  >
                    Explore More
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            disabled={btnState}
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
            onClick={() => {
              if (!btnState) {
                handleSlideChange(currentSlide - 1);
                handleButtonsClicks();
              }
            }}
          >
            <BiSolidLeftArrow/>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            disabled={btnState} // Set the disabled attribute based on btnState
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
            onClick={() => {
              if (!btnState) {
                handleSlideChange(currentSlide + 1);
                handleButtonsClicks();
              }
            }}
          >
            <BiSolidRightArrow/>
            <span className="visually-hidden">Next</span>
          </button>
        </section>
        <section className="category-boxs py-3 px-2 py-md-4 px-md-4 my-5">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div className="category-box w-100 border border-1 position-relative">
                  <img src={img4} alt="" />
                  <div className="category-box-text position-absolute">
                    <h3>Women</h3>
                    <p>Spring 2018</p>
                  </div>
                  <span className="shop-btn position-absolute text-white text-uppercase">
                    shop now
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div className="category-box w-100 border border-1 position-relative">
                  <img src={img2} alt="" />
                  <div className="category-box-text position-absolute">
                    <h3>Men</h3>
                    <p>Spring 2018</p>
                  </div>
                  <span className="shop-btn position-absolute text-white text-uppercase">
                    shop now
                  </span>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4 p-3">
                <div className="category-box w-100 border border-1 position-relative">
                  <img src={img5} alt="" />
                  <div className="category-box-text position-absolute">
                    <h3>Accessories</h3>
                    <p>Spring 2018</p>
                  </div>
                  <span className="shop-btn position-absolute text-white text-uppercase">
                    shop now
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="product-overview">
          <div className="container">
            <h2 className="title">PRODUCT OVERVIEW</h2>
            </div>
            {/* <div className="row justify-content-start row-gap-4 row-gap-lg-5 flex-wrap">
              {productCards.map((card, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
                  <ProductCard />
                </div>
              ))}
            </div > */}
            <Shop/>
        </section>
      </main>

    </>
  );
}
