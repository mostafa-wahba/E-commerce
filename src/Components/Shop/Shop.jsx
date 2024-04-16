import React from "react";
import "./Shop.css";
import { IoFilterOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import ProductCard from "../ProductCard/ProductCard";

export default function Shop() {
  const productCards = [1, 2, 3, 4, 5, 6]; // An array to represent each ProductCard

  return (
    <>
      <div id="shop">
        <div className="container">
          <div className="row justify-content-between align-items-center mb-5">
            <div className="col-6">
              <ul
                className="nav nav-pills mb-3 categories-filter d-flex justify-content-start align-items-center gap-3"
                id="pills-tab"
                role="tablist"
              >
                <li className="nav-item" role="presentation">
                  <button
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
                    className="nav-link"
                    id="pills-Men-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Men"
                    type="button"
                    role="tab"
                    aria-controls="pills-Men"
                    aria-selected="false"
                  >
                    Men
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Bag-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Bag"
                    type="button"
                    role="tab"
                    aria-controls="pills-Bag"
                    aria-selected="false"
                  >
                    Bag
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Shoes-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Shoes"
                    type="button"
                    role="tab"
                    aria-controls="pills-Shoes"
                    aria-selected="false"
                  >
                    Shoes
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="pills-Watches-tab"
                    data-bs-toggle="pill"
                    data-bs-target="#pills-Watches"
                    type="button"
                    role="tab"
                    aria-controls="pills-Watches"
                    aria-selected="false"
                  >
                    Watches
                  </button>
                </li>
              </ul>
            </div>
            <div className="col-6">
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
            </div>
          </div>
          <div className="tab-content" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-products"
              role="tabpanel"
              aria-labelledby="products"
              tabIndex={0}
            >
              <div className="row justify-content-start row-gap-4 row-gap-lg-5 flex-wrap">
                {productCards.map((card, index) => (
                  <div
                    key={index}
                    className="col-12 col-sm-6 col-md-4 col-lg-3"
                  >
                    <ProductCard />
                  </div>
                ))}
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="pills-women"
              role="tabpanel"
              aria-labelledby="women"
              tabIndex={0}
            >
              Women
            </div>
            <div
              className="tab-pane fade"
              id="pills-Men"
              role="tabpanel"
              aria-labelledby="pills-Men-tab"
              tabIndex={0}
            >
              Men
            </div>
            <div
              className="tab-pane fade"
              id="pills-Shoes"
              role="tabpanel"
              aria-labelledby="pills-Shoes-tab"
              tabIndex={0}
            >
              Shoes
            </div>
            <div
              className="tab-pane fade"
              id="pills-Bag"
              role="tabpanel"
              aria-labelledby="pills-Bag-tab"
              tabIndex={0}
            >
              Bag
            </div>
            <div
              className="tab-pane fade"
              id="pills-Watches"
              role="tabpanel"
              aria-labelledby="pills-Watches-tab"
              tabIndex={0}
            >
              Watches
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
