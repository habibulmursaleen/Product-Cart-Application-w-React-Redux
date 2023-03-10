import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/products/actions";
import "../../styles/output.css";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <div className="lws-productCard">
        <img
          className="lws-productImage"
          src={product.imageUrl}
          alt="product"
        />
        <div className="p-4 space-y-2">
          <h4 className="lws-productName">{product.productName}</h4>
          <p className="lws-productCategory">{product.category}</p>
          <div className="flex items-center justify-between pb-2">
            <p className="productPrice">
              BDT <span className="lws-price">{product.price}</span>
            </p>
            <p className="productQuantity">
              QTY <span className="lws-quantity">{product.quantity}</span>
            </p>
          </div>
          {product.quantity > 0 ? (
            <button
              className="lws-btnAddToCart"
              disabled={product.quantity <= 0}
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          ) : (
            <p>Out of Stock</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
