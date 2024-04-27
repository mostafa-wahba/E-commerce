import React from "react";
import "./RelatedProductSlider.css";
import img from "../../Assets/about-01.jpg.webp";
import img1 from "../../Assets/about-02.jpg";
import img2 from "../../Assets/product-01.jpg";
import img3 from "../../Assets/p-11.jpg";
import img4 from "../../Assets/banner-02.jpg";
import img5 from "../../Assets/banner-03.jpg";
import { Link } from "react-router-dom";
import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

export default function RelatedProductSlider() {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="container-card overflow-hidden d-flex justify-content-center gap-0">
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        loop={true}
        pagination={{
          clickable:true,
        }}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          576: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
        }}
        navigation={true}
      
        modules={[Pagination, Navigation]}
        b
        className="mySwiper justify-content-center text-sm-center"
      >
        <SwiperSlide><div className="card">
            <div className="card-image">
            <img src={img} className="card-img-top" alt="..." />
            </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="btn btn-primary mt-2">
                Go somewhere
              </Link>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="card">
          <div className="card-image">
              
            <img src={img1} className="card-img-top" alt="..." />
              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="btn btn-primary mt-2">
                Go somewhere
              </Link>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="card">
          <div className="card-image">
              
            <img src={img2} className="card-img-top" alt="..." />
              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="btn btn-primary mt-2 ">
                Go somewhere
              </Link>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="card">
          <div className="card-image">
              
            <img src={img3} className="card-img-top" alt="..." />
              </div>
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" className="btn btn-primary mt-2">
                Go somewhere
              </Link>
            </div>
          </div></SwiperSlide>
      </Swiper>
      </div>
      </div>
    </div>
     
    </>
  );
}
