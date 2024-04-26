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

  // let appendNumber = 4;
  // let prependNumber = 1;

  // const prepend2 = () => {
  //   swiperRef.prependSlide([
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
  //   ]);
  // };

  // const prepend = () => {
  //   swiperRef.prependSlide(
  //     '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
  //   );
  // };

  // const append = () => {
  //   swiperRef.appendSlide(
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
  //   );
  // };

  // const append2 = () => {
  //   swiperRef.appendSlide([
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //     '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
  //   ]);
  // };

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="container-card overflow-hidden">
        <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={1}
        centeredSlides={true}
        // spaceBetween={30}
        loop={true}
        pagination={{
          clickable:true,
        }}
        // breakpoints={
        //   {
        //     '@0.00':{
        //       slidesPerView:1,
        //       spaceBetween:20
        //         },
        //       //   '@0.50':{
        //       //     slidesPerView:2,
        //       // spaceBetween:20
        //       //       },
        //             '@0.75':{
        //               slidesPerView:2,
        //       spaceBetween:10

        //                 },
        //                 '@1.00':{
        //                   slidesPerView:3,
        //       spaceBetween:20

        //                     }
                            

        //   }
        // }
        breakpoints={{
          640: {
            slidesPerView: 2,
            // spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            // spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            // spaceBetween: 50,
          },
        }}
        navigation={true}
      
        modules={[Pagination, Navigation]}
        b
        className="mySwiper justify-content-between"
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
              <Link to="#" className="btn btn-primary">
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
              <Link to="#" className="btn btn-primary">
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
              <Link to="#" className="btn btn-primary">
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
              <Link to="#" className="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div></SwiperSlide>
      </Swiper>
      </div>
      </div>
    </div>
     

      {/* <p className="append-buttons">
        <button onClick={() => prepend2()} className="prepend-2-slides">
          Prepend 2 Slides
        </button>
        <button onClick={() => prepend()} className="prepend-slide">
          Prepend Slide
        </button>
        <button onClick={() => append()} className="append-slide">
          Append Slide
        </button>
        <button onClick={() => append2()} className="append-2-slides">
          Append 2 Slides
        </button>
      </p> */}
      {/* <div className="related-product mt-auto">
        <div className="container d-flex justify-content-center align-items-center gap-2">
          <div className="card-container swiper">
            <div className="card-content swiper-wrapper">

            
          <div className="card">
            <div className="card-image">
            <img src={img} class="card-img-top" alt="..." />
            </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
          <div className="card-image">
              
            <img src={img1} class="card-img-top" alt="..." />
              </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
          <div className="card-image">
              
            <img src={img2} class="card-img-top" alt="..." />
              </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
          <div className="card-image">
              
            <img src={img3} class="card-img-top" alt="..." />
              </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
          <div class="card" style={{ width: "18rem" }}>
          <div className="card-image">
              
            <img src={img4} class="card-img-top" alt="..." />
              </div>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <Link to="#" class="btn btn-primary">
                Go somewhere
              </Link>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div> */}

      {/* <div className="RelatedProductSlider mt-5">
        <div className="container">
          <div
            id="carouselExampleControls"
            class="carousel slide "
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item d-flex justify-content-center ga">
                <div class="card">
                  <div className="card-image">
                    <img src={img} class="" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
                <div class="card">
                  <div className="card-image">
                    <img src={img1} class="" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div> */}
      {/* <div class="carousel-item d-block ">
                <div class="card">
                  <div className="card-image">
                    <img src={img1} class="" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item d-block ">
                <div class="card">
                <div className="card-image">
                <img src={img2} class="" alt="..." />
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div class="carousel-item d-block ">
                <div class="card">
                  <img src={img3} class="" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div> */}
      {/* </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon bg-black rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon bg-black rounded-circle"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>*/}
    </>
  );
}
