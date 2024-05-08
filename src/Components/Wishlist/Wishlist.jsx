import React from "react";
import "./Wishlist.css";

export default function Wishlist() {
  return (
    <>
      <div id="wishlist">
        <div className="container">
          <div className="no-items border w-100 d-flex justify-content-center align-items-center">
            <h3>No items added to the wishlist</h3>
          </div>
        </div>
      </div>
    </>
  );
}
