import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import App from "./App";
import { CartProvider } from "./Context/CartContext";

import "./Style/reset.css";
import "./Style/index.css";
import "./Style/home.css";
import "./Style/product.css";
import "./Style/cart.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CartProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </CartProvider>
  </React.StrictMode>
);
