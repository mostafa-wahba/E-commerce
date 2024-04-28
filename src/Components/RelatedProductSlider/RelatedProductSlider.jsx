import React, { useContext } from "react";
import "./RelatedProductSlider.css";
import { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../Context/ProductsContext";

export default function RelatedProductSlider() {
  const getRelatedProduct = (products, limit = 9) => {
    return products.slice(0, limit); // Returns a limited subset of products
  };
  const [swiperRef, setSwiperRef] = useState(null);
  const { products } = useContext(ProductsContext);
  const RelatedProduct = getRelatedProduct(products);
// Utility function to shuffle an array (Fisher-Yates shuffle algorithm)
function shuffleArray(array) {
  const newArray = [...array]; // Create a shallow copy of the array
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Random index
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
  }
  return newArray;
}

// Function to get a random subset of a specified size
function getRandomProducts(products, count = 9) {
  const shuffled = shuffleArray(products); // Shuffle the array
  return shuffled.slice(0, count); // Return a subset of shuffled array
}

// Inside your component
const randomProducts = getRandomProducts(products, 9); // Get 9 random products

  return (
    <>
      <div className="container">
        <h2 className="related-product-title text-center">Related Products</h2>
        <div className="row">
          <div className="container-card overflow-hidden">
            <Swiper
              onSwiper={setSwiperRef}
              // slidesPerView={1}
              // spaceBetween={30}
              // centeredSlides={true}
              // loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              b
              className="mySwiper justify-content-center text-sm-center" 
            >
              {randomProducts.map((product, index) => (
                  <SwiperSlide>
                    <ProductCard product={product} />
                  </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
}
