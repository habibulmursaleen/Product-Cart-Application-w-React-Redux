import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CartPage from "./components/CartPage/CartPage";
import ProductPage from "./components/ProductPage/ProductPage";
import store from "./redux/store";
import "./styles/output.css";

function App() {
  return (
    <div>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductPage />} />
            <Route path="/cartpage" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
