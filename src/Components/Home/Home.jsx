import React, { useContext, useEffect, useState } from "react";
import "./Home.css";
import img2 from "../../Assets/banner-02.jpg";
import img4 from "../../Assets/banner-01.jpg";
import img5 from "../../Assets/banner-03.jpg";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Shop from "../Shop/Shop";
import { ProductsContext } from "../../Context/ProductsContext";
import Loading from "../Loading/Loading";

export default function Home() {
  const { categories, isLoading,setIsLoading } = useContext(ProductsContext);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [musicCategory, setMusicCategory] = useState([]);
  const [mensFashionCategory, setMensFashionCategory] = useState([]);
  const [mobilesCategory, setMobilesCategory] = useState([]);
  const [btnState, setBtnState] = useState(false);
  const totalSlides = 3; // Update based on the number of slides
  const navigate = useNavigate();
  useEffect(() => {
    setIsLoading(true); // Set loading to true when component mounts
    if (categories.length > 0) {
      setMusicCategory(categories.filter((cat) => cat.slug === "music"));
      setMensFashionCategory(
        categories.filter((cat) => cat.slug === "men's-fashion")
      );
      setMobilesCategory(categories.filter((cat) => cat.slug === "mobiles"));
      setIsLoading(false); // Set loading to false once categories are set
    }
  }, [categories, setIsLoading]);
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
  if (isLoading) {
    return <Loading />; // Display the loading screen while data is fetching
  }
  return (
    <>
        <div id="home">
          <section
            id="carouselExampleFade"
            className="carousel slide carousel-fade vh-100 z-1"
          >
            <div className="carousel-inner">
              <div
                className={`carousel-item ${
                  currentSlide === 0 ? "active" : ""
                }`}
              >
                <div className="carousel-layer"></div>
                <img
                  src={musicCategory[0]?.image}
                  className="d-block w-100"
                  alt="..."
                />
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
                      Follow your passion with
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
                      {musicCategory[0]?.name}
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
                      onClick={() => {
                        navigate("/products");
                      }}
                    >
                      Explore More
                    </motion.button>
                  </div>
                </div>
              </div>
              <div
                className={`carousel-item ${
                  currentSlide === 1 ? "active" : ""
                }`}
              >
                <div className="carousel-layer"></div>
                <img
                  src={mensFashionCategory[0]?.image}
                  className="d-block w-100"
                  alt="..."
                />
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
                      Winter collection
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
                      {mensFashionCategory[0]?.name}
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
                      onClick={() => {
                        navigate("/products");
                      }}
                    >
                      Explore More
                    </motion.button>
                  </div>
                </div>
              </div>
              <div
                className={`carousel-item ${
                  currentSlide === 2 ? "active" : ""
                }`}
              >
                <div className="carousel-layer"></div>
                <img
                  src={mobilesCategory[0]?.image}
                  className="d-block w-100"
                  alt="..."
                />
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
                      life smart with
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
                      {mobilesCategory[0]?.name}
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
                      onClick={() => {
                        navigate("/products");
                      }}
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
              <BiSolidLeftArrow />
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
              <BiSolidRightArrow />
              <span className="visually-hidden">Next</span>
            </button>
          </section>
          <section className="category-boxs py-3 px-2 py-md-4 px-md-4 my-5">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4 p-3">
                  <div
                    onClick={() => {
                      navigate("/products");
                    }}
                    className="category-box w-100 border border-1 position-relative"
                  >
                    <img src={img4} alt="" />
                    <div className="category-box-text position-absolute">
                      <h3>Women</h3>
                      <p>Summer 2024</p>
                    </div>
                    <span className="shop-btn position-absolute text-white text-uppercase">
                      shop now
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-3">
                  <div
                    onClick={() => {
                      navigate("/products");
                    }}
                    className="category-box w-100 border border-1 position-relative"
                  >
                    <img src={img2} alt="" />
                    <div className="category-box-text position-absolute">
                      <h3>Men</h3>
                      <p>Summer 2024</p>
                    </div>
                    <span className="shop-btn position-absolute text-white text-uppercase">
                      shop now
                    </span>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-4 p-3">
                  <div
                    onClick={() => {
                      navigate("/products");
                    }}
                    className="category-box w-100 border border-1 position-relative"
                  >
                    <img src={img5} alt="" />
                    <div className="category-box-text position-absolute">
                      <h3>Accessories</h3>
                      <p>Summer 2024</p>
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
            <Shop />
          </section>
        </div>
    </>
  );
}
