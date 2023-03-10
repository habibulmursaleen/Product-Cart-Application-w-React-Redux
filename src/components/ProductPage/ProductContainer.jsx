import React from "react";
import { useSelector } from "react-redux";
import "../../styles/output.css";
import ProductItem from "./ProductItem";

const ProductContainer = () => {
  const products = useSelector((state) => state.products.products);

  return (
    <div className="productContainer" id="lws-productContainer">
      {products.map((product) => (
        <ProductItem key={product.productId} product={product} />
      ))}
    </div>
  );
};

export default ProductContainer;
