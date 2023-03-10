import React from "react";
import "../../styles/output.css";
import Navbar from "../Navbar";
import InputForm from "./InputForm";
import ProductContainer from "./ProductContainer";

function ProductPage() {
  return (
    <div>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <ProductContainer />
          <InputForm />
        </div>
      </main>
    </div>
  );
}

export default ProductPage;
