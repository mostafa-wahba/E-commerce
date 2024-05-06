import React, { useContext, useEffect, useState } from "react";
import "./Shop.css";
// import { IoFilterOutline } from "react-icons/io5";
// import { IoMdSearch } from "react-icons/io";
import ProductCard from "../ProductCard/ProductCard";
import { ProductsContext } from "../../Context/ProductsContext";
import Loading from "../Loading/Loading";
import { useLocation } from "react-router";

export default function Shop() {
  const {
    isLoading,
    setIsLoading,
    products,
    womenProducts,
    menProducts,
    electronicsProducts,
  } = useContext(ProductsContext);

  const location = useLocation();

  const [displayCount, setDisplayCount] = useState(8); // Initial display count
  const [activeAllProducts, setActiveAllProducts] = useState(true); // Initial display count

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 8); // Load 6 more products
  };
  useEffect(() => {
    if (location.pathname === "/products") {
      setDisplayCount(16);
    }
  }, [location.pathname]);
  useEffect(() => {
    if (products && womenProducts && menProducts && electronicsProducts) {
      setIsLoading(false);
    }
  }, [products, womenProducts, menProducts, electronicsProducts, setIsLoading]);

  const [tabsContent] = useState(["products", "women", "men", "electronics"]);

  const tabContent = {
    products: products.slice(0, displayCount),
    women: womenProducts,
    men: menProducts,
    electronics: electronicsProducts,
  };

  return (
    <>
      <div id="shop">
        <div className="container">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div className="row justify-content-between align-items-center mb-5">
                <div className="col-md-6 col-12">
                  <ul
                    className="nav nav-pills mb-3 categories-filter d-flex justify-content-start align-items-center gap-3"
                    id="pills-tab"
                    role="tablist"
                  >
                    <li className="nav-item" role="presentation">
                      <button
                        onClick={() => setActiveAllProducts(true)}
                        className="nav-link active"
                        id="products"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-products"
                        type="button"
                        role="tab"
                        aria-controls="pills-products"
                        aria-selected="true"
                      >
                        All Products
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                      onClick={() => setActiveAllProducts(false)}
                        className="nav-link"
                        id="women"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-women"
                        type="button"
                        role="tab"
                        aria-controls="pills-women"
                        aria-selected="false"
                      >
                        Women
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                      onClick={() => setActiveAllProducts(false)}
                        className="nav-link"
                        id="pills-men-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-men"
                        type="button"
                        role="tab"
                        aria-controls="pills-men"
                        aria-selected="false"
                      >
                        Men
                      </button>
                    </li>
                    <li className="nav-item" role="presentation">
                      <button
                      onClick={() => setActiveAllProducts(false)}
                        className="nav-link"
                        id="pills-electronics-tab"
                        data-bs-toggle="pill"
                        data-bs-target="#pills-electronics"
                        type="button"
                        role="tab"
                        aria-controls="pills-electronics"
                        aria-selected="false"
                      >
                        Electronics
                      </button>
                    </li>
                  </ul>
                </div>
                {/* <div className="col-6">
                  <div className="filters-btns d-flex justify-content-end align-items-center gap-3">
                    <button className="filter-btn d-flex justify-content-center align-items-center gap-1">
                      <span>
                        <IoFilterOutline />
                      </span>
                      <span>Filter</span>
                    </button>
                    <button className="search-btn d-flex justify-content-center align-items-center gap-1">
                      <span>
                        <IoMdSearch />
                      </span>
                      <span>Search</span>
                    </button>
                  </div>
                </div> */}
              </div>
              <div className="tab-content" id="pills-tabContent">
                {tabsContent.map((tab, index) => (
                  <div
                    key={index}
                    className={`tab-pane fade ${
                      tab === "products" ? "show active" : ""
                    }`}
                    id={`pills-${tab}`}
                    role="tabpanel"
                    aria-labelledby={tab}
                    tabIndex={0}
                  >
                    <div className="row justify-content-start row-gap-4 row-gap-lg-5 flex-wrap">
                      {tabContent[tab]?.length > 0 ? (
                        tabContent[tab].map((product, productIndex) => (
                          <div
                            key={productIndex}
                            className="col-12 col-sm-6 col-md-4 col-lg-3"
                          >
                            <ProductCard product={product} />
                          </div>
                        ))
                      ) : (
                        <Loading />
                      )}
                    </div>
                  </div>
                ))}
                {activeAllProducts && displayCount < products.length && (
                  <div className="load-more-container text-center mt-4">
                    <button
                      className="load-more-button rounded-4 text-capitalize border-0"
                      onClick={handleLoadMore}
                    >
                      Load More
                    </button>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
