import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import ProductsContextProvider from "./Context/ProductsContext";
import CartContextProvider from "./Context/CartContext";
import WishlistContextProvider from "./Context/WishlistContext";
import { AuthProvider } from "./Context/AuthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <HashRouter>
    <AuthProvider>
      <CartContextProvider>
        <WishlistContextProvider>
          <ProductsContextProvider>
            <App />
          </ProductsContextProvider>
        </WishlistContextProvider>
      </CartContextProvider>
    </AuthProvider>
  </HashRouter>
);
