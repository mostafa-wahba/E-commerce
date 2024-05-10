import React, { useContext } from "react";
import "./Wishlist.css";
import { CartContext } from "../../Context/CartContext";
import { FaXmark } from "react-icons/fa6";
import { ProductsContext } from "../../Context/ProductsContext";
import { WishlistContext } from "../../Context/WishlistContext";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Wishlist() {
  const { addProducts } = useContext(CartContext);
  const { addToCartNotify } = useContext(ProductsContext);
  const {
    addedWishlistProducts,
    removeProductFromWishlist,
    loadingItems,
    isLoading,
  } = useContext(WishlistContext);

  function addProductToCart(id, product) {
    addToCartNotify(id);
    addProducts(product);
  }
  console.log(addedWishlistProducts);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <div id="wishlist">
        <div className="container">
          <div className="row align-items-start w-100 m-0">
            <div className="products-list d-flex justify-content-center align-items-center flex-column w-100 border p-0">
              {addedWishlistProducts?.length === 0 ||
              addedWishlistProducts === null ? (
                <h3 className="fs-4 d-flex justify-content-center align-items-center my-5 p-0">
                  No items added to the wishlist
                </h3>
              ) : (
                <>
                  <div className="titles-row row g-3 px-5 py-3 border-bottom w-100 d-none d-md-flex">
                    <div className="col-md-5 d-flex justify-content-start align-items-center ps-md-5">
                      <p>PRODUCT</p>
                    </div>
                    <div className="col-md-1 d-flex justify-content-start align-items-center">
                      <p>PRICE</p>
                    </div>
                    <div className="col-md-2 d-flex justify-content-start align-items-center">
                      <p>STOCK STATUS</p>
                    </div>
                  </div>
                  {addedWishlistProducts?.map((product) => (
                    <div
                      key={product.id}
                      className="product-row row py-4 px-lg-4 border-bottom w-100 position-relative row-gap-3"
                    >
                      <div className="col-md-5 d-flex justify-content-start align-items-center">
                        <div className="d-flex justify-content-start align-items-center">
                          <div
                            className="product-image me-4 w-25"
                            onClick={() =>
                              removeProductFromWishlist(product.id)
                            }
                          >
                            <div className="product-image-overlay">
                              {loadingItems.has(product.id) ? (
                                <div className="spinner-border" role="status">
                                  <span className="visually-hidden">
                                    Loading...
                                  </span>
                                </div>
                              ) : (
                                <FaXmark />
                              )}
                            </div>
                            <img src={product.imageCover} alt="product" />
                          </div>
                          <div className="d-flex flex-column justify-content-start w-75">
                            <Link
                              to={`/product/${product.id}`}
                              className="fw-medium fs-5 product-name"
                            >
                              {product.title}
                            </Link>
                            <span>{product.brand?.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-1 d-flex justify-content-start align-items-center">
                        <span className="fs-6 text-secondary d-flex gap-2">
                          <span className="d-block d-md-none">Price: </span>$
                          {product.price}
                        </span>
                      </div>
                      <div className="col-md-2 d-flex justify-content-start align-items-center">
                        <span className="fs-6 text-secondary d-flex gap-2">
                          In stock
                        </span>
                      </div>
                      <div className="col-md-4 d-flex justify-content-md-end align-items-center">
                        <div className="add-cart-btn">
                          <button
                            onClick={() =>
                              addProductToCart(product.id, product)
                            }
                            className="w-100 h-100"
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>
                      <span
                        className="remove-btn curser-pointer position-absolute d-md-none d-flex justify-content-center align-items-center w-auto m-0 p-1 fs-2"
                        onClick={() => removeProductFromWishlist(product.id)}
                      >
                        <FaXmark />
                      </span>
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
