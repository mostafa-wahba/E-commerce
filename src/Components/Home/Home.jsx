import React from "react";
import "./Home.css";
import img from "../../Assets/slide-01.jpg";
import img1 from "../../Assets/slide-02.jpg";
import img2 from "../../Assets/banner-02.jpg";
import img3 from "../../Assets/slide-03.jpg";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <main>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item position-relative active">
              <img src={img} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-0">
                <div className="carousel-item-text position-absolute">
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ x: [-300, 0], opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.6 }}
                  >
                    Men's New Collection
                  </motion.p>
                  <motion.h1
                    initial={{ opacity: 0 }}
                    animate={{ x: [300, 0], opacity: 1 }}
                    transition={{ ease: "linear", duration: 0.6 }}
                  >
                    Hello OOFA
                  </motion.h1>
                  <motion.button
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ ease: "linear", duration: 0.6 }}
                  >
                    Explore More
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img1} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-0">
                <div className="carousel-item-text position-absolute">
                  <p>Women's New Collection</p>
                  <h1>Hello Radwa</h1>
                  <button>Explore More</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img2} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-0">
                <div className="carousel-item-text position-absolute">
                  <p>Men's New Collection</p>
                  <h1>Hello Kero</h1>
                  <button>Explore More</button>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={img3} className="d-block w-100" alt="..." />
              <div className="container px-5 p-xxl-0">
                <div className="carousel-item-text position-absolute">
                  <p>There is No Collection</p>
                  <h1>Hello Thooooomiaaaaaa</h1>
                  <button>Explore More</button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>
    </>
  );
}
